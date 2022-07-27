import { renderElement } from "./render-dom";

interface Menuoption {
  addcustomCommands?: Function,
  toolTips: string
}

export class MenuButton {
  constructor({
    addcustomCommands,
    toolTips
  }: Menuoption) {
    this.createButton(addcustomCommands, toolTips)
  }

  public createButton(addcustomCommands: Function | undefined, toolTips: string) {
    const myElement = {
      type: 'button',
      props: {
        type: 'button',
        className: 'btn',
        onClick: addcustomCommands,
        children: [{ props: { nodeValue: toolTips } }]
      }
    };
    
    renderElement(myElement, document.body);
  }
}
