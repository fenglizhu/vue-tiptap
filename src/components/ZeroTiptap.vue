<template>
  <!-- <div v-if="editor" class="zero-editor-wrapper">
    <MenuBar :menus="menus" :editor="editor"></MenuBar>
    <editor-content 
    :editor="editor"
    :class="['zero-editor-container']"
     />
     
  </div> -->
  <!-- <div class="zero-editor-menu" id="zero-editor-menu"></div> -->
  <div id="test-id"></div>
</template>
<script setup lang="ts">
  import { defineProps, onMounted } from "vue";
  import { Editor, EditorContent } from '@tiptap/vue-3'
  import { Extensions  } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'
  
  import MenuBar from "./menu/MenuBar.vue";

  import { ZeroEditor } from "../core";

  const props = defineProps({
    content: {
      type: String,
      default: ''
    },
    extensions: {
      type: [],
      default: () => []
    }
  })
  const extensions: Extensions = props.extensions
  const editor = new Editor({
    content: props.content,
    extensions: [
      StarterKit
    ]
  })
  
  
  // console.log(editor);
  
  // const menus: Array<Object> = editor.options.extensions.filter((m: any) => {
  //   return m.menusOptions.showMenu
  // })
  // let editor2:ZeroEditor = null as ;

  onMounted(() =>{
    const element: Element = document.querySelector('#test-id') as HTMLElement

    const editor2 = new ZeroEditor({
      element,
      content: `<p>
    This is still the text editor you’re used to, but enriched with node views.
  </p>
  <p>
    Did you see that? That’s a Vue component. We are really living in the future.
  </p>`,
      extensions: extensions,
      // onFocus: function() {
      //   console.log(editor2.editor.isActive('bold'));
        
        
      // },
      // onBeforeCreate: function() {
      //   console.log('onBeforeCreate');
      // },
      // onCreate: function() {
      //   console.log('create');
        
        
      // },
      // onUpdate: function() {
      //   console.log('onUpdate');
      // },
      onSelectionUpdate: function() {
        console.log('onSelectionUpdate');
        
        
      },
      // onTransaction: function() {
      //   console.log('onTransaction');
        
        
      // },
      // onBlur: function() {
      //   console.log('onBlur');
        
        
      // },
      // onDestroy: function() {
      //   console.log('onDestroy');
        
        
      // },
    })
    console.log(editor2);
  })

  // console.log(menus);
  
</script>

<style>
  @import url(../style/editor.css);
</style>