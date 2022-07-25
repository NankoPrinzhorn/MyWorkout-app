<script lang="ts">
import {defineComponent} from "vue";
import MenuComponent from "../components/MenuComponent.vue";

export default defineComponent({
  name: "Dashboard",

  components: {
    MenuComponent,
  }
})
</script>

<template>
  <div class="flex">
    <MenuComponent />
    <div class="grow p-4">
      <span class="block text-2xl text-center">Welcome back Nanko</span>
    </div>
  </div>
</template>
