import{ Heading as TiptapHeading }from '@tiptap/extension-heading'
import { CoustomOptions, Commands, MenuOptions } from '../types'

export default class Heading {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '标题'
  }) {
    const ZeroHeading:any = TiptapHeading.extend()
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleHeading(attribute);
      }
    }
    
    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      hasTab: true,
      clickParamsKey: 'level'
    }

    ZeroHeading.customOptions = customOptions;
    ZeroHeading.menusOptions = menusOptions;

    return ZeroHeading
  }
}