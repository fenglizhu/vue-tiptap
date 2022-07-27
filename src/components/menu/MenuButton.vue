<template>
  <div 
    :class="['editor-menu-item', { 'is-active': editor.isActive(name) }]">
    <div @click="onClick()">{{name}}</div>
    <div v-if="extension.menusOptions.hasTab" class="editor-menu-tab">
      <!-- 背景色 -->
      <button v-if="extension.menusOptions.clickParamsKey" @click="tableClick({[extension.menusOptions.clickParamsKey]: 'green'})">绿色背景和文本</button>

      <!-- 标题 -->
      <button v-if="extension.menusOptions.clickParamsKey" @click="tableClick({[extension.menusOptions.clickParamsKey]: 3})">标题3</button>
      
      <!-- 字体颜色 -->
      <button v-if="extension.menusOptions.clickParamsKey" @click="tableClick({[extension.menusOptions.clickParamsKey]: 'red'})">红色背景和文本</button>

    </div>

    <!-- 文本对齐和行高 -->
    <div  v-if="extension.options.alignments"  class="editor-menu-tab">
      <button v-for="item in extension.options.alignments" @click="onClick(item)" :key="item">
        {{item}}
      </button>
      <button @click="onClick('')">默认行高</button>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    name:  {
      type: String,
      default: ''
    },
    editor: {},
    extension: {}
  },
  setup(props: any) {
    const {hasTab = false } = props.extension.config;
    const onClick = (text:string) => {
      if (!hasTab) {
        console.log( {
          attribute: text
        });
        
        props.extension.customOptions.toggleCommands.call(props.editor, {
          attribute: text
        })
      }
    }
    console.log(props.extension.options.alignments);
    
    const tableClick = (params: any) => {
       console.log(params);
      props.extension.customOptions.toggleCommands.call(props.editor, {
        attribute: params
      })
    }
    
    return {
      onClick,
      tableClick
    }
  },
}
</script>

