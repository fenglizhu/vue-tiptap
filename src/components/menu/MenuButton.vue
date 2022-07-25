<template>
  <div 
    :class="['editor-menu-item', { 'is-active': editor.isActive(name) }]">
    <div @click="onClick()">{{name}}</div>
    <div v-if="extension.config.hasTab">
      <button v-if="extension.config.paramsObject" @click="tableClick({color: 'red'})">红色4</button>
      
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
    const {toggleCommands , hasTab, getParameterType = null } = props.extension.config;
    const commandName = toggleCommands && toggleCommands();
    const paramType = getParameterType && getParameterType();

    const onClick = () => {
      if (!hasTab) {
        props.editor.commands[commandName]()
      }
    }
    const tableClick = (arg: any) => {
      console.log(arg);
      
      props.editor.commands[commandName](arg)
    }
    return {
      onClick,
      tableClick
    }
  },
}
</script>

