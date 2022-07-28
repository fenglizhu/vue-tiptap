import{ Blockquote as TiptapBlockquote }from '@tiptap/extension-blockquote'
import { CoustomOptions, Commands, MenuOptions } from '../types'

export default class BlockQuote {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '引用'
  }) {
    const ZeroBlockquote:any = TiptapBlockquote.extend()
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleBlockquote(attribute);
      }
    }

    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      toggleCommand: function () {
        this.editor.commands.toggleBlockquote();
      }
    }


    ZeroBlockquote.customOptions = customOptions;
    ZeroBlockquote.menusOptions = menusOptions;

    return ZeroBlockquote
  }
}