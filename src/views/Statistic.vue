<script lang="ts">
import {defineComponent} from "vue";
import MenuComponent from "../components/MenuComponent.vue";
import {useMeta} from "vue-meta";

export default defineComponent({
  name: "Statistics",

  components: {
    MenuComponent,
  },

  setup() {
    useMeta({
      title: "Statistics",
      description: "All your statistics ",
    });
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
