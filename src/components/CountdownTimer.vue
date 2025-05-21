<!-- CountdownTimer -->
<template>
  <div :class="wrapperClass">
    <v-card
      class="countdown-card text-center"
      flat
      rounded="lg"  
      :color="'rgba(18, 30, 57, 1)'"
    >
      <v-card-text class="countdown-container">
        <div class="time-section text-white"> 
          <div class="time-value">{{ days }}</div>
          <div class="time-label">Days</div>
        </div>
        <div class="time-divider text-white">:</div>
        <div class="time-section text-white">
          <div class="time-value">{{ hours }}</div>
          <div class="time-label">Hours</div>
        </div>
        <div class="time-divider text-white">:</div>
        <div class="time-section text-white">
          <div class="time-value">{{ minutes }}</div>
          <div class="time-label">Minutes</div>
        </div>
        <div class="time-divider text-white">:</div>
        <div class="time-section text-white">
          <div class="time-value">{{ seconds }}</div>
          <div class="time-label">Seconds</div>
        </div>
      </v-card-text>
      <v-card-text class="text-center text-body-1 text-white">
        Conference starts: {{ formattedTargetDate }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useDisplay } from 'vuetify'

const targetDate = new Date('2026-08-12T00:00:00')
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const formattedTargetDate = targetDate.toLocaleString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
})

// Responsive class
const { mobile } = useDisplay()
const wrapperClass = computed(() => (mobile.value ? 'bottom-timer' : 'sidebar-timer'))

const calculateTimeLeft = () => {
  const now = Date.now()
  const distance = targetDate.getTime() - now

  if (distance < 0) {
    days.value = hours.value = minutes.value = seconds.value = 0
    return
  }

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
}

let timer: number
onMounted(() => {
  calculateTimeLeft()
  timer = setInterval(calculateTimeLeft, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<style scoped>
.sidebar-timer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Remove padding as it will be handled by the parent v-sheet */
  width: 100%;
}

.bottom-timer {
  bottom: 0;
  width: 90%;
  margin: 0 auto;
  left: 5%;
  padding: 8px; /* Keep padding for bottom-timer as it's not wrapped by another v-sheet */
  justify-content: center;
}

.countdown-card {
  /* Remove background and border-radius here as they are now handled by Vuetify props */
  color: white; /* Keep text color white */
  padding: 16px; /* Keep internal padding for card content */
  width: 100%;
  max-width: 300px;
}

.countdown-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.time-section {
  text-align: center;
}

.time-value {
  font-size: 2rem;
  font-weight: bold;
}

.time-label {
  font-size: 0.8rem;
  text-transform: uppercase;
}

.time-divider {
  font-size: 1.5rem;
}
</style>