import { CoustomOptions, Commands, MenuOptions } from '../types'
import{ TextAlign as TiptapTextAlign }from '@tiptap/extension-text-align'

interface TextAlignOptions extends MenuOptions {
  types?: string[],
  alignments?: string[],
  defaultAlignment?: string,
  collapse?: Boolean, // 是否需要折叠
}

export default class TextAlign {
  constructor({
    types = ['heading', 'paragraph'],
    alignments = ['left', 'center', 'right', 'justify'],
    collapse = false,
    defaultAlignment = 'left',
    showMenu = true,
    toolTips = '对齐方式'
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
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.setTextAlign(attribute);
      }
    }

    const menusOptions: MenuOptions = {
      showMenu,
      toolTips,
      collapse,
      dropdown: [
        '左对齐',
        '居中对齐',
        '右对齐',
        '两端对齐',
      ],
    }

    ZeroTextAlign.customOptions = customOptions;
    ZeroTextAlign.menusOptions = menusOptions;

    return ZeroTextAlign
  }
}
