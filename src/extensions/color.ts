import{ Color as TiptapColor }from '@tiptap/extension-color'

export default class Color {
  constructor() {
    TiptapColor.config.hasTab = true;
    TiptapColor.config.toggleCommands = () => {
      return 'setColor'
    }
    TiptapColor.config.unsetCommands = () => {
      return 'unsetColor'
    }
    return TiptapColor
  }
}