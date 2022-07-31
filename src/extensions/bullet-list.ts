import{ BulletList as TiptapBulletList }from '@tiptap/extension-bullet-list'
import { CoustomOptions, MenuOptions } from '../types'

export default class BulletList {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '点列表'
  }) {
    const ZeroBulletList: Record<string, any> = TiptapBulletList.extend()
    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      toggleCommand: function () {
        this.editor.commands.toggleBulletList();
      }
    }
    ZeroBulletList.menusOptions = menusOptions;
    return ZeroBulletList
  }
}