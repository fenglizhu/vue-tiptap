<template>
  <div 
    :class="['editor-menu-item', { 'is-active': editor.isActive(name) }]"
    @click="onClick()">
    <div>{{name}}</div>
    <!-- v-if="extension.config.hasTable" -->
    <div  class="editor-menu-tab">
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
    const useCommands = props.extension.config.useCommands;
    const commandName = useCommands && useCommands()
    const onClick = () => {
      props.editor.commands[commandName]()
    }
    const tableClick = (color: string) => {
      // console.log(commandName);
      
      props.editor.commands[commandName](color)
      // props.editor.commands.setColor(color)
    }
    return {
      onClick,
      tableClick
    }
  },
}
</script>

