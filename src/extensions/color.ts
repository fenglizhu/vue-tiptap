import{ Color as TiptapColor }from '@tiptap/extension-color'
import { CoustomOptions, MenuOptions, HTMLElementEvent } from '../types'
import { Colors } from "../types/color";

interface ColorOptions extends CoustomOptions {
  colors: string[],
}



export default class Color {
  constructor(option: ColorOptions = {
    showMenu: true,
    toolTips: '文本颜色',
    colors: Colors
  }) {
    const ZeroColor: Record<string, any> = TiptapColor.extend();
    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      hasTab: true,
      dropdown: option.colors,
      eleAttribute: 'color',
      // TODO: 后续需要整理为什么
      toggleCommand: function (pointerEvent: HTMLElementEvent<HTMLElement>) {
        const element:Element = pointerEvent.target;
        const color = element.getAttribute('data-attr')
        this.editor.commands.setColor(color);
      }
    }
    ZeroColor.menusOptions = menusOptions;

    return ZeroColor
  }
}