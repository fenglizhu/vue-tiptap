import { HTMLElementEvent, MenuOptions, SN } from "../types";
import { renderElement, renderTabDom } from "./render-dom";
import { removeTabClass } from "./tab-operation";
import { ZeroEditor } from "../core/ZeroEditor";

interface Menuoption {
  [x: string]: any;
  toggleCommand?: Function,
  toolTips: string,
  dropdown: string[]
}

interface DOM {
  type: string, 
  props: Record<string, any>
}

export class MenuButton{
  dropdownShow: boolean;
  element!: Element | void;
  options: Menuoption;
  constructor(options: Menuoption) {
    this.dropdownShow = false;
    this.options = options
    this.createButton(options)
  }

  public createButton(options: Menuoption) {

    const { toggleCommand, toolTips, dropdown, dataNeType, src, htmlOption } = options;

    const elementMap = {
      type: 'div',
      props: {
        type: 'div',
        className: 'editor-menu-item',
        setData: {
          'data-ne-type': dataNeType || '',
        },
        onClick: function(pointerEvent: HTMLElementEvent<HTMLElement>) {
          const parentElement: HTMLElement = pointerEvent.target.parentElement as HTMLElement
          if (dropdown) {
            removeTabClass(parentElement)
            pointerEvent.currentTarget.classList.toggle('display-tab')
          }
          toggleCommand && toggleCommand(pointerEvent)
          pointerEvent.stopPropagation()
        },
        nodeValue: '',
        children: [
          {
            type: 'img', 
            props:{
              type: 'img',
              src,
              className: 'svg-icon',
              nodeValue: ''
            }
          },
          {
            type: 'div', 
            props: {
              type:'div',
              className: 'editor-menu-tool-tip',
              nodeValue: toolTips
            }
          }
        ]
      }
    };
    
    this.element = renderElement(elementMap, document.querySelector('#zero-editor-menu') as HTMLElement);
    if(dropdown && htmlOption) {
      const tapPane = renderTabDom(htmlOption) as Node
      this.element!.appendChild(tapPane)
    }
  }

  // editor.isActive('textStyle', { color: '#958DF1' })
  // editor.isActive('highlight', { color: '#958DF1' })
  // editor.isActive('heading',   { level: 1 })
  
  // editor.isActive({ textAlign: 'left' })
  // editor.isActive({ lineheight: 1.5 })


  /**
   * setActiveMenus
   */
   public setActiveMenus(zeroEditor: ZeroEditor) {
    const dataNeType:string = this.options.dataNeType;
    const menuKey:string = this.options.menuType || this.options.dataNeType;
    const menuBarOption: MenuOptions = zeroEditor.menusBar.menuElementMap[menuKey]?.options;

    if(menuBarOption.activeIsObject && menuBarOption.dropdown && menuBarOption.setActiveRules) {

      const dropdown = menuBarOption.dropdown;
      let one: SN = '';
      for (let i = 0; i < dropdown.length; i++) {
        const item = dropdown[i]
        const params = menuBarOption.setActiveRules(item);
        if(zeroEditor.editor.isActive(...params)) {
          one = item
          break
        }
      }

      one && this.setTabPaneActive(dataNeType, one)

      this.activeMenu(dataNeType, !!one);
      return
    }

    this.activeMenu(dataNeType, zeroEditor.editor.isActive(dataNeType))
  }
  /**
   * 激活菜单下拉框样式
   */
  setTabPaneActive(dataNeType: string, one: SN) {
    const isActiveMenu: HTMLElement = document.querySelector(`.editor-menu-item[data-ne-type="${dataNeType}"]`) as HTMLElement;

    const allTab = isActiveMenu.querySelectorAll('.editor-menu-tab-item');
    allTab.forEach(element => {
      element.classList.remove('selected')
    });

    const isActivepane = isActiveMenu.querySelector(`.editor-menu-tab-item[data-attr="${one}"]`)
    isActivepane && isActivepane.classList.add('selected')

    // TODO:没有取消上一次的
  }

  /**
   * 激活菜单样式
   * @param dataNeType 菜单类型
   * @param isActive 
   */
  private activeMenu(dataNeType: string, isActive: boolean) {
    const isActiveMenu: HTMLElement = document.querySelector(`.editor-menu-item[data-ne-type="${dataNeType}"]`) as HTMLElement
    if (isActive) {
      isActiveMenu && isActiveMenu.classList.add('selected')
    } else {
      isActiveMenu && isActiveMenu.classList.remove('selected')
    }
  }
}
