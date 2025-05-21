<!-- AppHeader.vue -->
<template>
  <v-app-bar :height="appBarHeight" color="white">
    <v-container fluid class="px-4">
      <!-- Top Row -->
      <v-row class="d-flex justify-space-between mb-6 align-stretch">
        <!-- Left section: Menu items -->
        <v-col cols="4" class="mt-3">
          <v-btn
            v-for="(item, index) in leftIcons"
            :key="index"
            :to="item.to"
            class="mx-1"
          >
            <v-icon start>{{ item.icon }}</v-icon>
            <span class="text-h6">{{ item.text }}</span>
          </v-btn>
        </v-col>

        <!-- Middle section: Logo -->
        <v-col cols="4" :class="{'mx-auto': display.width.value <= 550}" class="text-center">
          <v-img
            src="@/assets/logo.png"
            :width="300"
            :height="200"
            contain
            @click="navigateToHome"
            class="logo-image mx-auto"
          ></v-img>
        </v-col>

        <!-- Right section: Empty for now but reserved for future menu items -->
        <v-col cols="4" :class="{'d-none': display.width.value <= 550}" class="text-right">
          <!-- Placeholder for future content -->
          <!-- <v-btn
            v-for="(item, index) in rightIcons"
            :key="index"
            :to="item.to"
            class="mx-1"
          >
            <v-icon start>{{ item.icon }}</v-icon>
            <span class="text-h6">{{ item.text }}</span>
          </v-btn> -->
        </v-col>
      </v-row>

      <!-- Bottom Row -->
      <div class="d-flex justify-space-between align-center w-100">
        <v-sheet>
          <v-chip
            @click="toggleDrawer"
            :class="{'d-none': $vuetify.display.width > 959}"
            variant="elevated"
            class="pa-2"
          >
            <span class="mr-2">Menu</span>
            <v-icon>mdi-chevron-down</v-icon>
          </v-chip>
        </v-sheet>

        <v-sheet>
          <!-- Empty sheet for balanced spacing -->
        </v-sheet>

        <v-sheet>
          <!-- Empty sheet for balanced spacing -->
        </v-sheet>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const display = useDisplay()
const appBarHeight = computed(() => {
  return display.width.value <= 612 ? 300 : 250
})

const navigateToHome = (): void => {
  window.location.href = '/'
}

const emit = defineEmits(['update:drawer'])

const toggleDrawer = (): void => {
  emit('update:drawer')
}

const leftIcons = [
  { icon: 'mdi-information', text: 'About', to: '/about' },
  { icon: 'mdi-frequently-asked-questions', text: 'FAQ', to: '/faq' },
  { icon: 'mdi-newspaper', text: 'News', to: '/news' },
  // { icon: 'mdi-calendar-clock', text: 'Schedule', to: '/schedule' }
]

const rightIcons = [
  { icon: 'mdi-account', text: 'Profile', to: '/profile' },
  { icon: 'mdi-cog', text: 'Settings', to: '/settings' }
]
</script>

<style scoped>
.v-app-bar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.v-btn {
  text-transform: none;
}

.logo-image {
  transition: transform 0.3s ease;
  cursor: pointer;
  position: relative;
  z-index: 1;
  will-change: transform;
}

.logo-image:hover {
  transform: scale(1.05);
}
</style>