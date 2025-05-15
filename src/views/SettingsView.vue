<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">Settings</h1>
      </v-col>

      <v-col cols="12" md="3">
        <!-- Settings Navigation -->
        <v-card class="mb-4">
          <v-list nav>
            <v-list-item
              v-for="(section, index) in settingSections"
              :key="index"
              :value="section"
              :active="activeSection === section.id"
              @click="activeSection = section.id"
              color="primary"
            >
              <template v-slot:prepend>
                <v-icon>{{ section.icon }}</v-icon>
              </template>
              <v-list-item-title>{{ section.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="12" md="9">
        <!-- Account Settings -->
        <v-card v-if="activeSection === 'account'" class="mb-4">
          <v-card-title>
            <v-icon start>mdi-account-cog</v-icon>
            Account Settings
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="settings.account.username"
                    label="Username"
                    readonly
                    disabled
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="settings.account.email"
                    label="Email"
                    type="email"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    color="primary"
                    variant="outlined"
                    @click="changePassword = true"
                  >
                    Change Password
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>

        <!-- Notification Settings -->
        <v-card v-if="activeSection === 'notifications'" class="mb-4">
          <v-card-title>
            <v-icon start>mdi-bell-cog</v-icon>
            Notification Settings
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-subheader>Email Notifications</v-list-subheader>
              <v-list-item v-for="(setting, key) in settings.notifications.email" :key="key">
                <template v-slot:prepend>
                  <v-checkbox
                    v-model="settings.notifications.email[key]"
                    hide-details
                  ></v-checkbox>
                </template>
                <v-list-item-title>{{ getNotificationLabel(key) }}</v-list-item-title>
              </v-list-item>

              <v-divider class="my-4"></v-divider>

              <v-list-subheader>Push Notifications</v-list-subheader>
              <v-list-item v-for="(setting, key) in settings.notifications.push" :key="key">
                <template v-slot:prepend>
                  <v-checkbox
                    v-model="settings.notifications.push[key]"
                    hide-details
                  ></v-checkbox>
                </template>
                <v-list-item-title>{{ getNotificationLabel(key) }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <!-- Privacy Settings -->
        <v-card v-if="activeSection === 'privacy'" class="mb-4">
          <v-card-title>
            <v-icon start>mdi-shield-account</v-icon>
            Privacy Settings
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(setting, key) in settings.privacy" :key="key">
                <template v-slot:prepend>
                  <v-switch
                    v-model="settings.privacy[key]"
                    hide-details
                    inset
                  ></v-switch>
                </template>
                <v-list-item-title>{{ getPrivacyLabel(key) }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>

        <!-- Appearance Settings -->
        <v-card v-if="activeSection === 'appearance'" class="mb-4">
          <v-card-title>
            <v-icon start>mdi-palette</v-icon>
            Appearance Settings
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-select
                  v-model="settings.appearance.theme"
                  :items="themeOptions"
                  label="Theme"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-select
                  v-model="settings.appearance.fontSize"
                  :items="fontSizeOptions"
                  label="Font Size"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-switch
                  v-model="settings.appearance.reducedMotion"
                  label="Reduce Motion"
                  hint="Minimize animations throughout the interface"
                  persistent-hint
                ></v-switch>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Change Password Dialog -->
    <v-dialog v-model="changePassword" max-width="500">
      <v-card>
        <v-card-title>Change Password</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="updatePassword">
            <v-text-field
              v-model="passwordForm.current"
              label="Current Password"
              type="password"
              required
            ></v-text-field>
            <v-text-field
              v-model="passwordForm.new"
              label="New Password"
              type="password"
              required
            ></v-text-field>
            <v-text-field
              v-model="passwordForm.confirm"
              label="Confirm New Password"
              type="password"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey"
            variant="text"
            @click="changePassword = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="primary"
            @click="updatePassword"
          >
            Update Password
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const activeSection = ref('account')
const changePassword = ref(false)

const settingSections = [
  { id: 'account', title: 'Account', icon: 'mdi-account-cog' },
  { id: 'notifications', title: 'Notifications', icon: 'mdi-bell-cog' },
  { id: 'privacy', title: 'Privacy', icon: 'mdi-shield-account' },
  { id: 'appearance', title: 'Appearance', icon: 'mdi-palette' }
]

const settings = reactive({
  account: {
    username: 'johndoe',
    email: 'john.doe@university.edu'
  },
  notifications: {
    email: {
      paperUpdates: true,
      scheduleChanges: true,
      announcements: true,
      deadlineReminders: true
    },
    push: {
      paperUpdates: true,
      scheduleChanges: true,
      announcements: false,
      deadlineReminders: true
    }
  },
  privacy: {
    showProfile: true,
    showSubmissions: false,
    showSchedule: true,
    allowMessages: true
  },
  appearance: {
    theme: 'light',
    fontSize: 'medium',
    reducedMotion: false
  }
})

const passwordForm = reactive({
  current: '',
  new: '',
  confirm: ''
})

const themeOptions = [
  { title: 'Light Theme', value: 'light' },
  { title: 'Dark Theme', value: 'dark' },
  { title: 'System Default', value: 'system' }
]

const fontSizeOptions = [
  { title: 'Small', value: 'small' },
  { title: 'Medium', value: 'medium' },
  { title: 'Large', value: 'large' }
]

const getNotificationLabel = (key: string): string => {
  const labels: { [key: string]: string } = {
    paperUpdates: 'Paper Status Updates',
    scheduleChanges: 'Schedule Changes',
    announcements: 'Conference Announcements',
    deadlineReminders: 'Deadline Reminders'
  }
  return labels[key] || key
}

const getPrivacyLabel = (key: string): string => {
  const labels: { [key: string]: string } = {
    showProfile: 'Show my profile to other attendees',
    showSubmissions: 'Show my submissions publicly',
    showSchedule: 'Share my conference schedule',
    allowMessages: 'Allow messages from other attendees'
  }
  return labels[key] || key
}

const updatePassword = () => {
  // Here you would implement password update logic
  if (passwordForm.new === passwordForm.confirm) {
    // Update password
    alert('Password updated successfully!')
    changePassword.value = false
    passwordForm.current = ''
    passwordForm.new = ''
    passwordForm.confirm = ''
  } else {
    alert('New passwords do not match!')
  }
}
</script>

<style scoped>
.v-list-item--active {
  background-color: rgb(var(--v-theme-primary), 0.1);
}
</style> 