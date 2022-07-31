import { CoustomOptions, MenuOptions } from '../types'
import{ Underline as TiptapUndeline }from '@tiptap/extension-underline'
export default class Undeline {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '下划线'
  }) {
    const ZeroUnderline: Record<string, any> = TiptapUndeline.extend()
    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      toggleCommand: function () {
        this.editor.commands.toggleUnderline();
      }
    }
    ZeroUnderline.menusOptions = menusOptions;

    return ZeroUnderline
  }
}