<!-- Default.vue -->
<template>
  <v-app>
    <app-header @update:drawer="drawer = !drawer" />
    <v-main>
      <v-container fluid class="fill-height pa-6">
        <v-row no-gutters>
          <!-- 1680 x 887 -->
          <v-col
            cols="12"
            md="2"
            :class="{'d-none': !drawer && windowWidth < 959}"
          >
            <div class="d-flex flex-column h-100">
              <v-sheet rounded="lg" class="mb-4">
                <v-list
                  rounded="lg"
                  :bg-color="'rgba(18, 30, 57, 1)'"
                  class="py-2"
                >
                  <v-list-item
                    v-for="item in menuItems"
                    :key="item.title"
                    :title="item.title"
                    :to="item.path"
                    :prepend-icon="item.icon"
                    link
                    :exact="item.path === '/'"
                    :color="$route.path === item.path ? 'primary' : undefined"
                    class="mb-1 text-break"
                  ></v-list-item>

                  <v-divider class="my-2" color="grey"></v-divider>

                  <v-list-item
                    title="Contact Us"
                    to="/contact"
                    prepend-icon="mdi-email"
                    link
                    exact
                    :color="$route.path === '/contact' ? 'primary' : 'grey-lighten-4'"
                  ></v-list-item>
                </v-list>
              </v-sheet>
              
              <!-- Bottom List - Only shown on Home page -->
              <!-- <v-sheet
                v-if="$route.path === '/'"
                rounded="lg"
                class="mt-auto"
              >
                <v-list
                  rounded="lg"
                  :bg-color="'rgba(18, 30, 57, 0.8)'"
                  class="py-2"
                >
                  <v-list-subheader class="text-white">Quick Access</v-list-subheader>
                  
                  <v-list-item
                    prepend-icon="mdi-calendar-check"
                    title="Important Dates"
                    subtitle="Next deadline: Oct 15"
                    class="mb-1"
                  >
                    <template v-slot:append>
                      <v-badge
                        color="success"
                        content="3"
                        inline
                      ></v-badge>
                    </template>
                  </v-list-item>

                  <v-list-item
                    prepend-icon="mdi-bell"
                    title="Announcements"
                    subtitle="2 new updates"
                    class="mb-1"
                  >
                    <template v-slot:append>
                      <v-badge
                        color="error"
                        content="2"
                        inline
                      ></v-badge>
                    </template>
                  </v-list-item>

                  <v-list-item
                    prepend-icon="mdi-file-document"
                    title="Quick Submit"
                    to="/paper-submission"
                  ></v-list-item>
                </v-list> 
              </v-sheet> -->
            </div>
          </v-col>
          <v-col
          cols="12"
          md="10"
          >
          <router-view /></v-col>
        </v-row>
      </v-container>
    </v-main>
    <app-footer />
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const drawer = ref(false)
const windowWidth = ref(window.innerWidth)

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const menuItems = [
  { title: 'Home', path: '/', icon: 'mdi-home' },
  { title: 'Panel List', path: '/panel-list', icon: 'mdi-account-group' },
  { title: 'Fees & Registration', path: '/fees-registration', icon: 'mdi-currency-usd' },
  { title: 'Venue & Accommodation', path: '/venue-accommodation', icon: 'mdi-map-marker' },
  { title: 'Programme & Dates', path: '/programme-dates', icon: 'mdi-calendar' },
  { title: 'Downloads', path: '/downloads', icon: 'mdi-file-document-outline' }
]
</script>

<style scoped>
.v-main {
  background-color: #f5f5f5;
}

.h-100 {
  height: 100%;
}

/* Sticky sidebar styling - Only for desktop (>959px)
.sidebar-col {
  position: relative;
}

/* Default mobile behavior 
.sidebar-content {
  display: flex;
  flex-direction: column;
}

/* Desktop sticky behavior 
@media (min-width: 960px) {
  .sidebar-content {
    position: fixed;
    top: 280px; /* Your header height 
    left: 24px;
    width: calc(16.666667% - 48px); /* Account for container padding 
    height: calc(100vh - 280px - 358px - 20px); /* Viewport - Header - Footer - Extra padding 
    max-height: calc(100vh - 280px - 358px - 20px); /* Ensure it never exceeds this 
    overflow-y: auto;
    z-index: 5;
    padding-right: 8px;
    display: flex;
    flex-direction: column;
  }
}

/* Mobile behavior - keep sidebar static 
@media (max-width: 959px) {
  .sidebar-content {
    position: static;
    height: auto;
    display: flex;
    flex-direction: column;
  }
} */

:deep(.v-list-item) {
  padding: 0 16px !important;
  min-height: 48px !important;
  white-space: normal !important;
  line-height: 1.2 !important;
}

:deep(.v-list-item__content) {
  padding: 8px 0;
}

:deep(.v-list-item-title) {
  white-space: normal !important;
  word-break: break-word !important;
  overflow-wrap: break-word !important;
  line-height: 1.2em !important;
}

:deep(.v-list-item__prepend) {
  padding-right: 8px !important;
}

/* Remove the custom active state styling - let Vuetify handle it */
:deep(.v-list-item:not(.v-list-item--active)) {
  color: rgba(255, 255, 255, 0.8) !important;
}

:deep(.v-list-item:hover:not(.v-list-item--active)) {
  background: rgba(255, 255, 255, 0.05) !important;
}

:deep(.v-list-subheader) {
  opacity: 0.8;
}
</style>
