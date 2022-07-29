<script lang="ts">
import {defineComponent} from "vue";
import MenuComponent from "../components/MenuComponent.vue";
import {useMeta} from "vue-meta";

export default defineComponent({
  name: "Dashboard",

  components: {
    MenuComponent,
  },

  setup() {
    useMeta({
      title: "Dashboard",
      description: "An overview of your workout history and statistics.",
    });
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
