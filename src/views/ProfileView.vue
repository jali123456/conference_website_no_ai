<script setup lang="ts">
import { computed } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

// Get the authentication store and router
const authStore = useAuthStore();
const router = useRouter();

// Use a computed property for the user to ensure reactivity
const user = computed(() => authStore.user);

// If there's no user, redirect to the login page.
// This is a safeguard for when a user tries to access the page directly without being logged in.
if (!user.value) {
    router.push('/');
}

// Create an initial for the avatar from the user's email.
const avatarInitial = computed(() => {
    return user.value?.email ? user.value.email.charAt(0).toUpperCase() : '?';
});

// Format the registration date for better readability.
const formattedJoinDate = computed(() => {
    if (!user.value?.created_at) return 'N/A';
    // The current time in Johor Bahru is UTC+8
    return new Date(user.value.created_at).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'Asia/Kuala_Lumpur' 
    });
});

// Logout action
const handleLogout = () => {
    authStore.logout();
};
</script>

<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8" lg="6">
                <v-card v-if="user" class="pa-4">
                    <v-card-title class="text-h4 text-center mb-4">
                        My Profile
                    </v-card-title>
                    <v-card-text>
                        <div class="d-flex flex-column align-center mb-6">
                            <v-avatar size="120" color="primary" class="mb-4">
                                <span class="text-h3 text-white">
                                    {{ avatarInitial }}
                                </span>
                            </v-avatar>
                            <h2 class="text-h5">{{ user.email }}</h2>
                        </div>

                        <v-alert
                            v-if="!user.is_verified"
                            type="warning"
                            variant="tonal"
                            density="compact"
                            class="mb-6"
                            icon="mdi-alert-circle-outline"
                        >
                            Your account is not verified. Please check your email for the verification link.
                        </v-alert>

                        <v-list lines="one" bg-color="transparent">
                            <v-list-item
                                prepend-icon="mdi-email-outline"
                                title="Email Address"
                                :subtitle="user.email"
                            ></v-list-item>

                            <v-divider inset></v-divider>

                            <v-list-item
                                prepend-icon="mdi-calendar-month"
                                title="Member Since"
                                :subtitle="formattedJoinDate"
                            ></v-list-item>
                        </v-list>
                    </v-card-text>

                    <v-card-actions class="pa-4">
                        <v-spacer></v-spacer>
                        <v-btn
                            @click="handleLogout"
                            color="grey"
                            variant="tonal"
                            prepend-icon="mdi-logout"
                        >
                            Logout
                        </v-btn>
                        <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>

                <div v-else class="text-center">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                    <p class="mt-4">Loading Profile...</p>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>