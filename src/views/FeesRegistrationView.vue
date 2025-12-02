<!-- FeesRegistrationView.vue -->

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
      <div class="d-flex align-center justify-center mb-6">
        <v-divider class="flex-grow-1 border-opacity-50"></v-divider>
        <h1 class="text-h mx-4 text-center font-weight-bold">Fees & Registration</h1>
        <v-divider class="flex-grow-1 border-opacity-50"></v-divider>
      </div>
      </v-col>
      <v-col cols="12" md="12">
        <v-card class="mb-4 scopus-popup pa-3" elevation="8">
          <div class="d-flex align-center justify-space-between">
            <div class="d-flex align-center">
              <v-icon size="28" class="mr-2 scopus-icon-yellow">mdi-star</v-icon>
              <div>
                <div class="text-h6 font-weight-bold scopus-title">Scopus Indexed Journal Conference</div>
                <div class="text-body-2">All accepted papers will be published on Scopus indexed journal (With Additional Charges applied)</div>
              </div>
            </div>

          </div>
        </v-card>
      </v-col>
      <!-- Fees Table -->
      <RegistrationFeesTable/>
      
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
                <v-card 
                  :class="{ 'cursor-pointer': index === 0 }"
                  @click="index === 0 ? openRegistration() : null"
                >
                  <v-card-title :class="{ 'text-primary': index === 0 }">{{ step.title }}</v-card-title>
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
                :class="{ 'cursor-pointer': index === 0 }"
                @click="index === 0 ? openRegistration() : null"
              >
                <v-card-text>
                  <div class="d-flex align-center mb-2">
                    <v-icon :color="step.color" size="small" class="mr-2">
                      mdi-circle
                    </v-icon>
                    <span class="text-caption font-weight-medium">Step {{ index + 1 }}: {{ step.title }}</span>
                  </div>
                  <h3 class="text-h6 mb-2" :class="{ 'text-primary': index === 0 }">{{ step.title }}</h3>
                  <p class="text-body-2 mb-0">{{ step.description }}</p>
                </v-card-text>
              </v-card>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      
      <!-- Payment Details Section -->
      <v-col cols="12" class="mt-4">
        <v-card>
          <v-card-title class="text-h5 font-weight-bold">Payment Details</v-card-title>
          <v-card-text>
            
            <!-- Local Participants Section -->
            <div class="mb-6">
              <h3 class="text-h6 font-weight-bold mb-3">Local Participants</h3>
              <p class="text-body-1 mb-4">Payment should be made via the following bank account:</p>
              <div class="d-flex mb-2">
                <span class="text-subtitle-2 font-weight-bold">Bank Name:</span>
                <span class="text-body-1 ml-2">MBSB BANK BERHAD</span>
              </div>
              <div class="d-flex mb-2">
                <span class="text-subtitle-2 font-weight-bold">Account Name:</span>
                <span class="text-body-1 ml-2">RIGS</span>
              </div>
              <div class="d-flex mb-4">
                <span class="text-subtitle-2 font-weight-bold">Account Number:</span>
                <span class="text-body-1 ml-2">9005007000010200</span>
              </div>
              
              <ul class="text-body-2 ml-4">
                <li class="mb-2">Payment can be made via Bank Draft, payable to ELMU University or Internet Banking.</li>
                <li class="mb-2">For Internet Banking, please enter "icelin2026" in the Payment Reference or Recipient Reference field. Ensure the account holder's full name appears clearly in the transaction slip. If using a third-party account, please include your name manually in the Other Details or Remarks field.</li>
                <li class="mb-2">Kindly email a digital copy of the payment slip to: <strong>icelin@elmu.edu.my</strong></li>
              </ul>
            </div>
            
            <!-- International Participants Section -->
            <div>
              <h3 class="text-h6 font-weight-bold mb-3">International Participants</h3>
              <p class="text-body-1 mb-4">Payment should be made via the following bank account:</p>
              
              <div class="d-flex mb-2">
                <span class="text-subtitle-2 font-weight-bold">Bank Name:</span>
                <span class="text-body-1 ml-2">MBSB BANK BERHAD</span>
              </div>
              <div class="d-flex mb-2">
                <span class="text-subtitle-2 font-weight-bold">Account Name:</span>
                <span class="text-body-1 ml-2">RIGS</span>
              </div>
              <div class="d-flex mb-2">
                <span class="text-subtitle-2 font-weight-bold">Account Number:</span>
                <span class="text-body-1 ml-2">9005007000010200</span>
              </div>
              <div class="d-flex mb-4">
                <span class="text-subtitle-2 font-weight-bold">Swift Code:</span>
                <span class="text-body-1 ml-2">AFBQMYKL</span>
              </div>
              
              <ul class="text-body-2 ml-4">
                <li class="mb-2">All payments must be accompanied by proof of payment (e.g., bank-in slip or official receipt) and emailed to the Secretariat at <strong>icelin@elmu.edu.my</strong>.</li>
                <li class="mb-2">Participants who make payments via bank transfer are required to send a digital copy of the payment slip for our records.</li>
                <li class="mb-2">Please note that payments via Telegraphic Transfer (TT) may incur additional charges depending on your bank. Kindly check with your respective bank.</li>
              </ul>
            </div>
            
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Registration Form -->
      <v-col justify="center" align="center" cols="12" class="mt-6">
        <v-card>
          <v-card-title class="text-h5">Ready to Register?</v-card-title>
          <div class="d-flex align-center justify-center">
            <span class="text-body-2">Registration opens on&nbsp;</span>
            <span class="text-body-1 font-weight-bold primary--text">2 January 2026</span>
          </div>
          <v-card-text>
            <v-btn color="primary" @click="openRegistration">
              Register Now
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
function openRegistration() {
  alert("Sry but the Registration open on 2 January 2026")
  // window.open('https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=HYyN1A9sYE64VQszNyyLObOQ6rcy5rVHq95xJgsnFWlUQjZWTDFQMzhFT01ERjNIUjBNSjNBR0ZFWS4u', '_blank')
}

useHead({
  title: 'ICELIn 2026 Registration & Fees Details',
  meta: [
    {
      name: 'description',
      content: 'registration fees local and international, early bird, payment details, registration process for the ICELIn 2026 Conference.Registrations opening date.'
    },
    {
      property: 'og:title',
      content: 'ICELIn26 Registration & Fees Details'
    },
    {
      property: 'og:description',
      content: 'Registration Date is 2 January 2026, Early bird date 2 Jan 2026 - 15 June 2026'
    },
    {
      property: 'og:url',
      content: 'https://icelin.my/fees-registration'
    },
    {
      name: 'twitter:title',
      content: 'ICELIn 2026 Registration & Fees Details'
    },
    {
      name: 'twitter:description',
      content: 'Registration Date is 2 January 2026, Early bird date 2 Jan 2026 - 15 June 2026'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://icelin.my/fees-registration'
    }
  ]
})

// import { ref } from 'vue'
// import { onMounted, onUnmounted } from 'vue'

// // Type definitions for better TypeScript support
// interface FormData {
//   firstName: string
//   lastName: string
//   email: string
//   category: string
//   specialRequirements: string
// }

// interface VForm {
//   reset: () => void
//   validate: () => Promise<{ valid: boolean }>
//   resetValidation: () => void
// }

// const valid = ref(false)
// const form = ref<VForm | null>(null)

// const formData = ref<FormData>({
//   firstName: '',
//   lastName: '',
//   email: '',
//   category: '',
//   specialRequirements: ''
// })

// const categories = [
//   'Student',
//   'Academic',
//   'Industry'
// ]

// // Properly typed validation rules
// const emailRules = [
//   (v: string) => !!v || 'Email is required',
//   (v: string) => /.+@.+\..+/.test(v) || 'Email must be valid'
// ]

// const nameRules = [
//   (v: string) => !!v || 'This field is required'
// ]

const registrationSteps = [
  {
    title: 'Register Now',
    description: 'Fill in the form to complete the registration with your details',
    color: 'primary'
  },
  {
    title: 'Confirmation Email',
    description: 'We will send you an email to confirm your registration details',
    color: 'info'
  },
  {
    title: 'Payment',
    description: 'Process the payment for your registration category and send the payment details through email icelin@elmu.edu.my',
    color: 'warning'
  },
  {
    title: 'Complete Registration',
    description: 'Once we confirm the payment we will give you your registration details and a receipt through email icelin@elmu.edu.my',
    color: 'success'
  }
]

// // API connectivity state
// const isApiAvailable = ref(false)
// const isCheckingApi = ref(true)
// let apiCheckInterval: number | undefined

// // Ping the API with a 10s timeout
// const pingApi = async (showLoading = false) => {
//   if (showLoading) isCheckingApi.value = true
//   try {
//     const controller = new AbortController()
//     const timeoutId = setTimeout(() => controller.abort(), 10000)
//     const response = await fetch('https://api.jali123456.win/register.php', {
//       method: 'HEAD',
//       signal: controller.signal
//     })
//     clearTimeout(timeoutId)
//     isApiAvailable.value = response.ok
//   } catch (e) {
//     isApiAvailable.value = false
//   } finally {
//     if (showLoading) isCheckingApi.value = false
//   }
// }

// onMounted(() => {
//   pingApi(true)
//   apiCheckInterval = window.setInterval(() => {
//     pingApi(false)
//   }, 60000)
// })

// onUnmounted(() => {
//   if (apiCheckInterval) clearInterval(apiCheckInterval)
// })

// const submitForm = async () => {
//   try {
//     const response = await fetch('https://api.jali123456.win/register.php', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         firstName: formData.value.firstName,
//         lastName: formData.value.lastName,
//         email: formData.value.email,
//         category: formData.value.category,
//         specialRequirements: formData.value.specialRequirements
//       })
//     })

//     const result = await response.json()

//     if (response.ok && result.success) {
//       alert('Registration submitted successfully! Check your email for confirmation.')
//       // Reset form data
//       formData.value = {
//         firstName: '',
//         lastName: '',
//         email: '',
//         category: '',
//         specialRequirements: ''
//       }
//       // Reset form validation - now properly typed
//       if (form.value) {
//         form.value.reset()
//       }
//     } else {
//       throw new Error(result.message || 'Registration failed')
//     }
//   } catch (error) {
//     console.error('Error:', error)
//     alert('There was an error submitting your registration. Please try again.')
//   }
// }
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
  .scopus-popup {
    border-left: 6px solid #f44336;
    background: linear-gradient(90deg, rgba(255,235,59,0.06), rgba(244,67,54,0.02));
    border-radius: 8px;
    transform: translateY(-4px);
  }
  .scopus-icon-yellow {
    color: #FFD600;
  }
  .scopus-title {
    color: #b71c1c;
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
</style>