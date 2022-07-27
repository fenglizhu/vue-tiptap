
import { mergeAttributes } from '@tiptap/core'
import { Highlight as TiptapHighlight } from "@tiptap/extension-highlight";
import { CoustomOptions, Commands, MenuOptions } from '../types'

interface Colors extends MenuOptions{
  color: string[],
  showMoreColor: boolean
}

export default class Highlight {
  constructor(option: Colors = {
    color: [],
    showMoreColor: true,
    showMenu: true,
    toolTips: '背景色'
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
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleHighlight(attribute);
      },
      showMoreColor: option.showMoreColor,
      tabOptions: option.color
    }

    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      hasTab: true,
      clickParamsKey: 'color'
    }

    ZeroHighlight.customOptions = customOptions;
    ZeroHighlight.menusOptions = menusOptions;

    return ZeroHighlight
  }
}