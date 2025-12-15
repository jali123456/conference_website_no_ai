<!-- ProgrammeDatesView.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
      <div class="d-flex align-center justify-center mb-6">
        <v-divider class="flex-grow-1 border-opacity-50 text-no-wrap"></v-divider>
        <h1 class="text-h mx-4 text-center font-weight-bold">Programme & Important Dates</h1>
        <v-divider class="flex-grow-1 border-opacity-50 text-no-wrap"></v-divider>
      </div>
      </v-col>

      <!-- Important Dates -->
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h5">Important Dates</v-card-title>
          <v-card-text>
            <!-- Desktop/Tablet Timeline -->
            <v-timeline v-if="!$vuetify.display.xs && !$vuetify.display.sm">
              <v-timeline-item
                v-for="(date, index) in importantDates"
                :key="index"
                :dot-color="date.color"
                size="small"
                class="text-wrap"
              >
                <template v-slot:opposite>
                  <div class="text-caption text-wrap text-break">{{ date.date }}</div>
                </template>
                <v-card class="text-wrap">
                  <v-card-title class="text-wrap text-break">{{ date.title }}</v-card-title>
                  <v-card-text class="text-wrap text-break">{{ date.description }}</v-card-text>
                </v-card>
              </v-timeline-item>
            </v-timeline>

            <!-- Mobile List Layout -->
            <div v-else class="mobile-dates">
              <v-card
                v-for="(date, index) in importantDates"
                :key="index"
                class="mb-4"
                variant="outlined"
              >
                <v-card-text>
                  <div class="d-flex align-center mb-2">
                    <v-icon 
                      :color="date.color" 
                      size="small" 
                      class="mr-2"
                    >
                      mdi-circle
                    </v-icon>
                    <span class="text-caption font-weight-medium">{{ date.date }}</span>
                  </div>
                  <h3 class="text-h6 mb-2">{{ date.title }}</h3>
                  <p class="text-body-2 mb-0">{{ date.description }}</p>
                </v-card-text>
              </v-card>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Conference Programme -->
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h5">Conference Programme</v-card-title>
          <v-card-text>
            <v-tabs v-model="activeTab" class="mb-4">
              <v-tab class="text-h6 font-weight-medium" value="day1">Day 1</v-tab>
              <v-tab class="text-h6 font-weight-medium" value="day2">Day 2</v-tab>
              <v-tab class="text-h6 font-weight-medium" value="day3">Day 3</v-tab>
            </v-tabs>

            <!-- Desktop/Tablet Timeline Layout -->
            <v-window v-if="!$vuetify.display.xs && !$vuetify.display.sm" v-model="activeTab">
              <v-window-item
                v-for="(day, index) in programme"
                :key="index"
                :value="'day' + (index + 1)"
              >
                <div class="text-h6 mt-4 mb-2 text-primary text-center">
                  {{ day[0].date }}
                </div>
                <div v-if="day[0].date === '14 August 2026'" class="d-flex justify-center align-center" style="min-height: 200px;">
                  <h2 class="text-h2 font-weight-bold">Sarawak Heritage Village (Optional)</h2>
                </div>
                <v-timeline v-else justify="auto" side="end" align="start" class="programme-timeline">
                  <v-timeline-item
                    v-for="(session, sIndex) in day"
                    :key="sIndex"
                    :dot-color="'primary'"
                    size="small"
                  >
                    <template v-slot:opposite>
                      <div class="font-weight-bold text-caption text-primary">{{ session.time }}</div>
                    </template>
                    <v-card class="mb-2 programme-session-card">
                      <v-card-title class="text-h6 text-wrap">{{ session.title }}</v-card-title>
                      <v-card-subtitle class="text-body-2 font-weight-black">{{ session.location }}</v-card-subtitle>
                      <v-card-text v-if="session.details && Array.isArray(session.details)">
                        <ul class="programme-details-list">
                          <li v-for="(detail, dIndex) in session.details" :key="dIndex">{{ detail }}</li>
                        </ul>
                      </v-card-text>
                    </v-card>
                  </v-timeline-item>
                </v-timeline>
              </v-window-item>
            </v-window>

            <!-- Mobile List Layout for Programme -->
            <v-window v-else v-model="activeTab">
              <v-window-item
                v-for="(day, index) in programme"
                :key="index"
                :value="'day' + (index + 1)"
              >
                <div class="mobile-dates">
                  <div class="text-h6 text-primary text-center mb-4">{{ day[0].date }}</div>
                  <v-card
                    v-for="(session, sIndex) in day"
                    :key="sIndex"
                    class="mb-4 programme-session-card"
                    variant="outlined"
                  >
                    <v-card-text>
                      <div class="d-flex align-center mb-2">
                        <v-icon color="primary" size="small" class="mr-2">mdi-clock-outline</v-icon>
                        <span class="text-caption font-weight-medium">{{ session.time }}</span>
                      </div>
                      <h3 class="text-h6 mb-1">{{ session.title }}</h3>
                      <div class="text-caption text-grey-darken-1 mb-2">{{ session.location }}</div>
                      <ul v-if="session.details && Array.isArray(session.details)" class="programme-details-list">
                        <li v-for="(detail, dIndex) in session.details" :key="dIndex">{{ detail }}</li>
                      </ul>
                    </v-card-text>
                  </v-card>
                </div>
              </v-window-item>
            </v-window>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Programme & Important Dates | ICELIn 2026',
  meta: [
    {
      name: 'description',
      content: 'Check the full conference programme and all important dates for ICELIn 2026, including abstract submission, registration deadlines, and event schedule.'
    },
    {
      property: 'og:title',
      content: 'Programme & Important Dates | ICELIn 2026'
    },
    {
      property: 'og:description',
      content: 'Stay informed about the ICELIn 2026 Conference schedule and key deadlines.'
    },
    {
      property: 'og:url',
      content: 'https://icelin.my/programme-dates'
    },
    {
      name: 'twitter:title',
      content: 'Programme & Important Dates | ICELIn 2026'
    },
    {
      name: 'twitter:description',
      content: 'See the full programme and important dates for the ICELIn 2026 Conference.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://icelin.my/programme-dates'
    }
  ]
})

const activeTab = ref('day1')

const importantDates = [
  {
    date: '1 October, 2025',
    title: 'Call For Abstracts',
    description: 'Start of abstract submission period',
    color: 'info'
  },
  {
    date: '15 April, 2026',
    title: 'Acceptance Notification',
    description: 'Acceptance Notification for the Absctracts',
    color: 'info'
  },
  {
    date: '31 May, 2026',
    title: 'Full Paper Submission/Camera Ready Deadline',
    description: 'Full paper submission dateline open',
    color: 'success'
  },
  {
    date: '2 January – 15 June, 2026',
    title: 'Early Bird Registration Open',
    description: 'Discounted registration period for early participants',
    color: 'success'
  },
  {
    date: '15 July, 2026',
    title: 'Registration Deadline',
    description: 'Last day to complete conference registration',
    color: 'warning'
  },
  {
    date: 'August 12 – 13, 2026',
    title: 'Conference Dates',
    description: 'Main conference sessions and activities',
    color: 'error'
  },
  {
    date: '14 August, 2026',
    title: 'Networking Tour',
    description: 'Optional tour to Sarawak Heritage Village',
    color: 'primary'
  }
]

const programme = [
  // Day 1
  [
    {
      time: '08:00 - 09:00',
      title: 'Registration',
      location: 'The Waterfront Hotel, Kuching',
      date: '12 August 2026'
    },
    {
      time: '09:00 - 10:00',
      title: 'Opening Ceremony',
      location: 'TBA',
      details: [
      ]
    },
    {
      time: '10:00 - 10:50',
      title: 'FORUM SESSION: Title TBA',
      location: 'TBA',
      details:[
        "Moderator: TBA",
        `Panellists: TBA`,
      ]
    },
    {
      time: '10:50 - 11:30',
      title: 'Morning Break',
      location: ''
    },
    {
      time: '11:30 - 13:00',
      title: 'Parallel Session 1a',
      location: ''
    },
    {
      time: '11:30 - 13:00',
      title: 'Parallel Session 1b',
      location: ''
    },
    {
      time: '11:30 - 13:00',
      title: 'Parallel Session 1c',
      location: ''
    },
    {
      time: '13:00 - 14:30',
      title: 'Lunch Break',
      location: ''
    },
    {
      time: '14:30 - 17:00',
      title: 'Parallel Session 2a',
      location: ''
    },
    {
      time: '14:30 - 17:00',
      title: 'Parallel Session 2b',
      location: ''
    },
    {
      time: '14:30 - 17:00',
      title: 'Parallel Session 2c',
      location: ''
    },
    {
      time: '17:00',
      title: 'Tea Break',
      location: ''
    },
    {
      time: '19:45 - 22:30',
      title: 'Conference Dinner',
      location: ''
    }
  ],
  // Day 2
  [
    {
      time: '08:30 - 10:30',
      title: 'Parallel Session 3a',
      location: '',
      date: '13 August 2026'
    },
    {
      time: '08:30 - 10:30',
      title: 'Parallel Session 3b',
      location: ''
    },
    {
      time: '08:30 - 10:30',
      title: 'Parallel Session 3c',
      location: ''
    },
    {
      time: '10:30 - 10:40',
      title: 'Morning Break',
      location: ''
    },
    {
      time: '10:40 - 13:00',
      title: 'Parallel Session 4a',
      location: ''
    },
    {
      time: '10:40 - 13:00',
      title: 'Parallel Session 4b',
      location: ''
    },
    {
      time: '10:40 - 13:00',
      title: 'Parallel Session 4c',
      location: ''
    },
    {
      time: '13:00 - 14:30',
      title: 'Lunch Break',
      location: ''
    },
    {
      time: '14:30 - 15:30',
      title: 'Workshop',
      location: ''
    },
    {
      time: '15:30 - 16:00',
      title: 'Tea Break',
      location: ''
    },
    {
      time: '16:00 - 17:00',
      title: 'Closing Remarks',
      location: ''
    }
  ],
  //day 3
  [
    {
      time: '',
      title: 'TBA',
      location: 'TBA',
      date: '14 August 2026'
    },
  ]
];
</script>

<style scoped>
.v-timeline {
  padding-top: 2rem;
}

.mobile-dates {
  padding-top: 1rem;
}
/* Programme Timeline Styling */
.programme-timeline {
  padding-top: 1.5rem;
}
.programme-session-card {
  background: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.programme-details-list {
  margin: 0;
  padding-left: 1.2em;
  font-size: 1rem;
}
.programme-details-list li {
  margin-bottom: 0.25em;
}
</style>