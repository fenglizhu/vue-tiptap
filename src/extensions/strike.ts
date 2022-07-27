import{ Strike as TiptapStrike }from '@tiptap/extension-strike'
import { CoustomOptions, Commands, MenuOptions } from '../types'

export default class Strike {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '删除'
  }) {
    const ZeroStrike: any = TiptapStrike.extend()
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleStrike(attribute);
      }
    }
    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips
    }

    ZeroStrike.customOptions = customOptions;
    ZeroStrike.menusOptions = menusOptions;
    
    return ZeroStrike
  }
}