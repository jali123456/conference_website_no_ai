<template>
  <v-container fluid class="pa-0 pa-sm-2 pa-md-4">
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto" max-width="1200">
          <div class="position-relative">
            <v-img
              src="@/assets/conference-banner.png"
              :height="$vuetify.display.xs ? '300' : '800'"
              width="100%"
              cover
              class="text-white"
            >
              <v-card-title :class="[
                $vuetify.display.smAndDown ? 'text-h4' : 'text-h3',
                'font-weight-bold'
              ]">
              </v-card-title>
            </v-img>
          </div>

          <v-card-text :class="[
            'py-4',
            $vuetify.display.smAndDown ? 'text-body-2' : 'text-body-1'
          ]">
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
                  <v-card-title :class="$vuetify.display.smAndDown ? 'text-h6' : 'text-h5'">
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
                  <v-card-title :class="$vuetify.display.smAndDown ? 'text-h6' : 'text-h5'">
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
                  <v-card-title :class="$vuetify.display.smAndDown ? 'text-h6' : 'text-h5'">
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
          height="600"
          width="1200"
          cover
          class="text-white"
        >
          <!-- You can add sponsor logo or text here if needed -->
        </v-img>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.v-card-title {
  word-break: normal;
}

/* Add responsive padding */
.v-card {
  overflow: hidden;
}

@media (max-width: 600px) {
  .v-container {
    padding: 0;
  }
  
  .v-card {
    border-radius: 0;
  }
}

/* Handle very small screens */
@media (max-width: 360px) {
  :deep(.v-img) {
    height: 200px !important;
  }
}

.position-relative {
  position: relative;
}
</style> 