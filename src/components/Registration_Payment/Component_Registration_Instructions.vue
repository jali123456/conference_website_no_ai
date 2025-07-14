<template>
<v-container>
    <v-row>
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
    </v-row>
</v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { registrationSteps } from './Registrationsteps_Data';

export default defineComponent({
  name: 'RegistrationPage',
  data(){
    return{
        registrationSteps
    }
  }
});
</script>