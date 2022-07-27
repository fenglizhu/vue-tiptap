import{ Color as TiptapColor }from '@tiptap/extension-color'
import { CoustomOptions, Commands, MenuOptions } from '../types'

export default class Color {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '文本颜色'
  }) {
    const ZeroColor:any = TiptapColor.extend()
    const clickParamsKey = 'color'
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        const color = attribute[clickParamsKey];
        if (color) {
          this.commands.setColor(color);
        } else {
          this.commands.unsetColor(color);
        }
        
      }
    }

    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      hasTab: true,
      clickParamsKey
    }

    ZeroColor.customOptions = customOptions;
    ZeroColor.menusOptions = menusOptions;

    return ZeroColor
  }
}