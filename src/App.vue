<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :permanent="!mobile"
      :temporary="mobile"
      :rail="rail && !mobile"
      @click="rail = false"
    >
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          :prepend-icon="item.icon"
          :title="item.title"
        />
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon 
        @click="toggleDrawer"
        :icon="rail && !mobile ? 'mdi-menu' : 'mdi-menu'"
      ></v-app-bar-nav-icon>
      <v-app-bar-title>Conference 2024</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer>
      <v-row justify="center" no-gutters>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>Conference 2024</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const drawer = ref(true)
const rail = ref(false)
const mobile = ref(false)

const updateMobile = () => {
  mobile.value = window.innerWidth < 960
  drawer.value = !mobile.value
}

const toggleDrawer = () => {
  if (mobile.value) {
    drawer.value = !drawer.value
  } else {
    rail.value = !rail.value
  }
}

onMounted(() => {
  updateMobile()
  window.addEventListener('resize', updateMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateMobile)
})

const menuItems = [
  { title: 'Home', path: '/', icon: 'mdi-home' },
  { title: 'Keynote Speakers', path: '/keynote-speakers', icon: 'mdi-account-group' },
  { title: 'Fees & Registration', path: '/fees-registration', icon: 'mdi-currency-usd' },
  { title: 'Venue & Accommodation', path: '/venue-accommodation', icon: 'mdi-map-marker' },
  { title: 'Programme & Dates', path: '/programme-dates', icon: 'mdi-calendar' },
  { title: 'Guidelines & Publication', path: '/guidelines-publication', icon: 'mdi-book-open-variant' },
  { title: 'Paper Submission', path: '/paper-submission', icon: 'mdi-file-document' },
  { title: 'Downloads', path: '/downloads', icon: 'mdi-download' }
]
</script>

<style>
.v-application {
  font-family: 'Roboto', sans-serif;
}

.v-navigation-drawer {
  transition: 0.2s ease-in-out;
}
</style> 