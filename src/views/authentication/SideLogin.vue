<template>
<div class="pa-3 bg-gray-50 min-h-screen">
    <v-row class="h-100vh mh-100 auth">
        <v-col 
            cols="12" 
            lg="7" 
            xl="8"
            class="d-lg-flex align-center justify-center authentication position-relative bg-gradient-to-br from-blue-500 to-purple-600"
        >
            <div class="auth-header pt-lg-6 pt-2 px-sm-6 px-3 pb-lg-6 pb-0">
                <div class="position-relative">
                    <Logo />
                </div>
            </div>
            <div class="w-full">
                <img 
                    src="@/assets/logo.png" 
                    class="position-relative d-none d-lg-flex mx-auto max-w-md"
                    alt="login-background" 
                />
            </div>
        </v-col>
        <v-col 
            cols="12" 
            lg="5" 
            xl="4" 
            class="d-flex align-center justify-center bg-white"
        >
            <div class="mt-xl-0 mt-5 mw-100 px-6 py-8">
                <h2 class="text-3xl font-bold mb-2 text-gray-800">Welcome to Our Registration System</h2>
                <LoginForm />
            </div>
        </v-col>
    </v-row>
</div>
</template>

<script setup lang="ts">
import LoginForm from '@/components/auth/LoginForm.vue';
</script>

<style scoped>
.auth {
    display: flex;
    min-height: 100vh;
}

.auth-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}
</style>