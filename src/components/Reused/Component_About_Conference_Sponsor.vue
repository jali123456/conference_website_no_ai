<template>
  <v-container fluid>
    <v-row align="center">
      <!-- Text Content Column -->
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="6"
        class="pa-8"
      >
        <div class="text-left">
          <p class="text-h5 mb-4">
            ABOUT US
          </p>
          
          <h3 class="text-h4 mb-6 font-weight-bold">
            Discover The Mission Behind ICELIn 2026 And Our Vision
          </h3>
          
          <p class="text-body-1 mb-4">
            The ICELIn 2026 is dedicated to Provide a scholarly platform for researchers, legal practitioners, and policymakers to share ideas, research findings, and best practices.
          </p>
          
          <p class="text-body-1 mb-6">
            ICELIn 2026 Strengthen strategic collaboration networks between academic institutions, enforcement agencies, and industry to enhance the quality of governance and integrity.<br><br>
          </p>
          
          <v-btn
            color="info"
            size="large"
            rounded="pill"
            class="px-8 py-2 text-white font-weight-medium"
            elevation="2"
          >
            READ MORE
          </v-btn>
        </div>
      </v-col>
      
      <!-- Image Column -->
      <v-col
        cols="12"
        sm="6"
        md="6"
        lg="6"
        class="pa-4"
      >
        <v-img
          src="https://placehold.co/600x400"
          alt="ICELIn 2026 Conference"
          class="rounded-lg"
          cover
          height="400"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Component_About_Conference_Sponsor',
});
</script>

<style scoped>
</style>