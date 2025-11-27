<template>
  <v-card
    class="mx-auto my-2"
    max-width="95%"
    elevation="6"
    rounded="xl"
    color="rgba(18, 30, 57, 0.95)"
  >
    <v-card-text v-if="!conferenceStarted" class="d-flex justify-space-around align-center py-4 px-2">
      <div class="d-flex flex-column align-center time-block">
        <div class="text-h4 font-weight-bold text-white mb-1">{{ days }}</div>
        <div class="text-caption text-uppercase text-blue-lighten-3 font-weight-bold">Days</div>
      </div>
      
      <div class="text-h4 text-white opacity-50 mb-4">:</div>
      
      <div class="d-flex flex-column align-center time-block">
        <div class="text-h4 font-weight-bold text-white mb-1">{{ hours }}</div>
        <div class="text-caption text-uppercase text-blue-lighten-3 font-weight-bold">Hours</div>
      </div>
      
      <div class="text-h4 text-white opacity-50 mb-4">:</div>
      
      <div class="d-flex flex-column align-center time-block">
        <div class="text-h4 font-weight-bold text-white mb-1">{{ minutes }}</div>
        <div class="text-caption text-uppercase text-blue-lighten-3 font-weight-bold">Mins</div>
      </div>
      
      <div class="text-h4 text-white opacity-50 mb-4">:</div>
      
      <div class="d-flex flex-column align-center time-block">
        <div class="text-h4 font-weight-bold text-white mb-1">{{ seconds }}</div>
        <div class="text-caption text-uppercase text-blue-lighten-3 font-weight-bold">Secs</div>
      </div>
    </v-card-text>
    
    <v-card-text v-else class="text-center py-6">
      <div class="text-h4 font-weight-bold text-white">Conference Started!</div>
    </v-card-text>
    
    <div class="text-center pb-2 text-caption text-grey-lighten-1">
      Conference starts: {{ formattedTargetDate }}
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const targetDate = new Date('2026-08-12T08:00:00')
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const conferenceStarted = ref(false)

const formattedTargetDate = targetDate.toLocaleString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
})

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
.time-block {
  min-width: 60px;
}
</style>
