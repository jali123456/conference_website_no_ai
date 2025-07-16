<template>
<v-col>
  <v-img
    src="https://placehold.co/500x100"
    lazy-src="https://placehold.co/500x100"
    cover
    min-height="350"
    class="align-center justify-center text-center"
    gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.7)"
  >
    <div class="banner-overlay d-flex align-center justify-center pa-4">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10" lg="8">
              <h4 class="text-h3 font-weight-bold mb-4 text-white">
                Partner With Us to Drive Real Impact
              </h4>
              <p class="text-subtitle-1 text-md-h6 mb-8 text-white text-opacity-85">
                Showcase your brand and support thought leadership in law, integrity, and climate resilience.
              </p>
            <v-btn
              color="elmubackground"
              size="x-large"
              rounded
              class="elevation-6 red-bottom-border text-h6 font-weight-bold"
              @click="goToRegister"
            >
              SPONSOR NOW
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-img>
</v-col>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SponsorsBanner',
  setup(){
    const router = useRouter();
    const goToRegister = () => {
    // Placeholder for your registration page route
    // Replace '/' with the actual path, e.g., '/register', '/signup'
    router.push('/sponsors');
  };
  return{
    goToRegister
  }
  }
});
</script>

<style scoped>
.red-bottom-border {
  border-bottom: 4px solid red;
}
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