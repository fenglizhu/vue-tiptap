import { Italic as TiptapItalic } from "@tiptap/extension-italic";
import { CoustomOptions, MenuOptions } from '../types'
export default class Italic {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '斜体'
  }) {
    const ZeroItalic: any = TiptapItalic.extend();

    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      toggleCommand: function () {
        this.editor.commands.toggleItalic();
      }
    }
    ZeroItalic.menusOptions = menusOptions;
    
    return ZeroItalic
  }
}