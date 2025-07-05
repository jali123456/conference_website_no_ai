<template>
  <v-container fluid class="pa-0 pa-sm-2 pa-md-4" max-width="1400">
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <div class="position-relative">
            <!-- :height="bannerHeight" -->
            <v-img
              src="@/assets/conference-banner.png"
              width="100%"
              contain
              class="text-white"
            >
              <v-card-title :class="bannerTitleClass">
                </v-card-title>
            </v-img>
          </div>

          <v-card-text :class="contentTextClass">
            <p class="mb-4">
              Join us for the premier academic conference that bridges the worlds of technology, 
              academia, and popular culture. Our unique conference brings together scholars, 
              researchers, and enthusiasts in an engaging environment
            </p>

            <p class="mb-4">
              This year's theme focuses on the intersection of academic research and modern media culture, 
              featuring keynote speakers from renowned institutions and special presentations that 
              showcase cutting-edge research in an accessible format.
            </p>

            <v-row class="mt-4 mt-sm-6">
              <v-col cols="12" sm="6" md="4">
                <v-card class="mb-4 mb-sm-0">
                  <v-card-title :class="featureTitleClass">
                    Enforcement & Law
                  </v-card-title>
                  <v-card-text>
                    This sub-theme explores the evolving landscape of law enforcement and legal systems in a rapidly changing world. Topics include the modernization of enforcement agencies, the impact of technology on law enforcement, cross-border legal cooperation, and the challenges of upholding justice and the rule of law in the face of new threats. Participants will discuss best practices, policy reforms, and innovative strategies to strengthen legal frameworks and ensure effective, ethical enforcement.
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-card class="mb-4 mb-sm-0">
                  <v-card-title :class="featureTitleClass">
                    Integrity & Leadership
                  </v-card-title>
                  <v-card-text>
                    This sub-theme focuses on the importance of integrity and ethical leadership in public and private institutions. It addresses anti-corruption measures, transparency, accountability, and the cultivation of values-based leadership. Sessions will highlight case studies, policy innovations, and frameworks that promote a culture of integrity, foster public trust, and empower leaders to drive positive change in their organizations and communities.
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-card>
                  <v-card-title :class="featureTitleClass" class="text-wrap">
                    Disaster Management & Climate Resilience
                  </v-card-title>
                  <v-card-text>
                    This sub-theme examines the science of disaster risk reduction and strategies for building climate resilience. It covers topics such as disaster preparedness, emergency response, climate adaptation, and the integration of scientific research into policy and practice. Experts will share insights on strengthening community resilience, leveraging technology for disaster management, and fostering international collaboration to address the growing challenges posed by climate change and natural hazards.
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>

          <v-card-actions class="pa-4">
            <v-btn
              color="primary"
              to="/fees-registration"
              block
              size="large"
              class="text-body-1"
            >
              Register Now
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center my-4">
        <CountdownTimer />
      </v-col>
    </v-row>
    <v-row cols="12" class="mt-6">
      <v-col cols="12" class="sponsor-section">
        <v-card class="mx-auto">
          <v-img
            src="@/assets/sponsor-opportunities-2.jpg"
            alt="Sponsor Logos"
            width="100%"
            contain
          >
            </v-img>
        </v-card>
      </v-col>
      <v-col cols="12" class="sponsor-section">
        <v-card class="mx-auto" max-width="1400">
          <v-img
            src="@/assets/sponsor-opportunities.jpg"
            alt="Sponsor Logos"
            width="100%"
            contain
          >
            </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row cols="12">
      <v-col cols="12">
        <v-card class="mx-auto" max-width="1400">
          <v-card-title class="font-weight-bold text-h5 text-center py-4" style="word-break:break-word; white-space:normal;">
            <span class="d-block">SENARAI TETAMU JEMPUTAN (VIP)</span>
            <span class="d-block text-body-1">International Conference on Enforcement, Law & Integrity 2026 (ICELIn26)</span>
          </v-card-title>
          <v-card-text>
            <v-table density="comfortable">
              <thead>
                <tr>
                  <th>Bil.</th>
                  <th>Jawatan</th>
                  <th>Nama</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Premier Sarawak</td>
                  <td>YBhg. Datuk Patinggi Tan Sri (Dr) Abang Haji Abdul Rahman Zohari bin Tun Datuk Abang Haji Openg</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Hakim Besar Sabah dan Sarawak</td>
                  <td>Yang Amat Arif Tan Sri Abdul Rahman bin Sebli</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Setiausaha Kerajaan Negeri Sarawak</td>
                  <td>YBhg. Datuk Amar Haji Mohamad Abu Bakar bin Marzuki</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Timbalan Menteri di Jabatan Premier<br /><span class="text-caption">(Undang-undang, MA63, Negeri-Persekutuan)</span></td>
                  <td>YBhg. Datuk Hajah Sharifah Hasidah Bt. Sayeed Aman Ghazali</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>Ketua Pesuruhjaya SPRM<br /><span class="text-caption">(MACC Chief Commissioner)</span></td>
                  <td>YBhg. Tan Sri Dato' Sri Haji Azam bin Baki</td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>Pesuruhjaya Polis Sarawak</td>
                  <td>YBhg. CP Dato Mancha Anak Ata</td>
                </tr>
                <tr>
                  <td>7.</td>
                  <td>Ketua JPJKK PDRM Sarawak</td>
                  <td>Dr. Parusuraman Subramaniam</td>
                </tr>
                <tr>
                  <td>8.</td>
                  <td>Pengarah SPRM Sarawak</td>
                  <td>YBrs. Hasbilah bin Mohamad Salleh</td>
                </tr>
                <tr>
                  <td>9.</td>
                  <td>Pengarah Hutan Sarawak</td>
                  <td>Datu Haji Hamden bin Haji Mohammad</td>
                </tr>
                <tr>
                  <td>10.</td>
                  <td>Naib Canselor UNIMAS</td>
                  <td>Professor Dr. Ahmad Hata Rasit</td>
                </tr>
                <tr>
                  <td>11.</td>
                  <td>Naib Canselor ELMU</td>
                  <td>Professor Datuk Dr. Kassim Noor Mohamed</td>
                </tr>
                <tr>
                  <td>12.</td>
                  <td>Pengarah Kampus UPM Bintulu</td>
                  <td>Professor Dr. Shahrul Razid Sarbini</td>
                </tr>
                <tr>
                  <td>13.</td>
                  <td>Timbalan Ketua Pegawai Eksekutif Kumpulan & Presiden, Strategi ELMU</td>
                  <td>Dato’ Hairul Ridza Hayata</td>
                </tr>
                <tr>
                  <td>14.</td>
                  <td>Ahli Lembaga Pengarah ELMU</td>
                  <td>YBhg. Tan Sri Idrus Harun</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { computed } from 'vue'

const { xs, sm, md, lg, xl, xxl } = useDisplay()

// Responsive height for the banner image based on breakpoints
// const bannerHeight = computed(() => {
//   if (xs.value) return '160px' // Extra small: phones
//   if (sm.value) return '180px' // Small: tablets
//   if (md.value) return '350px' // Medium: larger tablets and small laptops
//   if (lg.value) return '600px' // Large: MacBooks and standard laptops
//   if (xl.value) return '700px' // Extra large: desktop monitors
//   return '600px'               // XXL: 4K and ultrawide monitors
// })

// Responsive height for the sponsor image
// const sponsorHeight = computed(() => {
//   if (xs.value) return '120px'
//   if (sm.value) return '180px'
//   if (md.value) return '240px'
//   if (lg.value) return '400px'
//   if (xl.value) return '500px'
//   return '500px'
// })

// Dynamic classes for the banner title
const bannerTitleClass = computed(() => {
  const baseClasses = ['font-weight-bold']
  
  if (xs.value) {
    return [...baseClasses, 'text-h5']
  } else if (sm.value) {
    return [...baseClasses, 'text-h4']
  } else {
    return [...baseClasses, 'text-h3']
  }
})

// Dynamic classes for the content text
const contentTextClass = computed(() => {
  const baseClasses = ['py-4']
  
  if (xs.value || sm.value) {
    return [...baseClasses, 'text-body-2']
  } else {
    return [...baseClasses, 'text-body-1']
  }
})

// Dynamic classes for feature card titles
const featureTitleClass = computed(() => {
  if (xs.value || sm.value) {
    return 'text-h6'
  } else {
    return 'text-h5'
  }
})
</script>

<style scoped>
.v-card-title {
  word-break: normal;
}

.v-card {
  overflow: hidden;
}

/* Mobile-specific adjustments */
@media (max-width: 600px) {
  .v-container {
    padding: 0;
  }
  
  .v-card {
    border-radius: 0;
  }
}

.position-relative {
  position: relative;
}
</style>