<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

import ChartLine from '../assets/icons/ChartLine.svg?component';
import DumbbellIcon from '../assets/icons/Dumbbell.svg?component';
import GearIcon from '../assets/icons/Gear.svg?component';
import HouseIcon from '../assets/icons/House.svg?component';
import MoonIcon from '../assets/icons/Moon.svg?component';
import SunIcon from '../assets/icons/Sun.svg?component';

import { useDarkModeStore } from '../store/darkMode';

export default defineComponent({
    name: 'MenuComponent',

    components: {
        ChartLine,
        DumbbellIcon,
        GearIcon,
        HouseIcon,
        MoonIcon,
        SunIcon,
    },

    setup() {
        const route = useRoute();
        const darkModeStore = useDarkModeStore();

        return {
            route,
            darkModeStore,
        };
    },
});
</script>

<template>
    <div class="shrink flex flex-col justify-between h-screen w-16 border-r border-neutral-400 dark:border-neutral-800 z-50">
        <div>
            <router-link to="/dashboard" aria-label="Dashboard">
                <div class="iconWrapper group">
                    <HouseIcon class="icon" />
                </div>
            </router-link>

            <router-link to="/trainings" aria-label="Training">
                <div class="iconWrapper group">
                    <DumbbellIcon class="icon" />
                </div>
            </router-link>

            <router-link to="/statistics" aria-label="Statistics">
                <div class="iconWrapper group">
                    <ChartLine class="icon" />
                </div>
            </router-link>
        </div>

        <div>
            <div class="iconWrapper hover:scale-110" @click="darkModeStore.toggleDarkMode()">
                <div class="w-5 h-5">
                    <Transition name="moon-fade">
                        <MoonIcon v-if="!darkModeStore.darkMode" class="w-5 h-5 absolute" />
                    </Transition>

                    <Transition name="sun-fade">
                        <SunIcon v-if="darkModeStore.darkMode" class="w-5 h-5 absolute" />
                    </Transition>
                </div>
            </div>

            <div class="iconWrapper group">
                <GearIcon class="w-5 h-5 transition-all group-hover:rotate-45 group-hover:scale-110" />
            </div>
        </div>
    </div>
</template>

<style>
.moon-fade-enter-active, .moon-fade-leave-active, .sun-fade-enter-active, .sun-fade-leave-active {
  transition: all 0.2s;
}

.moon-fade-enter-from, .moon-fade-leave-to, .sun-fade-leave-to, .sun-fade-enter-from {
  transform: translateX(-500%);
}

.iconWrapper {
  @apply m-2 p-3.5 rounded cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-800;
}

.router-link-active .iconWrapper {
  @apply bg-neutral-300 dark:bg-neutral-800 fill-neutral-700 dark:fill-neutral-200;
}

.icon {
  @apply w-5 h-5 transition-all group-hover:scale-110 fill-inherit;
}
</style>
