import{ OrderedList as TiptapOrderedList }from '@tiptap/extension-ordered-list'
import { CoustomOptions, Commands } from '../types'

export default class OrderedList {
  constructor() {
    const ZeroOrderedList:any = TiptapOrderedList.extend()
    const customOptions: CoustomOptions = {
      showMenu: true,
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleOrderedList(attribute);
      }
    }
    ZeroOrderedList.customOptions = customOptions;

    return ZeroOrderedList
  }
}