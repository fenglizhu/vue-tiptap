import{ Heading as TiptapHeading }from '@tiptap/extension-heading'
import { CoustomOptions, MenuOptions, HTMLElementEvent } from '../types'

export type Level = 1 | 2 | 3 | 4 | 5 | 6
interface HeadingOption extends CoustomOptions {
  levels?: Level[]
}

export default class Heading {
  extension: Record<string, any>
  constructor({
    showMenu = true,
    toolTips = '标题',
    levels = [1, 2, 3, 4, 5, 6]
  }: HeadingOption = {}) {
    
    const ZeroHeading: Record<string, any> = TiptapHeading.extend()
    
    const menusOptions: MenuOptions = {
      showMenu: showMenu,
      toolTips: toolTips,
      hasTab: true,
      dropdown: levels,
      clickParamsKey: 'level',
      src: 'src/assets/images/heading.svg',
      toggleCommand: function (pointerEvent: HTMLElementEvent<HTMLElement>) {
        const element: Element = pointerEvent.target;
        const attr: string | null = element.getAttribute('data-attr')
        const level: number = Number(attr);
        this.editor.commands.toggleHeading({ level });
      }
    }
    ZeroHeading.menusOptions = menusOptions;
    this.extension = ZeroHeading;
  }
}