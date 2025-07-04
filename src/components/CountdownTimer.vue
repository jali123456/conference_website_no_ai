<!-- CountdownTimer.vue -->
<template>
  <div :class="wrapperClass">
    <v-card
      class="countdown-card text-center"
      flat
      rounded="lg"  
      :color="'rgba(18, 30, 57, 1)'"
    >
      <v-card-text class="countdown-container pa-2 no-wrap-timer">
        <div v-if="!isSmallest" class="time-section text-white"> 
          <div class="time-value">{{ days }}</div>
          <div class="time-label">Days</div>
        </div>
        <div v-if="!isSmallest" class="time-divider text-white">:</div>
        <div class="time-section text-white">
          <div class="time-value">{{ hours }}</div>
          <div class="time-label">Hours</div>
        </div>
        <div class="time-divider text-white">:</div>
        <div class="time-section text-white">
          <div class="time-value">{{ minutes }}</div>
          <div class="time-label">Minutes</div>
        </div>
        <div v-if="!isSmallest && !conferenceStarted" class="time-divider text-white">:</div>
        <div v-if="!isSmallest && !conferenceStarted" class="time-section text-white seconds-section">
          <div class="time-value">{{ seconds }}</div>
          <div class="time-label">Seconds</div>
        </div>
        <div v-if="conferenceStarted && isSmallest" class="time-section text-white w-100 text-center">
          <div class="time-value">Conference Started!</div>
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
const conferenceStarted = ref(false)

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
const { mobile, width } = useDisplay()

const isSmallest = computed(() => width.value < 400)
const wrapperClass = computed(() => mobile.value ? 'bottom-timer' : 'sidebar-timer')


const calculateTimeLeft = () => {
  const now = Date.now()
  const distance = targetDate.getTime() - now

  if (distance < 0) {
    days.value = hours.value = minutes.value = seconds.value = 0
    conferenceStarted.value = true
    return
  }

  days.value = Math.floor(distance / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((distance % (1000 * 60)) / 1000)
  conferenceStarted.value = false
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
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  width: 100%;
  gap: 0.2rem;
  min-width: 0;
}

.no-wrap-timer {
  flex-wrap: nowrap !important;
  overflow-x: auto;
}



.time-section {
  text-align: center;
  flex: 0 1 auto;
  min-width: 0;
  margin: 0 0.08rem;
}


.time-value {
  font-size: 1.1rem;
  font-weight: bold;
  letter-spacing: -0.5px;
}


.time-label {
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: -0.5px;
}


.time-divider {
  font-size: 1.1rem;
  padding: 0 0.08rem;
}

@media (max-width:996px) and (min-width: 600px) {
  .time-value{
    font-size: 1rem;
  }
  .time-label{
    font-size: 0.6rem;
  }
}

/* Remove step-down breakpoints that cause wrapping */
@media (max-width: 1765px) and (min-width: 601px) {
  .seconds-section {
    flex-basis: auto;
    margin-top: 0;
    order: unset;
  }
  .time-divider:nth-child(5) {
    display: inline;
  }
}

@media (max-width: 1400px) and (min-width: 601px) {
  .time-section:nth-child(5) {
    flex-basis: auto;
    margin-top: 0;
    order: unset;
  }
  .time-divider:nth-child(4) {
    display: inline;
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
    justify-content: center;
    gap: 0.08rem;
  }
  .time-section {
    flex: 0 1 auto;
    margin: 0 0.05rem;
  }
  .time-value {
    font-size: 0.9rem;
  }
  .time-label {
    font-size: 0.5rem;
  }
  .time-divider {
    font-size: 0.8rem;
    padding: 0 0.05rem;
  }
}


@media (max-width: 400px) {
  .countdown-container {
    flex-wrap: nowrap;
    justify-content: center;
    gap: 0.04rem;
  }
  .time-section {
    flex: 0 1 auto;
    margin: 0 0.02rem;
  }
  .time-value {
    font-size: 0.7rem;
  }
  .time-label {
    font-size: 0.4rem;
  }
  .time-divider {
    font-size: 0.6rem;
    padding: 0 0.02rem;
  }
}
</style>