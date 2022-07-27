import{ CodeBlock as TiptapCodeBlock }from '@tiptap/extension-code-block'
import { CoustomOptions, Commands, MenuOptions } from '../types'

export default class CodeBlock {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '代码块'
  }) {
    const ZeroCodeBlock:any = TiptapCodeBlock.extend()
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleCodeBlock(attribute);
      }
    }
    ZeroCodeBlock.customOptions = customOptions;

    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
    }

    ZeroCodeBlock.customOptions = customOptions;
    ZeroCodeBlock.menusOptions = menusOptions;

    return ZeroCodeBlock
  }
}