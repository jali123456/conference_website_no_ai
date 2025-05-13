<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">Guidelines & Publication</h1>
      </v-col>

      <!-- Paper Submission Guidelines -->
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="text-h5">Paper Submission Guidelines</v-card-title>
          <v-card-text>
            <v-stepper>
              <v-stepper-header>
                <template v-for="(step, index) in submissionSteps" :key="index">
                  <v-stepper-item
                    :value="index + 1"
                    :complete="index < 3"
                  >
                    {{ index + 1 }}
                  </v-stepper-item>
                  <v-divider v-if="index < submissionSteps.length - 1"></v-divider>
                </template>
              </v-stepper-header>

              <v-stepper-window>
                <v-stepper-window-item
                  v-for="(step, index) in submissionSteps"
                  :key="index"
                  :value="index + 1"
                >
                  <v-card-text>
                    <h3 class="text-h6 mb-2">{{ step.title }}</h3>
                    <p class="mb-4">{{ step.description }}</p>
                    <v-list>
                      <v-list-item
                        v-for="(requirement, rIndex) in step.requirements"
                        :key="rIndex"
                        :prepend-icon="requirement.icon"
                      >
                        {{ requirement.text }}
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                </v-stepper-window-item>
              </v-stepper-window>
            </v-stepper>

            <v-btn
              color="primary"
              class="mt-4"
              block
              href="mailto:submissions@conference2024.com"
            >
              Submit Your Paper
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Oral Presentation Guidelines -->
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="text-h5">Oral Presentation Guidelines</v-card-title>
          <v-card-text>
            <v-expansion-panels>
              <v-expansion-panel
                v-for="(guideline, index) in presentationGuidelines"
                :key="index"
              >
                <v-expansion-panel-title>
                  <v-icon start>{{ guideline.icon }}</v-icon>
                  {{ guideline.title }}
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div class="py-2">
                    <p>{{ guideline.description }}</p>
                    <ul v-if="guideline.points" class="mt-2">
                      <li v-for="(point, pIndex) in guideline.points" :key="pIndex">
                        {{ point }}
                      </li>
                    </ul>
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>

            <v-alert
              color="info"
              icon="mdi-information"
              class="mt-4"
            >
              For technical support or questions about presentations, contact: support@conference2024.com
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const submissionSteps = [
  {
    title: 'Prepare Your Manuscript',
    description: 'Format your paper according to the conference template',
    requirements: [
      { text: 'Use the provided LaTeX or Word template', icon: 'mdi-file-document' },
      { text: 'Maximum 8 pages including references', icon: 'mdi-text-box' },
      { text: 'Follow IEEE formatting guidelines', icon: 'mdi-format-align-left' }
    ]
  },
  {
    title: 'Submit Abstract',
    description: 'Submit your abstract for initial review',
    requirements: [
      { text: '300 words maximum', icon: 'mdi-text' },
      { text: 'Include 3-5 keywords', icon: 'mdi-tag-multiple' },
      { text: 'Clearly state research objectives', icon: 'mdi-bullseye-arrow' }
    ]
  },
  {
    title: 'Full Paper Submission',
    description: 'Submit your complete paper after abstract acceptance',
    requirements: [
      { text: 'Include all figures and tables', icon: 'mdi-image' },
      { text: 'Proofread thoroughly', icon: 'mdi-spellcheck' },
      { text: 'Submit in PDF format', icon: 'mdi-file-pdf-box' }
    ]
  },
  {
    title: 'Review Process',
    description: 'Wait for peer review results',
    requirements: [
      { text: 'Address reviewer comments', icon: 'mdi-comment-text' },
      { text: 'Submit revised version if required', icon: 'mdi-refresh' },
      { text: 'Prepare for presentation', icon: 'mdi-presentation' }
    ]
  }
]

const presentationGuidelines = [
  {
    title: 'Time Management',
    icon: 'mdi-clock-outline',
    description: '20 minutes for presentation, 5 minutes for Q&A',
    points: [
      'Prepare 15-20 slides maximum',
      'Practice to ensure timing',
      'Leave time for questions'
    ]
  },
  {
    title: 'Slide Design',
    icon: 'mdi-presentation',
    description: 'Create clear and engaging slides',
    points: [
      'Use high-contrast colors',
      'Limit text per slide',
      'Include relevant visuals',
      'Use consistent formatting'
    ]
  },
  {
    title: 'Technical Requirements',
    icon: 'mdi-laptop',
    description: 'Prepare your presentation materials',
    points: [
      'Bring presentation in PDF and PowerPoint formats',
      'Test animations beforehand',
      'Arrive 15 minutes before your session'
    ]
  },
  {
    title: 'Delivery Tips',
    icon: 'mdi-account-voice',
    description: 'Effective presentation techniques',
    points: [
      'Speak clearly and at a moderate pace',
      'Maintain eye contact with audience',
      'Be prepared for questions',
      'Stay within time limits'
    ]
  }
]
</script>

<style scoped>
.v-expansion-panels {
  margin-top: 1rem;
}
</style> 