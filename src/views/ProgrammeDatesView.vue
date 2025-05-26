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
            <v-timeline>
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
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Conference Programme -->
      <v-col cols="12">
          <v-card>
            <v-card-title class="text-h5">Conference Programme</v-card-title>
            <v-card-text>
              <v-tabs v-model="activeTab">
                <v-tab value="day1">Day 1</v-tab>
                <v-tab value="day2">Day 2</v-tab>
              </v-tabs>

              <v-window v-model="activeTab">
                <v-window-item
                  v-for="(day, index) in programme"
                  :key="index"
                  :value="'day' + (index + 1)"
                >
                  <v-subheader class="text-h6 mt-4 mb-2">
                    {{ day[0].date }}
                  </v-subheader>
                  <v-list lines="two">
                    <template v-for="(session, sIndex) in day" :key="sIndex">
                      <v-list-subheader>{{ session.time }}</v-list-subheader>
                      <v-list-item>
                        <v-list-item-title class="text-black">{{ session.title }}</v-list-item-title>
                        <v-list-item-subtitle class="text-black">
                          {{ session.location }}
                          <template v-if="session.details && Array.isArray(session.details)">
                            <div v-for="(detail, dIndex) in session.details" :key="dIndex">
                              {{ detail }}
                            </div>
                          </template>
                          <template v-if="session.speaker">
                            <br>Speaker: {{ session.speaker }}
                          </template>
                        </v-list-item-subtitle>
                      </v-list-item>
                      <v-divider v-if="sIndex < day.length - 1"></v-divider>
                    </template>
                  </v-list>
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
    date: '1 August, 2025',
    title: 'Website & Social Media Launching',
    description: 'Official website and social media platforms go live',
    color: 'primary'
  },
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
      location: 'TBA'
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
</style> 