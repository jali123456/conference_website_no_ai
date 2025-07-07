<!-- ProgrammeDatesView.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">Programme & Important Dates</h1>
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
              <v-tab value="day1">Day 1</v-tab>
              <v-tab value="day2">Day 2</v-tab>
            </v-tabs>

            <!-- Desktop/Tablet Timeline Layout -->
            <v-window v-if="!$vuetify.display.xs && !$vuetify.display.sm" v-model="activeTab">
              <v-window-item
                v-for="(day, index) in programme"
                :key="index"
                :value="'day' + (index + 1)"
              >
                <v-subheader class="text-h6 mt-4 mb-2 text-primary text-center">
                  {{ day[0].date }}
                </v-subheader>
                <v-timeline side="end" align="start" class="programme-timeline">
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
                      <v-card-subtitle class="text-caption text-grey-darken-1 mb-1">{{ session.location }}</v-card-subtitle>
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

const activeTab = ref('day1')

const importantDates = [
  {
    date: '1 October, 2025',
    title: 'Call For Abstracts',
    description: 'Start of abstract submission period',
    color: 'info'
  },
  {
    date: '1 December, 2025',
    title: 'Acceptance Notification',
    description: 'Acceptance Notification for the Absctracts',
    color: 'info'
  },
  {
    date: '31 March, 2026',
    title: 'Full Paper submission dateline ',
    description: 'Full paper submission dateline open',
    color: 'success'
  },
  {
    date: 'May 15 – June 15, 2026',
    title: 'Early Bird Registration Open',
    description: 'Discounted registration period for early participants',
    color: 'success'
  },
  {
    date: 'June 1, 2026',
    title: 'Camera Ready Submission',
    description: 'Deadline for submitting final camera-ready papers',
    color: 'warning'
  },
  {
    date: 'June 30, 2026',
    title: 'Registration Deadline',
    description: 'Last day to complete conference registration',
    color: 'warning'
  },
  {
    date: 'August 12 – 13, 2026',
    title: 'Conference Dates',
    description: 'Main conference sessions and activities',
    color: 'error'
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
        "Recitation of Du'a",
        "Negaraku",
        "Welcoming speech by Dean School of Investigative Sciences & Chairman ICELIn26",
        "Welcoming speech by Premier of Sarawak",
        "Welcoming speech by VC ELMU",
        "Officiating Speech and Opening by Premier of Sarawak",
        "Group Photo Session"
      ]
    },
    {
      time: '10:00 - 10:50',
      title: 'FORUM SESSION: Title TBC',
      location: 'TBA',
      details:[
        "Moderator: Datuk Mohd Shahrizan Bin Che Mat Din (Deputy Vice-Chancellor Academic Affairs, ELMU)",
        `Panellists: 1.Yang Amat Arif Tan Sri Abdul Rahman bin Sebli
        2.YBhg. Tan Sri Dato' Sri Haji Azam bin Baki
        3.YBhg. Tan Sri Idrus Harun
        4.Professor Datuk Dr. Kassim Noor Mohamed`,
      ]
    },
    {
      time: '10:50 - 11:30',
      title: 'Morning Break',
      location: 'TBA'
    },
    {
      time: '11:30 - 13:00',
      title: 'Parallel Session 1a',
      location: 'TBA'
    },
    {
      time: '11:30 - 13:00',
      title: 'Parallel Session 1b',
      location: 'TBA'
    },
    {
      time: '11:30 - 13:00',
      title: 'Parallel Session 1c',
      location: 'TBA'
    },
    {
      time: '13:00 - 14:30',
      title: 'Lunch Break',
      location: 'TBA'
    },
    {
      time: '14:30 - 17:00',
      title: 'Parallel Session 2a',
      location: 'TBA'
    },
    {
      time: '14:30 - 17:00',
      title: 'Parallel Session 2b',
      location: 'TBA'
    },
    {
      time: '14:30 - 17:00',
      title: 'Parallel Session 2c',
      location: 'TBA'
    },
    {
      time: '17:00',
      title: 'Tea Break',
      location: 'TBA'
    },
    {
      time: '19:45 - 22:30',
      title: 'Conference Dinner',
      location: 'TBA'
    }
  ],
  // Day 2
  [
    {
      time: '08:30 - 10:30',
      title: 'Parallel Session 3a',
      location: 'TBA',
      date: '13 August 2026'
    },
    {
      time: '08:30 - 10:30',
      title: 'Parallel Session 3b',
      location: 'TBA'
    },
    {
      time: '08:30 - 10:30',
      title: 'Parallel Session 3c',
      location: 'TBA'
    },
    {
      time: '10:30 - 10:40',
      title: 'Morning Break',
      location: 'TBA'
    },
    {
      time: '10:40 - 13:00',
      title: 'Parallel Session 4a',
      location: 'TBA'
    },
    {
      time: '10:40 - 13:00',
      title: 'Parallel Session 4b',
      location: 'TBA'
    },
    {
      time: '10:40 - 13:00',
      title: 'Parallel Session 4c',
      location: 'TBA'
    },
    {
      time: '13:00 - 14:30',
      title: 'Lunch Break',
      location: 'TBA'
    },
    {
      time: '14:30 - 15:30',
      title: 'Workshop',
      location: 'TBA'
    },
    {
      time: '15:30 - 16:00',
      title: 'Tea Break',
      location: 'TBA'
    },
    {
      time: '16:00 - 17:00',
      title: 'Closing Remarks',
      location: 'TBA'
    }
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