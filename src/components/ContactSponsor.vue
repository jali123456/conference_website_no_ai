<template>
  <v-row cols="12" class="mt-6">
    <v-col cols="12" class="contact-section">
      <v-card class="mx-auto contact-container" max-width="1400">
        <!-- Pattern 4: Particle Wave Background -->
        <div class="particle-background">
          <div class="particle-container">
            <div class="particle" v-for="i in 40" :key="i" :style="getParticleStyle(i)"></div>
            <div class="wave-lines">
              <div class="wave-line wave-1"></div>
              <div class="wave-line wave-2"></div>
              <div class="wave-line wave-3"></div>
              <div class="wave-line wave-4"></div>
            </div>
          </div>
        </div>
        
        <!-- Content -->
        <v-container fluid class="contact-us pa-10">
          <v-row justify="center" class="text-center mb-6">
            <v-col cols="12">
              <h2 class="text-h4 font-weight-bold text-white wave-text">Reach Out To Us</h2>
              <p class="text-subtitle-1 text-white">We'd Love to Hear From You</p>
              <v-divider class="my-4 wave-divider" />
            </v-col>
          </v-row>

          <v-row dense justify="center" class="text-center text-body-1">
            <v-col cols="12" md="3">
              <h3 class="text-h6 font-weight-medium text-white contact-heading">Phone</h3>
              <p class="text-white">+60193849495<br>(Dr. Rabieahtul)</p>
            </v-col>

            <v-col cols="12" md="3">
              <h3 class="text-h6 font-weight-medium text-white contact-heading">Email</h3>
              <p class="text-white">icelin@elmu.edu.my</p>
            </v-col>

            <v-col cols="12" md="3">
              <h3 class="text-h6 font-weight-medium text-white contact-heading">Address</h3>
              <p class="text-white">1, Persiaran Timur 1, Bandar Enstek, 71760 Nilai, Negeri Sembilan</p>
            </v-col>

            <v-col cols="12" md="3">
              <h3 class="text-h6 font-weight-medium text-white contact-heading">Social Media</h3>
              <div class="d-flex justify-center ga-4 mt-2">
                <a href="https://facebook.com/ELMUniversty/" target="_blank" class="social-link">
                  <v-icon size="28" color="blue-lighten-2">mdi-facebook</v-icon>
                </a>
                <a href="https://instagram.com/elmu_university/" target="_blank" class="social-link">
                  <v-icon size="28" color="pink-lighten-2">mdi-instagram</v-icon>
                </a>
                <a href="https://www.linkedin.com/company/enforcement-leadership-and-management-university-elmu/" target="_blank" class="social-link">
                  <v-icon size="28" color="white">mdi-linkedin</v-icon>
                </a>
                <a href="https://youtube.com/@elmutv" target="_blank" class="social-link">
                  <v-icon size="28" color="red-lighten-2">mdi-youtube</v-icon>
                </a>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">

// Generate random styles for particles (Pattern 4 style)
const getParticleStyle = (index: number) => {
  const size = Math.random() * 6 + 3;
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const animationDuration = Math.random() * 4 + 3;
  const delay = Math.random() * 3;
  
  return {
    width: size + 'px',
    height: size + 'px',
    left: left + '%',
    top: top + '%',
    animationDuration: animationDuration + 's',
    animationDelay: delay + 's'
  };
};

</script>

<style scoped>
.contact-container {
  position: relative;
  min-height: 500px;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
}

/* Pattern 4: Particle Wave Background */
.particle-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 70%, #475569 100%);
  z-index: 1;
}

.particle-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  background: radial-gradient(circle, rgba(59,130,246,0.9), rgba(147,197,253,0.4), transparent);
  border-radius: 50%;
  animation: particleFloat 6s ease-in-out infinite;
}

@keyframes particleFloat {
  0%, 100% { 
    transform: translateY(0px) translateX(0px) scale(1); 
    opacity: 0.4; 
  }
  33% { 
    transform: translateY(-40px) translateX(20px) scale(1.2); 
    opacity: 0.8; 
  }
  66% { 
    transform: translateY(-20px) translateX(-15px) scale(0.8); 
    opacity: 0.6; 
  }
}

.wave-lines {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
}

.wave-line {
  position: absolute;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(59,130,246,0.7), transparent);
  animation: waveMove 4s ease-in-out infinite;
}

.wave-1 { bottom: 20px; animation-delay: 0s; }
.wave-2 { bottom: 50px; animation-delay: 1s; }
.wave-3 { bottom: 80px; animation-delay: 2s; }
.wave-4 { bottom: 110px; animation-delay: 3s; }

@keyframes waveMove {
  0%, 100% { transform: translateX(-100%) scaleX(0.5); opacity: 0; }
  50% { transform: translateX(0%) scaleX(1); opacity: 1; }
}

/* Content Styling */
.contact-us {
  position: relative;
  z-index: 2;
  background: transparent;
}

.wave-text {
  text-shadow: 0 0 25px rgba(59,130,246,0.8);
}

.contact-heading {
  text-shadow: 0 0 15px rgba(59,130,246,0.6);
  margin-bottom: 8px;
}

.wave-divider {
  border-color: rgba(59,130,246,0.7) !important;
  box-shadow: 0 0 10px rgba(59,130,246,0.5);
}

.social-link {
  transition: all 0.3s ease;
  display: inline-block;
  padding: 8px;
  border-radius: 50%;
  background: rgba(59,130,246,0.1);
}

.social-link:hover {
  transform: scale(1.2) translateY(-2px);
  background: rgba(59,130,246,0.2);
  box-shadow: 0 5px 15px rgba(59,130,246,0.4);
}

/* Enhanced text readability */
.text-white {
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .contact-us {
    padding: 2rem !important;
  }
  
  .particle {
    animation-duration: 8s !important;
  }
  
  .wave-line {
    height: 2px;
  }
}
</style>