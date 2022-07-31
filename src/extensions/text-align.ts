import { CoustomOptions, MenuOptions, HTMLElementEvent } from '../types'
import{ TextAlign as TiptapTextAlign }from '@tiptap/extension-text-align'

interface TextAlignOptions extends MenuOptions {
  types?: string[],
  alignments?: string[],
  defaultAlignment?: string,
}

export default class TextAlign {
  constructor({
    types = ['heading', 'paragraph'],
    alignments = ['left', 'center', 'right', 'justify'],
    defaultAlignment = 'left',
    showMenu = true,
    toolTips = '对齐方式'
  }: TextAlignOptions) {
    const ZeroTextAlign: Record<string, any> = TiptapTextAlign.extend({
      addOptions() {
        return {
          types,
          alignments,
          defaultAlignment
        }
      }
    })

    const menusOptions: MenuOptions = {
      showMenu,
      toolTips,
      dropdown: alignments,
      clickParamsKey: 'level',
      // TODO: 后续需要整理为什么
      toggleCommand: function (pointerEvent: HTMLElementEvent<HTMLElement>) {
        const element: Element = pointerEvent.target;
        const align: string | null = element.getAttribute('data-attr')
        this.editor.commands.setTextAlign(align)
      }
    }

    ZeroTextAlign.menusOptions = menusOptions;

    return ZeroTextAlign
  }
}
