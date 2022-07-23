<template>
  <div 
    :class="{ 'is-active': editor.isActive(name) }"
    @click="onClick()">
    {{name}}
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
    editor: {
      
    }
  },
  setup(props: any) {
    const onClick = () => {
      props.editor.commands[props.commandName]()
    }
    return {
      onClick
    }
  },
}
</script>

