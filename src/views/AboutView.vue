<!-- AboutView -->
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
      <SubthemeList />
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>


</style> 