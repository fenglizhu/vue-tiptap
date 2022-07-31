import { CoustomOptions, Commands, MenuOptions, HTMLElementEvent } from '../types'
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
      dropdown: alignments,
      clickParamsKey: 'level',
      // TODO: 后续需要整理为什么
      toggleCommand: function (pointerEvent: HTMLElementEvent<HTMLElement>) {
        const element: Element = pointerEvent.target;
        const align: string | null = element.getAttribute('data-attr')
        this.editor.commands.setTextAlign(align)
      }
    }

    ZeroTextAlign.customOptions = customOptions;
    ZeroTextAlign.menusOptions = menusOptions;

    return ZeroTextAlign
  }
}
