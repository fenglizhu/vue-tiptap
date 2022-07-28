import { Italic as TiptapItalic } from "@tiptap/extension-italic";
import { CoustomOptions, Commands, MenuOptions } from '../types'
export default class Italic {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '斜体'
  }) {
    const ZeroItalic: any = TiptapItalic.extend()
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleItalic(attribute);
      }
    }

    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      toggleCommand: function () {
        this.editor.commands.toggleItalic();
      }
    }

    ZeroItalic.customOptions = customOptions;
    ZeroItalic.menusOptions = menusOptions;
    
    return ZeroItalic
  }
}