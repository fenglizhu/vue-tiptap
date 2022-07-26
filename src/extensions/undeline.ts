import { CoustomOptions, Commands } from '../types'
import{ Underline as TiptapUndeline }from '@tiptap/extension-underline'
export default class Undeline {
  constructor() {
    const ZeroUnderline: any = TiptapUndeline.extend()
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleUnderline(attribute);
      }
    }
    ZeroUnderline.customOptions = customOptions;

    return ZeroUnderline
  }
}