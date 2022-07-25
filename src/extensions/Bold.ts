import{ Bold as Tiptapbold }from '@tiptap/extension-bold'

export class Bold {
  constructor() {
    Tiptapbold.config.useCommands = () => {
      return 'toggleBold'
    }
    return Tiptapbold
  }
}