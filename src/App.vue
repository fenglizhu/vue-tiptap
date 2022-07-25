<script setup lang="ts">
import ZeroTiptap from './components/ZeroTiptap.vue'
import { 
  Bold, Highlight, TextStyle, Undeline, Italic, Strike,
  Blockquote,
  CodeBlock,
  Color,
  Heading,
  TextAlign
} from './extensions'
import Tiptap from './components/Tiptap.vue';

const content = `<p>
    This is still the text editor you’re used to, but enriched with node views.
  </p>
  <p>
    Did you see that? That’s a Vue component. We are really living in the future.
  </p>`;
const extensions = [
  new Bold(),
  new Highlight(),
  new TextStyle(),
  new Undeline(),
  new Italic(),
  new Strike(),
  new Blockquote(),
  new CodeBlock(),
  new Color(),
  new Heading(),
  new TextAlign({
    alignments: ['left', 'center', 'right', 'justify']
  })
]
</script>

<template>
  <div style="width: 500px; margin: 10px auto">
    <ZeroTiptap :content="content" :extensions="extensions" />
  </div>
  <Tiptap></Tiptap>
  
</template>

