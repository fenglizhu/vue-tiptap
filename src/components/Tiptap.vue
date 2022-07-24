<template>

<div v-if="editor">
  

  <div class="menu"></div>
  
    <button @click="editor.commands.toggleHeading({ level: 1 })"> heading 1</button>
  <!-- <button @click="editor.commands.toggleHeading({ level: 2 })"> heading 2</button>
  <button @click="editor.commands.toggleHeading({ level: 3 })"> heading 3</button>
  <button @click="editor.commands.toggleHeading({ level: 4 })"> heading 4</button>
  <button @click="editor.commands.toggleHeading({ level: 5 })"> heading 5</button>
  <button @click="editor.commands.toggleHeading({ level: 6 })"> heading 6</button> -->

  <div></div>
  
  <button :class="{ 'is-active': editor.isActive('bold') }" @click="editor.commands.toggleBold()">加粗</button>
  <button @click="editor.commands.toggleUnderline()">下划线</button>
  <button @click="editor.commands.toggleItalic()">斜体</button>
  <button @click="editor.commands.toggleStrike()">删除</button>

  <div></div>

  <button @click="editor.commands.toggleBlockquote()">引用</button>
  <button @click="editor.commands.toggleCodeBlock()">代码块</button>

  <div></div>

  <button @click="setLink">链接</button>
  <button @click="editor.commands.setColor('#ff0000')">文字颜色#ff0000</button>
  <!-- <button @click="editor.commands.setColor('#000')">文字颜色默认</button> -->
  <button @click="editor.commands.toggleHighlight({ color: '#ffcc00' })">背景颜色</button>

  <div></div>
  
  <button @click="editor.commands.toggleBulletList()">圆点列表</button>
  <button @click="editor.commands.toggleOrderedList()">有序列表</button>
  <button @click="editor.commands.toggleTaskList()">待办列表</button>

  <div></div>
  <!-- <button @click="editor.commands.setTextAlign('left')">左对齐</button> -->
  <button @click="editor.commands.setTextAlign('center')">中对齐</button>
  <!-- <button @click="editor.commands.setTextAlign('right')">右对齐</button> -->

  <bubble-menu :editor="editor" :tippy-options="{ duration: 1000 }" v-if="editor">
    加粗
  </bubble-menu>

  <button v-for="item in extensions">
    {{item.name}}
  </button>
  

  <editor-content :editor="editor" />
  <!-- <button id="myButton">My Button</button> -->
</div>
  
</template>

<script setup lang="ts">
import { Editor, EditorContent, BubbleMenu,VueRenderer } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'

// 文本颜色
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'

// 背景颜色
import {Highlight} from '../extensions/highlight'

// 待办
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'

// 对齐方式
import TextAlign from '@tiptap/extension-text-align'

// import BubbleMenu from '@tiptap/extension-bubble-menu'

import tippy from 'tippy.js';



import { Bold } from '../extensions/bold'



const editor = new Editor({
  content: `<p>
    This is still the text editor you’re used to, but enriched with node views.
  </p>
  <p>
    Did you see that? That’s a Vue component. We are really living in the future.
  </p>`,
  // 'bold', 'code', 'italic', 'strike'
  extensions: [
    StarterKit,
    Underline,
    Link.configure({
      openOnClick: false,
    }),
    TextStyle,
    Color,
    Bold,
    Highlight,
    TaskList,
    TaskItem.configure({
      nested: true,
    }),
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
  ],
})

console.log(editor.options.extensions);

const extensions = editor.options.extensions.filter(acc=> !acc.parent)
console.log(extensions);


// tippy('#myButton', {
//   content: "I'm a Tippy tooltip!",
//   theme: 'light',
// });

const setLink = () => {
  editor.chain()
    .focus()
    .extendMarkRange('link')
    .setLink({ href: 'https://tiptap.dev/api/marks/link' })
    .run()
}

</script>
<style>
ul[data-type="taskList"] {
  list-style: none;
  padding: 0;
}
ul[data-type="taskList"] p {
  margin: 0;
}
ul[data-type="taskList"] li {
  display: flex;
}
ul[data-type="taskList"] li > label {
  flex: 0 0 auto;
  margin-right: 0.5rem;
  user-select: none;
}
ul[data-type="taskList"] li > div {
  flex: 1 1 auto;
}
</style>