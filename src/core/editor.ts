import { Editor  } from '@tiptap/core'
import { EditorOptions } from '@tiptap/core/src/types'
// TODO：options类型需要修改

export class ZeroEditor {
  editor: Editor
  menus: { editor: Editor }
  constructor(options?: any) {
    let editor = new Editor(options)
    this.menus = {
      editor,
    }
    this.editor = editor
  }
}