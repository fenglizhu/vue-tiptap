import { Extension } from '@tiptap/core'
import { NodeType, MarkType } from 'prosemirror-model'
import { CoustomOptions, Commands } from '../types'

interface TextAlignOptions {
  types?: string[],
  alignments?: number[],
  defaultAlignment?: number,
  collapse?: Boolean, // 是否需要折叠
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
      defaultAlignment: 1,
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
  constructor({
    types = ['heading', 'paragraph'],
    alignments = [1, 1.15, 1.5, 2.0, 2.5, 3],
    defaultAlignment = 1,
    collapse = true
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
    const customOptions: CoustomOptions = {
      showMenu: true,
      collapse,
      toggleCommands({
        attribute
      }: Commands = {}) {
        if (attribute) {
          this.commands.setLineHeight(attribute);
        } else {
          this.commands.unsetLineHeight();
        }
      }
    }
    
    ZeroLineHeight.customOptions = customOptions;
    return ZeroLineHeight
  }
}