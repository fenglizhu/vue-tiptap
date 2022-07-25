import{ Underline as TiptapUndeline }from '@tiptap/extension-underline'

export default class Undeline {
  constructor() {
    TiptapUndeline.config.toggleCommands = () => {
      return 'toggleUnderline'
    }
    return TiptapUndeline
  }
}