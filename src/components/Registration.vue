<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-btn 
          color="primary" 
          variant="outlined" 
          prepend-icon="mdi-home" 
          @click="$router.push('/')"
          class="mb-4"
        >
          Back to Home
        </v-btn>
        <h1 class="text-h3 mb-6 text-center">Conference Registration</h1>
      </v-col>
      <!-- Fees Table -->
      <RegistrationFeesTable />
      <!-- Registration Form (Expanded) -->
      <v-col cols="12" md="12">
        <v-card>
          <v-card-title class="text-h5">Registration Form</v-card-title>
          <v-card-text>
            <v-progress-linear v-if="isCheckingApi" indeterminate color="primary" class="mb-4" />
            <v-alert v-else-if="!isApiAvailable" type="error" class="mb-4">
              Registration is currently unavailable. Please try again later.
            </v-alert>
            <v-form ref="form" v-model="valid">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field v-model="formData.firstName" label="First Name" required :rules="nameRules" :disabled="!isApiAvailable || isCheckingApi" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="formData.lastName" label="Last Name" required :rules="nameRules" :disabled="!isApiAvailable || isCheckingApi" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="formData.email" label="Email" type="email" required :rules="emailRules" :disabled="!isApiAvailable || isCheckingApi" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="formData.phone" label="Phone Number" required :rules="phoneRules" :disabled="!isApiAvailable || isCheckingApi" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="formData.affiliation" label="Affiliation/Institution" required :rules="nameRules" :disabled="!isApiAvailable || isCheckingApi" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="formData.country" label="Country" required :rules="nameRules" :disabled="!isApiAvailable || isCheckingApi" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-select v-model="formData.category" :items="categories" label="Registration Category" required :disabled="!isApiAvailable || isCheckingApi" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-select v-model="formData.feeType" :items="feeTypes" label="Fee Type" required :disabled="!isApiAvailable || isCheckingApi" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-select v-model="formData.excursion" :items="excursionOptions" label="Excursion/Networking Tour" required :disabled="!isApiAvailable || isCheckingApi" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="formData.presentationTitle" label="Presentation Title (if presenter)" :disabled="!isApiAvailable || isCheckingApi" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-select v-model="formData.dietary" :items="dietaryOptions" label="Dietary Preferences" :disabled="!isApiAvailable || isCheckingApi" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-file-input v-model="formData.paperFile" label="Upload Paper/Journal (PDF)" accept=".pdf" prepend-icon="mdi-upload" :disabled="!isApiAvailable || isCheckingApi" />
                </v-col>
                <v-col cols="12" md="6">
                  <v-file-input v-model="formData.supportingDocs" label="Supporting Documents (ZIP, PDF, DOCX)" accept=".zip,.pdf,.doc,.docx" prepend-icon="mdi-upload" :disabled="!isApiAvailable || isCheckingApi" multiple />
                </v-col>
                <v-col cols="12">
                  <v-textarea v-model="formData.specialRequirements" label="Special Requirements" rows="3" :disabled="!isApiAvailable || isCheckingApi" />
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" :disabled="!valid || !isApiAvailable || isCheckingApi" @click="submitForm">
              Submit Registration
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  affiliation: string
  country: string
  category: string
  feeType: string
  excursion: string
  presentationTitle: string
  dietary: string
  paperFile: File | null
  supportingDocs: File[]
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
  phone: '',
  affiliation: '',
  country: '',
  category: '',
  feeType: '',
  excursion: '',
  presentationTitle: '',
  dietary: '',
  paperFile: null,
  supportingDocs: [],
  specialRequirements: ''
})

const categories = [
  'Student',
  'Academic',
  'Industry'
]
const feeTypes = [
  'Local Participant (Presenter)',
  'Local Participant (Non-Presenter)',
  'International Participant (Presenter)',
  'International Participant (Non-Presenter)'
]
const excursionOptions = [
  'None',
  'Local Excursion/Networking Tour',
  'International Excursion/Networking Tour'
]
const dietaryOptions = [
  'None',
  'Vegetarian',
  'Vegan',
  'Halal',
  'Kosher',
  'Gluten-Free',
  'Other'
]

const emailRules = [
  (v: string) => !!v || 'Email is required',
  (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid'
]
const nameRules = [
  (v: string) => !!v || 'This field is required'
]
const phoneRules = [
  (v: string) => !!v || 'Phone number is required',
  (v: string) => /^\+?\d{7,15}$/.test(v) || 'Enter a valid phone number'
]

const isApiAvailable = ref(false)
const isCheckingApi = ref(true)
let apiCheckInterval: number | undefined

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
      body: JSON.stringify(formData.value)
    })
    const result = await response.json()
    if (response.ok && result.success) {
      alert('Registration submitted successfully! Check your email for confirmation.')
      formData.value = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        affiliation: '',
        country: '',
        category: '',
        feeType: '',
        excursion: '',
        presentationTitle: '',
        dietary: '',
        paperFile: null,
        supportingDocs: [],
        specialRequirements: ''
      }
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
</style>
