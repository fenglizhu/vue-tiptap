import{ OrderedList as TiptapOrderedList }from '@tiptap/extension-ordered-list'
import { CoustomOptions, MenuOptions } from '../types'

export default class OrderedList {
  extension: Record<string, any>;
  constructor({
    showMenu = true,
    toolTips = '数字列表'
  }: CoustomOptions = {}) {
    const ZeroOrderedList:any = TiptapOrderedList.extend();

    const menusOptions: MenuOptions = {
      showMenu: showMenu,
      toolTips: toolTips,
      toggleCommand: function () {
        this.editor.commands.toggleOrderedList();
      }
    }
    ZeroOrderedList.menusOptions = menusOptions;
    this.extension = ZeroOrderedList
  }
}