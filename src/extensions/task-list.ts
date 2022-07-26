import{ TaskList as TiptapTaskList }from '@tiptap/extension-task-list'
import { CoustomOptions, Commands } from '../types'

export default class TaskList {
  constructor() {
    const ZeroTaskList:any = TiptapTaskList.extend()
    const customOptions: CoustomOptions = {
      showMenu: true,
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleTaskList(attribute);
      }
    }
    ZeroTaskList.customOptions = customOptions;

    return ZeroTaskList
  }
}