import{ CodeBlock as TiptapCodeBlock }from '@tiptap/extension-code-block'

export default class CodeBlock {
  constructor() {
    TiptapCodeBlock.config.toggleCommands = () => {
      return 'toggleCodeBlock'
    }
    return TiptapCodeBlock
  }
}