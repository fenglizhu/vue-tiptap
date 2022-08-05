import{ Bold as TiptapBold }from '@tiptap/extension-bold'
import { CoustomOptions, MenuOptions } from '../types'

export default class Bold {
  extension?: Record<string, any>;
  constructor({
    showMenu = true, 
    toolTips = '加粗'
  }: CoustomOptions = {}) {
    const ZeroBold: Record<string, any> = TiptapBold.extend();
    const menusOptions: MenuOptions = {
      showMenu: showMenu,
      toolTips: toolTips,
      dataNeType: 'bold',
      toggleCommand: function () {
        this.editor.commands.toggleBold();
      }
    }
    ZeroBold.menusOptions = menusOptions;
    this.extension = ZeroBold
  }
}