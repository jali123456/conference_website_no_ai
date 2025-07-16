<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">Downloads</h1>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-row>
              <v-col
                v-for="(category, index) in downloadCategories"
                :key="index"
                cols="12"
                md="6"
              >
                <v-card
                height="100%"
                >
                  <v-card-title class="text-h6">
                    <v-icon start>{{ category.icon }}</v-icon>
                    {{ category.title }}
                  </v-card-title>

                  <v-list>
                    <v-list-item
                      v-for="(file, fIndex) in category.files"
                      :key="fIndex"
                      :prepend-icon="file.icon"
                    >
                      <v-list-item-title>{{ file.name }}</v-list-item-title>
                      <v-list-item-subtitle>{{ file.description }}</v-list-item-subtitle>
                      <template v-slot:append>
                        <v-btn
                          color="primary"
                          variant="text"
                          :href="file.url"
                          download
                          :disabled="!file.url"
                        >
                          Download
                          <v-icon end>mdi-download</v-icon>
                        </v-btn>
                      </template>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Additional Resources -->
      <v-col cols="12" class="mt-4">
        <v-card>
          <v-card-title class="text-h5">
            <v-icon start>mdi-link-variant</v-icon>
            Additional Resources
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="(resource, index) in additionalResources"
                :key="index"
                :prepend-icon="resource.icon"
                :href="resource.url"
                target="_blank"
              >
                <v-list-item-title>{{ resource.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ resource.description }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const downloadCategories = [
  {
    title: 'Templates',
    icon: 'mdi-file-document-outline',
    files: [
      {
        name: 'Poster Template',
        description: 'Poster template for the presenter',
        icon: 'mdi-microsoft-powerpoint',
        url: '@/assets/templates/paper_template_word.docx'
      },
      {
        name: 'Presentation Template',
        description: 'PowerPoint template for oral presentations',
        icon: 'mdi-microsoft-powerpoint',
        url: '@/assets/templates/presentation_template.pptx'
      }

    ]
  },
  {
    title: 'Guidelines',
    icon: 'mdi-book-open-page-variant',
    files: [
      {
        name: 'Presentation Guidelines',
        description: 'Instructions for oral presentations',
        icon: 'mdi-file-pdf-box',
        url: '@/assets/docs/presentation_guidelines.pdf'
      },
    ]
  },
  {
    title: 'Forms',
    icon: 'mdi-form-select',
    files: [
      {
        name: 'Registration Form',
        description: 'Offline registration form',
        icon: 'mdi-file-pdf-box',
        url: '@/assets/forms/registration_form.pdf'
      },
    ]
  },
  {
    title: 'Conference Materials',
    icon: 'mdi-folder-outline',
    files: [
      {
        name: 'Conference Schedule',
        description: 'Detailed program schedule',
        icon: 'mdi-calendar',
        url: '@/assets/docs/conference_schedule.pdf'
      },
      {
        name: 'Venue Map',
        description: 'Conference venue and facilities map',
        icon: 'mdi-map',
        url: '@/assets/docs/venue_map.pdf'
      },
            {
        name: 'Program Booklet',
        description: 'Conference booklet and informations',
        icon: 'mdi-book',
        url: '@/assets/docs/booklet.pdf'
      }
    ]
  }
]

const additionalResources = [
  // {
  //   name: 'IEEE Citation Guidelines',
  //   description: 'Official IEEE reference formatting guidelines',
  //   icon: 'mdi-book-open-variant',
  //   url: 'https://ieee.org/citations'
  // },
  // {
  //   name: 'LaTeX Tutorial',
  //   description: 'Basic tutorial for LaTeX users',
  //   icon: 'mdi-language-cpp',
  //   url: 'https://latex-tutorial.com'
  // },
  {
    name: 'Conference FAQ',
    description: 'Frequently asked questions about the conference',
    icon: 'mdi-frequently-asked-questions',
    url: '/faq'
  },
]
</script>

<style scoped>
.v-list-item {
  margin-bottom: 0.5rem;
}

:deep(.v-list-item),
:deep(.v-list-item-title),
:deep(.v-list-item-subtitle),
:deep(.v-list-item__content),
:deep(.v-icon),
:deep(.v-card-title),
:deep(.v-card-subtitle) {
  color: rgba(0, 0, 0, 0.87) !important;
}

:deep(.v-btn) {
  color: #1976D2 !important;
}
</style> 