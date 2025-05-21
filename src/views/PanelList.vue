<template>
  <v-container fluid class="pa-0 pa-sm-2 pa-md-4">
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">Conference Panel</h1>
          <v-card>
          <v-img
            src="@/assets/speakers-banner.jpg"
            :height="bannerHeight"
            contain
          ></v-img>

          <v-card-text class="text-center py-4">
            <p class="text-body-1">
              We are excited to announce our distinguished keynote speakers for Conference 2024.
              Stay tuned for updates as we reveal more speakers in the coming weeks.
            </p>
          </v-card-text>
        </v-card>
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
            <v-list-item-text class="text-body-2 mt-2 text-black">
              <div class="font-weight-medium">{{ speaker.time }}</div>
              <div>{{ speaker.description }}</div>
            </v-list-item-text>
            <v-divider v-if="index < speakers.length - 1" class="my-4"></v-divider>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { computed } from 'vue'
const { xs, sm, md, lg, xl, xxl } = useDisplay()

const bannerHeight = computed(() => {
  if (xs.value) return '440px' // Extra small: phones
  if (sm.value) return '560px' // Small: tablets
  if (md.value) return '700px' // Medium: larger tablets and small laptops
  if (lg.value) return '1000px' // Large: MacBooks and standard laptops (More consistent increase)
  if (xl.value) return '1300px' // Extra large: desktop monitors (Continuing the increase)
  return '800px'               // XXL: 4K and ultrawide monitors (Further increase for largest screens)
})

const speakers = [
  {
    name: 'YBhg. Datuk Hajah Sharifah Hasidah',
    title: 'Deputy Minister',
    time: 'Day 1 - 9:00 AM',
    description: 'Opening keynote on the intersection of academic research and popular culture.',
    color: 'primary'
  },
  {
    name: `YBhg. Tan Sri Dato' Sri Haji Azam `,
    title: 'Chief Commissioner of the Malaysian Anti-Corruption Commission (MACC)',
    time: 'Day 1 - 10:00 AM',
    description: 'Exploring the future of academic conferences in the digital age.',
    color: 'secondary'
  },
  {
    name: 'Professor Datuk Dr. Kassim Noor Mohamed',
    title: 'CEO and Vice Chancellor of ELMU',
    time: 'Day 1 - 11:00 AM',
    description: 'Closing keynote on bridging traditional academia with modern media formats.',
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