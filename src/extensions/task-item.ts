import{ TaskItem as TiptapTaskItem }from '@tiptap/extension-task-item'
import { CoustomOptions } from '../types'

export default class TaskItem {
  constructor() {
    const ZeroTaskItem:any = TiptapTaskItem.extend()
    const customOptions: CoustomOptions = {
      showMenu: false
    }
    ZeroTaskItem.customOptions = customOptions;

    return ZeroTaskItem
  }
}