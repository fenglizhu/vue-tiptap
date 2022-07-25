
// import { Extension } from '@tiptap/core'

// export type ColorOptions = {
//   types: string[],
// }

// declare module '@tiptap/core' {
//   interface Commands<ReturnType> {
//     color: {
//       /**
//        * Set the background color
//        */
//       setHighlight: (color: string) => ReturnType,
//       /**
//        * Unset the background color
//        */
//       unsetHighlight: () => ReturnType,

//       toggleHighlight: (color: string) => ReturnType
//     }
//   }
// }

// const HighlightExtension = Extension.create<ColorOptions>({
//   name: 'highlight',
//   hasTab: true,
//   addOptions() {
//     return {
//       types: ['textStyle'],
//     }
//   },

//   addGlobalAttributes() {
//     console.log(4444);
    
//     return [
//       {
//         types: this.options.types,
//         attributes: {
//           color: {
//             default: null,
//             parseHTML: element => element.style.backgroundColor?.replace(/['"]+/g, ''),
//             renderHTML: attributes => {
//               if (!attributes.color) {
//                 return {}
//               }
//               console.log(attributes.color);
              
//               return {
//                 style: `background-color: ${attributes.color}`,
//               }
//             },
//           },
//         },
//       },
//     ]
//   },

//   addCommands() {
//     return {
//       setHighlight: color => ({ chain }) => {
//         return chain()
//           .setMark('textStyle', { color })
//           .run()
//       },
//       unsetHighlight: () => ({ chain }) => {
//         return chain()
//           .setMark('textStyle', { color: null })
//           .removeEmptyTextStyle()
//           .run()
//       },
//       toggleHighlight: (color) => ({ chain }) => {
//         return chain()
//           .toggleMark('textStyle', { color })
//           .run()
//       }
//     }
//   }
// })

// export default class Highlight {
//   constructor() {
//     HighlightExtension.config.toggleCommands = () => {
//       return 'toggleHighlight'
//     }
//     return HighlightExtension
//   }
// }

import {
  Mark,
  markInputRule,
  markPasteRule,
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

  parseHTML() {
    return [
      {
        tag: 'span',
      },
    ]
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
        console.log(attributes);
        
        return commands.toggleMark(this.name, attributes)
      },
      unsetHighlight: () => ({ commands }) => {
        return commands.unsetMark(this.name)
      },
    }
  },

  addKeyboardShortcuts() {
    return {
      'Mod-Shift-h': () => this.editor.commands.toggleHighlight(),
    }
  },

  addInputRules() {
    return [
      markInputRule({
        find: inputRegex,
        type: this.type,
      }),
    ]
  },

  addPasteRules() {
    return [
      markPasteRule({
        find: pasteRegex,
        type: this.type,
      }),
    ]
  },

  toggleCommands() {
    return 'toggleHighlight'
  }
})


export default class Highlight {
  constructor() {
    return TiptapHighlight
  }
}