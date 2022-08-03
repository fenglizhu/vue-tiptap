import { renderElement } from "./render-dom";

interface Menuoption {
  toggleCommand?: Function,
  toolTips: string,
  dropdown: string[]
}

export class MenuButton {
  constructor({
    toggleCommand,
    toolTips,
    dropdown
  }: Menuoption) {
    this.createButton(toggleCommand, toolTips, dropdown)
  }

  public createButton(toggleCommand: Function | undefined, toolTips: string, dropdown: string[]) {
    const children = dropdown && dropdown.map(item=> {
      return {
        type: 'div',
        props: {
          type: 'div',
          className: 'btn',
          nodeValue: item,
          setData: {
            'data-attr': item,
          }
        }
      }
    }) || []
    // console.log(children.length);
    
    const myElement: Record<string, any> = {
      type: 'div',
      props: {
        type: 'div',
        className: 'editor-menu-item',
        onClick: toggleCommand,
        nodeValue: toolTips,
        children: []
      }
    };

    if(children.length) {
      myElement.props.children = [
        {
          type: 'div',
          props: {
            type: 'div',
            className: 'editor-menu-tab',
            nodeValue: '',
            children: children
          }
        }
      ]
    }
    renderElement(myElement, document.querySelector('#zero-editor-menu') as HTMLElement);
  }
}
