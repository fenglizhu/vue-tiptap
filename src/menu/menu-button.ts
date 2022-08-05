import { HTMLElementEvent } from "../types";
import { renderElement } from "./render-dom";
import { removeTabClass } from "./tab-operation";

interface Menuoption {
  [x: string]: any;
  toggleCommand?: Function,
  toolTips: string,
  dropdown: string[]
}

interface DOM {
  type: string, 
  propsTypp:string,
  propsClassName: string,
  propsNodeValue: string,
  setData?: object,
  children?: Record<string,any>[]
}

export class MenuButton{
  dropdownShow: boolean;
  constructor(options: Menuoption) {
    this.dropdownShow = false;
    this.createButton(options);
  }

  public createButton(options: Menuoption) {
    console.log(options);
    
    const { toggleCommand, toolTips, dropdown, dataNeType } = options
    const children = dropdown && dropdown.map(item=> {
      return this.domJson({
        type: 'div', 
        propsTypp:'div',
        propsClassName: 'editor-menu-tab-item',
        propsNodeValue: item,
        setData: {
          'data-attr': item,
        }
      })
    }) || []
    const _this = this;
    const myElement: Record<string, any> = {
      type: 'div',
      props: {
        type: 'div',
        className: 'editor-menu-item',
        setData: {
          'data-ne-type': dataNeType || '',
        },
        onClick: function(pointerEvent: HTMLElementEvent<HTMLElement>) {
          if(dropdown && pointerEvent.target.classList.contains('editor-menu-item')) {
              // 移除其他的面板
            removeTabClass(pointerEvent.target)
            pointerEvent.target.classList.toggle('display-tab');
          }else {
            removeTabClass()
            // 点击其他也要去掉面板
            toggleCommand && toggleCommand(pointerEvent)
          }
          pointerEvent.stopPropagation()
        },
        nodeValue: toolTips,
        children: [
          this.domJson({
            type: 'div', 
            propsTypp:'div',
            propsClassName: 'editor-menu-tool-tip',
            propsNodeValue: toolTips
          })
        ]
      }
    };

    if(children.length) {
      const child = this.domJson({
        type: 'div', 
        propsTypp:'div',
        propsClassName: 'editor-menu-tab',
        propsNodeValue: '',
        children: children
      })
      myElement.props.children.push(child)
    }
    renderElement(myElement, document.querySelector('#zero-editor-menu') as HTMLElement);
  }

  /**
   * domJson
   */
  public domJson({ type, propsTypp, propsClassName, propsNodeValue, setData, children }: DOM) {
    return {
      type,
      props: {
        type: propsTypp,
        className: propsClassName,
        nodeValue: propsNodeValue,
        setData,
        children
      }
    }
  }
}
