<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">Paper Submission Guidelines</h1>
      </v-col>

      <!-- Full Paper Guidelines -->
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="text-h5">Full Paper Guidelines</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-subheader>Format Requirements</v-list-subheader>
              <v-list-item
                v-for="(requirement, index) in paperRequirements"
                :key="index"
                :prepend-icon="requirement.icon"
              >
                <v-list-item-title>{{ requirement.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ requirement.description }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>

            <v-divider class="my-4"></v-divider>

            <v-list>
              <v-list-subheader>Paper Structure</v-list-subheader>
              <v-list-item
                v-for="(section, index) in paperStructure"
                :key="index"
                :prepend-icon="section.icon"
              >
                <v-list-item-title>{{ section.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ section.description }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>

            <v-btn
              color="primary"
              class="mt-4"
              block
              href="@/assets/templates/paper_template.zip"
              download
            >
              Download Paper Template
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Abstract Guidelines -->
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="text-h5">Abstract Submission Guidelines</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-subheader>Abstract Requirements</v-list-subheader>
              <v-list-item
                v-for="(requirement, index) in abstractRequirements"
                :key="index"
                :prepend-icon="requirement.icon"
              >
                <v-list-item-title>{{ requirement.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ requirement.description }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>

            <v-alert
              color="info"
              icon="mdi-information"
              class="mt-4"
            >
              Submit your abstract before proceeding with the full paper submission.
            </v-alert>
          </v-card-text>
        </v-card>

        <!-- Submission Form -->
        <v-card class="mt-4">
          <v-card-title class="text-h5">Submit Abstract</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="abstractForm.title"
                label="Paper Title"
                required
                :rules="[v => !!v || 'Title is required']"
              ></v-text-field>

              <v-textarea
                v-model="abstractForm.abstract"
                label="Abstract"
                required
                :rules="[
                  v => !!v || 'Abstract is required',
                  v => v.length <= 300 || 'Abstract must be 300 words or less'
                ]"
                counter="300"
                rows="6"
              ></v-textarea>

              <v-text-field
                v-model="abstractForm.keywords"
                label="Keywords (comma-separated)"
                required
                :rules="[v => !!v || 'Keywords are required']"
                hint="Enter 3-5 keywords"
                persistent-hint
              ></v-text-field>

              <v-select
                v-model="abstractForm.track"
                :items="tracks"
                label="Conference Track"
                required
              ></v-select>

              <v-file-input
                v-model="abstractForm.file"
                label="Upload Abstract (PDF)"
                accept=".pdf"
                :rules="[v => !!v || 'Please upload your abstract']"
              ></v-file-input>
            </v-form>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :disabled="!valid"
              @click="submitAbstract"
            >
              Submit Abstract
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const valid = ref(false)
const form = ref(null)

const abstractForm = ref({
  title: '',
  abstract: '',
  keywords: '',
  track: '',
  file: null
})

const tracks = [
  'Academic Research in Popular Culture',
  'Digital Media Studies',
  'Interactive Technologies',
  'Industry-Academia Collaboration',
  'Future Technologies'
]

const paperRequirements = [
  {
    icon: 'mdi-file-document-outline',
    title: 'File Format',
    description: 'Submit in PDF format, generated from LaTeX or Word template'
  },
  {
    icon: 'mdi-text-box-outline',
    title: 'Length',
    description: '8 pages maximum, including figures and references'
  },
  {
    icon: 'mdi-format-font',
    title: 'Font',
    description: 'Times New Roman, 10pt (main text)'
  },
  {
    icon: 'mdi-format-align-left',
    title: 'Margins',
    description: '1 inch (2.54 cm) on all sides'
  }
]

const paperStructure = [
  {
    icon: 'mdi-format-title',
    title: 'Title and Abstract',
    description: 'Clear, concise title and structured abstract'
  },
  {
    icon: 'mdi-book-open-variant',
    title: 'Introduction',
    description: 'Background, motivation, and research objectives'
  },
  {
    icon: 'mdi-clipboard-text',
    title: 'Methodology',
    description: 'Research methods and experimental setup'
  },
  {
    icon: 'mdi-chart-bar',
    title: 'Results and Discussion',
    description: 'Findings, analysis, and implications'
  },
  {
    icon: 'mdi-bookmark-outline',
    title: 'References',
    description: 'IEEE citation format'
  }
]

const abstractRequirements = [
  {
    icon: 'mdi-counter',
    title: 'Word Limit',
    description: '300 words maximum'
  },
  {
    icon: 'mdi-tag-multiple',
    title: 'Keywords',
    description: '3-5 relevant keywords'
  },
  {
    icon: 'mdi-format-list-bulleted',
    title: 'Structure',
    description: 'Problem statement, methodology, results, and conclusions'
  },
  {
    icon: 'mdi-file-check',
    title: 'Review Criteria',
    description: 'Originality, relevance, and technical quality'
  }
]

const submitAbstract = async () => {
  try {
    // Here you would implement the actual submission logic
    alert('Abstract submitted successfully! You will receive a confirmation email shortly.')
    abstractForm.value = {
      title: '',
      abstract: '',
      keywords: '',
      track: '',
      file: null
    }
  } catch (error) {
    console.error('Error:', error)
    alert('There was an error submitting your abstract. Please try again.')
  }
}
</script>

<style scoped>
.v-list-item {
  margin-bottom: 0.5rem;
}
</style> 