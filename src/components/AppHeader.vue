<template>
  <v-app-bar
    :elevation="2"
    :height="expandedAppBarHeight"
    color="white"
    flat
  >
    <v-container fluid class="pa-0 fill-height">
      <v-row no-gutters class="align-center" :style="{ height: baseAppBarHeight + 'px' }">

        <!-- Logo -->
        <v-col cols="auto" class="d-flex align-center">
          <v-img
            src="@/assets/logo.png"
            :width="logoWidth"
            :height="logoHeight"
            contain
            @click="navigateToHome"
            class="logo-image mx-4"
          />
        </v-col>

        <!-- Navigation -->
        <v-col class="d-flex align-center">
          <!-- Mobile hamburger -->
          <div v-if="display.width.value < 960">
            <v-btn @click="toggleMobileMenu" icon variant="text" size="small">
              <v-icon>{{ showMobileMenu ? 'mdi-close' : 'mdi-menu' }}</v-icon>
            </v-btn>
          </div>

          <!-- Desktop navigation -->
          <template v-else>
            <template v-for="(item, index) in leftIcons" :key="index">
              <!-- Call for Paper with submenu -->
              <v-menu
                v-if="item.children && item.text === 'Call for Paper'"
                open-on-hover
                :close-on-content-click="false"
                location="bottom"
                transition="scale-transition"
              >
                <template v-slot:activator="{ props }">
                  <div v-bind="props" class="d-flex align-center mr-1" style="cursor: pointer;">
                    <RouterLink
                      to="/call-for-paper"
                      class="text-body-1 d-flex align-center px-3 py-2"
                      style="text-decoration: none; color: inherit;"
                    >
                      <v-icon start>{{ item.icon }}</v-icon>
                      <span>{{ item.text }}</span>
                    </RouterLink>
                  </div>
                </template>

                <v-list>
                  <v-list-item
                    v-for="(child, childIndex) in item.children"
                    :key="childIndex"
                    :to="child.to"
                  >
                    <v-list-item-title>{{ child.text }}</v-list-item-title>

                    <!-- Nested menu -->
                    <v-menu
                      v-if="child.children"
                      open-on-hover
                      location="end"
                      transition="scale-transition"
                    >
                      <template v-slot:activator="{ props }">
                        <v-btn
                          v-bind="props"
                          icon
                          size="small"
                          variant="text"
                          class="nested-menu-activator"
                        >
                          <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                      </template>

                      <v-list>
                        <v-list-item
                          v-for="(subChild, subChildIndex) in child.children"
                          :key="subChildIndex"
                          :to="subChild.to"
                        >
                          <v-list-item-title>{{ subChild.text }}</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-list-item>
                </v-list>
              </v-menu>

              <!-- Other nav items -->
              <v-btn
                v-else
                :to="item.to"
                size="default"
                variant="text"
                class="mr-1"
              >
                <v-icon start>{{ item.icon }}</v-icon>
                <span class="text-body-1">{{ item.text }}</span>
              </v-btn>
            </template>
          </template>
        </v-col>

        <!-- Right section (desktop only) -->
        <v-col cols="auto" class="d-flex align-center justify-end">
          <template v-if="display.width.value >= 960">
            <v-btn
              v-for="(item, index) in rightIcons"
              :key="index"
              :to="item.to"
              size="default"
              variant="text"
              class="ml-1"
            >
              <v-icon start>{{ item.icon }}</v-icon>
              <span class="text-body-1">{{ item.text }}</span>
            </v-btn>
          </template>
        </v-col>
      </v-row>

      <!-- Mobile Menu -->
      <v-expand-transition>
        <div v-if="showMobileMenu && display.width.value < 960" class="mobile-menu-content">
          <v-row no-gutters>
            <v-col cols="12">
              <div class="mobile-menu-grid">
                <div class="menu-section">
                  <!-- Left icons mobile -->
                  <template v-for="(item, index) in leftIcons" :key="index">
                    <!-- Mobile submenu -->
                    <div v-if="item.children && item.text === 'Call for Paper'" class="mobile-submenu">
                      <div class="d-flex align-center justify-space-between mb-1">
                        <RouterLink
                          to="/call-for-paper"
                          class="text-body-1 d-flex align-center"
                          style="text-decoration: none; color: inherit;"
                          @click="closeMobileMenu"
                        >
                          <v-icon start>{{ item.icon }}</v-icon>
                          <span class="ml-2">{{ item.text }}</span>
                        </RouterLink>
                        <v-icon
                          @click.stop="toggleCallForPaperMenu"
                          style="cursor: pointer;"
                        >
                          {{ showCallForPaperMenu ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
                        </v-icon>
                      </div>

                      <v-expand-transition>
                        <div v-if="showCallForPaperMenu">
                          <template v-for="(child, childIndex) in item.children" :key="childIndex">
                            <v-btn
                              v-if="!child.children"
                              :to="child.to"
                              block
                              variant="text"
                              class="justify-start mb-1 ml-4"
                              @click="closeMobileMenu"
                            >
                              <v-icon start>mdi-file-document</v-icon>
                              <span class="text-body-1">{{ child.text }}</span>
                            </v-btn>

                            <div v-else class="mobile-submenu">
                              <v-btn
                                @click="toggleTopicsMenu"
                                block
                                variant="text"
                                class="justify-start mb-1 ml-4"
                              >
                                <v-icon start>mdi-chevron-right</v-icon>
                                <span class="text-body-1">{{ child.text }}</span>
                                <v-icon end>{{ showTopicsMenu ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                              </v-btn>

                              <v-expand-transition>
                                <div v-if="showTopicsMenu">
                                  <v-btn
                                    v-for="(subChild, subChildIndex) in child.children"
                                    :key="subChildIndex"
                                    :to="subChild.to"
                                    block
                                    variant="text"
                                    class="justify-start mb-1 ml-8"
                                    @click="closeMobileMenu"
                                  >
                                    <span class="text-body-1">{{ subChild.text }}</span>
                                  </v-btn>
                                </div>
                              </v-expand-transition>
                            </div>
                          </template>
                        </div>
                      </v-expand-transition>
                    </div>

                    <!-- Other mobile nav items -->
                    <v-btn
                      v-else
                      :to="item.to"
                      block
                      variant="text"
                      class="justify-start mb-1"
                      @click="closeMobileMenu"
                    >
                      <v-icon start>{{ item.icon }}</v-icon>
                      <span class="text-body-1">{{ item.text }}</span>
                    </v-btn>
                  </template>
                </div>

                <!-- Right section mobile -->
                <v-divider class="my-2"></v-divider>
                <div class="menu-section">
                  <v-btn
                    v-for="(item, index) in rightIcons"
                    :key="index"
                    :to="item.to"
                    block
                    variant="text"
                    class="justify-start mb-1"
                    @click="closeMobileMenu"
                  >
                    <v-icon start>{{ item.icon }}</v-icon>
                    <span class="text-body-1">{{ item.text }}</span>
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>
    </v-container>
  </v-app-bar>
</template>


<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useDisplay } from 'vuetify'

// Vuetify display (breakpoints)
const display = useDisplay()

// State refs
const showMobileMenu = ref(false)
const showCallForPaperMenu = ref(false)
const showTopicsMenu = ref(false)

// Navigation Data
const leftIcons = [
  { icon: 'mdi-calendar-clock', text: 'Important Dates', to: '/important-dates' },
  { icon: 'mdi-information', text: 'About', to: '/about-us' },
  { icon: 'mdi-newspaper', text: 'Welcome Message', to: '/welcome-message' },
  { icon: 'mdi-account-group', text: 'Committee', to: '/committee' },
  {
    icon: 'mdi-file-outline',
    text: 'Call for Paper',
    children: [
      {
        text: 'Topics',
        children: [
          { text: 'AI and Law', to: '/call-for-paper/topics/ai-law' },
          { text: 'Cybercrime', to: '/call-for-paper/topics/cybercrime' }
        ]
      },
      { text: 'Submission Guidelines', to: '/call-for-paper/submission' }
    ]
  },
  { icon: 'mdi-form-textbox', text: 'Registration & Payment', to: '/registration-payment' },
  { icon: 'mdi-frequently-asked-questions', text: 'FAQ', to: '/faq' },
  { icon: 'mdi-newspaper', text: 'News', to: '/news' }
]

const rightIcons = [
  { icon: 'mdi-account', text: 'Profile', to: '/profile' },
  { icon: 'mdi-cog', text: 'Settings', to: '/settings' }
]

// Responsive logo size
const logoWidth = computed(() => {
  return display.width.value < 600 ? 50 : display.width.value < 960 ? 60 : 70
})

const logoHeight = computed(() => {
  return display.width.value < 600 ? 38 : display.width.value < 960 ? 46 : 53
})

// Base AppBar height
const baseAppBarHeight = computed(() => {
  if (display.width.value < 600) return 70
  if (display.width.value < 960) return 80
  return 90
})

// Expanded AppBar height on mobile
const expandedAppBarHeight = computed(() => {
  if (showMobileMenu.value && display.width.value < 960) {
    const menuItemHeight = 56
    const dividerHeight = 16
    const padding = 32

    let totalMenuItems = leftIcons.length + rightIcons.length

    // Find "Call for Paper" safely
    const callForPaperItem = leftIcons.find(item => item.text === 'Call for Paper')
    const callForPaperChildren = callForPaperItem?.children ?? []

    if (showCallForPaperMenu.value) {
      totalMenuItems += callForPaperChildren.length

      const topicsItem = callForPaperChildren.find(child => child.text === 'Topics')
      const topicsChildren = (topicsItem as any)?.children ?? []

      if (showTopicsMenu.value) {
        totalMenuItems += topicsChildren.length
      }
    }

    const menuHeight = (totalMenuItems * menuItemHeight) + dividerHeight + padding
    return baseAppBarHeight.value + menuHeight
  }

  return baseAppBarHeight.value
})

// Navigation actions
const navigateToHome = (): void => {
  window.location.href = '/'
}

const toggleMobileMenu = (): void => {
  showMobileMenu.value = !showMobileMenu.value
  if (!showMobileMenu.value) {
    showCallForPaperMenu.value = false
    showTopicsMenu.value = false
  }
}

const closeMobileMenu = (): void => {
  showMobileMenu.value = false
  showCallForPaperMenu.value = false
  showTopicsMenu.value = false
}

const toggleCallForPaperMenu = (): void => {
  showCallForPaperMenu.value = !showCallForPaperMenu.value
  if (!showCallForPaperMenu.value) {
    showTopicsMenu.value = false
  }
}

const toggleTopicsMenu = (): void => {
  showTopicsMenu.value = !showTopicsMenu.value
}

// Automatically close mobile menu on large screen resize
const handleResize = () => {
  if (display.width.value >= 960) {
    closeMobileMenu()
  }
}

watch(() => display.width.value, handleResize)
</script>


<style scoped>
.v-app-bar {
  border-bottom: 3px solid #0a0346;
  overflow: visible;
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

.mobile-menu-content {
  width: 100%;
  padding: 0 16px;
  background: white;
  border-top: 1px solid #e0e0e0;
  position: relative;
  z-index: 999;
}

.mobile-menu-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 0;
}

.menu-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mobile-submenu {
  display: flex;
  flex-direction: column;
}

.mobile-menu-content .v-btn {
  padding: 12px 16px;
  height: auto;
  min-height: 48px;
  border-radius: 8px;
}

.mobile-menu-content .v-btn:hover {
  background-color: #f5f5f5;
}

/* Ensure proper spacing and alignment */
.v-row {
  width: 100%;
}

/* Style for nested menu activator */
.nested-menu-activator {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
}

/* Custom responsive adjustments */
@media (max-width: 599px) {
  .v-btn {
    min-width: 40px;
  }
}

@media (min-width: 600px) and (max-width: 959px) {
  .v-btn {
    min-width: 48px;
  }
}

/* Mobile menu animations */
.v-expand-transition-enter-active,
.v-expand-transition-leave-active {
  transition: all 0.3s ease;
}

.v-expand-transition-enter-from,
.v-expand-transition-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Dropdown menu styling */
.v-menu .v-list {
  padding: 8px 0;
  min-width: 200px;
}

.v-menu .v-list-item {
  padding: 0 16px;
  min-height: 40px;
}

.v-menu .v-list-item:hover {
  background-color: #f5f5f5;
}
</style>