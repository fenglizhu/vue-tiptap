import{ Strike as TiptapStrike }from '@tiptap/extension-strike'
import { CoustomOptions, Commands } from '../types'

export default class Strike {
  constructor() {
    const ZeroUnderline: any = TiptapStrike.extend()
    const customOptions: CoustomOptions = {
      showMenu: true,
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleStrike(attribute);
      }
    }
    ZeroUnderline.customOptions = customOptions;
    
    return ZeroUnderline
  }
}