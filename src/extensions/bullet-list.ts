import{ BulletList as TiptapBulletList }from '@tiptap/extension-bullet-list'
import { CoustomOptions, Commands, MenuOptions } from '../types'

export default class BulletList {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '点列表'
  }) {
    const ZeroBulletList:any = TiptapBulletList.extend()
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleBulletList(attribute);
      }
    }
    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      toggleCommand: function () {
        this.editor.commands.toggleBulletList();
      }
    }

    ZeroBulletList.customOptions = customOptions;
    ZeroBulletList.menusOptions = menusOptions;
    return ZeroBulletList
  }
}