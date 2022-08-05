import { HTMLElementEvent } from "../types";
import { renderElement } from "./render-dom";
import { removeTabClass } from "./tab-operation";
import { Editor } from "@tiptap/core";
// import {  } from "../assets/images/bold.svg";

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
  element!: void;
  options: Menuoption;
  constructor(options: Menuoption) {
    this.dropdownShow = false;
    this.options = options
    this.createButton(options)
  }

  public createButton(options: Menuoption) {
    const { toggleCommand, toolTips, dropdown, dataNeType, src } = options
    
    const children = dropdown && dropdown.map(item=> {
      return {
        type: 'div',
        props: {
          type:'div',
          className: 'editor-menu-tab-item',
          nodeValue: item,
          setData: {
            'data-attr': item,
          }
        }
      }
    }) || []
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
          
          if(dropdown && parentElement.classList.contains('editor-menu-item')) {
            // 移除其他的面板
            removeTabClass(parentElement)
            parentElement.classList.toggle('display-tab');
          }else {
            removeTabClass()
            // 点击其他也要去掉面板
            toggleCommand && toggleCommand(pointerEvent)
          }
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

    if(children.length) {
      const child = {
        type: 'div', 
        props: {
          type:'div',
          className: 'editor-menu-tab',
          nodeValue: '',
          children: children
        }
      }
      elementMap.props.children.push(child)
    }
    this.element = renderElement(elementMap, document.querySelector('#zero-editor-menu') as HTMLElement);
  }

  /**
   * setActiveMenus
   */
   public setActiveMenus(editor: Editor) {
    const dataNeType = this.options.dataNeType
    const isActiveMenu: HTMLElement = document.querySelector(`.editor-menu-item[data-ne-type="${dataNeType}"]`) as HTMLElement
    if (editor.isActive(dataNeType)) {
      isActiveMenu && isActiveMenu.classList.add('selected')
    } else {
      isActiveMenu && isActiveMenu.classList.remove('selected')
    }
  }
}
