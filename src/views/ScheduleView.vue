<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">Conference Schedule</h1>
      </v-col>

      <!-- Schedule Tabs -->
      <v-col cols="12">
        <v-card>
          <v-tabs
            v-model="activeTab"
            bg-color="primary"
            align-tabs="center"
          >
            <v-tab
              v-for="(day, index) in conferenceDays"
              :key="index"
              :value="index"
            >
              <v-icon start>mdi-calendar-clock</v-icon>
              {{ day.date }}
            </v-tab>
          </v-tabs>

          <v-window v-model="activeTab">
            <v-window-item
              v-for="(day, dayIndex) in conferenceDays"
              :key="dayIndex"
              :value="dayIndex"
            >
              <v-card flat>
                <v-card-text>
                  <h2 class="text-h5 mb-4">{{ day.title }}</h2>
                  <p class="text-subtitle-1 mb-6">{{ day.description }}</p>

                  <v-timeline align="start" line-thickness="2">
                    <v-timeline-item
                      v-for="(event, eventIndex) in day.events"
                      :key="eventIndex"
                      :dot-color="getEventColor(event.type)"
                      size="small"
                    >
                      <template v-slot:opposite>
                        <div class="text-subtitle-1 font-weight-bold">
                          {{ event.time }}
                        </div>
                      </template>
                      <v-card :color="getEventColor(event.type)" variant="outlined" class="mb-4">
                        <v-card-title class="text-subtitle-1">
                          {{ event.title }}
                          <v-chip
                            v-if="event.type"
                            size="small"
                            :color="getEventColor(event.type)"
                            class="ml-2"
                          >
                            {{ event.type }}
                          </v-chip>
                        </v-card-title>
                        <v-card-subtitle v-if="event.speaker">
                          <div class="d-flex align-center">
                            <v-icon small class="mr-1">mdi-account</v-icon>
                            <span>{{ event.speaker }}</span>
                          </div>
                        </v-card-subtitle>
                        <v-card-subtitle v-if="event.location">
                          <div class="d-flex align-center">
                            <v-icon small class="mr-1">mdi-map-marker</v-icon>
                            <span>{{ event.location }}</span>
                          </div>
                        </v-card-subtitle>
                        <v-card-text v-if="event.description">
                          {{ event.description }}
                        </v-card-text>
                        <v-card-actions v-if="event.link">
                          <v-btn
                            variant="text"
                            color="accent"
                            :to="event.link"
                          >
                            More Details
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>

      <!-- Download Schedule Button -->
      <v-col cols="12" class="text-center mt-4">
        <v-btn
          color="primary"
          size="large"
          prepend-icon="mdi-download"
          href="@/assets/docs/conference_schedule.pdf"
          download
        >
          Download Full Schedule
        </v-btn>
      </v-col>

      <!-- Legend -->
      <v-col cols="12" class="mt-4">
        <v-card variant="outlined">
          <v-card-title>
            <v-icon start>mdi-information-outline</v-icon>
            Legend
          </v-card-title>
          <v-card-text>
            <v-row justify="center">
              <v-col
                v-for="(legend, index) in eventLegend"
                :key="index"
                cols="12"
                sm="6"
                md="3"
              >
                <div class="d-flex align-center pa-2">
                  <v-avatar
                    :color="legend.color"
                    size="24"
                    class="mr-3"
                  ></v-avatar>
                  <span>{{ legend.type }}</span>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref(0)

const eventLegend = [
  { type: 'Keynote', color: 'purple' },
  { type: 'Session', color: 'primary' },
  { type: 'Workshop', color: 'green' },
  { type: 'Break', color: 'amber' },
  { type: 'Social', color: 'pink' }
]

const getEventColor = (eventType: string): string => {
  const legend = eventLegend.find(item => item.type === eventType)
  return legend ? legend.color : 'grey'
}

const conferenceDays = [
  {
    date: 'August 9, 2023',
    title: 'Pre-Conference Day',
    description: 'Registration and workshops for early arrivals',
    events: [
      {
        time: '09:00 - 10:00',
        title: 'Registration Open',
        type: 'Break',
        location: 'Main Lobby',
        description: 'Badge pickup and welcome package'
      },
      {
        time: '10:00 - 12:30',
        title: 'Workshop: Machine Learning in Practice',
        type: 'Workshop',
        speaker: 'Dr. Robert Chen',
        location: 'Room A101',
        description: 'Hands-on workshop on implementing machine learning models for real-world problems',
        link: '/workshops/machine-learning'
      },
      {
        time: '12:30 - 14:00',
        title: 'Lunch Break',
        type: 'Break',
        location: 'Dining Hall'
      },
      {
        time: '14:00 - 16:30',
        title: 'Workshop: Quantum Computing Fundamentals',
        type: 'Workshop',
        speaker: 'Dr. James Wilson',
        location: 'Room B203',
        description: 'Introduction to quantum computing concepts and applications',
        link: '/workshops/quantum-computing'
      },
      {
        time: '17:00 - 19:00',
        title: 'Welcome Reception',
        type: 'Social',
        location: 'Rooftop Garden',
        description: 'Informal networking event with refreshments'
      }
    ]
  },
  {
    date: 'August 10, 2023',
    title: 'Conference Day 1',
    description: 'Opening ceremony and keynote speeches',
    events: [
      {
        time: '08:30 - 09:00',
        title: 'Registration & Morning Coffee',
        type: 'Break',
        location: 'Main Lobby'
      },
      {
        time: '09:00 - 09:30',
        title: 'Opening Ceremony',
        type: 'Session',
        speaker: 'Prof. Sarah Johnson, Conference Chair',
        location: 'Grand Hall',
        description: 'Official opening of the conference'
      },
      {
        time: '09:30 - 10:30',
        title: 'Keynote: The Future of Ethical AI in Society',
        type: 'Keynote',
        speaker: 'Dr. Lisa Chen, CEO of FutureTech AI',
        location: 'Grand Hall',
        description: 'Exploring the ethical implications of AI advancements and proposing frameworks for responsible development',
        link: '/keynotes/lisa-chen'
      },
      {
        time: '10:30 - 11:00',
        title: 'Coffee Break',
        type: 'Break',
        location: 'Exhibition Hall'
      },
      {
        time: '11:00 - 12:30',
        title: 'Artificial Intelligence & Machine Learning Session',
        type: 'Session',
        location: 'Room A101',
        description: 'Paper presentations on recent advances in AI and ML'
      },
      {
        time: '12:30 - 14:00',
        title: 'Lunch',
        type: 'Break',
        location: 'Dining Hall'
      },
      {
        time: '14:00 - 15:30',
        title: 'Parallel Sessions',
        type: 'Session',
        description: 'Multiple parallel tracks on various topics',
        location: 'Rooms A101, B203, C305'
      },
      {
        time: '15:30 - 16:00',
        title: 'Coffee Break',
        type: 'Break',
        location: 'Exhibition Hall'
      },
      {
        time: '16:00 - 17:30',
        title: 'Panel Discussion: Future of Technology',
        type: 'Session',
        location: 'Grand Hall',
        description: 'Industry experts discuss emerging trends and future directions'
      },
      {
        time: '19:00 - 21:00',
        title: 'Networking Dinner',
        type: 'Social',
        location: 'City View Restaurant',
        description: 'Formal dinner with invited speakers and attendees'
      }
    ]
  },
  {
    date: 'August 11, 2023',
    title: 'Conference Day 2',
    description: 'Technical sessions and workshops',
    events: [
      {
        time: '09:00 - 10:00',
        title: 'Keynote: Sustainable Technologies for the Future',
        type: 'Keynote',
        speaker: 'Prof. Michael Green, Stanford University',
        location: 'Grand Hall',
        description: 'How technology can address climate change and sustainability challenges',
        link: '/keynotes/michael-green'
      },
      {
        time: '10:00 - 10:30',
        title: 'Coffee Break',
        type: 'Break',
        location: 'Exhibition Hall'
      },
      {
        time: '10:30 - 12:30',
        title: 'Technical Sessions (Parallel Tracks)',
        type: 'Session',
        location: 'Multiple Rooms',
        description: 'Paper presentations on various technical topics'
      },
      {
        time: '12:30 - 14:00',
        title: 'Lunch & Poster Session',
        type: 'Break',
        location: 'Exhibition Hall',
        description: 'Lunch and interactive poster presentations'
      },
      {
        time: '14:00 - 15:30',
        title: 'Workshop: Blockchain Applications',
        type: 'Workshop',
        speaker: 'Dr. Emma Roberts',
        location: 'Room C305',
        description: 'Practical applications of blockchain technology beyond cryptocurrencies',
        link: '/workshops/blockchain'
      },
      {
        time: '15:30 - 16:00',
        title: 'Coffee Break',
        type: 'Break',
        location: 'Exhibition Hall'
      },
      {
        time: '16:00 - 17:30',
        title: 'Industry Showcase',
        type: 'Session',
        location: 'Grand Hall',
        description: 'Leading companies present their latest technologies'
      },
      {
        time: '18:00 - 20:00',
        title: 'Conference Gala',
        type: 'Social',
        location: 'Botanical Gardens',
        description: 'Elegant evening with awards ceremony and entertainment'
      }
    ]
  },
  {
    date: 'August 12, 2023',
    title: 'Conference Day 3',
    description: 'Final sessions and closing ceremony',
    events: [
      {
        time: '09:00 - 10:00',
        title: 'Keynote: Next Generation Computing',
        type: 'Keynote',
        speaker: 'Dr. David Kim, Research Director at Quantum Labs',
        location: 'Grand Hall',
        description: 'Exploring the future of computing beyond silicon',
        link: '/keynotes/david-kim'
      },
      {
        time: '10:00 - 10:30',
        title: 'Coffee Break',
        type: 'Break',
        location: 'Exhibition Hall'
      },
      {
        time: '10:30 - 12:00',
        title: 'Technical Sessions (Parallel Tracks)',
        type: 'Session',
        location: 'Multiple Rooms',
        description: 'Final paper presentations'
      },
      {
        time: '12:00 - 13:30',
        title: 'Lunch',
        type: 'Break',
        location: 'Dining Hall'
      },
      {
        time: '13:30 - 15:00',
        title: 'Best Paper Award Presentations',
        type: 'Session',
        location: 'Grand Hall',
        description: 'Presentations by winners of the best paper awards'
      },
      {
        time: '15:00 - 15:30',
        title: 'Coffee Break',
        type: 'Break',
        location: 'Exhibition Hall'
      },
      {
        time: '15:30 - 16:30',
        title: 'Closing Ceremony & Next Year Announcement',
        type: 'Session',
        speaker: 'Prof. Sarah Johnson, Conference Chair',
        location: 'Grand Hall',
        description: 'Reflections on the conference and announcement of next year\'s event'
      }
    ]
  }
]
</script>

<style scoped>
.v-timeline-item__dot--small {
  margin-inline: 0;
}
</style> 