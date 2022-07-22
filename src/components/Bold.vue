<template>
  <div 
    
    @click="onClick()">
    粗体
  </div>
</template>

<script lang="ts">

export default {
  props: {
    command: {
      type: Function
    }
  },
  setup(props: any) {
    const onClick = () => {
      props.command()
    }
    return {
      onClick
    }
  },
}
// :class="{ 'is-active': editor.isActive('bold') }"
</script>

