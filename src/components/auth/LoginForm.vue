<template>
    <v-container class="py-8">
        <v-card class="mx-auto shadow-xl rounded-xl" max-width="500">
            <v-card-title class="text-2xl font-semibold text-gray-800 pb-2">
                {{ isLogin ? 'Login' : 'Register' }}
            </v-card-title>
            <v-card-text class="pt-4">
                <v-form @submit.prevent="handleSubmit">
                    <v-text-field
                        v-model="email"
                        label="Email"
                        type="email"
                        :rules="emailRules"
                        required
                        hide-details="auto"
                        class="mb-6 bg-gray-50 rounded-lg"
                        variant="outlined"
                    />
                    <v-text-field
                        v-model="password"
                        label="Password"
                        type="password"
                        :rules="passwordRules"
                        required
                        hide-details="auto"
                        class="mb-6 bg-gray-50 rounded-lg"
                        variant="outlined"
                    />
                    <v-checkbox 
                        v-if="isLogin" 
                        v-model="remember" 
                        label="Remember me" 
                        hide-details 
                        class="mb-6 text-gray-600" 
                    />
                    <v-btn
                        type="submit"
                        color="primary"
                        block
                        :loading="isSubmitting"
                        class="py-6 text-base font-medium bg-blue-600 hover:bg-blue-700 transition-colors rounded-lg"
                    >
                        {{ isLogin ? 'Login' : 'Register' }}
                    </v-btn>
                    <div v-if="errorMessage" class="mt-4">
                        <v-alert 
                            color="error" 
                            class="rounded-lg"
                            variant="tonal"
                        >
                            {{ errorMessage }}
                        </v-alert>
                    </div>
                    <div v-if="isLogin" class="mt-4 text-center">
                        <router-link 
                            to="/forgot-password" 
                            class="text-blue-600 hover:text-blue-800 text-decoration-none font-medium transition-colors"
                        >
                            Forgot password?
                        </router-link>
                    </div>
                </v-form>
            </v-card-text>
            <v-card-actions class="justify-center pb-6">
                <v-btn 
                    variant="text" 
                    @click="isLogin = !isLogin"
                    class="text-gray-600 hover:text-blue-600 transition-colors"
                >
                    {{ isLogin ? "Don't have an account? Register" : "Already have an account? Login" }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const isLogin = ref(true);
const email = ref('');
const password = ref('');
const remember = ref(false);
const isSubmitting = ref(false);
const errorMessage = ref('');
const authStore = useAuthStore();

const emailRules = ref([
    (v: string) => !!v || 'Email is required',
    (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid'
]);
const passwordRules = ref([
    (v: string) => !!v || 'Password is required',
    (v: string) => (v && v.length <= 10) || 'Password must be less than 10 characters'
]);

async function handleSubmit() {
    isSubmitting.value = true;
    errorMessage.value = '';
    try {
        if (isLogin.value) {
            await authStore.login(email.value, password.value);
        } else {
            await authStore.register(email.value, password.value);
            errorMessage.value = 'Registration successful. You can now log in.';
            isLogin.value = true;
        }
    } catch (error: any) {
        errorMessage.value = error.message || 'An error occurred during the request';
    } finally {
        isSubmitting.value = false;
    }
}
</script>