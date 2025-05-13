<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto" max-width="1200">
          <v-img
            src="@/assets/conference-banner.png"
            height="500"
            width="1200"
            class="text-white"
          >
            <v-card-title class="text-h3 font-weight-bold">
            </v-card-title>
          </v-img>

          <v-card-text class="text-body-1 py-4">
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

            <v-row class="mt-6">
              <v-col cols="12" md="4">
                <v-card>
                  <v-card-title>Innovative Format</v-card-title>
                  <v-card-text>
                    Experience presentations in a dynamic environment that encourages interaction 
                    and engagement.
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card>
                  <v-card-title>Networking</v-card-title>
                  <v-card-text>
                    Connect with peers and experts in your field in a welcoming and exciting 
                    atmosphere.
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="4">
                <v-card>
                  <v-card-title>Publication Opportunities</v-card-title>
                  <v-card-text>
                    Present your research and get published in our peer-reviewed conference 
                    proceedings.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="primary"
              to="/fees-registration"
              block
            >
              Register Now
            </v-btn>
          </v-card-actions>
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
</style> 