<template>
  <div>
    <menu-button 
      v-for="item in menus" :key="item.id"
      :name="item.name" 
      :editor="editor" 
      :commandName="commandsName.get(item.name)"
    >
    </menu-button>
  </div>
</template>

<script lang="ts">
import MenuButton from "./MenuButton.vue"
import { commandsName } from "../../utils/commands_name";

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
      onClick,
      commandsName
    };
  }
}
</script>

