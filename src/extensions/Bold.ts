import{ Bold as TiptapBold }from '@tiptap/extension-bold'
import { CoustomOptions, Commands } from '../types'

export default class CodeBlock {
  constructor() {
    const ZeroBold:any = TiptapBold.extend()
    const customOptions: CoustomOptions = {
      showMenu: true,
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleBold(attribute);
      }
    }
    ZeroBold.customOptions = customOptions;
    // TODO:测试作用
    setTimeout(() => {
      ZeroBold.addcustomCommands()
    }, 5000);
    
    return ZeroBold
  }
}