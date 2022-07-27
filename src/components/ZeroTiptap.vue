<template>
  <div v-if="editor" class="zero-editor-wrapper">
    <MenuBar :menus="menus" :editor="editor"></MenuBar>
    <editor-content 
    :editor="editor"
    :class="['zero-editor-container']"
     />
     
  </div>
  <div id="test-id" style="height: 500px; background: #ccc;"></div>
</template>
<script setup lang="ts">
  import { defineProps, onMounted } from "vue";
  import { Editor, EditorContent } from '@tiptap/vue-3'
  
  import MenuBar from "./menu/MenuBar.vue";

  import { ZeroEditor } from "../core/editor";

  const props = defineProps({
    content: {
      type: String,
      default: ''
    },
    extensions: {
      type: Array,
      default: () => []
    }
  })
  const extensions: any[] = props.extensions
  const editor = new Editor({
    content: props.content,
    extensions: extensions
  })
  
  
  
  const menus: Array<Object> = editor.options.extensions.filter((m: any) => {
    return m.customOptions.showMenu
  })

  onMounted(() =>{
    const element: Element = document.querySelector('#test-id') as HTMLElement

    const editor2 = new ZeroEditor({
      element,
      content: '44444444',
      extensions: extensions
    })
    console.log(editor2);
  })

  // console.log(menus);
  
</script>

<style>
  @import url(../style/editor.css);
</style>