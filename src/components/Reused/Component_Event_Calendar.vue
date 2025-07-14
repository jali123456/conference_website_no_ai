<!-- Component_Event_Calendar.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">Programme & Important Dates</h1>
      </v-col>

      <!-- Important Dates -->
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h4 text-center">Important Dates</v-card-title>
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
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

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