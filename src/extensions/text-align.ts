import{ TextAlign as TiptapTextAlign }from '@tiptap/extension-text-align'

interface TextAlignOptions {
  types?: string[],
  alignments?: string[],
  collapse?: Boolean, // 是否需要折叠
}

export default class Color {
  constructor({
    types,
    alignments,
    collapse = false
  }: TextAlignOptions) {
    types = types || ['heading', 'paragraph'];
    alignments = alignments || ['left', 'center', 'right', 'justify'];

    TiptapTextAlign.options.alignments = alignments;
    TiptapTextAlign.options.types = types;

    TiptapTextAlign.config.collapse = collapse;
    TiptapTextAlign.config.toggleCommands = () => {
      return 'setTextAlign'
    }

    return TiptapTextAlign
  }
}