<template>
  <v-container fluid class="pa-0">
    <v-img
      src="https://placehold.co/500x100"
      lazy-src="https://via.placeholder.com/50x15/007bff/ffffff?text=Loading..."
      cover
      min-height="250"
      class="align-center justify-center text-center"
      gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.7)"
    >
      <div class="banner-overlay d-flex align-center justify-center pa-4">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="10" lg="8">
              <h2 class="text-h3 text-md-h2 font-weight-bold mb-4 text-white">
                Why choose us?
              </h2>
              <p class="text-subtitle-1 text-md-h6 mb-8 text-white text-opacity-75">
                Join experts and innovators in shaping a sustainable future.
              </p>
              <v-btn
                color="teal-accent-3"
                size="x-large"
                rounded
                class="elevation-6"
                @click="goToRegister"
              >
                REGISTER NOW
                <v-icon end>mdi-arrow-right</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-img>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToRegister = () => {
  // Placeholder for your registration page route
  // Replace '/' with the actual path, e.g., '/register', '/signup'
  router.push('/');
};
</script>

<style scoped>
/* Custom overlay for better text readability over the background image */
.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Using a dark transparent background for the overlay */
  background-color: rgba(0, 0, 0, 0.4); /* Adjust opacity as needed */
  /* Ensure content inside overlay is also centered */
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>