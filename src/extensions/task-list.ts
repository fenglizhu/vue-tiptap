import{ TaskList as TiptapTaskList }from '@tiptap/extension-task-list'
import { CoustomOptions, MenuOptions } from '../types'

export default class TaskList {
  extension: Record<string, any>;
  constructor({
    showMenu = true,
    toolTips = '任务列表'
  }: CoustomOptions = {}) {
    const ZeroTaskList: Record<string, any> = TiptapTaskList.extend()

    const menusOptions: MenuOptions = {
      showMenu: showMenu,
      toolTips: toolTips,
      dataNeType: 'taskList',
      toggleCommand: function () {
        this.editor.commands.toggleTaskList();
      }
    }

    ZeroTaskList.menusOptions = menusOptions;
    this.extension = ZeroTaskList
  }
}