import{ TaskList as TiptapTaskList }from '@tiptap/extension-task-list'
import { CoustomOptions, Commands, MenuOptions } from '../types'

export default class TaskList {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '任务列表'
  }) {
    const ZeroTaskList: Record<string, any> = TiptapTaskList.extend()

    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      toggleCommand: function () {
        this.editor.commands.toggleTaskList();
      }
    }

    ZeroTaskList.menusOptions = menusOptions;

    return ZeroTaskList
  }
}