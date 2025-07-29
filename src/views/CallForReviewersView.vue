<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="d-flex align-center justify-center mb-6">
          <v-divider class="flex-grow-1"></v-divider>
          <h1 class="text-h mx-4 text-center font-weight-bold">Reviewer</h1>
          <v-divider class="flex-grow-1"></v-divider>
        </div>
      </v-col>

      <!-- Info Card -->
      <v-col cols="12">
        <v-card class="pa-6" elevation="2">
          <p class="text-h4 text-center font-weight-bold mb-4">
            CALL FOR REVIEWER
          </p>
          <p class="text-body-1">
            We would also like to invite you as a reviewer to help uphold the quality of submissions. If you are interested and not registered as student in any institution, please register in the following link.
          </p>
        </v-card>
      </v-col>

      <!-- Registration Banner with Pattern 4 -->
      <v-col cols="12">
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
          <div class="banner-overlay d-flex align-center justify-center pa-4">
            <v-container>
              <v-row justify="center">
                <v-col cols="12" md="10" lg="8">
                  <h4 class="text-h4 font-weight-bold mb-4 text-white wave-text">
                    Ready to Contribute as a Reviewer?
                  </h4>
                  <p class="text-subtitle-1 text-md-h6 mb-8 text-white text-opacity-85">
                    Join our community in ensuring quality and integrity in academic submissions. Register now and make a meaningful impact.
                  </p>
                  <v-btn
                    color="elmubackground"
                    size="x-large"
                    rounded
                    class="elevation-6 red-bottom-border text-h6 font-weight-bold wave-button"
                    @click="goToRegister"
                  >
                    REGISTER NOW
                    <v-icon end>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const goToRegister = () => {
  window.open('https://forms.gle/placeholder-reviewer-form', '_blank')
}

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
.red-bottom-border {
  border-bottom: 4px solid red;
}

/* Pattern 4: Particle Wave Background */
.particle-background {
  position: relative;
  min-height: 350px;
  overflow: hidden;
  border-radius: 8px;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 70%, #475569 100%);
}

.particle-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
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

.wave-text {
  text-shadow: 0 0 25px rgba(59,130,246,0.8);
}

.wave-button {
  transition: all 0.3s ease;
}

.wave-button:hover {
  box-shadow: 0 0 30px rgba(59,130,246,0.6);
  transform: translateY(-2px);
}

.banner-overlay {
  position: relative;
  z-index: 10;
  height: 350px;
  background-color: rgba(0, 0, 0, 0.1);
}

/* Enhanced text readability */
.text-white {
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .particle {
    animation-duration: 8s !important;
  }
  
  .wave-line {
    height: 2px;
  }
  
  .particle-background {
    min-height: 300px;
  }
  
  .banner-overlay {
    height: 300px;
  }
}
</style>