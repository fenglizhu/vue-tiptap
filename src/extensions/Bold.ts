import{ Bold as TiptapBold }from '@tiptap/extension-bold'
import { CoustomOptions, Commands, MenuOptions } from '../types'


export default class Bold {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '加粗'
  }) {
    const ZeroBold:any = TiptapBold.extend();
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleBold(attribute)
      },
    }
    
    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
    }

    ZeroBold.customOptions = customOptions;
    ZeroBold.menusOptions = menusOptions;

    return ZeroBold
  }
}