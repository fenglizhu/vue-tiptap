import{ Blockquote as TiptapBlockquote }from '@tiptap/extension-blockquote'
import { CoustomOptions, MenuOptions } from '../types'

export default class BlockQuote {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '引用'
  }) {
    const ZeroBlockquote: Record<string, any> = TiptapBlockquote.extend()

    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      toggleCommand: function () {
        this.editor.commands.toggleBlockquote();
      }
    }
    ZeroBlockquote.menusOptions = menusOptions;

    return ZeroBlockquote
  }
}