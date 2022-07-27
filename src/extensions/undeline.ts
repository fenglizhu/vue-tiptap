import { CoustomOptions, Commands, MenuOptions } from '../types'
import{ Underline as TiptapUndeline }from '@tiptap/extension-underline'
export default class Undeline {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '行高'
  }) {
    const ZeroUnderline: any = TiptapUndeline.extend()
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleUnderline(attribute);
      }
    }
    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
    }

    ZeroUnderline.customOptions = customOptions;
    ZeroUnderline.menusOptions = menusOptions;

    return ZeroUnderline
  }
}