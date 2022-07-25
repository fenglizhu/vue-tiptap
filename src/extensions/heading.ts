import{ Heading as TiptapHeading }from '@tiptap/extension-heading'

export default class Color {
  constructor() {
    TiptapHeading.config.hasTab = true;
    TiptapHeading.config.paramsKey = 'level',
    TiptapHeading.config.toggleCommands = () => {
      return 'toggleHeading'
    }
    return TiptapHeading
  }
}