<!-- CountdownTimer.vue -->
<template>
  <div :class="wrapperClass">
    <v-card
      class="countdown-card text-center"
      flat
      rounded="lg"  
      :color="'rgba(18, 30, 57, 1)'"
    >
      <v-card-text class="countdown-container pa-2">
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
        <div class="time-section text-white seconds-section">
          <div class="time-value">{{ seconds }}</div>
          <div class="time-label">Seconds</div>
        </div>
      </v-card-text>
      <v-card-text :class="{'d-none': $vuetify.display.width < 760}" class="text-center text-caption text-white pb-2 pt-0">
        Conference starts: {{ formattedTargetDate }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useDisplay } from 'vuetify'

const targetDate = new Date('2026-08-12T08:00:00')
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

// Enhanced responsive design
const { mobile } = useDisplay()

const wrapperClass = computed(() => mobile.value ? 'bottom-timer' : 'sidebar-timer')

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
  width: 100%;
}

.bottom-timer {
  bottom: 0;
  width: 90%;
  margin: 0 auto;
  left: 5%;
  padding: 8px;
  justify-content: center;
}

.countdown-card {
  color: white;
  width: 100%;
  /* max-width: 320px; */
}

.countdown-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}

.time-section {
  text-align: center;
  flex: 1;
  min-width: 0;
}

.time-value {
  font-size: 1.4rem;
  font-weight: bold;
}

.time-label {
  font-size: 0.75rem;
  text-transform: uppercase;
}

.time-divider {
  font-size: 1.5rem;
  padding: 0 2px;
}

/* Step-down breakpoints */
@media (max-width: 1765px) and (min-width: 601px) {
  .seconds-section {
    flex-basis: 100%;
    margin-top: 10px;
    order: 4;
  }
  
  .time-divider:nth-child(5) {
    display: none;
  }
}

@media (max-width: 1400px) and (min-width: 601px) {
  .time-section:nth-child(5) {
    flex-basis: 100%;
    margin-top: 10px;
    order: 3;
  }
  
  .time-divider:nth-child(4) {
    display: none;
  }
}

/* @media (max-width: 1200px) and (min-width: 601px) {
  .time-section:nth-child(3) {
    flex-basis: 100%;
    margin-top: 10px;
    order: 2;
  }
  
  .time-divider:nth-child(2) {
    display: none;
  }
} */

/* Mobile view - everything in one line */
@media (max-width: 600px) {
  .countdown-container {
    flex-wrap: nowrap;
  }
  
  .time-section {
    flex: 1;
  }
  
  .time-value {
    font-size: 1.4rem;
  }
  
  .time-label {
    font-size: 0.65rem;
  }
  
  .time-divider {
    font-size: 1.2rem;
    padding: 0 1px;
  }
}
</style>