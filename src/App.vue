<script setup lang="ts">
import { ref } from 'vue';

import MenuComponent from './components/MenuComponent.vue';

const appName = ref<string>(import.meta.env.VITE_APP_NAME);
</script>

<template>
    <metainfo>
        <template v-slot:title="{ content }">
            {{ `${content} | ${appName}` }}
        </template>
    </metainfo>

    <div class="flex">
        <MenuComponent />

        <div class="grow ml-16 p-4">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>

</style>
