import{ Blockquote as TiptapBlockquote }from '@tiptap/extension-blockquote'

export default class Blockquote {
  constructor() {
    TiptapBlockquote.config.toggleCommands = () => {
      return 'toggleBlockquote'
    }
    return TiptapBlockquote
  }
}