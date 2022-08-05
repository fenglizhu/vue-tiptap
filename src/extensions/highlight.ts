
import { mergeAttributes } from '@tiptap/core'
import { Highlight as TiptapHighlight } from "@tiptap/extension-highlight";
import { CoustomOptions, MenuOptions, HTMLElementEvent } from '../types'
import { Colors } from "../types/color";

interface ColorOptions extends CoustomOptions {
  colors?: string[]
}

export default class Highlight {
  extension: Record<string, any>;
  constructor({
    colors = Colors,
    showMenu = true,
    toolTips = '背景色'
  }: ColorOptions = {}) {
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
      showMenu: showMenu,
      toolTips: toolTips,
      hasTab: true,
      clickParamsKey: 'color',
      dropdown: colors,
      eleAttribute: 'color',
      src: 'src/assets/images/paint-line.svg',
      toggleCommand: function (pointerEvent: HTMLElementEvent<HTMLElement>) {
        const element:Element = pointerEvent.target;
        const color = element.getAttribute('data-attr')
        this.editor.commands.toggleHighlight({ color });
      }
    }
    ZeroHighlight.menusOptions = menusOptions;
    this.extension = ZeroHighlight;
  }
}