import{ Color as TiptapColor }from '@tiptap/extension-color'
import { CoustomOptions, Commands } from '../types'

export default class Color {
  constructor() {
    const ZeroHeading:any = TiptapColor.extend()
    const paramsKey = 'color'
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        const color = attribute[paramsKey];
        if (color) {
          this.commands.setColor(color);
        } else {
          this.commands.unsetColor(color);
        }
        
      }
    }
    ZeroHeading.config.hasTab = true;
    ZeroHeading.config.paramsKey = paramsKey;
    
    ZeroHeading.customOptions = customOptions;

    return ZeroHeading
  }
}