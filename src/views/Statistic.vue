<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';

import MenuComponent from '../components/MenuComponent.vue';

export default defineComponent({
    name: 'Statistics',

    components: {
        MenuComponent,
    },

    setup() {
        useMeta({
            title: 'Statistics',
            description: 'All your statistics ',
        });
    },
});
</script>

<template>
    <div class="flex">
        <MenuComponent />
        <div class="grow p-4">
            Statistics
        </div>
    </div>
</template>
