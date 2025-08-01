<!-- AboutView -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">About the Conference</h1>
      </v-col>

      <!-- Conference Overview -->
      <v-row align="stretch" class="mb-4">
        <!-- Conference Overview -->
        <v-col cols="12" lg="6" md="6">
          <v-card class="mb-6 h-100">
            <v-card-title class="text-h5">
              <v-icon start>mdi-information-outline</v-icon>
              Conference Overview
            </v-card-title>
            <v-card-text>
              <p class="text-body-1">
                The ICELIn26 Conference is organized to address key issues related to law enforcement, the legal system, and integrity in administration. 
                Its goal is to strengthen best practices in law enforcement and enhance the effectiveness of good governance with integrity.
                The conference also serves as a platform for academics, policymakers, legal practitioners, and enforcement officers to share ideas, discuss current challenges,
                and explore innovative solutions to improve public trust in legal and enforcement institutions.
              </p>
              <p class="text-body-1 mt-3">
                Additionally, ICELIn26 acts as an important avenue to reinforce collaboration between academic institutions, enforcement agencies, 
                the private sector, and non-governmental organizations in promoting professionalism, transparency, and accountability in the justice system.
                Through the presentation of current research, panel discussions, and interactive workshops, the conference aims 
                to stimulate the development of more effective policies and practices in the fields of law, enforcement, and integrity.
              </p>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- Conference Objectives -->
        <v-col cols="12" lg="6" md="6">
          <v-card class="mb-6 h-100">
            <v-card-title class="text-h5">
              <v-icon start>mdi-bullseye-arrow</v-icon>
              Conference Objectives
            </v-card-title>
            <v-card-text>
              <p class="text-body-1">
                i. Provide a scholarly platform for researchers, legal practitioners, and policymakers to share ideas, research findings, and best practices.<br><br>
                ii. Strengthen strategic collaboration networks between academic institutions, enforcement agencies, and industry to enhance the quality of governance and integrity.<br><br>
                iii. Encourage the production of high-quality research that directly contributes to policy improvements and the effective implementation of laws.<br><br>
                iv. Attract the involvement of researchers and experts from within and outside the country to establish cross-border collaboration with ELMU in the fields of enforcement, law, and integrity.
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <SubthemeList />
      <!-- About the Organizer -->
      <v-row>
        <v-col cols="12">
          <h1 class="text-h3 mb-6 text-center">About the Organizer</h1>
        </v-col>
        <v-col cols="12">
          <v-card class="mb-6">
            <v-card-text>
              <p class="text-body-1">
                Enforcement, Leadership and Management University (ELMU) was founded in 2020 by Professor Datuk Dr. Kassim Noor Mohamed and Dato' Hairul Ridza Hayata with its campus operations commencement in 2022 at Bandar Enstek, Negeri Sembilan, Malaysia. Guided by their founding vision and mission, ELMU was built with a commitment to global excellence, innovation, and diversity through education and professional practice in the areas of law enforcement, global security, technology and governance within various sectors of industries.
              </p>
              <p class="text-body-1 mt-3">
                ELMU envisiones being the torchbearer for a new era in education and research, bringing together academia-government-industry in collaboration and engagement that epitomises integrity, inculcates diligence and trustworthiness while forging lasting bonds and being the force of change, together. ELMU aims to contribute value to the future of law enforcement and the domains that it governs by raising the standards in its vast faculties for society, the nation, and beyond.
              </p>
              <p class="text-body-1 mt-3">
                Thus, ELMU is known to be the first full-fledged university in Malaysia and across the Asian region that is dedicated to engaging, developing and delivering a holistic learning experience - providing a paradigm shift in education and research through academia and experiential learning with collaborative engagements between university-government-industry in law enforcement to shape highly-specialised professionals and future leaders of tomorrow across the spectrum of law enforcement, leadership and management.
              </p>

              <!-- Event Organizers Section -->
              <div class="event-organizers mb-6 mt-6">
                <h5 class="text-h5 text-center mb-4">The event is organized by</h5>
                <v-row justify="center" align="center" class="ga-4">
                  <v-col cols="6" sm="4" md="3" class="text-center">
                    <v-img 
                      src="@/assets/logo.png" 
                      alt="ICELIn26 logo"
                      contain
                      max-height="200"
                    />
                  </v-col>
                  <v-col cols="6" sm="4" md="3" class="text-center">
                    <v-img 
                      src="@/assets/icon/elmu_logo.png" 
                      alt="ELMU University Logo"
                      contain
                      max-height="200"
                    />
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>


</style> 