import { Extension } from '@tiptap/core'
import { NodeType, MarkType } from 'prosemirror-model'
import { CoustomOptions, MenuOptions, HTMLElementEvent } from '../types'

interface TextAlignOptions extends MenuOptions {
  types?: string[],
  alignments?: number[],
  defaultAlignment?: number,
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    lineHeight: {
      /**
       * Set the text align attribute
       */
       setLineHeight: (alignment: string) => ReturnType,
      /**
       * Unset the text align attribute
       */
      unsetLineHeight: () => ReturnType,
    }
  }
}

const LineHeightExtension = Extension.create({
  name: 'lineHeight',
  addOptions() {
    return {
      types: ['heading', 'paragraph'],
      alignments: [1, 1.15, 1.5, 2.0, 2.5, 3],
      defaultAlignment: 1.5,
    }
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: this.options.defaultAlignment,
            parseHTML: element => element.style.lineHeight?.replace(/['"]+/g, ''),
            renderHTML: attributes => {
              if (!attributes.lineHeight) {
                return {}
              }
              return {
                style: `line-height: ${attributes.lineHeight}`,
              }
            },
          },
        },
      },
    ]
  },
  addCommands() {
    return {
      setLineHeight: (alignment: string) => ({ commands }) => {
        if (!this.options.alignments.includes(alignment)) {
          return false
        }
        return this.options.types.every((type: string | NodeType | MarkType) => commands.updateAttributes(type, { lineHeight: alignment }))
      },

      unsetLineHeight: () => ({ commands }) => {
        return this.options.types.every((type: string | NodeType | MarkType) => commands.resetAttributes(type, 'lineHeight'))
      },
    }
  },
})

export default class LineHeight {
  extension: Record<string, any>;
  constructor({
    types = ['heading', 'paragraph'],
    alignments = [1, 1.15, 1.5, 2.0, 2.5, 3],
    defaultAlignment = 1,
    showMenu = true,
    toolTips = '行高'
  }: TextAlignOptions = {}) {
    const ZeroLineHeight: any = LineHeightExtension.extend({
      addOptions() {
        return {
          types,
          alignments,
          defaultAlignment
        }
      }
    })

    const menusOptions: MenuOptions = {
      showMenu,
      toolTips,
      dropdown: alignments,
      dataNeType: 'lineHeight',
      src: 'src/assets/images/line-height.svg',
      toggleCommand: function (pointerEvent: HTMLElementEvent<HTMLElement>) {
        const element:Element = pointerEvent.target;
        const attr: string | null = element.getAttribute('data-attr')
        const lineHeight: number = Number(attr);
        this.editor.commands.setLineHeight(lineHeight);
        console.log(this.editor.isActive({lineHeight: 3}));
        console.log(this.editor.isActive('lineHeight'));
        
      }
    }
    ZeroLineHeight.menusOptions = menusOptions;
    this.extension = ZeroLineHeight;
  }
}