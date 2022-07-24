<template>
  <div v-if="editor" class="zero-editor-wrapper">
    <MenuBar :menus="menus" :editor="editor"></MenuBar>
    <editor-content 
    :editor="editor"
    :class="['zero-editor-container']"
     />
  </div>
</template>
<script setup lang="ts">
  import { defineProps } from "vue";
  import { Editor, EditorContent } from '@tiptap/vue-3'
  import MenuBar from "./menu/MenuBar.vue";

  const props = defineProps({
    content: {
      type: String,
      default: ''
    },
    extensions: {
      default: () => []
    }
  })
  const editor = new Editor({
    content: props.content,
    extensions: props.extensions
  })

  const menus: Array<Object> = editor.options.extensions.filter(m => {
    return m
    // return m.name !== 'textStyle' && m.name !== 'starterKit'
  })

  console.log(menus);
  
</script>

<style>
  @import url(../style/editor.css);
</style>