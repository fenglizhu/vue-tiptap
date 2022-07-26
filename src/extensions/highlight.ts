
import { mergeAttributes } from '@tiptap/core'
import { Highlight as TiptapHighlight } from "@tiptap/extension-highlight";
import { CoustomOptions, Commands } from '../types'

interface Colors {
  color: string[],
  showMoreColor: boolean
}

export default class Highlight {
  constructor({ color, showMoreColor }: Colors = {
    color: [],
    showMoreColor: true
  }) {
    const ZeroHighlight:any = TiptapHighlight.extend({
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
    const customOptions: CoustomOptions = {
      showMenu: true,
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleHighlight(attribute);
      },
      showMoreColor,
      tabOptions: color
    }
    ZeroHighlight.config.hasTab = true;
    ZeroHighlight.config.paramsKey = 'color';
    
    ZeroHighlight.customOptions = customOptions;

    return ZeroHighlight
  }
}