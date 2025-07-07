<!-- FeesRegistrationView.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">Fees & Registration</h1>
      </v-col>

      <!-- Fees Table -->
      <v-col cols="12" md="6">
        <v-card class="mb-6 elevation-3">
          <v-card-title class="text-h5 bg-primary text-white">Registration Fees (Local)</v-card-title>
          <v-card-text>
            <v-table class="fees-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Price per participant</th>
                  <th class="early-bird-header">Early Bird Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Local Participant (Presenter)</td>
                  <td>RM1,600</td>
                  <td class="early-bird">RM1,550</td>
                </tr>
                <tr>
                  <td>Local Participant (Non-Presenter)</td>
                  <td>RM1,200</td>
                  <td class="early-bird">RM1,150</td>
                </tr>
                <tr>
                  <td>Local Excursion/Networking Tour Fee</td>
                  <td>RM160</td>
                  <td class="early-bird">RM130</td>
                </tr>
              </tbody>
            </v-table>
            <v-alert
              color="info"
              icon="mdi-information"
              class="mt-4"
            >
              Early Bird registration ends on starts on 15 May 2026 - 15 June 2026
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="mb-6 elevation-3">
          <v-card-title class="text-h5 bg-secondary text-white">Registration Fees (International)</v-card-title>
          <v-card-text>
            <v-table class="fees-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Price per participant</th>
                  <th class="early-bird-header">Early Bird Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>International Participant (Presenter)</td>
                  <td>USD 500</td>
                  <td class="early-bird">USD 490</td>
                </tr>
                <tr>
                  <td>International Participant (Non-Presenter)</td>
                  <td>USD 400</td>
                  <td class="early-bird">USD 390</td>
                </tr>
                <tr>
                  <td>International Excursion/Networking Tour Fee</td>
                  <td>USD 50</td>
                  <td class="early-bird">USD 45</td>
                </tr>
              </tbody>
            </v-table>
            <v-alert
              color="info"
              icon="mdi-information"
              class="mt-4"
            >
              Early Bird registration ends on starts on 15 May 2026 - 15 June 2026
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Registration Process -->
      <v-col cols="12" md="12">
        <v-card>
          <v-card-title class="text-h5">Registration Process</v-card-title>
          <v-card-text>
            <v-timeline v-if="!$vuetify.display.xs && !$vuetify.display.sm">
              <v-timeline-item
                v-for="(step, index) in registrationSteps"
                :key="index"
                :dot-color="step.color"
                size="small"
              >
                <v-card>
                  <v-card-title>{{ step.title }}</v-card-title>
                  <v-card-text>{{ step.description }}</v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>
            <div v-else class="mobile-register-form">
              <v-card
              v-for="(step, index) in registrationSteps"
                :key="index"
                class="mb-4"
                variant="outlined"
              >
              <v-card-text>
                <div class="d-flex align-center mb-2">
                  <v-icon 
                   :color="step.color" 
                    size="small" 
                    class="mr-2"
                  >
                    mdi-circle
                  </v-icon>
                  <span class="text-caption font-weight-medium">Step {{ index + 1 }}:{{ step.title }}</span>
                </div>
                <h3 class="text-h6 mb-2">{{ step.title }}</h3>
                <p class="text-body-2 mb-0">{{ step.description }}</p>
              </v-card-text>
            </v-card>
          </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Registration Form -->
      <v-col cols="12" class="mt-6">
        <v-card>
          <v-card-title class="text-h5">Ready to Register?</v-card-title>
          <v-card-text>
            <v-btn color="primary" @click="$router.push({ name: 'registration' })">
              Register Now
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'

// Type definitions for better TypeScript support
interface FormData {
  firstName: string
  lastName: string
  email: string
  category: string
  specialRequirements: string
}

interface VForm {
  reset: () => void
  validate: () => Promise<{ valid: boolean }>
  resetValidation: () => void
}

const valid = ref(false)
const form = ref<VForm | null>(null)

const formData = ref<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  category: '',
  specialRequirements: ''
})

const categories = [
  'Student',
  'Academic',
  'Industry'
]

// Properly typed validation rules
const emailRules = [
  (v: string) => !!v || 'Email is required',
  (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid'
]

const nameRules = [
  (v: string) => !!v || 'This field is required'
]

const registrationSteps = [
  {
    title: 'Fill the Form',
    description: 'Complete the registration form with your details',
    color: 'primary'
  },
  {
    title: 'Payment',
    description: 'Process the payment for your registration category',
    color: 'secondary'
  },
  {
    title: 'Confirmation',
    description: 'Receive confirmation email with registration details',
    color: 'success'
  }
]

// API connectivity state
const isApiAvailable = ref(false)
const isCheckingApi = ref(true)
let apiCheckInterval: number | undefined

// Ping the API with a 10s timeout
const pingApi = async (showLoading = false) => {
  if (showLoading) isCheckingApi.value = true
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000)
    const response = await fetch('https://api.jali123456.win/register.php', {
      method: 'HEAD',
      signal: controller.signal
    })
    clearTimeout(timeoutId)
    isApiAvailable.value = response.ok
  } catch (e) {
    isApiAvailable.value = false
  } finally {
    if (showLoading) isCheckingApi.value = false
  }
}

onMounted(() => {
  pingApi(true)
  apiCheckInterval = window.setInterval(() => {
    pingApi(false)
  }, 60000)
})

onUnmounted(() => {
  if (apiCheckInterval) clearInterval(apiCheckInterval)
})

const submitForm = async () => {
  try {
    const response = await fetch('https://api.jali123456.win/register.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.value.firstName,
        lastName: formData.value.lastName,
        email: formData.value.email,
        category: formData.value.category,
        specialRequirements: formData.value.specialRequirements
      })
    })

    const result = await response.json()

    if (response.ok && result.success) {
      alert('Registration submitted successfully! Check your email for confirmation.')
      // Reset form data
      formData.value = {
        firstName: '',
        lastName: '',
        email: '',
        category: '',
        specialRequirements: ''
      }
      // Reset form validation - now properly typed
      if (form.value) {
        form.value.reset()
      }
    } else {
      throw new Error(result.message || 'Registration failed')
    }
  } catch (error) {
    console.error('Error:', error)
    alert('There was an error submitting your registration. Please try again.')
  }
}
</script>

<style scoped>
.v-table {
  width: 100%;
}
.fees-table {
  width: 100%;
  margin-top: 16px;
}
.bg-primary {
  background-color: #1976d2 !important;
}
.bg-secondary {
  background-color: #424242 !important;
}
.text-white {
  color: #ffffff !important;
}
.elevation-3 {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
}
.early-bird {
  color: #388e3c;
  font-weight: 500;
}
.early-bird-header {
  background-color: #e8f5e9;
}
</style>