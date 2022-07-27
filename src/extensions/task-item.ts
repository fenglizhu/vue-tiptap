import{ TaskItem as TiptapTaskItem }from '@tiptap/extension-task-item'
import { CoustomOptions, MenuOptions } from '../types'

export default class TaskItem {
  constructor() {
    const ZeroTaskItem:any = TiptapTaskItem.extend()
    const customOptions: CoustomOptions = {}
    const menusOptions: MenuOptions = {
      showMenu: false
    }
    ZeroTaskItem.customOptions = customOptions;
    ZeroTaskItem.menusOptions = menusOptions;

    return ZeroTaskItem
  }
}