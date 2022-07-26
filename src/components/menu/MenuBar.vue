<template>
  <div class="zero-editor-menu">
    <menu-button 
      v-for="item in menus" :key="item.id"
      :name="item.name" 
      :editor="editor"
      :extension="item"
    >
    </menu-button>
  </div>
</template>

<script lang="ts">
import MenuButton from "./MenuButton.vue"

export default {
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    editor: {}
  },
  components: { MenuButton },
  setup(props: any) {
    const onClick = () => {
      props.command();
    };
    
    return {
      onClick
    };
  }
}
</script>

