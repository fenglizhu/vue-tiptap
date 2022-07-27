import { Editor  } from '@tiptap/core'
import { EditorOptions } from '@tiptap/core/src/types'
import { RawCommands } from '@tiptap/core';
// TODO：options类型需要修改

type EditorType =
  | Editor
  | any

export class ZeroEditor {
  editor: EditorType
  constructor(options?: any) {
    const editor= new Editor(options);
    this.editor = editor;
    this.editor.menusOptions = this.menus;

    this.createMenuManager()
  }
  public createMenuManager() {
    // TODO：抽取menu
    this.editor.menusOptions.forEach((menusItem: any) => {
      menusItem['addcustomCommands'] = function() {
        this.editor.commands.toggleBold()
      }
      menusItem['addcustomCommands'] = menusItem['addcustomCommands'].bind({editor: this.editor})
    });
    
    // setTimeout(() => {
    //   this.editor.menusOptions[0].addcustomCommands()
    // }, 5000);
  }
  get menus() {
    const menus: Array<Object> = this.editor.options.extensions.filter((m: any) => {
      return m.customOptions.showMenu
    })
    return menus
  }
}