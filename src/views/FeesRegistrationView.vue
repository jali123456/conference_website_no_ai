<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">Fees & Registration</h1>
      </v-col>

      <!-- Fees Table -->
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="text-h5">Registration Fees</v-card-title>
          <v-card-text>
          <v-table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Price per participant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Local Participant</td>
                <td>RM1,200</td>
              </tr>
              <tr>
                <td>Local Student</td>
                <td>RM800</td>
              </tr>
              <tr>
                <td>Non-presenting Participant</td>
                <td>RM1,000</td>
              </tr>
              <tr>
                <td>Dinner Fee(Optional)</td>
                <td>RM200</td>
              </tr>
              <tr>
                <td>International Student</td>
                <td>USD 350</td>
              </tr>
              <tr>
                <td>International Participant</td>
                <td>USD 700</td>
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
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="text-h5">Registration Process</v-card-title>
          <v-card-text>
            <v-timeline>
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
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Registration Form -->
      <v-col cols="12" class="mt-6">
        <v-card>
          <v-card-title class="text-h5">Registration Form</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="formData.firstName"
                    label="First Name"
                    required
                    :rules="[v => !!v || 'First name is required']"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="formData.lastName"
                    label="Last Name"
                    required
                    :rules="[v => !!v || 'Last name is required']"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="formData.email"
                    label="Email"
                    type="email"
                    required
                    :rules="emailRules"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-select
                    v-model="formData.category"
                    :items="categories"
                    label="Registration Category"
                    required
                  ></v-select>
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    v-model="formData.specialRequirements"
                    label="Special Requirements"
                    rows="3"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :disabled="!valid"
              @click="submitForm"
            >
              Submit Registration
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const valid = ref(false)
const form = ref(null)

const formData = ref({
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

const emailRules = [
  v => !!v || 'Email is required',
  v => /.+@.+\..+/.test(v) || 'Email must be valid'
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

const submitForm = async () => {
  try {
    // Replace with your EmailJS service ID, template ID, and public key
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        to_name: `${formData.value.firstName} ${formData.value.lastName}`,
        to_email: formData.value.email,
        category: formData.value.category,
        message: 'Thank you for registering for Conference 2024!'
      },
      'YOUR_PUBLIC_KEY'
    )
    alert('Registration submitted successfully! Check your email for confirmation.')
    formData.value = {
      firstName: '',
      lastName: '',
      email: '',
      category: '',
      specialRequirements: ''
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