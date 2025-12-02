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
      
      <v-card 
        class="mx-auto mb-8 pa-6 pa-md-8" 
        elevation="4"
        rounded="xl"
        color="rgba(18, 30, 57, 0.95)"
      >
        <div class="text-overline text-center text-blue-lighten-3 mb-2 letter-spacing-widest">
          Forum Session Title
        </div>
        <h4 class="text-h4 text-md-h4 text-center font-weight-bold text-white mb-2">
          Governing with Integrity
        </h4>
        <p class="text-h6 text-md-h5 text-center text-blue-lighten-3 font-weight-medium">
          Bridging Enforcement, Law, and Public Trust
        </p>
      </v-card>
    </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-img
            src="@/assets/speakers-banner.png"
            lazy-src="https://placehold.co/1400x2000/000000/FFF?text=Loading Forum Banner"
            alt="Panel Banner"
            contain
          ></v-img>

          <v-card-text class="text-center py-4">
            <p class="text-body-2">
              We are excited to announce our distinguished forum panel for ICELIn26.
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
            <!-- <v-list-item-title class="text-h6 text-black">{{ speaker.name }}</v-list-item-title> -->
            <!-- <v-list-item-subtitle class="text-black">{{ speaker.title }}</v-list-item-subtitle> -->
              <div class="text-body-2 mt-2 text-black">
                <div class="font-weight-medium">{{ speaker.time }}</div>
                <div>{{ speaker.description }}</div>
              </div>
            <v-divider v-if="index < speakers.length - 1" class="my-4"></v-divider>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>

    <!-- Workshop Section -->
    <v-row class="mt-8">
      <v-col cols="12">
        <div class="d-flex align-center justify-center mb-6">
          <v-divider class="flex-grow-1"></v-divider>
          <h2 class="text-h4 mx-4 text-center font-weight-bold">Workshop</h2>
          <v-divider class="flex-grow-1"></v-divider>
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto" max-width="400">
          <v-img
            src="@/assets/images/forum/workshop_1.jpeg"
            lazy-src="https://placehold.co/400x400/000000/FFF?text=Loading"
            alt="Cdr. Prof. Gs. Ts. Mohd Hasmadi Ismail RMNVR"
            cover
            aspect-ratio="1"
          ></v-img>
          <v-card-title class="text-center text-wrap">
            High Impact Journal Writing Workshop
          </v-card-title>
          <v-divider class="my-2"></v-divider>
          <v-card-text>
            <v-card-subtitle class="text-center">
              Workshop Host
            </v-card-subtitle>
            <div class="text-subtitle-1 font-weight-bold">
              Cdr. Prof. Gs. Ts. Mohd Hasmadi Ismail RMNVR
            </div>
            <div class="mt-3 d-flex flex-wrap align-center">
              <v-chip class="ma-1" color="secondary" variant="flat" size="small" prepend-icon="mdi-calendar">
                13 August 2026
              </v-chip>
              <v-chip class="ma-1" color="primary" variant="tonal" size="small" prepend-icon="mdi-clock-outline">
                2:30 – 3:30 PM
              </v-chip>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="8">
        <!-- Desktop Biography Card -->
        <v-card class="d-none d-md-block">
          <v-card-title class="text-h5 font-weight-bold">
            Biography
          </v-card-title>
          <v-card-text class="text-body-1 text-justify">
            <p>
              Mohd Hasmadi Ismail is a Professor at the Faculty of Forestry and Environment, Universiti Putra Malaysia (UPM), specialising in geoinformatics with research expertise in remote sensing, spatial modelling, and environmental monitoring. His work focuses on forestry applications, including biomass estimation, land-cover change, GIS-based decision support, and hyperspectral analysis, and contributes significantly to sustainable forest management in Malaysia.
            </p>

            <v-expand-transition>
              <div v-if="showFullBio">
                <p class="mt-4">
                  He obtained a Diploma and Bachelor of Forestry Science (Honours) from UPM, followed by a Master of Science in Applied Remote Sensing (2000). He earned his Ph.D in Geoinformatics Technology from Cranfield University, England, with a thesis on the application of remote sensing and GIS in forest harvesting.
                </p>
                <p class="mt-4">
                  Since joining UPM as a Lecturer in 2005, he has risen to the rank of full Professor (2019) and served in leadership roles, including Deputy Director of the UPM Alumni Centre, Head of the Department of Forest Production, and Principal of College Sultan Alaeddin Suleiman Shah. Internationally, he coordinated the ITC Netherlands–UPM project on Tropical Forest Biomass/Carbon Assessment and served on the editorial boards of peer-reviewed journals.
                </p>
                <p class="mt-4">
                  Professor Mohd Hasmadi has led 15 funded research projects totalling over RM2.1 million, has produced four books and 13 book chapters, and has published over 235 refereed publications, and has frequently delivered keynote addresses at international conferences. He has supervised more than 30 postgraduate and 55 undergraduate projects.
                </p>
                <p class="mt-4">
                  In 2019, he was conferred the Darjah Kebesaran Setia-Sultan Sharafuddin Idris Shah (S.I.S.) by His Royal Highness the Sultan of Selangor. He plays a vital role in advancing Malaysia's capacity in sustainable forest management and data-driven environmental planning through innovative use of geospatial and machine learning technologies.
                </p>
              </div>
            </v-expand-transition>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" variant="flat" @click="showFullBio = !showFullBio" prepend-icon="mdi-information-outline">
              {{ showFullBio ? 'Hide details' : 'View details' }}
            </v-btn>
          </v-card-actions>
        </v-card>

        <!-- Mobile Biography Card with Bottom Sheet -->
        <v-card class="d-md-none">
          <v-card-title class="text-h5 font-weight-bold">
            Biography
          </v-card-title>
          <v-card-text class="text-body-1 text-justify">
            <p>
              Mohd Hasmadi Ismail is a Professor at the Faculty of Forestry and Environment, Universiti Putra Malaysia (UPM), specialising in geoinformatics with research expertise in remote sensing, spatial modelling, and environmental monitoring...
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" variant="flat" block size="large" @click="showMobileBio = true" prepend-icon="mdi-information-outline">
              View Full Biography
            </v-btn>
          </v-card-actions>
        </v-card>

        <!-- Mobile Bottom Sheet Dialog -->
        <v-bottom-sheet v-model="showMobileBio" inset>
          <v-card>
            <v-card-title class="d-flex align-center justify-space-between bg-primary text-white">
              <span>Biography</span>
              <v-btn icon="mdi-close" variant="text" @click="showMobileBio = false"></v-btn>
            </v-card-title>
            <v-card-text class="text-body-1 text-justify" style="max-height: 70vh; overflow-y: auto;">
              <p class="mt-4">
                Mohd Hasmadi Ismail is a Professor at the Faculty of Forestry and Environment, Universiti Putra Malaysia (UPM), specialising in geoinformatics with research expertise in remote sensing, spatial modelling, and environmental monitoring. His work focuses on forestry applications, including biomass estimation, land-cover change, GIS-based decision support, and hyperspectral analysis, and contributes significantly to sustainable forest management in Malaysia.
              </p>
              <p class="mt-4">
                He obtained a Diploma and Bachelor of Forestry Science (Honours) from UPM, followed by a Master of Science in Applied Remote Sensing (2000). He earned his Ph.D in Geoinformatics Technology from Cranfield University, England, with a thesis on the application of remote sensing and GIS in forest harvesting.
              </p>
              <p class="mt-4">
                Since joining UPM as a Lecturer in 2005, he has risen to the rank of full Professor (2019) and served in leadership roles, including Deputy Director of the UPM Alumni Centre, Head of the Department of Forest Production, and Principal of College Sultan Alaeddin Suleiman Shah. Internationally, he coordinated the ITC Netherlands–UPM project on Tropical Forest Biomass/Carbon Assessment and served on the editorial boards of peer-reviewed journals.
              </p>
              <p class="mt-4">
                Professor Mohd Hasmadi has led 15 funded research projects totalling over RM2.1 million, has produced four books and 13 book chapters, and has published over 235 refereed publications, and has frequently delivered keynote addresses at international conferences. He has supervised more than 30 postgraduate and 55 undergraduate projects.
              </p>
              <p class="mt-4">
                In 2019, he was conferred the Darjah Kebesaran Setia-Sultan Sharafuddin Idris Shah (S.I.S.) by His Royal Highness the Sultan of Selangor. He plays a vital role in advancing Malaysia's capacity in sustainable forest management and data-driven environmental planning through innovative use of geospatial and machine learning technologies.
              </p>
            </v-card-text>
          </v-card>
        </v-bottom-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Forum Panel & Workshop | ICELIn 2026 Conference',
  meta: [
    {
      name: 'description',
      content: 'Meet the distinguished speakers, panelists and workshop hosts at the ICELIn 2026 Conference. Explore the forum panel and workshop schedule.'
    },
    {
      property: 'og:title',
      content: 'Forum Panel & Workshop | ICELIn 2026 Conference'
    },
    {
      property: 'og:description',
      content: 'Discover the forum panel, keynote speakers and workshops for ICELIn 2026.'
    },
    {
      property: 'og:url',
      content: 'https://icelin.my/panel-list'
    },
    {
      name: 'twitter:title',
      content: 'Forum Panel & Workshop | ICELIn 2026 Conference'
    },
    {
      name: 'twitter:description',
      content: 'Meet the speakers, panelists and workshop hosts at ICELIn 2026.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://icelin.my/panel-list'
    }
  ]
})

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
    name: 'Speaker 1',
    title: 'TBA',
    time: 'Day 1 - 9:00 AM',
    description: '',
    color: 'primary'
  },
  {
    name: `Speaker 2`,
    title: 'TBA',
    time: 'Day 1 - 10:00 AM',
    description: '',
    color: 'secondary'
  },
  {
    name: 'Speaker 3',
    title: 'TBA',
    time: 'Day 1 - 11:00 AM',
    description: '',
    color: 'info'
  }
]

const showFullBio = ref(false)
const showMobileBio = ref(false)
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