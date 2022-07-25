import{ Underline as TiptapUndeline }from '@tiptap/extension-underline'

export class Undeline {
  constructor() {
    TiptapUndeline.config.useCommands = () =>{
      return 'toggleUnderline'
    }
    return TiptapUndeline
  }
}