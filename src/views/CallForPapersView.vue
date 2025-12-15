<template>
  <v-container fluid class="pa-0 pa-sm-2 pa-md-4" max-width="1400">
    <v-row>
      <v-col cols="12">
      <div class="d-flex align-center justify-center mb-6">
        <v-divider class="flex-grow-1 border-opacity-50"></v-divider>
        <h1 class="text-h mx-4 text-center text-no-wrap font-weight-bold">Call For Paper</h1>
        <v-divider class="flex-grow-1 border-opacity-50"></v-divider>
      </div>
        <v-card class="mx-auto">
          <v-card-text :class="contentTextClass">
            <p class="text-body-1 mb-2">
              We invite scholars, researchers, practitioners, and policymakers to submit their original research papers for the International Conference on Enforcement, Law & Integrity (ICELIn 2026).
            </p>
            <p class="text-body-1">All accepted papers will be published in the ICELIn26 Conference Proceedings in the Enforcement, Leadership & Management Journal (ELMJ).
Selected papers may be extended and submitted to indexed journals (<strong>Scopus</strong>, <strong>Web of Science (WoS)</strong>, <strong>ACI</strong>, <strong>Cabells Journalytics</strong>, <strong>MyCite</strong>, <strong>DOAJ</strong>, <strong>Google Scholar</strong>), subject to additional fees and journal review processes.</p>

            <v-divider class="my-6"></v-divider>

            <v-row>
              <v-col cols="12" md="8">
                <h2 class="text-h5 font-weight-bold mb-4">Submission Guidelines</h2>
                <p class="mb-4 text-body-1">
                  All papers must be original and not simultaneously submitted to another journal or conference. The following paper categories are welcome:
                </p>

                <ul class="ml-6 mb-4">
                  <li><strong>Full Papers:</strong> describing significant research results, applications, or systems.</li>
                  <li><strong>Short Papers:</strong> describing ongoing research or new ideas.</li>
                </ul>

                <p class="text-body-1">
                  Please refer the <strong>Paper Submission Template</strong> in the <router-link to="/downloads">Downloads</router-link> Section
                </p>
                <!-- <p class="mb-4">
                  Please submit your papers via the EasyChair submission system. All submissions will be peer-reviewed by at least two independent reviewers.
                </p> -->
                <v-btn
                  color="primary"
                  prepend-icon="mdi-upload"
                  class="mt-2"
                  @click="showAlert"
                >
                  Submit Paper
                </v-btn>

                <h2 class="text-h5 font-weight-bold mt-8 mb-4">Publication Opportunities</h2>
                <p>
                  Accepted papers will be featured in the conference proceedings. Selected high-quality papers will be recommended for publication in Scopus-indexed journals, subject to additional review and publication fees.
                </p>
                <h2 class="text-h5 font-weight-bold mt-8 mb-4">Paper Categories</h2>
                <p class="mb-4 text-body-1">
                    Authors are invited to submit full paper describing original research work in areas including, but are not limited to:
                </p>
              </v-col>

              <v-col cols="12" md="4">
                <v-card variant="outlined" class="pa-4 bg-grey-lighten-4">
                  <h3 class="text-h6 font-weight-bold mb-4 text-primary">Important Dates</h3>
                  <v-timeline density="compact" side="end" truncate-line="start">
                    <v-timeline-item dot-color="info" size="x-small">
                      <div class="text-caption">1 October, 2025</div>
                      <div class="font-weight-bold">Call For Abstracts</div>
                    </v-timeline-item>
                    <v-timeline-item dot-color="info" size="x-small">
                      <div class="text-caption">31 March, 2026</div>
                      <div class="font-weight-bold">Close Abstract Date</div>
                    </v-timeline-item>
                    <v-timeline-item dot-color="info" size="x-small">
                      <div class="text-caption">15 April, 2026</div>
                      <div class="font-weight-bold">Acceptance Notification</div>
                    </v-timeline-item>
                    <v-timeline-item dot-color="success" size="x-small">
                      <div class="text-caption">
                        31 May, 2026 <span class="font-weight-bold text-body-1 text-elmuaccent" >Attention</span>
                      </div>
                      <div class="font-weight-bold">Full Paper Submission/Camera Ready Deadline</div>
                    </v-timeline-item>
                    <v-timeline-item dot-color="error" size="x-small">
                      <div class="text-caption">12-14 August, 2026</div>
                      <div class="font-weight-bold">Conference Dates</div>
                    </v-timeline-item>
                  </v-timeline>
                </v-card>
              </v-col>
            </v-row>
            
            <v-row class="mt-8">
              <SubthemeList/>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { computed } from 'vue'
import SubthemeList from '@/components/SubthemeList.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Call for Papers | ICELIn 2026',
  meta: [
    { name: 'description', content: 'Call for Papers for ICELIn 2026. Submit your research on enforcement, law, and integrity.' }
  ]
})

const { xs, sm, md, lg, xl, xxl, width } = useDisplay()

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

const showAlert = () => {
  window.open('https://easychair.org/conferences?conf=icelin26', '_blank');
};
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