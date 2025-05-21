<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">Conference Panel</h1>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-img
            src="@/assets/speakers-banner.jpg"
            height="1400"
            cover
          ></v-img>

          <v-card-text class="text-center py-4">
            <p class="text-body-1">
              We are excited to announce our distinguished keynote speakers for Conference 2024.
              Stay tuned for updates as we reveal more speakers in the coming weeks.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" class="mt-6">
        <v-timeline align="start">
          <v-timeline-item
            v-for="(speaker, index) in speakers"
            :key="index"
            :dot-color="speaker.color"
            size="small"
          >
            <template v-slot:opposite>
              <div class="text-h6">{{ speaker.time }}</div>
            </template>
            <v-card>
              <v-card-title class="text-h6">
                {{ speaker.name }}
              </v-card-title>
              <v-card-subtitle>
                {{ speaker.title }}
              </v-card-subtitle>
              <v-card-text>
                {{ speaker.description }}
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const speakers = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Professor of Digital Media Studies',
    time: 'Day 1 - 9:00 AM',
    description: 'Opening keynote on the intersection of academic research and popular culture.',
    color: 'primary'
  },
  {
    name: 'Prof. Takashi Yamamoto',
    title: 'Director of Interactive Media Lab',
    time: 'Day 2 - 10:00 AM',
    description: 'Exploring the future of academic conferences in the digital age.',
    color: 'secondary'
  },
  {
    name: 'Dr. Emily Chen',
    title: 'Research Director, Future Technologies Institute',
    time: 'Day 3 - 9:30 AM',
    description: 'Closing keynote on bridging traditional academia with modern media formats.',
    color: 'info'
  }
]
</script>

<style scoped>
.v-timeline {
  padding-top: 2rem;
}
</style> 