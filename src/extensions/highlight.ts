
import { Extension } from '@tiptap/core'

export type ColorOptions = {
  types: string[],
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    color: {
      /**
       * Set the background color
       */
      setHighlight: (color: string) => ReturnType,
      /**
       * Unset the background color
       */
      unsetHighlight: () => ReturnType,

      toggleHighlight: (color: string) => ReturnType
    }
  }
}

export const HighlightExtension = Extension.create<ColorOptions>({
  name: 'highlight',
  hasTab: true,
  addOptions() {
    return {
      types: ['textStyle'],
    }
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            parseHTML: element => element.style.backgroundColor?.replace(/['"]+/g, ''),
            renderHTML: attributes => {
              if (!attributes.color) {
                return {}
              }

              return {
                style: `background-color: ${attributes.color}`,
              }
            },
          },
        },
      },
    ]
  },

  addCommands() {
    return {
      setHighlight: color => ({ chain }) => {
        return chain()
          .setMark('textStyle', { color })
          .run()
      },
      unsetHighlight: () => ({ chain }) => {
        return chain()
          .setMark('textStyle', { color: null })
          .removeEmptyTextStyle()
          .run()
      },
      toggleHighlight: (color) => ({ chain }) => {
        return chain()
          .toggleMark('textStyle', { color })
          .run()
      }
    }
  }
})

export class Highlight {
  constructor() {
    HighlightExtension.config.useCommands = () => {
      return 'toggleHighlight'
    }
    return HighlightExtension
  }
}