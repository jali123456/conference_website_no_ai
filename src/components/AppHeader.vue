<template>
  <v-app-bar :height="appBarHeight" color="white">
    <v-container fluid class="px-4">
      <!-- Top Row -->
      <div class="d-flex justify-space-between align-center mt-2 w-100">
        <v-sheet :class="{'d-none': display.width.value <= 550}">
          <v-btn
            v-for="(item, index) in leftIcons"
            :key="index"
            :to="item.to"
            class="mx-1"
          >
            <v-icon start>{{ item.icon }}</v-icon>
            <span class="text-h6">{{ item.text }}</span>
          </v-btn>
        </v-sheet>

        <v-sheet width="250" :class="{'mx-auto': display.width.value <= 550}" class="d-flex align-center justify-center mt-4">
          <v-img
            src="@/assets/logo.png"
            :width="250"
            :height="125"
            cover
            @click="navigateToHome"
            class="logo-image"
          ></v-img>
        </v-sheet>

        <v-sheet :class="{'d-none': display.width.value <= 550}">
          <v-btn
            v-for="(item, index) in rightIcons"
            :key="index"
            :to="item.to"
            class="mx-1"
          >
            <v-icon start>{{ item.icon }}</v-icon>
            <span class="text-h6">{{ item.text }}</span>
          </v-btn>
        </v-sheet>
      </div>

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
import router from '@/router'

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
  { icon: 'mdi-calendar-clock', text: 'Schedule', to: '/schedule' }
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