<script setup lang="ts">
import ZeroTiptap from './components/ZeroTiptap.vue'
import StarterKit from '@tiptap/starter-kit'
import { Bold, Highlight, TextStyle, Undeline } from './extensions'
import Tiptap from './components/Tiptap.vue';

const content = `<p>
    This is still the text editor you’re used to, but enriched with node views.
  </p>
  <p>
    Did you see that? That’s a Vue component. We are really living in the future.
  </p>`;
const extensions = [
  StarterKit,
  Bold,
  Highlight.configure({}),
  TextStyle,
  new Undeline()
]
</script>

<template>
  <div style="width: 500px; margin: 10px auto">
    <ZeroTiptap :content="content" :extensions="extensions" />
  </div>
  <!-- <Tiptap></Tiptap> -->
  
</template>

