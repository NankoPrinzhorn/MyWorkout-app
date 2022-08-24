<script setup lang="ts">
import { ref } from 'vue';
import { useMeta } from 'vue-meta';
import { useUserStore } from '../store/user';

const userStore = useUserStore();

const email = ref<string|null>('nanko.prinzhorn@gmail.com');
const password = ref<string|null>('password');

function login() {
    userStore.login({ email: email.value, password: password.value });
}

useMeta({
    title: 'Login',
    description: 'Login to your account.',
});
</script>

<template>
    <div>
        <h2 class="title">
            Login
        </h2>

        <div class="flex justify-center mt-16">
            <form class="wrapper !p-8 max-w-sm flex flex-col space-y-8" @submit.prevent="login">
                <label>
                    <p>Email</p>
                    <input
                        id="email"
                        v-model="email"
                        type="text"
                        name="email"
                        placeholder="Email...">
                </label>

                <label>
                    <p>Password</p>
                    <input
                        id="password"
                        v-model="password"
                        type="password"
                        name="email"
                        placeholder="Password...">
                </label>

                <button type="submit" class="bg-red-500 text-neutral-900 rounded py-2">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>
