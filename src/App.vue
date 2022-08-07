<script setup lang="ts">
import ZeroTiptap from './components/ZeroTiptap.vue'
import { 
  StarterKit,
  Bold, Highlight, TextStyle, Undeline, Italic, Strike,
  Blockquote,
  CodeBlock,
  Color,
  Heading,
  TextAlign,
  OrderedList,
  BulletList,
  TaskList,
  TaskItem,
  LineHeight
} from './extensions'
// import Tiptap from './components/Tiptap.vue';

const content = `<p>
    This is still the text editor you’re used to, but enriched with node views.
  </p>
  <p>
    Did you see that? That’s a Vue component. We are really living in the future.
  </p>`;
const extensions = [
  new StarterKit(),
  new Heading(),
  new Bold(),
  new TextStyle(),
  new Undeline(),
  new Italic(),
  new Strike(),
  new Color(),
  new Highlight(),
  new TextAlign(),
  new OrderedList(),
  new BulletList(),
  new TaskList(),
  new TaskItem(),
  new Blockquote(),
  new CodeBlock(),
  new LineHeight()
]
</script>

<template>
  <div style="width: 1000px; margin: 50px auto">
    <ZeroTiptap :content="content" :extensions="extensions" />
  </div>
  <!-- <Tiptap></Tiptap> -->
  
</template>

