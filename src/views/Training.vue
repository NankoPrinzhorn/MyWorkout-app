<script lang="ts">
import {defineComponent} from "vue";
import MenuComponent from "../components/MenuComponent.vue";
import {useMeta} from "vue-meta";

export default defineComponent({
  name: "Trainings",

  components: {
    MenuComponent,
  },

  setup() {
    useMeta({
      title: "Training",
      description: "Check your training and start working out!"
    });
  }
})
</script>

<template>
  <div class="flex">
    <MenuComponent />
    <div class="grow p-4">
      Trainings
    </div>
  </div>
</template>
