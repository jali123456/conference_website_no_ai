<template>
  <v-app>
    <!-- App Bar with Logo Only -->
    <v-app-bar flat color="white" :height="appBarHeight">
      <v-container fluid class="pa-0 mt-0 mb-0 fill-height">
        <v-row no-gutters class="fill-height justify-center">
          <v-col
            cols="12"
            :sm="display.width.value <= 700 ? 6 : 5"
            class="text-center"
            :class="{'mx-auto': display.width.value <= 550}"
          >
            <v-img
              src="@/assets/logo.png"
              :width="display.width.value <= 550 ? 220 : 300"
              :height="display.width.value <= 550 ? 210 : 200"
              contain
              @click="navigateToHome"
              class="logo-image mx-auto"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <!-- Main registration content -->
    <v-main>
      <v-container fluid class="pa-4">
        <router-view />
      </v-container>
    </v-main>

    <!-- Global footer -->
    <app-footer />
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const display = useDisplay()

const appBarHeight = computed(() => {
  if (display.width.value < 600) {
    return 350
  } else if (display.width.value <= 700) {
    return 250
  } else {
    return 250
  }
})

const navigateToHome = () => {
  window.location.href = '/'
}
</script>

<style scoped>
.v-app-bar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.logo-image {
  transition: transform 0.3s ease;
  cursor: pointer;
  will-change: transform;
}

.logo-image:hover {
  transform: scale(1.05);
}
</style>
