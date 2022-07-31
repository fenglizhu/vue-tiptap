import{ Heading as TiptapHeading }from '@tiptap/extension-heading'
import { CoustomOptions, MenuOptions, HTMLElementEvent } from '../types'

export type Level = 1 | 2 | 3 | 4 | 5 | 6
interface HeadingOption extends CoustomOptions {
  levels: Level[]
}

export default class Heading {
  constructor(option: HeadingOption = {
    showMenu: true,
    toolTips: '标题',
    levels: [1, 2, 3, 4, 5, 6]
  }) {
    const ZeroHeading: Record<string, any> = TiptapHeading.extend()
    
    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      hasTab: true,
      dropdown: option.levels,
      clickParamsKey: 'level',
      // TODO: 后续需要整理为什么
      toggleCommand: function (pointerEvent: HTMLElementEvent<HTMLElement>) {
        const element: Element = pointerEvent.target;
        const attr: string | null = element.getAttribute('data-attr')
        const level: number = Number(attr);
        this.editor.commands.toggleHeading({ level });
      }
    }
    ZeroHeading.menusOptions = menusOptions;

    return ZeroHeading
  }
}