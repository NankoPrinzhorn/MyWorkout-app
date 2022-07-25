<script lang="ts">
import {defineComponent} from "vue";
import MenuComponent from "../components/MenuComponent.vue";

export default defineComponent({
  name: "Statistics",

  components: {
    MenuComponent,
  }
})
</script>

<template>
  <div class="flex">
    <MenuComponent />
    <div class="grow p-4">
      Statistics
    </div>
  </div>
</template>
