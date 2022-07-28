import{ TaskList as TiptapTaskList }from '@tiptap/extension-task-list'
import { CoustomOptions, Commands, MenuOptions } from '../types'

export default class TaskList {
  constructor(option: CoustomOptions = {
    showMenu: true,
    toolTips: '任务列表'
  }) {
    const ZeroTaskList:any = TiptapTaskList.extend()
    const customOptions: CoustomOptions = {
      toggleCommands({
        attribute
      }: Commands) {
        this.commands.toggleTaskList(attribute);
      }
    }

    const menusOptions: MenuOptions = {
      showMenu: option.showMenu,
      toolTips: option.toolTips,
      toggleCommand: function () {
        this.editor.commands.toggleTaskList();
      }
    }

    ZeroTaskList.customOptions = customOptions;
    ZeroTaskList.menusOptions = menusOptions;

    return ZeroTaskList
  }
}