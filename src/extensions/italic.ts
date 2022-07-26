import { Italic as TiptapItalic } from "@tiptap/extension-italic";
import { CoustomOptions, Commands } from '../types'
export default class Italic {
  constructor() {
    const ZeroItalic: any = TiptapItalic.extend()
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleItalic(attribute);
      }
    }
    ZeroItalic.customOptions = customOptions;
    
    return ZeroItalic
  }
}