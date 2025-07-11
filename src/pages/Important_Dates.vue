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
                Important Date
              </h2>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-img>
    <Component_Event_Calendar/>
  </v-container>
</template>

<script setup lang="ts">
import Component_Event_Calendar from '@/components/Reused/Component_Event_Calendar.vue';


</script>

<style>

</style>