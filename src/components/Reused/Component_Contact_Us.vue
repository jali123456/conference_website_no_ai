<template>
  <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two_Tone|Material+Icons+Round|Material+Icons+Sharp&display=swap" rel="stylesheet">
  
  <div class="contact-container">
    <!-- CSS Animated Background -->
    <div class="animated-bg">
      <div class="particle" v-for="i in 50" :key="i" :style="getParticleStyle(i)"></div>
    </div>
    
    <!-- Content -->
    <v-container fluid class="contact-us pa-10">
      <v-row justify="center" class="text-center mb-6">
        <v-col cols="12">
          <h2 class="text-h4 font-weight-bold text-white">Reach Out</h2>
          <p class="text-subtitle-1 text-white">We'd Love to Hear From You</p>
          <v-divider class="my-4" color="white" />
        </v-col>
      </v-row>

      <v-row dense justify="center" class="text-center text-body-1">
        <v-col cols="12" md="3">
          <h3 class="text-h6 font-weight-medium text-white">Phone</h3>
          <p class="text-white">+6017-606 3615</p>
        </v-col>

        <v-col cols="12" md="3">
          <h3 class="text-h6 font-weight-medium text-white">Email</h3>
          <p class="text-white">icelin@elmu.edu.my</p>
        </v-col>

        <v-col cols="12" md="3">
          <h3 class="text-h6 font-weight-medium text-white">Address</h3>
          <p class="text-white">1, Persiaran Timur 1, Bandar Enstek, 71760 Nilai, Negeri Sembilan</p>
        </v-col>

        <v-col cols="12" md="3">
          <h3 class="text-h6 font-weight-medium text-white">Social Media</h3>
          <div class="d-flex justify-center ga-4 mt-2">
            <a href="https://facebook.com" target="_blank" class="social-link">
              <v-icon size="28" color="blue-lighten-2">mdi-facebook</v-icon>
            </a>
            <a href="https://instagram.com" target="_blank" class="social-link">
              <v-icon size="28" color="pink-lighten-2">mdi-instagram</v-icon>
            </a>
            <a href="https://tiktok.com" target="_blank" class="social-link">
              <v-icon size="28" color="white">mdi-music-note</v-icon>
            </a>
            <a href="https://youtube.com" target="_blank" class="social-link">
              <v-icon size="28" color="red-lighten-2">mdi-youtube</v-icon>
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">

// Generate random styles for particles
const getParticleStyle = (index: number) => {
  const size = Math.random() * 8 + 3; // Changed from 4+1 to 8+3 (3px to 11px)
  const left = Math.random() * 100;
  const animationDelay = Math.random() * 20;
  const animationDuration = Math.random() * 10 + 10;
  const opacity = Math.random() * 0.5 + 0.3;
  
  return {
    left: `${left}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${animationDelay}s`,
    animationDuration: `${animationDuration}s`,
    opacity: opacity
  };
};

</script>

<style scoped>
.contact-container {
  position: relative;
  min-height: 500px;
  width: 100%;
  background: linear-gradient(135deg, #0d47a1 0%, #1565c0 100%);
  overflow: hidden;
}

.animated-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  animation: float linear infinite;
}

@keyframes float {
  0% {
    transform: translateY(100vh) rotate(0deg);
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
  }
}

.contact-us {
  position: relative;
  z-index: 2;
  background: transparent;
}

.social-link {
  transition: transform 0.3s ease;
}

.social-link:hover {
  transform: scale(1.2);
}

/* Alternative animated background option */
.contact-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  animation: pulse 4s ease-in-out infinite alternate;
  pointer-events: none;
}

@keyframes pulse {
  0% { opacity: 0.5; }
  100% { opacity: 0.8; }
}
</style>