import { CoustomOptions } from '../types/coustom-options'
import{ TextAlign as TiptapTextAlign }from '@tiptap/extension-text-align'

interface TextAlignOptions {
  types?: string[],
  alignments?: string[],
  collapse?: Boolean, // 是否需要折叠
  defaultAlignment?: string
}

interface Commands {
  attribute: any
}

export default class TextAlign {
  constructor({
    types = ['heading', 'paragraph'],
    alignments = ['left', 'center', 'right', 'justify'],
    collapse = false,
    defaultAlignment = 'left',
  }: TextAlignOptions) {
    const ZeroTextAlign: any = TiptapTextAlign.extend({
      addOptions() {
        return {
          types,
          alignments,
          defaultAlignment
        }
      }
    })
    const customOptions: CoustomOptions = {
      collapse,
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.setTextAlign(attribute);
      }
    }
    
    ZeroTextAlign.customOptions = customOptions;

    return ZeroTextAlign
  }
}
