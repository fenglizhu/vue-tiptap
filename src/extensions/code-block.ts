import{ CodeBlock as TiptapCodeBlock }from '@tiptap/extension-code-block'
import { CoustomOptions, MenuOptions } from '../types'

export default class CodeBlock {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '代码块'
  }) {
    const ZeroCodeBlock: Record<string, any> = TiptapCodeBlock.extend()

    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      toggleCommand: function () {
        this.editor.commands.toggleCodeBlock();
      }
    }
    ZeroCodeBlock.menusOptions = menusOptions;

    return ZeroCodeBlock
  }
}