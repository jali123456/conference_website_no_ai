<template>
  <div>
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
              v-model="formData.first_name" 
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
              v-model="formData.last_name" 
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
              v-model="formData.phone_number" 
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
              v-model="formData.fee_type" 
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
              v-model="formData.excursion_networking" 
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
              v-if="formData.fee_type === 'Local Participant (Presenter)' || formData.fee_type === 'International Participant (Presenter)'"
              v-model="formData.presentation_title" 
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
              v-if="formData.fee_type === 'Local Participant (Presenter)' || formData.fee_type === 'International Participant (Presenter)'"
              v-model="formData.presentation_type" 
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
        <!-- Document Uploads Section -->
        <div class="mb-8">
        <h3 class="text-h5 text-primary mb-4 d-flex align-center">
            <v-icon class="me-2">mdi-file-upload</v-icon>
            Document Uploads
        </h3>
        <v-divider class="mb-6"></v-divider>
        
        <v-row>
            <v-col cols="12" md="6">
            <v-file-input
                v-model="formData.uploaded_papers"
                label="Upload Paper/Journal"
                accept=".pdf,.doc,.docx"
                prepend-icon="mdi-file-pdf-box"
                :disabled="!isApiAvailable || isCheckingApi"
                variant="outlined"
                hint="PDF, DOC, DOCX formats only (Max 10MB)"
                persistent-hint
                class="mb-2"
                show-size
                :rules="paperFileRules"
            />
            </v-col>
            <v-col cols="12" md="6">
            <v-file-input
                v-model="formData.supporting_documents"
                label="Supporting Documents"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                prepend-icon="mdi-file-multiple"
                multiple
                :disabled="!isApiAvailable || isCheckingApi"
                variant="outlined"
                hint="PDF, DOC, DOCX, JPG, JPEG, PNG formats (Max 5MB per file)"
                persistent-hint
                class="mb-2"
                show-size
                :rules="supportingDocsRules"
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
              v-model="formData.special_requirements" 
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

      <!-- Submit Button -->
      <div class="text-center">
        <v-btn
          color="primary"
          size="x-large"
          :disabled="!valid || !isApiAvailable || isCheckingApi"
          :loading="isSubmitting" 
          @click="submitForm"
          prepend-icon="mdi-send"
          class="px-8"
          elevation="2"
        >
          Submit Registration
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { getCountryNames } from './Country_Data'; // Adjust path as needed

// Props
const props = defineProps<{
  userEmail?: string
}>()

// Interfaces
interface FormData {
  first_name: string
  last_name: string
  email: string
  phone_number: string
  affiliation: string
  country: string
  category: string
  fee_type: string
  presentation_type: string
  excursion_networking: string
  presentation_title: string
  uploaded_papers: File | null
  supporting_documents: File[]
  special_requirements: string
}
interface VForm {
  reset: () => void
  validate: () => Promise<{ valid: boolean }>
  resetValidation: () => void
}

// Refs
const valid = ref(false)
const form = ref<VForm | null>(null)
const isSubmitting = ref(false)
const isApiAvailable = ref(false)
const isCheckingApi = ref(true)

// Form Data
const formData = ref<FormData>({
  first_name: '',
  last_name: '',
  email: props.userEmail || '',
  phone_number: '',
  affiliation: '',
  country: '',
  category: '',
  fee_type: '',
  presentation_type: '',
  excursion_networking: '',
  presentation_title: '',
  uploaded_papers: null,
  supporting_documents: [],
  special_requirements: ''
})

// Watch for userEmail changes
watch(() => props.userEmail, (newEmail) => {
  if (newEmail) {
    formData.value.email = newEmail
  }
}, { immediate: true })

// Options
const countryOptions = getCountryNames()
const categories = ['Student', 'Academic', 'Industry']
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

// Validation Rules
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

// Validation Rules
const paperFileRules = [
  (v: File | null) => {
    if (!v) return true
    const fileName = v.name.toLowerCase()
    const allowedExtensions = ['pdf', 'doc', 'docx']
    const ext = fileName.split('.').pop() || ''
    const maxSize = 10 * 1024 * 1024
    if (!allowedExtensions.includes(ext)) return 'Only PDF, DOC, DOCX allowed.'
    if (v.size > maxSize) return `Max 10MB. Current: ${(v.size / (1024 * 1024)).toFixed(2)}MB`
    return true
  }
]

const supportingDocsRules = [
  (v: File[]) => {
    if (!v || v.length === 0) return true
    const allowedExtensions = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png']
    const maxSize = 5 * 1024 * 1024

    for (const file of v) {
      const ext = file.name.split('.').pop()?.toLowerCase()
      if (!ext || !allowedExtensions.includes(ext)) {
        return `Invalid format for "${file.name}".`
      }
      if (file.size > maxSize) {
        return `File "${file.name}" exceeds 5MB.`
      }
    }
    return true
  }
]
// API Check
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
    console.error("API ping failed:", e)
    isApiAvailable.value = false
  } finally {
    if (showLoading) isCheckingApi.value = false
  }
}

// Form Submission
const submitForm = async () => {
  console.log('submitForm called')
  const { valid: formIsValid } = await (form.value as VForm).validate()
  if (!formIsValid) {
    alert('Please correct the errors in the form.')
    return
  }

  // Check if user is logged in
  const userData = JSON.parse(localStorage.getItem('user') || '{}')
  if (!userData.id) {
    alert('You must be logged in to register. Please login first.')
    return
  }

  isSubmitting.value = true

  try {
    // Set presentation fields to N/A if not a presenter
    const presenterFeeTypes = [
      'Local Participant (Presenter)',
      'International Participant (Presenter)'
    ]
    if (!presenterFeeTypes.includes(formData.value.fee_type)) {
      formData.value.presentation_type = 'N/A'
      formData.value.presentation_title = ''
    }

    // Prepare FormData
    const dataToSend = new FormData()
    
    // Add user_id from localStorage
    dataToSend.append('user_id', userData.id.toString())
    
    // Append text fields
    Object.entries(formData.value).forEach(([key, value]) => {
      if (key !== 'uploaded_papers' && key !== 'supporting_documents') {
        dataToSend.append(key, value as string)
      }
    })

    // Append uploaded paper file (single file)
    if (formData.value.uploaded_papers) {
    dataToSend.append('uploaded_papers', formData.value.uploaded_papers)
    console.log('Added uploaded paper:', formData.value.uploaded_papers.name)
    }

    if (formData.value.supporting_documents && formData.value.supporting_documents.length > 0) {
    formData.value.supporting_documents.forEach((file, index) => {
        dataToSend.append('supporting_documents[]', file)
        console.log(`Added supporting document ${index}:`, file.name)
    })
    }

    // Log what we're sending for debugging
    console.log('FormData contents:')
    for (let [key, value] of dataToSend.entries()) {
      if (value instanceof File) {
        console.log(`${key}: ${value.name} (${value.size} bytes)`)
      } else {
        console.log(`${key}: ${value}`)
      }
    }

    // Send request
    const response = await fetch('https://api.jali123456.win/register.php', {
      method: 'POST',
      body: dataToSend
    })

    const result = await response.json()
    if (response.ok && result.success) {
      alert('Registration submitted successfully! Check your email for confirmation.')
      
      // Reset form
        formData.value = {
        first_name: '',
        last_name: '',
        email: props.userEmail || '',
        phone_number: '',
        affiliation: '',
        country: '',
        category: '',
        fee_type: '',
        presentation_type: '',
        excursion_networking: '',
        presentation_title: '',
        uploaded_papers: null,
        supporting_documents: [],
        special_requirements: ''
        }

      if (form.value) {
        form.value.reset()
        form.value.resetValidation()
      }
    } else {
      throw new Error(result.message || 'Registration failed due to an unknown error.')
    }
  } catch (error) {
    console.error('Error submitting registration:', error)
    alert('There was an error submitting your registration. ' + (error instanceof Error ? error.message : 'Please try again.'))
  } finally {
    isSubmitting.value = false
  }
}

// Lifecycle
onMounted(() => {
  pingApi(true)
  apiCheckInterval = window.setInterval(() => {
    pingApi(false)
  }, 60000)
})

onUnmounted(() => {
  if (apiCheckInterval) clearInterval(apiCheckInterval)
})
</script>

<style scoped>
.form-disabled :deep(.v-field--disabled) {
  opacity: 0.6;
  background-color: #f5f5f5 !important;
}

.form-disabled :deep(.v-field--disabled .v-field__input) {
  color: #666 !important;
}
</style>