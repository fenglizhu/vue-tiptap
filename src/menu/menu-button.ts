import { HTMLElementEvent } from "../types";
import { renderElement } from "./render-dom";

interface Menuoption {
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

export class MenuButton {
  constructor({
    toggleCommand,
    toolTips,
    dropdown
  }: Menuoption) {
    this.createButton(toggleCommand, toolTips, dropdown);
    this.hideDropdown()
  }

  public createButton(toggleCommand: Function | undefined, toolTips: string, dropdown: string[]) {
    const children = dropdown && dropdown.map(item=> {
      return this.domJson({
        type: 'div', 
        propsTypp:'div',
        propsClassName: 'btn',
        propsNodeValue: item,
        setData: {
          'data-attr': item,
        }
      })
    }) || []
    
    const myElement: Record<string, any> = {
      type: 'div',
      props: {
        type: 'div',
        className: 'editor-menu-item',
        onClick: function(pointerEvent: HTMLElementEvent<HTMLElement>) {
          
          if(dropdown) {
            if(pointerEvent.target.classList.contains('editor-menu-item')) {
              // 移除其他的面板
              const childrenElement = pointerEvent.target.parentElement!.children || []
              for (let i = 0; i < childrenElement.length; i++) {
                if(childrenElement[i] !== pointerEvent.target){
                  childrenElement[i].classList.remove('display-tab')
                }
              }
              
              pointerEvent.target.classList.toggle('display-tab')
            }else {
              const childrenElement = pointerEvent.target.parentElement?.parentElement?.parentElement!.children || []
              for (let i = 0; i < childrenElement.length; i++) {
                childrenElement[i].classList.remove('display-tab')
              }
              toggleCommand && toggleCommand(pointerEvent)
            }
          }else {
            const childrenElement = pointerEvent.target.parentElement!.children || []
            for (let i = 0; i < childrenElement.length; i++) {
              childrenElement[i].classList.remove('display-tab')
            }
            // 点击其他也要去掉面板
            toggleCommand && toggleCommand(pointerEvent)
          }
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
  /**
   * hideDropdown
   */
  public hideDropdown() {
    document.onclick = function(pointerEvent) {
      console.log(pointerEvent);
      
      
    }
  }
}
