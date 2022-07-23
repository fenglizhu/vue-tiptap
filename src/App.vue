<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Tiptap from './components/Tiptap.vue'
import ZeroTiptap from './components/ZeroTiptap.vue'
import StarterKit from '@tiptap/starter-kit'
import { Bold } from './extensions'
const content = `<p>
    This is still the text editor you’re used to, but enriched with node views.
  </p>
  <p>
    Did you see that? That’s a Vue component. We are really living in the future.
  </p>`;
const extensions = [
  StarterKit,
  Bold
]
</script>

<template>
  
  <!-- <tiptap /> -->
  <div style="width: 500px; margin: 10px auto">
    <ZeroTiptap :content="content" :extensions="extensions" />
  </div>
  
</template>

