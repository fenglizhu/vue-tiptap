import { Editor } from '@tiptap/core'
import { EditorOptions } from '@tiptap/core/src/types'
import MenusBar from "../menu/menus-bar";

type EditorType =
  | Editor
  | any


export class ZeroEditor {
  menusBar: MenusBar | undefined;
  editor: EditorType
  public options: Partial<EditorOptions> = {
    element: document.createElement('div'),
    content: '',
    injectCSS: true,
    injectNonce: undefined,
    extensions: [],
    autofocus: false,
    editable: true,
    editorProps: {},
    parseOptions: {},
    enableInputRules: true,
    enablePasteRules: true,
    enableCoreExtensions: true,
    onBeforeCreate: () => null,
    onCreate: () => null,
    onUpdate: () => null,
    onSelectionUpdate: () => null,
    onTransaction: () => null,
    onFocus: () => null,
    onBlur: () => null,
    onDestroy: () => null,
  }

  constructor(options: Partial<EditorOptions> = {}) {
    this.setOptions(options);
    const editor= new Editor(this.options as any);
    this.editor = editor;
    this.editor.menusOptions = this.menus;
    this.createMenuManager();
    this.renderMenusDom();
  }

  public setOptions(options: Partial<EditorOptions> = {}) {
    const extensions = options.extensions || []
    this.options = {
      ...this.options,
      ...options,
      extensions: extensions.map((item: Record<string,any>) => item.extension)
    }
  }

  private createMenuManager() {
    this.editor.menusOptions.forEach((menusItem: Record<string,any>) => {
      if(menusItem.menusOptions.toggleCommand) {
        menusItem.menusOptions.toggleCommand = menusItem.menusOptions.toggleCommand.bind({
          editor: this.editor
        })
      }
    });
  }

  /**
   * 渲染菜单栏
   */
  private renderMenusDom() {
    this.menusBar = new MenusBar(this.editor.menusOptions,this.editor)
  }

  get extensions() {
    return this.options.extensions
  }

  get menus() {
    return this.editor.options.extensions.filter((m: any) => m.menusOptions.showMenu)
  }
}