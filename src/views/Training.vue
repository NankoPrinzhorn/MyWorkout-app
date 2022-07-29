<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';

import MenuComponent from '../components/MenuComponent.vue';

export default defineComponent({
    name: 'Trainings',

    components: {
        MenuComponent,
    },

    setup() {
        useMeta({
            title: 'Training',
            description: 'Check your training and start working out!',
        });
    },
});
</script>

<template>
    <div class="flex">
        <MenuComponent />
        <div class="grow p-4">
            Trainings
        </div>
    </div>
</template>
