<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

import MenuComponent from './components/MenuComponent.vue';
import { useUserStore } from './store/user';

const route = useRoute();
const userStore = useUserStore();

const appName = ref<string>(import.meta.env.VITE_APP_NAME);
const showMenu = ref<boolean>(true);

userStore.me();

watch(route, (newRoute) => {
    const name = ref<any>(newRoute.name);

    showMenu.value = !['login', 'register'].includes(name.value);
});
</script>

<template>
    <metainfo>
        <template v-slot:title="{ content }">
            {{ `${content} | ${appName}` }}
        </template>
    </metainfo>

    <div class="flex">
        <MenuComponent v-if="showMenu"/>

        <div
            class="grow p-4"
            :class="{ 'ml-16': showMenu }"
        >
            <router-view></router-view>
        </div>
    </div>
</template>
