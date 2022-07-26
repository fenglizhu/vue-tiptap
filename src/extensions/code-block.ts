import{ CodeBlock as TiptapCodeBlock }from '@tiptap/extension-code-block'
import { CoustomOptions, Commands } from '../types'

export default class CodeBlock {
  constructor() {
    const ZeroCodeBlock:any = TiptapCodeBlock.extend()
    const customOptions: CoustomOptions = {
      showMenu: true,
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleCodeBlock(attribute);
      }
    }
    ZeroCodeBlock.customOptions = customOptions;

    return ZeroCodeBlock
  }
}