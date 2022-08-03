import{ CodeBlock as TiptapCodeBlock }from '@tiptap/extension-code-block'
import { CoustomOptions, MenuOptions } from '../types'

export default class CodeBlock {
  constructor({
    showMenu = true,
    toolTips = '代码块'
  }: CoustomOptions) {
    const ZeroCodeBlock: Record<string, any> = TiptapCodeBlock.extend()

    const menusOptions: MenuOptions = {
      showMenu: showMenu,
      toolTips: toolTips,
      toggleCommand: function () {
        this.editor.commands.toggleCodeBlock();
      }
    }
    ZeroCodeBlock.menusOptions = menusOptions;

    return ZeroCodeBlock
  }
}