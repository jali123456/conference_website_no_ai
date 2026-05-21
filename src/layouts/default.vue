<!-- Default.vue -->
<template>
  <v-app>
    <app-header @update:drawer="drawer = !drawer" />
    <v-main>
      <v-alert
        type="warning"
        variant="tonal"
        class="delay-banner mt-6 mx-6 mb-0"
        border="start"
      >
        Sorry, the conference is postponed
        <a href="/postpone" class="delay-banner-link">View Postponement Notice</a>.
      </v-alert>
      <v-container fluid class="fill-height pa-6">
        <v-row no-gutters>
          <!-- 1680 x 887 -->
          <v-col
            cols="12"
            md="2"
            :class="{'d-none': !drawer && windowWidth < 959}"
          >
            <div class="d-flex flex-column h-100">
              <v-sheet rounded="lg" class="mb-4 red-bottom-border">
                <v-list
                  rounded="lg"
                  :bg-color="'rgba(18, 30, 57, 1)'"
                  class="py-2"
                >
                  <v-list-item
                    v-for="item in menuItems"
                    :key="item.title"
                    :title="item.title"
                    :to="item.disabled ? undefined : item.path"
                    :prepend-icon="item.icon"
                    :link="!item.disabled"
                    :exact="item.path === '/'"
                    :disabled="item.disabled"
                    :color="$route.path === item.path ? 'primary' : item.disabled ? 'grey-lighten-4' : undefined"
                    class="mb-1 text-break"
                    @click="handleMenuItemClick(item)"
                  ></v-list-item>

                  <v-divider class="my-2" color="grey"></v-divider>

                  <v-list-item
                    title="Contact Us"
                    :to="undefined"
                    prepend-icon="mdi-email"
                    :link="false"
                    :disabled="true"
                    exact
                    :color="$route.path === '/contact' ? 'primary' : 'grey-lighten-4'"
                    @click="() => {}"
                  ></v-list-item>
                </v-list>
              </v-sheet>
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

type MenuItem = {
  title: string
  path: string
  icon: string
  disabled: boolean
}

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const menuItems: MenuItem[] = [
  { title: 'Home', path: '/', icon: 'mdi-home', disabled: false },
  { title: 'Forum & Workshop', path: '/panel-list', icon: 'mdi-account-group', disabled: true },
  { title: 'Call for Abstracts', path: '/call-for-abstracts', icon: 'mdi-file-document', disabled: true },
  { title: 'Call for Papers', path: '/call-for-papers', icon: 'mdi-file-document-edit', disabled: true },
  { title: 'Fees & Registration', path: '/fees-registration', icon: 'mdi-currency-usd', disabled: true },
  { title: 'Call for Reviewers', path: '/call-for-reviewers', icon: 'mdi-account-multiple-plus', disabled: true },
  { title: 'Programme & Dates', path: '/programme-dates', icon: 'mdi-calendar', disabled: true },
  { title: 'Venue & Accommodation', path: '/venue-accommodation', icon: 'mdi-map-marker', disabled: true },
  { title: 'Sponsors', path: '/sponsors', icon: 'mdi-briefcase', disabled: true },
  { title: 'Downloads', path: '/downloads', icon: 'mdi-file-document-outline', disabled: true }
]

const handleMenuItemClick = (item: MenuItem) => {
  if (!item.disabled) {
    drawer.value = false
  }
}
</script>

<style scoped>
.red-bottom-border {
  border-bottom: 4px solid red;
}

.v-main {
  background-color: #f5f5f5;
}

.delay-banner {
  background-color: #fff3e0 !important;
  color: #bf360c !important;
  border-color: #fb8c00 !important;
}

.delay-banner-link {
  color: #e65100;
  font-weight: 600;
  text-decoration: underline;
}

.delay-banner-link:hover {
  color: #bf360c;
}

.h-100 {
  height: 100%;
}

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


:deep(.v-list-item:hover:not(.v-list-item--active)) {
  background: rgba(255, 255, 255, 0.05) !important;
}

:deep(.v-list-subheader) {
  opacity: 0.8;
}

</style>
