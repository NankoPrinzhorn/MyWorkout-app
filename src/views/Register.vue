<script setup lang="ts">
import { ref } from 'vue';
import { useMeta } from 'vue-meta';
import { useUserStore } from '../store/user';

const userStore = useUserStore();

const name = ref<string>('Nanko Prinzhorn');
const email = ref<string>('nanko.prinzhorn@gmail.com');
const password = ref<string>('password');
const passwordConfirm = ref<string>('password');

async function register() {
    await userStore.register({
        name: name.value,
        email: email.value,
        password: password.value,
        password_confirmation: passwordConfirm.value,
    });
}

useMeta({
    title: 'Register',
    description: 'Register an account.',
});
</script>

<template>
    <div>
        <h2 class="title">
            Register
        </h2>

        <div class="flex justify-center mt-16">
            <form class="wrapper !p-8 w-full max-w-md flex flex-col space-y-8"  @submit.prevent="register">
                <label>
                    <p>Name</p>
                    <input
                        id="name"
                        v-model="name"
                        class="w-full"
                        type="text"
                        name="name"
                        placeholder="Name...">
                </label>

                <label>
                    <p>Email</p>
                    <input
                        id="email"
                        v-model="email"
                        class="w-full"
                        type="text"
                        name="email"
                        placeholder="Email...">
                </label>

                <label>
                    <p>Password</p>
                    <input
                        id="password"
                        v-model="password"
                        class="w-full"
                        type="password"
                        name="password"
                        placeholder="Password...">
                </label>

                <label>
                    <p>Confirm password</p>
                    <input
                        id="confirmPassword"
                        v-model="passwordConfirm"
                        class="w-full"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password...">
                </label>

                <button type="submit" class="bg-red-500 text-neutral-900 rounded py-2">
                    Register
                </button>

                <span class="text-sm text-right">
                    Already have an account?
                    <router-link :to="{ name: 'login' }" class="link !inline">
                        Login
                    </router-link>
                </span>
            </form>
        </div>
    </div>
</template>
