import{ Bold as TiptapBold }from '@tiptap/extension-bold'
import { CoustomOptions, Commands } from '../types'

export default class CodeBlock {
  constructor() {
    const ZeroBold:any = TiptapBold.extend()
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleBold(attribute);
      }
    }
    ZeroBold.customOptions = customOptions;

    return ZeroBold
  }
}