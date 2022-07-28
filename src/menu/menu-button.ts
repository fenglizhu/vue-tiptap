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
          className: 'btn-children',
          // onClick: toggleCommand?.bind(null,item),
          nodeValue: item,
          setData: {
            'data-color': item,
          }
        }
      }
    }) || []
    console.log(children);
    
    
    const myElement = {
      type: 'div',
      props: {
        type: 'div',
        className: 'btn',
        onClick: toggleCommand,
        nodeValue: toolTips,
        children: children
        // children: [{ props: { nodeValue: toolTips } }]
      }
    };
    
    renderElement(myElement, document.body);
  }
}
