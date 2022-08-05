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
    element: undefined,
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
  menuElementOption!: { id: string; class: string; };
  containerElementOption!: { class: string; };
  elementParentOption!: { class: string; };
  menuElement!: Element;

  constructor(options: Partial<EditorOptions> = {}) {
    this.setOptions(options);
    this.setElementOption();

    const editor= new Editor({
      ...this.options as any,
      onSelectionUpdate: () => {
        const menus = this.menuElement.querySelectorAll('.editor-menu-item');
        menus.forEach(element => {
          if (editor.isActive('bold') && element.getAttribute('data-ne-type') === 'bold') {
            element.classList.add('selected')
          } else if (!editor.isActive('bold') && element.getAttribute('data-ne-type') === 'bold') {
            element.classList.remove('selected')
          }
        });
      }
    });
    this.editor = editor;
    this.editor.menusOptions = this.menus;
    this.createMenuManager();
    this.renderContainerDom();
    this.renderMenusDom();
    console.log(this.menusBar);
  }

  /**
   * 设置元素的参数
   */
  setElementOption() {
    this.menuElementOption = {
      id: 'zero-editor-menu',
      class: 'zero-editor-menu'
    }
    this.containerElementOption = {
      class: 'zero-editor-container'
    }
    this.elementParentOption = {
      class: 'zero-editor-wrapper'
    }
  }

  /**
   * 设置配置参数
   * @param options 
   */
  public setOptions(options: Partial<EditorOptions> = {}) {
    const extensions = options.extensions || []
    this.options = {
      ...this.options,
      ...options,
      extensions: extensions.map((item: Record<string,any>) => item.extension)
    }
  }

  /**
   * 创建菜单管理，为其配置方法等
   */
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
    this.menusBar = new MenusBar(this.editor.menusOptions, this.editor, this.menuElement)
  }

  /**
   * 处理编辑器内容DOM
   * zero-editor-menu
   */
  renderContainerDom() {
    if(this.options.element) {
      this.options.element.classList.add(this.containerElementOption.class);

      const patentEle = this.createEditorParentElement();
      
      this.menuElement = this.createMenuEle();

      patentEle.append(this.menuElement, this.options.element)

    } else {
      throw new Error("Editor container must be set an element");
    }
  }

  /**
   * createEditorParentElement
   */
  public createEditorParentElement() {
    const patentEle: Element = document.createElement('div');
    patentEle.className = this.elementParentOption.class
    
    const parent: HTMLElement = this.options.element?.parentElement as HTMLElement
    
    parent.replaceChild(patentEle, this.options.element as HTMLElement)

    return patentEle
  }

  /**
   * 
   */
  public createMenuEle() {
    const menuEle: Element = document.createElement('div');
    menuEle.id = this.menuElementOption.id;
    menuEle.className = this.menuElementOption.class;
    return menuEle
  }

  get extensions() {
    return this.options.extensions
  }

  get menus() {
    return this.editor.options.extensions.filter((m: any) => m.menusOptions.showMenu)
  }
}