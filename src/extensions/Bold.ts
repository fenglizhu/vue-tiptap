import{ Bold as TiptapBold }from '@tiptap/extension-bold'
import { CoustomOptions, Commands, MenuOptions } from '../types'


export default class Bold {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '加粗'
  }) {
    const ZeroBold: Record<string, any> = TiptapBold.extend();
    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      toggleCommand: function () {
        this.editor.commands.toggleBold();
      }
    }
    ZeroBold.menusOptions = menusOptions;

    return ZeroBold
  }
}