import { HTMLElementEvent, MenuOptions } from "../types";
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

type HTMLElement_String = HTMLElement | string | undefined

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
          // console.log(pointerEvent.currentTarget);
          if (dropdown) {
            removeTabClass(parentElement)
            pointerEvent.currentTarget.classList.toggle('display-tab')
          }
          // console.log(toggleCommand);
          
          toggleCommand && toggleCommand(pointerEvent)
          // if(dropdown && parentElement.classList.contains('editor-menu-item')) {
          //   // 移除其他的面板
          //   removeTabClass(parentElement)
          //   parentElement.classList.toggle('display-tab');
          // }else {
          //   removeTabClass()
          //   // 点击其他也要去掉面板
          //   toggleCommand && toggleCommand(pointerEvent)
          // }
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

  /**
   * setActiveMenus
   */
   public setActiveMenus(zeroEditor: ZeroEditor) {
    const dataNeType:string = this.options.dataNeType;
    const menuKey:string = this.options.menuType || this.options.dataNeType;
    const menuBarOption: MenuOptions = zeroEditor.menusBar.menuElementMap[menuKey]?.options;
    
    if (menuBarOption.activeIsObject && menuBarOption.dropdown) {
      const dropdown = menuBarOption.dropdown;
      const one = dropdown.find((item: number| string) => {
        return zeroEditor.editor.isActive({[dataNeType]: item})
      })
      this.activeMenu(dataNeType, !!one);
      return
    }
    this.activeMenu(dataNeType, zeroEditor.editor.isActive(dataNeType))
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
