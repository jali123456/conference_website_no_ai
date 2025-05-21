<template>
  <v-container fluid class="pa-0 pa-sm-2 pa-md-4">
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <div class="position-relative">
            <v-img
              src="@/assets/conference-banner.png"
              :height="bannerHeight"
              width="100%"
              contain
              class="text-white"
            >
              <v-card-title :class="bannerTitleClass">
                </v-card-title>
            </v-img>
          </div>

          <v-card-text :class="contentTextClass">
            <p class="mb-4">
              Join us for the premier academic conference that bridges the worlds of technology, 
              academia, and popular culture. Our unique conference brings together scholars, 
              researchers, and enthusiasts in an engaging environment inspired by anime conventions.
            </p>

            <p class="mb-4">
              This year's theme focuses on the intersection of academic research and modern media culture, 
              featuring keynote speakers from renowned institutions and special presentations that 
              showcase cutting-edge research in an accessible format.
            </p>

            <v-row class="mt-4 mt-sm-6">
              <v-col cols="12" sm="6" md="4">
                <v-card class="mb-4 mb-sm-0">
                  <v-card-title :class="featureTitleClass">
                    Innovative Format
                  </v-card-title>
                  <v-card-text>
                    Experience presentations in a dynamic environment that encourages interaction 
                    and engagement.
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-card class="mb-4 mb-sm-0">
                  <v-card-title :class="featureTitleClass">
                    Networking
                  </v-card-title>
                  <v-card-text>
                    Connect with peers and experts in your field in a welcoming and exciting 
                    atmosphere.
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-card>
                  <v-card-title :class="featureTitleClass">
                    Publication Opportunities
                  </v-card-title>
                  <v-card-text>
                    Present your research and get published in our peer-reviewed conference 
                    proceedings.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions class="pa-4">
            <v-btn
              color="primary"
              to="/fees-registration"
              block
              size="large"
              class="text-body-1"
            >
              Register Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="mt-6">
      <v-col cols="12" class="sponsor-section">
        <v-card class="mx-auto" max-width="1200">
          <v-img
            src="https://placehold.co/1200x600?text=Sponsor+Logo"
            alt="Sponsor Logo"
            :height="sponsorHeight"
            width="100%"
            cover
          >
            </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { computed } from 'vue'

const { xs, sm, md, lg, xl, xxl } = useDisplay()

// Responsive height for the banner image based on breakpoints
const bannerHeight = computed(() => {
  if (xs.value) return '160px' // Extra small: phones
  if (sm.value) return '180px' // Small: tablets
  if (md.value) return '350px' // Medium: larger tablets and small laptops
  if (lg.value) return '600px' // Large: MacBooks and standard laptops
  if (xl.value) return '700px' // Extra large: desktop monitors
  return '600px'               // XXL: 4K and ultrawide monitors
})

// Responsive height for the sponsor image
const sponsorHeight = computed(() => {
  if (xs.value) return '120px'
  if (sm.value) return '180px'
  if (md.value) return '240px'
  if (lg.value) return '400px'
  if (xl.value) return '500px'
  return '500px'
})

// Dynamic classes for the banner title
const bannerTitleClass = computed(() => {
  const baseClasses = ['font-weight-bold']
  
  if (xs.value) {
    return [...baseClasses, 'text-h5']
  } else if (sm.value) {
    return [...baseClasses, 'text-h4']
  } else {
    return [...baseClasses, 'text-h3']
  }
})

// Dynamic classes for the content text
const contentTextClass = computed(() => {
  const baseClasses = ['py-4']
  
  if (xs.value || sm.value) {
    return [...baseClasses, 'text-body-2']
  } else {
    return [...baseClasses, 'text-body-1']
  }
})

// Dynamic classes for feature card titles
const featureTitleClass = computed(() => {
  if (xs.value || sm.value) {
    return 'text-h6'
  } else {
    return 'text-h5'
  }
})
</script>

<style scoped>
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