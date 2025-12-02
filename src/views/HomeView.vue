<template>
  <v-container fluid class="pa-0 pa-sm-2 pa-md-4" max-width="1400">
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <div class="position-relative">
            <!-- :height="bannerHeight" -->
            <v-img
              src="@/assets/conference-banner.jpg"
              lazy-src="https://placehold.co/1200x600/000000/FFF?text=Loading Conference Banner"
              width="100%"
              contain
              class="text-white"
              alt="Conference Banner"
            >
              <v-card-title :class="bannerTitleClass">
                </v-card-title>
            </v-img>
          </div>
          <v-card-text :class="contentTextClass">
            <!-- Add H1 here for SEO -->
            <h1 class="text-h5 text-center font-weight-bold mb-4">
              ICELIn 2026 - International Conference on Enforcement, Law & Integrity
            </h1>
            <p class="text-body-2">
              Join us for a dynamic and multidisciplinary conference that brings together scholars,
              practitioners, policymakers, and thought leaders to explore the evolving challenges and
              innovations in enforcement, integrity, and climate resilience.
              This year’s conference will delve into critical topics ranging from legal reforms and
              leadership ethics to climate adaptation and disaster response.
            </p>
            <br/>
            <p class="text-body-2">
              With dedicated tracks on <strong class="text-decoration-underline">Enforcement & Law</strong>,
              <strong class="text-decoration-underline">Integrity & Leadership</strong>, and
              <strong class="text-decoration-underline">Disaster Science & Climate Resilience</strong>, the conference provides a rich
              platform for dialogue, collaboration, and knowledge exchange.
              Through keynote addresses, panel discussions, and research presentations, we aim to
              foster actionable insights that strengthen governance, promote ethical leadership, and
              support sustainable, resilient communities.
            </p>
            <v-row class="mt-2">
              <v-col :cols="width < 959 ? 12 : 4">
                <CallForAbstractBanner/>
              </v-col>
              <v-col :cols="width < 959 ? 12 : 4">
                <CallForPaperBanner/>
              </v-col>
              <v-col :cols="width < 959 ? 12 : 4">
                <RegisterBanner/>
              </v-col>
            </v-row>
            <v-row class="mt-2 mt-sm-6">
              <v-col cols="12"><h4 class="text-h4 text-center font-weight-medium">Subthemes</h4></v-col>
              
              <SubthemeList/>
            </v-row>
            <v-row class="mt-4">
              <v-col cols="12">
                <v-card class="mx-auto" max-width="800" color="elmubackground">
                  <v-card-title class="text-h5 font-weight-bold text-center">
                    Join Our Workshop!
                  </v-card-title>
                  <v-card-text class="text-body-1 text-center">
                    Don’t miss our exclusive workshop sessions with renowned experts. Click below to learn more.
                  </v-card-text>
                  <v-card-actions class="d-flex justify-center">
                    <v-btn
                      color="primary"
                      rounded
                      class="elevation-2"
                      @click="$router.push({ path: '/panel-list', query: { scrollTo: 'workshop-section' } })"
                    >
                      Learn More
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <CountdownTimerMobile v-if="width < 959" />
        <CountdownTimer v-else />
      </v-col>
    </v-row>
    <!-- Vip Table here if exits -->
    <!-- <VipList/> -->
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { computed } from 'vue'

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
/* Make feature cards have equal height */
.equal-height-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.equal-height-card .v-card-title {
  flex-shrink: 0;
}
.equal-height-card .v-card-text {
  flex-grow: 1;
}

</style>