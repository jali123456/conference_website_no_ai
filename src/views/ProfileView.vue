<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';
import axios from 'axios';
import RegistrationForm from '@/components/RegistrationForm.vue';

const authStore = useAuthStore();
const router = useRouter();
const baseurl = import.meta.env.VITE_API_BASE_URL;

const user = computed(() => authStore.user);
const activeTab = ref('profile');

if (!user.value) {
  router.push('/');
}

const avatarInitial = computed(() => {
  return user.value?.email ? user.value.email.charAt(0).toUpperCase() : '?';
});

const formattedJoinDate = computed(() => {
  if (!user.value?.created_at) return 'N/A';
  return new Date(user.value.created_at).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kuala_Lumpur'
  });
});

const handleLogout = () => {
  authStore.logout();
};

// Poll every 30s to check verification status
let verificationInterval: number;
onMounted(() => {
  verificationInterval = window.setInterval(async () => {
    if (authStore.user?.token) {
      try {
        const response = await axios.post(`${baseurl}/Check_Verification.php`, {
          token: authStore.user.token
        });
        if (response.data.success && authStore.user) {
          authStore.user.is_verified = response.data.is_verified;
        }
      } catch (error) {
        console.error("Verification check failed:", error);
      }
    }
  }, 30000);
});
onUnmounted(() => clearInterval(verificationInterval));
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="1"></v-col>
      <v-col cols="12" md="10">
        <v-row>
          <v-col cols="12" md="3">
            <v-list nav>
              <v-list-item
                title="Profile"
                prepend-icon="mdi-account"
                :active="activeTab === 'profile'"
                @click="activeTab = 'profile'"
              />
              <v-list-item
                title="Conference Registration"
                prepend-icon="mdi-file-document"
                :active="activeTab === 'registration'"
                @click="activeTab = 'registration'"
              />
            </v-list>
          </v-col>

          <v-col cols="12" md="9">
            <!-- Profile Tab -->
            <div v-if="activeTab === 'profile'">
              <v-card v-if="user" class="pa-4">
                <v-card-title class="text-h4 text-center mb-4">My Profile</v-card-title>
                <v-card-text>
                  <div class="d-flex flex-column align-center mb-6">
                    <v-avatar size="120" color="primary" class="mb-4">
                      <span class="text-h3 text-white">{{ avatarInitial }}</span>
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
                    />
                    <v-divider inset />
                    <v-list-item
                      prepend-icon="mdi-calendar-month"
                      title="Member Since"
                      :subtitle="formattedJoinDate"
                    />
                  </v-list>
                </v-card-text>

                <v-card-actions class="pa-4">
                  <v-spacer />
                  <v-btn
                    @click="handleLogout"
                    color="grey"
                    variant="tonal"
                    prepend-icon="mdi-logout"
                  >
                    Logout
                  </v-btn>
                  <v-spacer />
                </v-card-actions>
              </v-card>

              <div v-else class="text-center">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
                <p class="mt-4">Loading Profile...</p>
              </div>
            </div>
            
            <!-- Registration Tab -->
            <div v-else-if="activeTab === 'registration'">
              <v-card elevation="4" class="rounded-lg">
                <v-card-title class="bg-grey-lighten-4 pa-6">
                  <v-icon class="me-3 text-primary">mdi-account-edit</v-icon>
                  <span class="text-h4 font-weight-medium">Conference Registration</span>
                </v-card-title>
                
                <v-card-text class="pa-8">
                  <!-- Registration Fees Table -->
                  <div class="mb-8">
                    <h3 class="text-h5 text-primary mb-4 d-flex align-center">
                      <v-icon class="me-2">mdi-currency-usd</v-icon>
                      Registration Fees
                    </h3>
                    <v-divider class="mb-6"></v-divider>
                    <div class="d-flex">
                        <RegistrationFeesTable />
                    </div>
                  </div>
                   

                  <!-- Registration Form with overlay if not verified -->
                  <div :class="{ 'opacity-50 pointer-events-none': !user?.is_verified }">
                    <RegistrationForm :user-email="user?.email" />
                  </div>

                  <!-- Verification warning -->
                  <v-alert
                    v-if="!user?.is_verified"
                    type="warning"
                    class="mt-6"
                    icon="mdi-lock-outline"
                    border="start"
                    prominent
                  >
                    <v-alert-title>Email Verification Required</v-alert-title>
                    You must verify your email address before you can submit a conference registration. Please check your email for the verification link.
                  </v-alert>
                </v-card-text>
              </v-card>

              <!-- Additional Information -->
              <v-row class="mt-6">
                <v-col cols="12">
                  <v-alert
                    type="info"
                    variant="tonal"
                    border="start"
                    class="text-center"
                  >
                    <v-icon class="me-2">mdi-information</v-icon>
                    All fields marked as required must be completed. You will receive a confirmation email after successful registration.
                  </v-alert>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="1"></v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.pointer-events-none {
  pointer-events: none;
}
.opacity-50 {
  opacity: 0.5;
}
</style>