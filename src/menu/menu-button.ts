import { HTMLElementEvent, MenuOptions, SN } from "../types";
import { renderElement, renderTabDom } from "../utils/render-dom";
import { removeTabClass } from "./tab-operation";
import { ZeroEditor } from "../core/ZeroEditor";
import { addClass, querySelector, removeClass } from "../utils/dom";

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
          // TODO:点击字体颜色和背景颜色切换BUG
          
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
    
    this.element = renderElement(elementMap, querySelector('#zero-editor-menu'));
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

      this.setTabPaneActive(dataNeType, one)

      this.activeMenu(dataNeType, !!one);
      return
    }

    this.activeMenu(dataNeType, zeroEditor.editor.isActive(dataNeType))
  }
  /**
   * 激活菜单下拉框样式
   */
  setTabPaneActive(dataNeType: string, one: SN) {

    const isActiveMenu: HTMLElement = querySelector(`.editor-menu-item[data-ne-type="${dataNeType}"]`);

    // 删除之前已经有的激活项
    const lastSelectedBox: HTMLElement = querySelector('.selected', isActiveMenu);
    removeClass(lastSelectedBox, 'selected');

    // 添加新的激活项
    if(one) {
      const isActivepane = querySelector(`.editor-menu-tab-item[data-attr="${one}"]`, isActiveMenu);
      addClass(isActivepane, 'selected');
    }
  }

  /**
   * 激活菜单样式
   * @param dataNeType 菜单类型
   * @param isActive 
   */
  private activeMenu(dataNeType: string, isActive: boolean) {
    const isActiveMenu: HTMLElement = querySelector(`.editor-menu-item[data-ne-type="${dataNeType}"]`)
    if (isActive) {
      addClass(isActiveMenu, 'selected')
    } else {
      removeClass(isActiveMenu, 'selected')
    }
  }
}
