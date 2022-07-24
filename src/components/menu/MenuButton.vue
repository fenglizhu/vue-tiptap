<template>
  <div 
    :class="['editor-menu-item', { 'is-active': editor.isActive(name) }]">
    <div @click="onClick()">{{name}}</div>
    <div v-if="extension.config.hasTab">
      <button @click="tableClick('red')">红色</button>
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
    commandName: {
      type: [String, undefined],
      default: ''
    },
    editor: {},
    extension: {}
  },
  setup(props: any) {
    const {useCommands , hasTab } = props.extension.config;
    const commandName = useCommands && useCommands();

    const onClick = () => {
      if (!hasTab) {
        props.editor.commands[commandName]()
      }
    }
    const tableClick = (color: string) => {
      props.editor.commands[commandName](color)
    }
    return {
      onClick,
      tableClick
    }
  },
}
</script>

