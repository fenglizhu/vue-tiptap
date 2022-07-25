
import {
  Mark,
  mergeAttributes,
} from '@tiptap/core'

export interface HighlightOptions {
  HTMLAttributes: Record<string, any>,
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    highlight: {
      /**
       * Set a highlight mark
       */
      setHighlight: (attributes?: { color: string }) => ReturnType,
      /**
       * Toggle a highlight mark
       */
      toggleHighlight: (attributes?: { color: string }) => ReturnType,
      /**
       * Unset a highlight mark
       */
      unsetHighlight: () => ReturnType,
    }
  }
}

export const inputRegex = /(?:^|\s)((?:==)((?:[^~=]+))(?:==))$/
export const pasteRegex = /(?:^|\s)((?:==)((?:[^~=]+))(?:==))/g

const TiptapHighlight = Mark.create<HighlightOptions>({
  name: 'highlight',
  hasTab: true,
  paramsObject: true,
  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },

  addAttributes() {
    return {
      color: {
        default: null,
        parseHTML: element => element.getAttribute('data-color') || element.style.backgroundColor,
        renderHTML: attributes => {
          if (!attributes.color) {
            return {}
          }
          return {
            'data-color': attributes.color,
            style: `background-color: ${attributes.color}`,
          }
        },
      },
    }
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
  },

  addCommands() {
    return {
      setHighlight: attributes => ({ commands }) => {
        return commands.setMark(this.name, attributes)
      },
      toggleHighlight: attributes => ({ commands }) => {
        return commands.toggleMark(this.name, attributes)
      },
      unsetHighlight: () => ({ commands }) => {
        return commands.unsetMark(this.name)
      },
    }
  },

  toggleCommands() {
    return 'toggleHighlight'
  },

  unsetCommands() {
    return 'unsetHighlight'
  }
})


export default class Highlight {
  constructor() {
    return TiptapHighlight
  }
}