<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">About the Conference</h1>
      </v-col>

      <!-- Conference Overview -->
      <v-col cols="12" lg="6" md="6">
        <v-card class="mb-6">
          <v-card-title class="text-h5">
            <v-icon start>mdi-information-outline</v-icon>
            Conference Overview
          </v-card-title>
          <v-card-text>
            <p class="text-body-1">
              The International Conference on Advanced Technologies brings together researchers, 
              industry professionals, and academics from around the world to share cutting-edge 
              research and developments in emerging fields of technology. Founded in 2010, 
              the conference has grown to become one of the premier events in its field, 
              attracting participants from over 50 countries.
            </p>
            <p class="text-body-1 mt-3">
              This year's conference focuses on breakthrough technologies in artificial intelligence, 
              sustainable energy, biotechnology, and quantum computing. Through keynote speeches, 
              technical sessions, workshops, and networking events, we aim to facilitate 
              knowledge exchange and foster collaborations that drive innovation.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Objectives -->
      <v-col cols="12" lg="6" md="6">
        <v-card class="mb-6">
          <v-card-title class="text-h5">
            <v-icon start>mdi-bullseye-arrow</v-icon>
            Conference Objectives
          </v-card-title>
          <v-card-text>
            <p class="text-body-1">
              i. Provide a scholarly platform for researchers, legal practitioners, and policymakers to share ideas, research findings, and best practices.<br><br>
              ii. Strengthen strategic collaboration networks between academic institutions, enforcement agencies, and industry to enhance the quality of governance and integrity.<br><br>
              iii. Encourage the production of high-quality research that directly contributes to policy improvements and the effective implementation of laws.<br><br>
              iv. Attract the involvement of researchers and experts from within and outside the country to establish cross-border collaboration with ELMU in the fields of enforcement, law, and integrity.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Organizing Committee -->
      <v-col
      v-for="(subtheme, index) in data_subthemes"
      :key="subtheme.id"
      cols="12"
      sm="12"
      md="6"
      lg="4"
  >
      <v-card
          class="d-flex flex-column text-center pa-4 hover-scale red-bottom-border"
          color="elmubackground"
          rounded="xl"
          elevation="2"
          height="100%"
      >
          <v-card-text>
              <div class="text-h5 font-weight-bold mb-4">{{ subtheme.title }}</div>
              <p class="text-left text-subtitle-2" v-html="subtheme.description"></p>
          </v-card-text>

          <v-spacer></v-spacer>

          <v-card-actions class="justify-center pb-4">
              <v-btn 
                  class="px-8 py-2 text-none font-weight-bold"
                  variant="outlined"
                  color="info"
                  rounded="pill"
                  size="large"
              >
                  Read More
              </v-btn>
          </v-card-actions>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { data_subthemes } from '@/assets/data/Subthemes_Data';
const data = ref(data_subthemes);

</script>

<style scoped>
.red-bottom-border {
  border-bottom: 4px solid red;
}
.v-card{
  height: 100%;
}

.hover-scale {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;
}

.hover-scale:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 2;
}

</style> 