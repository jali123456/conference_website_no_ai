<template>
  <v-container class="py-8">
    <!-- Header Section -->
    <v-row class="mb-6">
      <v-col cols="12">
        <div class="d-flex align-center justify-space-between mb-6">
          <v-btn 
            color="primary" 
            variant="outlined" 
            prepend-icon="mdi-arrow-left" 
            @click="$router.push('/')"
            size="large"
          >
            Back to Home
          </v-btn>
        </div>
        
        <div class="text-center mb-8">
          <h1 class="text-h2 font-weight-bold text-primary mb-2">Conference Registration</h1>
          <p class="text-h6 text-grey-darken-1">Join us for an exceptional conference experience</p>
          <v-divider class="mx-auto mt-4" style="max-width: 200px;"></v-divider>
        </div>
      </v-col>
    </v-row>

    <!-- Fees Table Section -->
    <v-row class="mb-8">
      <RegistrationFeesTable />
    </v-row>

    <!-- Registration Form Section -->
    <v-row>
      <v-col cols="12">
        <v-card elevation="4" class="rounded-lg">
          <v-card-title class="bg-grey-lighten-4 pa-6">
            <v-icon class="me-3 text-primary">mdi-account-edit</v-icon>
            <span class="text-h4 font-weight-medium">Registration Form</span>
          </v-card-title>
          
          <v-card-text class="pa-8">
            <!-- Status Indicators -->
            <v-progress-linear 
              v-if="isCheckingApi" 
              indeterminate 
              color="primary" 
              class="mb-6" 
              height="6"
            />
            
            <v-alert 
              v-else-if="!isApiAvailable" 
              type="error" 
              class="mb-6"
              prominent
              border="start"
              icon="mdi-alert-circle"
            >
              <v-alert-title>Service Unavailable</v-alert-title>
              Registration is currently unavailable. Please try again later or contact support.
            </v-alert>

            <v-form ref="form" v-model="valid" :class="{ 'form-disabled': !isApiAvailable || isCheckingApi }">
              <!-- Personal Information Section -->
              <div class="mb-8">
                <h3 class="text-h5 text-primary mb-4 d-flex align-center">
                  <v-icon class="me-2">mdi-account</v-icon>
                  Personal Information
                </h3>
                <v-divider class="mb-6"></v-divider>
                
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field 
                      v-model="formData.firstName" 
                      label="First Name" 
                      required 
                      :rules="nameRules" 
                      :disabled="!isApiAvailable || isCheckingApi"
                      variant="outlined"
                      prepend-inner-icon="mdi-account"
                      class="mb-2"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field 
                      v-model="formData.lastName" 
                      label="Last Name" 
                      required 
                      :rules="nameRules" 
                      :disabled="!isApiAvailable || isCheckingApi"
                      variant="outlined"
                      prepend-inner-icon="mdi-account"
                      class="mb-2"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field 
                      v-model="formData.email" 
                      label="Email Address" 
                      type="email" 
                      required 
                      :rules="emailRules" 
                      :disabled="!isApiAvailable || isCheckingApi"
                      variant="outlined"
                      prepend-inner-icon="mdi-email"
                      class="mb-2"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field 
                      v-model="formData.phone" 
                      label="Phone Number" 
                      required 
                      :rules="phoneRules" 
                      :disabled="!isApiAvailable || isCheckingApi"
                      variant="outlined"
                      prepend-inner-icon="mdi-phone"
                      class="mb-2"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-text-field 
                      v-model="formData.affiliation" 
                      label="Affiliation/Institution" 
                      required 
                      :rules="nameRules" 
                      :disabled="!isApiAvailable || isCheckingApi"
                      variant="outlined"
                      prepend-inner-icon="mdi-office-building"
                      class="mb-2"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select 
                      v-model="formData.country" 
                      :items="countryOptions" 
                      label="Country" 
                      required 
                      :rules="nameRules" 
                      :disabled="!isApiAvailable || isCheckingApi"
                      variant="outlined"
                      prepend-inner-icon="mdi-earth"
                      class="mb-2"
                    />
                  </v-col>
                </v-row>
              </div>

              <!-- Registration Details Section -->
              <div class="mb-8">
                <h3 class="text-h5 text-primary mb-4 d-flex align-center">
                  <v-icon class="me-2">mdi-ticket</v-icon>
                  Registration Details
                </h3>
                <v-divider class="mb-6"></v-divider>
                
                <v-row>
                  <v-col cols="12" md="6">
                    <v-select 
                      v-model="formData.category" 
                      :items="categories" 
                      label="Registration Category" 
                      required 
                      :disabled="!isApiAvailable || isCheckingApi"
                      variant="outlined"
                      prepend-inner-icon="mdi-tag"
                      class="mb-2"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select 
                      v-model="formData.feeType" 
                      :items="feeTypes" 
                      label="Fee Type" 
                      required 
                      :disabled="!isApiAvailable || isCheckingApi"
                      variant="outlined"
                      prepend-inner-icon="mdi-currency-usd"
                      class="mb-2"
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-select 
                      v-model="formData.excursion" 
                      :items="excursionOptions" 
                      label="Excursion/Networking Tour" 
                      required 
                      :disabled="!isApiAvailable || isCheckingApi"
                      variant="outlined"
                      prepend-inner-icon="mdi-map-marker"
                      class="mb-2"
                    />
                  </v-col>
                </v-row>
              </div>

              <!-- Presentation Information Section -->
              <div class="mb-8">
                <h3 class="text-h5 text-primary mb-4 d-flex align-center">
                  <v-icon class="me-2">mdi-presentation</v-icon>
                  Presentation Information
                </h3>
                <v-divider class="mb-6"></v-divider>
                
                <v-row>
                  <v-col cols="12">
                    <v-text-field 
                      v-if="formData.feeType === 'Local Participant (Presenter)' || formData.feeType === 'International Participant (Presenter)'"
                      v-model="formData.presentationTitle" 
                      label="Presentation Title" 
                      :disabled="!isApiAvailable || isCheckingApi"
                      variant="outlined"
                      prepend-inner-icon="mdi-microphone"
                      hint="Enter your presentation title"
                      persistent-hint
                      class="mb-2"
                    />
                    
                    <v-text-field 
                      v-else
                      value="You're not presenting, please leave this field empty"
                      label="Presentation Title" 
                      readonly
                      variant="outlined"
                      prepend-inner-icon="mdi-microphone"
                      class="mb-2"
                      color="orange"
                      :style="{ '--v-field-input-color': '#ff9800' }"
                    />
                  </v-col>
                  
                  <v-col cols="12">
                    <v-select 
                      v-if="formData.feeType === 'Local Participant (Presenter)' || formData.feeType === 'International Participant (Presenter)'"
                      v-model="formData.presentationType" 
                      :items="['Oral', 'Poster']" 
                      label="Type of Presentation" 
                      required
                      :disabled="!isApiAvailable || isCheckingApi"
                      variant="outlined"
                      prepend-inner-icon="mdi-presentation-play"
                      class="mb-2"
                    />
                    
                    <v-text-field 
                      v-else
                      value="You're not presenting, please leave this field empty"
                      label="Type of Presentation" 
                      readonly
                      variant="outlined"
                      prepend-inner-icon="mdi-presentation-play"
                      class="mb-2"
                      color="orange"
                      :style="{ '--v-field-input-color': '#ff9800' }"
                    />
                  </v-col>
                </v-row>
              </div>

              <!-- File Uploads Section -->
              <div class="mb-8">
                <h3 class="text-h5 text-primary mb-4 d-flex align-center">
                  <v-icon class="me-2">mdi-file-upload</v-icon>
                  Document Uploads
                </h3>
                <v-divider class="mb-6"></v-divider>
                
                <v-row>
                  <v-col cols="12" md="6">
                    <v-file-input 
                      v-model="formData.paperFile" 
                      label="Upload Paper/Journal" 
                      accept=".pdf" 
                      prepend-icon="mdi-file-pdf-box"
                      :disabled="!isApiAvailable || isCheckingApi"
                      variant="outlined"
                      hint="PDF format only"
                      persistent-hint
                      class="mb-2"
                      show-size
                    />
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-file-input 
                      v-model="formData.supportingDocs" 
                      label="Supporting Documents" 
                      accept=".zip,.pdf,.doc,.docx" 
                      prepend-icon="mdi-file-multiple"
                      :disabled="!isApiAvailable || isCheckingApi"
                      variant="outlined"
                      multiple
                      hint="ZIP, PDF, DOC, DOCX formats"
                      persistent-hint
                      class="mb-2"
                      show-size
                    />
                  </v-col>
                </v-row>
              </div>

              <!-- Additional Information Section -->
              <div class="mb-6">
                <h3 class="text-h5 text-primary mb-4 d-flex align-center">
                  <v-icon class="me-2">mdi-information</v-icon>
                  Additional Information
                </h3>
                <v-divider class="mb-6"></v-divider>
                
                <v-row>
                  <v-col cols="12">
                    <v-textarea 
                      v-model="formData.specialRequirements" 
                      label="Special Requirements" 
                      rows="4" 
                      :disabled="!isApiAvailable || isCheckingApi"
                      variant="outlined"
                      prepend-inner-icon="mdi-note-text"
                      hint="Please specify any accessibility needs or other special requirements"
                      persistent-hint
                      no-resize
                    />
                  </v-col>
                </v-row>
              </div>
            </v-form>
          </v-card-text>
          
          <!-- Form Actions -->
          <v-card-actions class="pa-8 pt-0">
            <v-spacer></v-spacer>
            <v-btn 
              color="primary" 
              size="x-large"
              :disabled="!valid || !isApiAvailable || isCheckingApi" 
              @click="submitForm"
              prepend-icon="mdi-send"
              class="px-8"
              elevation="2"
            >
              Submit Registration
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Footer Note -->
    <v-row class="mt-8">
      <v-col cols="12">
        <v-alert 
          type="info" 
          variant="tonal"
          border="start"
          class="text-center"
        >
          <v-icon class="me-2">mdi-information</v-icon>
          All fields marked as required must be completed. You will receive a confirmation email after successful registration.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { getCountryNames } from './Country_Data'

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  affiliation: string
  country: string
  category: string
  feeType: string
  presentationType: string
  excursion: string
  presentationTitle: string
  paperFile: File | null
  supportingDocs: File[]
  specialRequirements: string
}

const countryOptions = getCountryNames()
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
  presentationType: '',
  excursion: '',
  presentationTitle: '',
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
    // Set presentationType to 'N/A' if not a presenter
    const presenterTypes = [
      'Local Participant (Presenter)',
      'International Participant (Presenter)'
    ]
    if (!presenterTypes.includes(formData.value.feeType)) {
      formData.value.presentationType = 'N/A'
    }

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
        presentationType: '',
        excursion: '',
        presentationTitle: '',
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
.form-disabled :deep(.v-field--disabled) {
  opacity: 0.6;
  background-color: #f5f5f5 !important;
}

.form-disabled :deep(.v-field--disabled .v-field__input) {
  color: #666 !important;
}
</style>
