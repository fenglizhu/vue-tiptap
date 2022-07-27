import { Editor  } from '@tiptap/core'
import { EditorOptions } from '@tiptap/core/src/types'
// TODO：options类型需要修改
import MenusBar from "../menu/menus-bar";

type EditorType =
  | Editor
  | any

export class ZeroEditor {
  menusBar!: MenusBar;
  editor: EditorType
  constructor(options?: any) {
    const editor= new Editor(options);
    this.editor = editor;
    this.editor.menusOptions = this.menus;

    this.createMenuManager();
    this.renderMenusDom();
  }

  private createMenuManager() {
    this.editor.menusOptions.forEach((menusItem: any) => {
      menusItem['addcustomCommands'] = function() {
        this.editor.commands.toggleBold()
      }
      menusItem['addcustomCommands'] = menusItem['addcustomCommands'].bind({editor: this.editor})
    });
  }

  /**
   * 渲染菜单栏
   */
  private renderMenusDom() {
    this.menusBar = new MenusBar(this.editor.menusOptions,this.editor)
  }

  get menus() {
    const menus: Array<Object> = this.editor.options.extensions.filter((m: any) => {
      return m.customOptions.showMenu
    })
    return menus
  }
}