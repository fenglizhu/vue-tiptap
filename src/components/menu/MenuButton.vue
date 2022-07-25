<template>
  <div 
    :class="['editor-menu-item', { 'is-active': editor.isActive(name) }]">
    <div @click="onClick()">{{name}}</div>
    <div v-if="extension.config.hasTab">
      <button v-if="extension.config.paramsKey" @click="tableClick({[extension.config.paramsKey]: 'green'})">红色4</button>
      <button v-if="extension.config.paramsKey" @click="tableClick({[extension.config.paramsKey]: 'blue'})">lanse4</button>
      
      <button v-else @click="tableClick('red')">红色</button>
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
    const {toggleCommands , hasTab } = props.extension.config;
    const commandName = toggleCommands && toggleCommands();

    const onClick = () => {
      if (!hasTab) {
        props.editor.commands[commandName]()
      }
    }
    const tableClick = (params: any) => {
      props.editor.commands[commandName](params)
    }
    return {
      onClick,
      tableClick
    }
  },
}
</script>

