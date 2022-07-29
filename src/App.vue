<script lang="ts">
import {defineComponent, ref} from "vue";
import {useDarkModeStore} from "./store/darkMode";

export default defineComponent({
  name: "App",

  setup() {
    const appName = ref<String>(import.meta.env.VITE_APP_NAME);

    const darkMode = ref<boolean>(useDarkModeStore().darkMode);

    return {
      appName,
      darkMode,
    };
  }
})
</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ `${content} | ${appName}` }}</template>
  </metainfo>

  <div class="bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 fill-neutral-700 dark:fill-neutral-200">
    <router-view></router-view>
  </div>
</template>
