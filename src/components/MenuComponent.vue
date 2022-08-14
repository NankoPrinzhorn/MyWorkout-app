<script setup lang="ts">
import DumbbellIcon from '../assets/icons/Dumbbell.svg?component';
import GearIcon from '../assets/icons/Gear.svg?component';
import HouseIcon from '../assets/icons/House.svg?component';
</script>

<template>
    <div class="menu">
        <div>
            <router-link to="/home" aria-label="Home">
                <div class="iconWrapper">
                    <HouseIcon class="icon" />
                </div>
            </router-link>

            <router-link to="/workouts" aria-label="Workout">
                <div class="iconWrapper">
                    <DumbbellIcon class="icon" />
                </div>
            </router-link>
        </div>

        <router-link to="/settings" aria-label="Settings">
            <div class="iconWrapper">
                <GearIcon class="icon" />
            </div>
        </router-link>
    </div>
</template>

<style>
.menu {
    @apply z-50 fixed h-screen h-[-webkit-fill-available] flex flex-col justify-between border-r;

    /* Light mode */
    @apply bg-white border-r-neutral-300;

    /* Dark mode */
    @apply dark:bg-neutral-800 dark:border-r-neutral-700;
}
</style>
