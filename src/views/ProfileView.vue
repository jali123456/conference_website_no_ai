<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">My Profile</h1>
      </v-col>

      <!-- Profile Overview -->
      <v-col cols="12" md="4">
        <v-card class="mb-4">
          <v-card-text class="text-center">
            <v-avatar size="120" color="primary">
              <v-img
                v-if="profile.avatar"
                :src="profile.avatar"
                cover
              ></v-img>
              <span v-else class="text-h3 text-white">
                {{ getInitials(profile.firstName, profile.lastName) }}
              </span>
            </v-avatar>
            <h2 class="text-h5 mt-4">{{ profile.firstName }} {{ profile.lastName }}</h2>
            <p class="text-subtitle-1 text-medium-emphasis">{{ profile.affiliation }}</p>
            <p class="text-body-2">{{ profile.role }}</p>
            <v-btn
              color="primary"
              variant="outlined"
              class="mt-4"
              prepend-icon="mdi-pencil"
              @click="editProfile = true"
            >
              Edit Profile
            </v-btn>
          </v-card-text>
        </v-card>

        <!-- Contact Information -->
        <v-card class="mb-4">
          <v-card-title>
            <v-icon start>mdi-card-account-details</v-icon>
            Contact Information
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon>mdi-email</v-icon>
                </template>
                <v-list-item-title>Email</v-list-item-title>
                <v-list-item-subtitle>{{ profile.email }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon>mdi-phone</v-icon>
                </template>
                <v-list-item-title>Phone</v-list-item-title>
                <v-list-item-subtitle>{{ profile.phone }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <template v-slot:prepend>
                  <v-icon>mdi-map-marker</v-icon>
                </template>
                <v-list-item-title>Location</v-list-item-title>
                <v-list-item-subtitle>{{ profile.location }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Conference Activities -->
      <v-col cols="12" md="8">
        <!-- My Submissions -->
        <v-card class="mb-4">
          <v-card-title>
            <v-icon start>mdi-file-document</v-icon>
            My Submissions
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="(submission, index) in submissions"
                :key="index"
                :value="submission"
              >
                <v-card variant="outlined" width="100%">
                  <v-card-title>{{ submission.title }}</v-card-title>
                  <v-card-subtitle>
                    Submitted: {{ submission.date }}
                    <v-chip
                      :color="getStatusColor(submission.status)"
                      size="small"
                      class="ml-2"
                    >
                      {{ submission.status }}
                    </v-chip>
                  </v-card-subtitle>
                  <v-card-text>
                    <p>{{ submission.abstract }}</p>
                    <v-chip-group>
                      <v-chip
                        v-for="(tag, tagIndex) in submission.tags"
                        :key="tagIndex"
                        size="small"
                        color="primary"
                      >
                        {{ tag }}
                      </v-chip>
                    </v-chip-group>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      variant="text"
                      color="primary"
                      :to="submission.link"
                    >
                      View Details
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <!-- My Schedule -->
        <v-card>
          <v-card-title>
            <v-icon start>mdi-calendar</v-icon>
            My Schedule
          </v-card-title>
          <v-card-text>
            <v-timeline align="start">
              <v-timeline-item
                v-for="(event, index) in scheduledEvents"
                :key="index"
                :dot-color="event.color"
                size="small"
              >
                <template v-slot:opposite>
                  <div class="text-caption">{{ event.time }}</div>
                </template>
                <v-card variant="outlined">
                  <v-card-title class="text-subtitle-1">{{ event.title }}</v-card-title>
                  <v-card-subtitle>
                    <v-icon small start>mdi-map-marker</v-icon>
                    {{ event.location }}
                  </v-card-subtitle>
                  <v-card-text>{{ event.description }}</v-card-text>
                  <v-card-actions>
                    <v-btn
                      variant="text"
                      color="primary"
                      :to="event.link"
                    >
                      View Details
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Edit Profile Dialog -->
    <v-dialog v-model="editProfile" max-width="600">
      <v-card>
        <v-card-title>Edit Profile</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="saveProfile">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="editedProfile.firstName"
                  label="First Name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="editedProfile.lastName"
                  label="Last Name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="editedProfile.affiliation"
                  label="Affiliation"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="editedProfile.email"
                  label="Email"
                  type="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="editedProfile.phone"
                  label="Phone"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="editedProfile.location"
                  label="Location"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey"
            variant="text"
            @click="editProfile = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="saveProfile"
          >
            Save Changes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const editProfile = ref(false)

const profile = reactive({
  firstName: 'John',
  lastName: 'Doe',
  affiliation: 'University of Technology',
  role: 'Professor of Computer Science',
  email: 'john.doe@university.edu',
  phone: '+1 (555) 123-4567',
  location: 'New York, USA',
  avatar: null
})

const editedProfile = reactive({ ...profile })

const submissions = [
  {
    title: 'Machine Learning Applications in Healthcare',
    date: 'May 15, 2023',
    status: 'Under Review',
    abstract: 'A novel approach to applying machine learning algorithms in healthcare diagnostics...',
    tags: ['Machine Learning', 'Healthcare', 'AI'],
    link: '/submissions/123'
  },
  {
    title: 'Quantum Computing: A New Paradigm',
    date: 'April 30, 2023',
    status: 'Accepted',
    abstract: 'Exploring the potential of quantum computing in solving complex computational problems...',
    tags: ['Quantum Computing', 'Computer Science'],
    link: '/submissions/124'
  }
]

const scheduledEvents = [
  {
    time: '09:00 - 10:30',
    title: 'Keynote: Future of AI',
    location: 'Main Hall',
    description: 'Opening keynote speech on the future of artificial intelligence',
    color: 'primary',
    link: '/schedule/keynote-1'
  },
  {
    time: '11:00 - 12:30',
    title: 'Paper Presentation',
    location: 'Room A101',
    description: 'Presenting: Machine Learning Applications in Healthcare',
    color: 'success',
    link: '/schedule/presentation-123'
  },
  {
    time: '14:00 - 15:30',
    title: 'Workshop: Quantum Computing',
    location: 'Room B203',
    description: 'Interactive workshop on quantum computing applications',
    color: 'info',
    link: '/schedule/workshop-1'
  }
]

const getInitials = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`
}

const getStatusColor = (status: string): string => {
  const colors = {
    'Under Review': 'warning',
    'Accepted': 'success',
    'Rejected': 'error',
    'Pending': 'info'
  }
  return colors[status as keyof typeof colors] || 'grey'
}

const saveProfile = () => {
  Object.assign(profile, editedProfile)
  editProfile.value = false
}
</script>

<style scoped>
.v-timeline-item__dot--small {
  margin-inline: 0;
}
</style> 