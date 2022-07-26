import{ Blockquote as TiptapBlockquote }from '@tiptap/extension-blockquote'
import { CoustomOptions, Commands } from '../types'

export default class CodeBlock {
  constructor() {
    const ZeroBlockquote:any = TiptapBlockquote.extend()
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleBlockquote(attribute);
      }
    }
    ZeroBlockquote.customOptions = customOptions;

    return ZeroBlockquote
  }
}