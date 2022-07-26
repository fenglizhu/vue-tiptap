import{ BulletList as TiptapBulletList }from '@tiptap/extension-bullet-list'
import { CoustomOptions, Commands } from '../types'

export default class BulletList {
  constructor() {
    const ZeroBulletList:any = TiptapBulletList.extend()
    const customOptions: CoustomOptions = {
      showMenu: true,
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleBulletList(attribute);
      }
    }
    ZeroBulletList.customOptions = customOptions;

    return ZeroBulletList
  }
}