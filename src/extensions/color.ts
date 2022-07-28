import{ Color as TiptapColor }from '@tiptap/extension-color'
import { CoustomOptions, Commands, MenuOptions } from '../types'
import { Colors } from "../types/color";

interface ColorOptions extends CoustomOptions {
  colors: string[],
}

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T
  currentTarget: T
}

export default class Color {
  constructor(option: ColorOptions = {
    showMenu: true,
    toolTips: '文本颜色',
    colors: Colors
  }) {
    const ZeroColor:any = TiptapColor.extend()
    const clickParamsKey = 'color'
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        const color = attribute[clickParamsKey];
        if (color) {
          this.commands.setColor(color);
        } else {
          this.commands.unsetColor(color);
        }
        
      }
    }

    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      hasTab: true,
      clickParamsKey,
      dropdown: option.colors,
      eleAttribute: 'color',
      // TODO: 后续需要整理为什么
      toggleCommand: function (pointerEvent: HTMLElementEvent<HTMLElement>) {
        const element:Element = pointerEvent.target;
        const color = element.getAttribute('data-color')
        this.editor.commands.setColor(color);
      }
    }

    ZeroColor.customOptions = customOptions;
    ZeroColor.menusOptions = menusOptions;

    return ZeroColor
  }
}