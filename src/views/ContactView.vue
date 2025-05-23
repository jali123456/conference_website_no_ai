<template>
  <v-container class="contact-container">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-6" elevation="4" rounded="lg">
          <h1 class="text-h3 mb-6 text-center primary--text">Contact Us</h1>
          <p class="text-body-1 mb-6 text-center">
            Have questions or feedback? Reach out to us via the form below or through our social media channels.
          </p>

          <v-divider class="my-6"></v-divider>

          <v-row>
            <v-col cols="12" md="6">
              <h2 class="text-h5 mb-4">Get in Touch</h2>
              <v-form>
                <v-text-field
                  label="Name"
                  variant="outlined"
                  prepend-inner-icon="mdi-account"
                  class="mb-4"
                ></v-text-field>
                <v-text-field
                  label="Email"
                  variant="outlined"
                  prepend-inner-icon="mdi-email"
                  class="mb-4"
                ></v-text-field>
                <v-textarea
                  label="Message"
                  variant="outlined"
                  prepend-inner-icon="mdi-message"
                  rows="4"
                  class="mb-4"
                ></v-textarea>
                <v-btn color="primary" size="large" block>Send Message</v-btn>
              </v-form>
            </v-col>

            <v-col cols="12" md="6">
              <h2 class="text-h5 mb-4">Our Information</h2>
              <v-list class="transparent">
                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary" class="mr-4">mdi-email</v-icon>
                  </template>
                  <v-list-item-title>Email</v-list-item-title>
                  <v-list-item-subtitle>icelin@elmu.edu.my</v-list-item-subtitle>
                </v-list-item>

                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary" class="mr-4">mdi-phone</v-icon>
                  </template>
                  <v-list-item-title>Phone</v-list-item-title>
                  <v-list-item-subtitle>1-300-88-ELMU (3568)</v-list-item-subtitle>
                </v-list-item>

                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary" class="mr-4">mdi-map-marker</v-icon>
                  </template>
                  <v-list-item-title>Address</v-list-item-title>
                  <v-list-item-subtitle>
                  <p>Persiaran Timur 1,
                  Bandar Enstek, 71760 Nilai,
                  Negeri Sembilan, MALAYSIA.
                  </p>
                  </v-list-item-subtitle>
                </v-list-item>
              </v-list>

              <h2 class="text-h5 mt-6 mb-4">Follow Us</h2>
              <div class="d-flex justify-space-around">
                <v-btn icon="mdi-twitter" color="primary" variant="text" size="large"></v-btn>
                <v-btn icon="mdi-facebook" color="primary" variant="text" size="large"></v-btn>
                <v-btn icon="mdi-linkedin" color="primary" variant="text" size="large"></v-btn>
                <v-btn icon="mdi-instagram" color="primary" variant="text" size="large"></v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// No additional logic required for now
</script>

<style scoped>
.contact-container {
  padding-top: 64px;
  padding-bottom: 64px;
}

.v-card {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
}

.v-list-item {
  padding: 8px 0;
}

.v-list-item-title {
  font-weight: 500;
  color: black;
}

.v-list-item-subtitle {
  opacity: 0.8;
  color: black;
}
</style> 