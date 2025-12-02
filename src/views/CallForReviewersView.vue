<template>
  <v-container>
    <v-row>
      <!-- Info Card -->
        <v-col cols="12">
        <div class="d-flex align-center justify-center mb-6">
          <v-divider class="flex-grow-1 border-opacity-50"></v-divider>
          <h1 class="text-h mx-4 text-center font-weight-bold">Call for Reviewers</h1>
          <v-divider class="flex-grow-1 border-opacity-50"></v-divider>
        </div>
          <v-card class="pa-6" elevation="2">
            <p class="text-body-1 mb-6">
              We would also like to invite you as a reviewer to help uphold the quality of submissions. If you are interested and not registered as student in any institution, please register in the following link.
            </p>
            <v-table class="modern-table" density="compact">
              <thead>
                <tr>
                    <th class="text-left">No.</th>
                    <th class="text-left">List of Reviewer</th>
                </tr>
              </thead>
              <tbody>
                  <tr v-for="(reviewer, idx) in reviewerList" :key="reviewer.name">
                    <td>{{ idx + 1 }}</td>
                    <td>{{ reviewer.name }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card>
        </v-col>

      <!-- Reviewer Eligibility Section -->
      <v-col cols="12">
        <v-card class="pa-6 mb-6" elevation="2">
          <h2 class="text-h4 font-weight-bold mb-6 text-center">Reviewer Eligibility</h2>
          
          <p class="text-body-1 mb-4">
            The primary requirement for becoming a reviewer is a profound expertise in the respective research field, coupled with the ability to provide thorough, objective, and constructive evaluations of manuscripts.
          </p>
          
          <p class="text-body-1 mb-4">
            The qualifications and requirements for a potential reviewer are as follows:
          </p>

          <div class="mb-6">
            <h3 class="text-h6 font-weight-bold mb-2">1. Academic and Professional Qualifications</h3>
            <ul class="ml-6 mb-4">
              <li>Must hold at least a Master’s degree in a relevant field; a PhD or equivalent professional experience is preferred.</li>
              <li>Demonstrated subject-matter expertise aligned with the conference themes or specific tracks.</li>
              <li>Active involvement in research, academic, or professional practice within the last 3–5 years.</li>
            </ul>

            <h3 class="text-h6 font-weight-bold mb-2">2. Research and Publication Experience</h3>
            <ul class="ml-6 mb-4">
              <li>Possess a strong publication record in reputable journals, conferences, or industry outlets.</li>
              <li>Experience as an author, co-author, or reviewer in previous conferences or journals is an advantage.</li>
              <li>Familiarity with research methodologies, academic writing standards, and ethical publication practices.</li>
            </ul>

            <h3 class="text-h6 font-weight-bold mb-2">3. Ethical and Professional Conduct</h3>
            <ul class="ml-6 mb-4">
              <li>Must agree to uphold academic integrity, including confidentiality and impartiality.</li>
              <li>Must declare conflicts of interest related to assigned manuscripts (e.g., co-authorship, institutional affiliation, personal relationships).</li>
              <li>Must commit to providing constructive, respectful, and unbiased feedback.</li>
            </ul>

            <h3 class="text-h6 font-weight-bold mb-2">4. Availability and Commitment</h3>
            <ul class="ml-6 mb-4">
              <li>Able to review the required number of submissions within the specified timeline.</li>
              <li>Willing to engage in revisions, re-reviews, or discussions if needed.</li>
              <li>Must follow conference review guidelines, scoring rubrics, and formatting requirements.</li>
            </ul>

            <h3 class="text-h6 font-weight-bold mb-2">5. Technical Competence</h3>
            <ul class="ml-6 mb-4">
              <li>Comfortable using the conference’s paper management system (EasyChair).</li>
              <li>Capable of evaluating research design, methodology, results, and scholarly contribution.</li>
            </ul>
          </div>

          <v-divider class="my-6"></v-divider>

          <h2 class="text-h5 font-weight-bold mb-4">Requirements and Responsibilities of Reviewers</h2>
          <p class="text-body-1 mb-4">
            Reviewers are expected to provide a fair, objective, and timely evaluation of manuscripts. Reviewers are expected to:
          </p>
          <ul class="ml-6">
            <li class="mb-2">Assess the scientific quality of the manuscript with their expert knowledge.</li>
            <li class="mb-2">Prepare comprehensive and detailed review reports, and remain responsive throughout the peer review process.</li>
            <li class="mb-2">Uphold the highest standards of professionalism and ethics, avoiding personal, financial, or intellectual biases, focusing solely on the research quality and written presentation of the manuscript.</li>
            <li class="mb-2">Preserve confidentiality throughout the review process, not disclosing or using any unpublished information or communicating the manuscript content without prior consent.</li>
            <li class="mb-2">Refrain from contacting the authors directly without permission.</li>
            <li class="mb-2">Reviewers are asked to maintain their affiliation updated on their reviewer account to allow editors to identify potential conflicts of interest promptly.</li>
            <li class="mb-2">Complete the review process by providing the review reports within 7-14 days. If unable to adhere to this timeline or an extension is needed, please promptly communicate with the ICELIn team.</li>
          </ul>
        </v-card>
      </v-col>

      <!-- Registration Banner with Pattern 4 -->
      <v-container fluid class="pa-0">
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
                  <h4 class="text-h5 font-weight-bold mb-4 text-white wave-text">
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
      </v-container>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { reviewerList } from '../data/reviewerinfo'

useHead({
  title: 'Call for Reviewers | ICELIn 2026 Conference',
  meta: [
    {
      name: 'description',
      content: 'Join as a reviewer for the ICELIn 2026 Conference. Help uphold the quality of submissions and contribute to the academic community.'
    },
    {
      property: 'og:title',
      content: 'Call for Reviewers | ICELIn 2026 Conference'
    },
    {
      property: 'og:description',
      content: 'Apply to be a reviewer for the ICELIn 2026 Conference and support research excellence.'
    },
    {
      property: 'og:url',
      content: 'https://icelin.my/call-for-reviewers'
    },
    {
      name: 'twitter:title',
      content: 'Call for Reviewers | ICELIn 2026 Conference'
    },
    {
      name: 'twitter:description',
      content: 'Become a reviewer for the ICELIn 2026 Conference and help maintain high standards.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://icelin.my/call-for-reviewers'
    }
  ]
})

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

.modern-table {
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background: #f8fafc;
  box-shadow: 0 2px 8px rgba(59,130,246,0.08);
}
.modern-table th {
  background: #3b82f6;
  color: #fff;
  font-weight: 600;
  padding: 12px 8px;
  font-size: 1rem;
}
.modern-table td {
  padding: 10px 8px;
  font-size: 0.98rem;
  border-bottom: 1px solid #e5e7eb;
}
.modern-table tr:last-child td {
  border-bottom: none;
}
@media (max-width: 600px) {
  .modern-table th, .modern-table td {
    padding: 8px 4px;
    font-size: 0.92rem;
  }
  .modern-table {
    font-size: 0.92rem;
  }
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