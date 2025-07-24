<!-- PanelList.vue -->
<template>
  <v-container>
    <v-row>
    <v-col cols="12">
      <div class="d-flex align-center justify-center mb-6">
        <v-divider class="flex-grow-1"></v-divider>
        <h1 class="text-h mx-4 text-center font-weight-bold">Forum Panel</h1>
        <v-divider class="flex-grow-1"></v-divider>
      </div>
    </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-img
            src="@/assets/speakers-banner.png"
            contain
          ></v-img>

          <v-card-text class="text-center py-4">
            <p class="text-body-2">
              We are excited to announce our distinguished keynote speakers for Conference 2024.
              Stay tuned for updates as we reveal more speakers in the coming weeks.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-list class="mt-6" lines="three">
          <v-list-item
            v-for="(speaker, index) in speakers"
            :key="index"
            :title="speaker.name"
            :subtitle="speaker.title"
          >
            <template v-slot:prepend>
              <v-avatar :color="speaker.color" size="48">
                <span class="text-h6 white--text">{{ speaker.name.charAt(0) }}</span>
              </v-avatar>
            </template>
            <v-list-item-title class="text-h6 text-black">{{ speaker.name }}</v-list-item-title>
            <v-list-item-subtitle class="text-black">{{ speaker.title }}</v-list-item-subtitle>
              <div class="text-body-2 mt-2 text-black">
                <div class="font-weight-medium">{{ speaker.time }}</div>
                <div>{{ speaker.description }}</div>
              </div>
            <v-divider v-if="index < speakers.length - 1" class="my-4"></v-divider>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { xs, sm, md, lg, xl, xxl } = useDisplay()

// const bannerHeight = computed(() => {
//   if (xs.value) return '440px' // Extra small: phones
//   if (sm.value) return '560px' // Small: tablets
//   if (md.value) return '700px' // Medium: larger tablets and small laptops
//   if (lg.value) return '1000px' // Large: MacBooks and standard laptops (More consistent increase)
//   if (xl.value) return '1300px' // Extra large: desktop monitors (Continuing the increase)
//   return '800px'               // XXL: 4K and ultrawide monitors (Further increase for largest screens)
// })

const speakers = [
  {
    name: 'TBA',
    title: 'TBA',
    time: 'Day 1 - 9:00 AM',
    description: 'TBA',
    color: 'primary'
  },
  {
    name: `TBA`,
    title: 'TBA',
    time: 'Day 1 - 10:00 AM',
    description: 'TBA',
    color: 'secondary'
  },
  {
    name: 'TBA',
    title: 'TBA',
    time: 'Day 1 - 11:00 AM',
    description: 'TBA',
    color: 'info'
  }
]
</script>

<style scoped>
.v-timeline {
  padding-top: 2rem;
}

.v-card-title {
  word-break: normal;
}

.v-card {
  overflow: hidden;
}

/* Mobile-specific adjustments */
@media (max-width: 600px) {
  .v-container {
    padding: 0;
  }
  
  .v-card {
    border-radius: 0;
  }
}

.position-relative {
  position: relative;
}
</style> 