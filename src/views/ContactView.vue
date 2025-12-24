<template>
  <v-container class="contact-container">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <v-card class="pa-6" elevation="4" rounded="lg">
          <h1 class="text-h3 mb-6 text-center primary--text">Contact Us</h1>
          <p class="text-body-1 mb-6 text-center">
            Have questions or feedback? Reach out to us via the form below or through our social media channels.
          </p>

          <v-divider class="my-6"></v-divider>

          <v-row>
            <v-col cols="12" md="6">
              <h2 class="text-h5 mb-4">Get in Touch</h2>
              <v-form ref="form" v-model="valid">
                <v-text-field
                  v-model="formData.name"
                  label="Name"
                  variant="outlined"
                  prepend-inner-icon="mdi-account"
                  class="mb-4"
                  :rules="nameRules"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="formData.email"
                  label="Email"
                  variant="outlined"
                  prepend-inner-icon="mdi-email"
                  class="mb-4"
                  :rules="emailRules"
                  required
                ></v-text-field>
                <v-textarea
                  v-model="formData.message"
                  label="Message"
                  variant="outlined"
                  prepend-inner-icon="mdi-message"
                  rows="4"
                  class="mb-4"
                  :rules="messageRules"
                  required
                ></v-textarea>
                <v-btn 
                  color="primary" 
                  size="large" 
                  block 
                  @click="sendEmail"
                  :disabled="!valid"
                >
                  Send Email
                </v-btn>
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

                <!-- <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary" class="mr-4">mdi-phone</v-icon>
                  </template>
                  <v-list-item-title>Phone</v-list-item-title>
                  <v-list-item-subtitle>+60176063615</v-list-item-subtitle>
                </v-list-item> -->

                <v-list-item>
                  <template v-slot:prepend>
                    <v-icon color="primary" class="mr-4">mdi-map-marker</v-icon>
                  </template>
                  <v-list-item-title>Address</v-list-item-title>
                  <div>
                    <v-list-item-subtitle>Persiaran Timur 1,</v-list-item-subtitle>
                    <v-list-item-subtitle>Bandar Enstek, 71760 Nilai,</v-list-item-subtitle>
                    <v-list-item-subtitle>Negeri Sembilan, MALAYSIA.</v-list-item-subtitle>
                  </div>
                </v-list-item>
              </v-list>

              <h2 class="text-h5 mt-6 mb-4">Follow Us</h2>
              <div class="d-flex justify-space-around">
                <a href="https://www.facebook.com/people/ICELIn/61582930324491/" target="_blank">
                  <v-btn icon="mdi-facebook" color="primary" variant="text" size="large"></v-btn>
                </a>
                <a href="https://www.linkedin.com/in/icelin-elmu-635a42390/" target="_blank">
                  <v-btn icon="mdi-linkedin" color="primary" variant="text" size="large"></v-btn>
                </a>
                <a href="https://www.instagram.com/icelin.2026/" target="_blank">
                  <v-btn icon="mdi-instagram" color="primary" variant="text" size="large"></v-btn>
                </a>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <!-- Success Snackbar -->
    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
      color="success"
      location="top"
    >
      Email client opened successfully! Please check your default email application.
      <template v-slot:actions>
        <v-btn
          color="white"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Contact Us | ICELIn 2026 Conference',
  meta: [
    {
      name: 'description',
      content: 'Contact the ICELIn 2026 Conference team for inquiries, support, or feedback. Reach out via our contact form or social media.'
    },
    {
      property: 'og:title',
      content: 'Contact Us | ICELIn 2026 Conference'
    },
    {
      property: 'og:description',
      content: 'Get in touch with the ICELIn 2026 Conference organizers for any questions or assistance.'
    },
    {
      property: 'og:url',
      content: 'https://icelin.my/contact'
    },
    {
      name: 'twitter:title',
      content: 'Contact Us | ICELIn 2026 Conference'
    },
    {
      name: 'twitter:description',
      content: 'Contact the ICELIn 2026 Conference team for support and information.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://icelin.my/contact'
    }
  ]
})

// Form data
const formData = reactive({
  name: '',
  email: '',
  message: ''
})

// Form validation
const valid = ref(false)
const snackbar = ref(false)

// Validation rules
const nameRules = [
  (v: string) => !!v || 'Name is required',
  (v: string) => v.length >= 2 || 'Name must be at least 2 characters'
]

const emailRules = [
  (v: string) => !!v || 'Email is required',
  (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid'
]

const messageRules = [
  (v: string) => !!v || 'Message is required',
  (v: string) => v.length >= 10 || 'Message must be at least 10 characters'
]

// Send email function
const sendEmail = () => {
  if (!valid.value) return

  // Create email content
  const subject = encodeURIComponent(`Contact Form Submission from ${formData.name}`)
  const body = encodeURIComponent(
    `Hello,\n\n` +
    `You have received a new message from your website contact form.\n\n` +
    `Name: ${formData.name}\n` +
    `Email: ${formData.email}\n\n` +
    `Message:\n${formData.message}\n\n` +
    `Best regards,\n${formData.name}`
  )

  // Create mailto link
  const mailtoLink = `mailto:icelin@elmu.edu.my?subject=${subject}&body=${body}`

  // Open email client
  window.location.href = mailtoLink

  // Show success message
  snackbar.value = true

  // Optional: Clear form after sending
  // formData.name = ''
  // formData.email = ''
  // formData.message = ''
}
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