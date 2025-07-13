<!-- AppHeader.vue -->
<template>
  <v-app-bar 
  flat
  :height="appBarHeight" 
  color="white">
    <v-container fluid class="pa-0 mt-0 mb-0 fill-height">
      <!-- Top Row -->
      <!-- class="d-flex justify-space-between mb-6 align-stretch"
      -->
      <v-row no-gutters class="fill-height">
        <!-- Left section: Menu items -->
        <v-col>
          <v-col>
            <v-btn
            v-for="(item, index) in leftIcons"
            :key="index"
            :to="item.to"
            :size="$vuetify.display.xs ? 'x-small' : 'default'"
            
          >
            <v-icon start>{{ item.icon }}</v-icon>
            <span class="text-h6">{{ item.text }}</span>
          </v-btn>
            <v-chip
              @click="toggleDrawer"
              :class="{'d-none': $vuetify.display.width > 959}"
              variant="elevated"
              size="small"
              color="primary"
              class="pa-3 rounded-lg cursor-pointer"
              prepend-icon="mdi-menu"
            > <b>Menu</b>
              <template v-slot:append>
                <v-icon size="x-small">mdi-chevron-down</v-icon>
              </template>
            </v-chip>  
          </v-col>
        </v-col>

        <!-- Middle section: Logo -->
        <v-col cols="12" :sm="display.width.value <= 700 ? 6 : 5" xs="12"md="5"lg="5"xl="5" :class="{'mx-auto': display.width.value <= 550}" class="text-center">
          <v-img
            src="@/assets/logo.png"
            :width="display.width.value <= 550 ? 220 : 300"
            :height="display.width.value <= 550 ? 210 : 200"
            contain
            @click="navigateToHome"
            class="logo-image mx-auto"
          >
          </v-img>
        </v-col>
        <v-col class="d-flex justify-center align-center pt-md-3 pt-lg-3 pt-xl-3">
        </v-col>
        
        <!-- Right section: Empty for now but reserved for future menu items -->
        <!-- <v-col :class="{'d-none': display.width.value <= 550}" class="text-right"> -->
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
        <!-- </v-col> -->
        <!-- Bottom Row -->
      </v-row>

      <!-- Bottom Row -->
      <!-- <div class="d-flex justify-space-between align-center w-100">
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

        </v-sheet>

        <v-sheet>

        </v-sheet>
      </div> -->
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useDisplay } from 'vuetify'

const display = useDisplay()
const appBarHeight = computed(() => {
  if (display.width.value < 600) {
    return 350 
  } else if (display.width.value >= 600 && display.width.value <= 700) {
    return 250 
  } else {
    return 250 
  }
})

const navigateToHome = (): void => {
  window.location.href = '/'
}

const emit = defineEmits(['update:drawer'])

const toggleDrawer = (): void => {
  emit('update:drawer')
}

const leftIcons = [
  { icon: 'mdi-calendar-clock', text:'Important Dates', to: '/important-dates'},
  { icon: 'mdi-information', text: 'About', to: '/about-us' },
  { icon: "mdi-newspaper", text: "Welcome Message", to: "/welcome-message" },
  { icon: "mdi-account-group", text: "Committee", to: "/committee" },
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