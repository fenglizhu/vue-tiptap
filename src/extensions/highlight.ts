
import { mergeAttributes } from '@tiptap/core'
import { Highlight as TiptapHighlight } from "@tiptap/extension-highlight";
import { CoustomOptions, MenuOptions, HTMLElementEvent } from '../types'
import { Colors } from "../types/color";

interface ColorOptions extends CoustomOptions {
  colors: string[],
  showMoreColor: boolean // TODO
}

export default class Highlight {
  constructor(option: ColorOptions = {
    colors: Colors,
    showMoreColor: true,
    showMenu: true,
    toolTips: '背景色'
  }) {
    const ZeroHighlight: Record<string, any> = TiptapHighlight.extend({
      addOptions() {
        return {
          multicolor: true,
          HTMLAttributes: {},
        }
      },
      renderHTML({ HTMLAttributes }) {
        return ['span', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
      },
    })

    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      hasTab: true,
      clickParamsKey: 'color',
      dropdown: option.colors,
      eleAttribute: 'color',
      toggleCommand: function (pointerEvent: HTMLElementEvent<HTMLElement>) {
        const element:Element = pointerEvent.target;
        const color = element.getAttribute('data-attr')
        this.editor.commands.toggleHighlight({ color });
      }
    }
    ZeroHighlight.menusOptions = menusOptions;

    return ZeroHighlight
  }
}