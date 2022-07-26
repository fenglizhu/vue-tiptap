<template>
  <div 
    :class="['editor-menu-item', { 'is-active': editor.isActive(name) }]">
    <div @click="onClick()">{{name}}</div>
    <div v-if="extension.config.hasTab">
      <!-- 背景色 -->
      <button v-if="extension.config.paramsKey" @click="tableClick({[extension.config.paramsKey]: 'green'})">红色4</button>

      <!-- 标题 -->
      <button v-if="extension.config.paramsKey" @click="tableClick({[extension.config.paramsKey]: 3})">lanse4</button>
      
      <!-- 字体颜色 -->
      <button v-else @click="tableClick('red')">红色</button>

      
    </div>
    <div  v-if="extension.options.alignments">
      <button v-for="item in extension.options.alignments" @click="onClick(item)" :key="item">
        {{item}}
      </button>
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
    const {toggleCommands , hasTab = false } = props.extension.config;
    const commandName = toggleCommands && toggleCommands();
    const onClick = (text:string) => {
      if (!hasTab) {
        // props.editor.commands[commandName](text)
        props.extension.customOptions.toggleCommands.call(props.editor, {
          attribute: text
        })
      }
    }
    const tableClick = (params: any) => {
      console.log(params);
      
      // props.editor.commands[commandName](params)
      props.extension.customOptions.toggleCommands({
        editor: props.editor
      })
    }
    console.log(props.editor);
    
    return {
      onClick,
      tableClick
    }
  },
}
</script>

