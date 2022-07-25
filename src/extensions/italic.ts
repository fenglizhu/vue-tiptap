import { Italic as TiptapItalic } from "@tiptap/extension-italic";
export default class Italic {
  constructor() {
    TiptapItalic.config.toggleCommands = () => {
      return 'toggleItalic'
    }
    return TiptapItalic
  }
}