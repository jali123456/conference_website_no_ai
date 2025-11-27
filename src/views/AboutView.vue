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
       <AboutOrganizer/>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'About the Conference | ICELIn 2026',
  meta: [
    {
      name: 'description',
      content: 'Learn about the ICELIn 2026 Conference, its objectives, and the organizer ELMU. Discover how the event fosters collaboration in law enforcement, legal systems, and integrity.'
    },
    {
      property: 'og:title',
      content: 'About the Conference | ICELIn 2026'
    },
    {
      property: 'og:description',
      content: 'Explore the mission, vision, and objectives of the ICELIn 2026 Conference and its organizer, ELMU.'
    },
    {
      property: 'og:url',
      content: 'https://icelin.my/about'
    },
    {
      name: 'twitter:title',
      content: 'About the Conference | ICELIn 2026'
    },
    {
      name: 'twitter:description',
      content: 'Learn about the ICELIn 2026 Conference and the Enforcement, Leadership and Management University (ELMU).'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://icelin.my/about'
    }
  ]
})

</script>

<style scoped>
.blue-bg {
  background-color: #0d1c2f; /* Material Design Blue */
  border-radius: 8px;
  padding: 16px;
}

</style> 