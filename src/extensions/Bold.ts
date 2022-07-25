import{ Bold as TiptapBold }from '@tiptap/extension-bold'

export default class Bold {
  constructor() {
    TiptapBold.config.toggleCommands = () => {
      return 'toggleBold'
    }
    return TiptapBold
  }
}