import{ OrderedList as TiptapOrderedList }from '@tiptap/extension-ordered-list'
import { CoustomOptions, Commands, MenuOptions } from '../types'

export default class OrderedList {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '行高'
  }) {
    const ZeroOrderedList:any = TiptapOrderedList.extend()
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleOrderedList(attribute);
      }
    }

    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips
    }

    ZeroOrderedList.customOptions = customOptions;
    ZeroOrderedList.menusOptions = menusOptions;

    return ZeroOrderedList
  }
}