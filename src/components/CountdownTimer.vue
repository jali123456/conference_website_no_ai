<template>
  <div class="countdown-wrapper">
    <v-card class="countdown-card text-center" flat>
      <v-card-text class="countdown-container">
        <div class="time-section">
          <div class="time-value">{{ days }}</div>
          <div class="time-label">Days</div>
        </div>
        <div class="time-divider">:</div>
        <div class="time-section">
          <div class="time-value">{{ hours }}</div>
          <div class="time-label">Hours</div>
        </div>
        <div class="time-divider">:</div>
        <div class="time-section">
          <div class="time-value">{{ minutes }}</div>
          <div class="time-label">Minutes</div>
        </div>
        <div class="time-divider">:</div>
        <div class="time-section">
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
import { ref, onMounted, onBeforeUnmount } from 'vue'
import confetti from 'canvas-confetti'

const targetDate = new Date('2026-08-12T00:00:00')
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const serverTimeOffset = ref(0)
const isCelebrating = ref(false)
let celebrationInterval: number | null = null

// Format the target date for display
const formattedTargetDate = targetDate.toLocaleString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
})

const startCelebration = () => {
  if (celebrationInterval) return;
  
  celebrationInterval = setInterval(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFD700', '#FFA500', '#FF69B4', '#00FF00', '#4169E1']
    });
  }, 2000);
}

const stopCelebration = () => {
  if (celebrationInterval) {
    clearInterval(celebrationInterval);
    celebrationInterval = null;
  }
}

const toggleCelebration = () => {
  isCelebrating.value = !isCelebrating.value;
  if (isCelebrating.value) {
    startCelebration();
  } else {
    stopCelebration();
  }
}

const syncWithGoogleTime = async () => {
  try {
    // Simple drift compensation
    const localTime = Date.now()
    // Store initial time to track drift
    if (!serverTimeOffset.value) {
      serverTimeOffset.value = 0
    }
  } catch (error) {
    console.error('Time sync error:', error)
    serverTimeOffset.value = 0
  }
}

const getCurrentTime = () => {
  return Date.now()
}

const calculateTimeLeft = () => {
  const now = getCurrentTime()
  const distance = targetDate.getTime() - now

  if (distance < 0) {
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
    if (!isCelebrating.value) {
      isCelebrating.value = true
      startCelebration()
    }
    return
  }

  // Calculate all values at once to minimize reflows
  const d = Math.floor(distance / (1000 * 60 * 60 * 24))
  const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const s = Math.floor((distance % (1000 * 60)) / 1000)

  // Update all values at once
  days.value = d
  hours.value = h
  minutes.value = m
  seconds.value = s
}

let timer: number

onMounted(() => {
  calculateTimeLeft()
  timer = setInterval(calculateTimeLeft, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
  stopCelebration()
})
</script>

<style scoped>
.countdown-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.countdown-card {
  background: rgba(0, 0, 0, 0.7) !important;
  backdrop-filter: blur(15px);
  border-radius: 20px !important;
  margin: 0 auto;
  width: auto;
  min-width: 300px;
  max-width: 800px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.countdown-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: white;
  padding: 2rem !important;
}

.time-section {
  text-align: center;
  min-width: 120px;
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 12px;
  transition: transform 0.2s;
}

.time-section:hover {
  transform: translateY(-5px);
}

.time-value {
  font-size: 4rem;
  font-weight: bold;
  line-height: 1;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.time-label {
  font-size: 1rem;
  text-transform: uppercase;
  margin-top: 8px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.8);
}

.time-divider {
  font-size: 3rem;
  font-weight: bold;
  line-height: 1;
  margin-top: -10px;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .countdown-container {
    gap: 10px;
    padding: 1rem !important;
  }

  .time-section {
    min-width: 80px;
    padding: 0.75rem;
  }

  .time-value {
    font-size: 2.5rem;
  }
  
  .time-label {
    font-size: 0.8rem;
  }
  
  .time-divider {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .time-section {
    min-width: 60px;
    padding: 0.5rem;
  }

  .time-value {
    font-size: 2rem;
  }
  
  .time-label {
    font-size: 0.7rem;
    letter-spacing: 1px;
  }
  
  .time-divider {
    font-size: 1.5rem;
  }
}
</style>