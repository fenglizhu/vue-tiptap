import{ Strike as TiptapStrike }from '@tiptap/extension-strike'
import { CoustomOptions, MenuOptions } from '../types'

export default class Strike {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '删除'
  }) {
    const ZeroStrike: any = TiptapStrike.extend()
    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      toggleCommand: function () {
        this.editor.commands.toggleStrike();
      }
    }
    ZeroStrike.menusOptions = menusOptions;
    
    return ZeroStrike
  }
}