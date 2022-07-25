import{ Strike as TiptapStrike }from '@tiptap/extension-strike'

export default class Strike {
  constructor() {
    TiptapStrike.config.toggleCommands = () => {
      return 'toggleStrike'
    }
    return TiptapStrike
  }
}