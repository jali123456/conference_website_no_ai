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
            <v-timeline align="start">
              <v-timeline-item
                v-for="(date, index) in importantDates"
                :key="index"
                :dot-color="date.color"
                size="small"
              >
                <template v-slot:opposite>
                  <div class="text-caption">{{ date.date }}</div>
                </template>
                <v-card>
                  <v-card-title>{{ date.title }}</v-card-title>
                  <v-card-text>{{ date.description }}</v-card-text>
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
              <v-tab value="day3">Day 3</v-tab>
            </v-tabs>

            <v-window v-model="activeTab">
              <v-window-item
                v-for="(day, index) in programme"
                :key="index"
                :value="'day' + (index + 1)"
              >
                <v-list lines="two">
                  <template v-for="(session, sIndex) in day" :key="sIndex">
                    <v-list-subheader>{{ session.time }}</v-list-subheader>
                    <v-list-item>
                      <v-list-item-title>{{ session.title }}</v-list-item-title>
                      <v-list-item-subtitle>
                        {{ session.location }}
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
    date: 'January 15, 2024',
    title: 'Abstract Submission Deadline',
    description: 'Last day to submit abstracts for review',
    color: 'primary'
  },
  {
    date: 'February 1, 2024',
    title: 'Abstract Acceptance Notification',
    description: 'Authors will be notified of acceptance',
    color: 'info'
  },
  {
    date: 'March 1, 2024',
    title: 'Early Bird Registration Deadline',
    description: 'Last day for discounted registration',
    color: 'success'
  },
  {
    date: 'April 1, 2024',
    title: 'Full Paper Submission',
    description: 'Deadline for full paper submission',
    color: 'warning'
  },
  {
    date: 'May 15-17, 2024',
    title: 'Conference Dates',
    description: 'Main conference days',
    color: 'error'
  }
]

const programme = [
  // Day 1
  [
    {
      time: '08:00 - 09:00',
      title: 'Registration & Coffee',
      location: 'Main Hall'
    },
    {
      time: '09:00 - 10:30',
      title: 'Opening Ceremony & Keynote Speech',
      location: 'Grand Auditorium',
      speaker: 'Dr. Sarah Johnson'
    },
    {
      time: '11:00 - 12:30',
      title: 'Session 1: Academic Research in Popular Culture',
      location: 'Room A'
    },
    {
      time: '14:00 - 15:30',
      title: 'Session 2: Digital Media Studies',
      location: 'Room B'
    },
    {
      time: '16:00 - 17:30',
      title: 'Panel Discussion: Future of Academia',
      location: 'Grand Auditorium'
    }
  ],
  // Day 2
  [
    {
      time: '09:00 - 10:30',
      title: 'Keynote Speech',
      location: 'Grand Auditorium',
      speaker: 'Prof. Takashi Yamamoto'
    },
    {
      time: '11:00 - 12:30',
      title: 'Session 3: Interactive Media',
      location: 'Room A'
    },
    {
      time: '14:00 - 15:30',
      title: 'Workshop: Digital Research Methods',
      location: 'Computer Lab'
    },
    {
      time: '16:00 - 17:30',
      title: 'Poster Session',
      location: 'Exhibition Hall'
    }
  ],
  // Day 3
  [
    {
      time: '09:00 - 10:30',
      title: 'Keynote Speech',
      location: 'Grand Auditorium',
      speaker: 'Dr. Emily Chen'
    },
    {
      time: '11:00 - 12:30',
      title: 'Session 4: Future Technologies',
      location: 'Room A'
    },
    {
      time: '14:00 - 15:30',
      title: 'Panel: Industry-Academia Collaboration',
      location: 'Room B'
    },
    {
      time: '16:00 - 17:30',
      title: 'Closing Ceremony & Awards',
      location: 'Grand Auditorium'
    }
  ]
]
</script>

<style scoped>
.v-timeline {
  padding-top: 2rem;
}
</style> 