<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h3 class="text-h3 mb-6 text-center">Reviewer</h3>
      </v-col>

      <!-- Info Card -->
        <v-col cols="12">
        <v-card class="pa-6" elevation="2">
            <p class="text-h4 text-center font-weight-bold mb-4">
            CALL FOR REVIEWER
            </p>
            <p class="text-body-1">
            We would also like to invite you as a reviewer to help uphold the quality of submissions. If you are interested and not registered as student in any institution, please register in the following link. An electronic Certificate of Appreciation will be provided to all reviewers.
            </p>
        </v-card>
        </v-col>

      <!-- Registration Banner -->
      <v-col cols="12">
        <v-img
          src="https://placehold.co/1200x350"
          lazy-src="https://placehold.co/1200x350"
          cover
          min-height="350"
          class="align-center justify-center text-center"
          gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.7)"
        >
          <div class="banner-overlay d-flex align-center justify-center pa-4">
            <v-container>
              <v-row justify="center">
                <v-col cols="12" md="10" lg="8">
                  <h4 class="text-h3 font-weight-bold mb-4 text-white">
                    Ready to Contribute as a Reviewer?
                  </h4>
                  <p class="text-subtitle-1 text-md-h6 mb-8 text-white text-opacity-85">
                    Join our community in ensuring quality and integrity in academic submissions. Register now and make a meaningful impact.
                  </p>
                  <v-btn
                    color="elmubackground"
                    size="x-large"
                    rounded
                    class="elevation-6 red-bottom-border text-h6 font-weight-bold"
                    @click="goToRegister"
                  >
                    REGISTER NOW
                    <v-icon end>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const goToRegister = () => {
  window.open('https://forms.gle/placeholder-reviewer-form', '_blank')
}
</script>

<style scoped>
.red-bottom-border {
  border-bottom: 4px solid red;
}
</style>
