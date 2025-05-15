<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">About the Conference</h1>
      </v-col>

      <!-- Conference Overview -->
      <v-col cols="12">
        <v-card class="mb-6">
          <v-card-title class="text-h5">
            <v-icon start>mdi-information-outline</v-icon>
            Conference Overview
          </v-card-title>
          <v-card-text>
            <p class="text-body-1">
              The International Conference on Advanced Technologies brings together researchers, 
              industry professionals, and academics from around the world to share cutting-edge 
              research and developments in emerging fields of technology. Founded in 2010, 
              the conference has grown to become one of the premier events in its field, 
              attracting participants from over 50 countries.
            </p>
            <p class="text-body-1 mt-3">
              This year's conference focuses on breakthrough technologies in artificial intelligence, 
              sustainable energy, biotechnology, and quantum computing. Through keynote speeches, 
              technical sessions, workshops, and networking events, we aim to facilitate 
              knowledge exchange and foster collaborations that drive innovation.
            </p>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Mission & Vision -->
      <v-col cols="12" md="6">
        <v-card class="mb-6">
          <v-card-title class="text-h5">
            <v-icon start>mdi-bullseye-arrow</v-icon>
            Our Mission
          </v-card-title>
          <v-card-text>
            <p class="text-body-1">
              Our mission is to accelerate technological advancement through meaningful exchange 
              of ideas, methodologies, and research outcomes. We provide a platform where scholars, 
              practitioners, and innovators can showcase their work, receive constructive feedback, 
              and build relationships that extend beyond the conference.
            </p>
            <div class="mt-4">
              <div v-for="(point, index) in missionPoints" :key="index" class="d-flex align-center mb-2">
                <v-icon color="primary" class="mr-2">mdi-check-circle</v-icon>
                <span>{{ point }}</span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="mb-6">
          <v-card-title class="text-h5">
            <v-icon start>mdi-eye</v-icon>
            Our Vision
          </v-card-title>
          <v-card-text>
            <p class="text-body-1">
              We envision a future where technology serves humanity by addressing global 
              challenges and enhancing quality of life. Our conference strives to be at the 
              forefront of technological discourse, driving innovation that is ethical, 
              sustainable, and beneficial to society.
            </p>
            <div class="mt-4">
              <div v-for="(point, index) in visionPoints" :key="index" class="d-flex align-center mb-2">
                <v-icon color="primary" class="mr-2">mdi-lightbulb-on</v-icon>
                <span>{{ point }}</span>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Organizing Committee -->
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h5">
            <v-icon start>mdi-account-group</v-icon>
            Organizing Committee
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col v-for="(member, index) in committeeMembers" :key="index" cols="12" md="4">
                <v-card variant="outlined">
                  <v-card-title>{{ member.name }}</v-card-title>
                  <v-card-subtitle>{{ member.position }}</v-card-subtitle>
                  <v-card-text>
                    <p>{{ member.affiliation }}</p>
                    <p class="text-caption mt-2">{{ member.bio }}</p>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const missionPoints = [
  "Facilitate exchange of cutting-edge research",
  "Promote interdisciplinary collaboration",
  "Support early-career researchers",
  "Bridge academia and industry",
  "Disseminate knowledge through publications"
]

const visionPoints = [
  "Advance technology for societal benefit",
  "Foster innovation across disciplines",
  "Build a global community of researchers",
  "Promote diversity in technological fields",
  "Address grand challenges through collaboration"
]

const committeeMembers = [
{
    name: "Professor Datuk Dr. Kassim Noor Mohamed",
    position: "Vice Chancellor",
    affiliation: "Elmu University",
    bio: "Bio Here"
  },
  {
    name: "Prof. Dr. Pakhriazad Hassan Zaki",
    position: "Chairman",
    affiliation: "Elmu University",
    bio: "Bio Here"
  },
  {
    name: "Dr Marzanah A. Jabar",
    position: "Vice-Chairman",
    affiliation: "Elmu University",
    bio: "Bio Here"
  },
  {
    name: "Ir. Dr. Nor Azhar Mohd Arif ",
    position: "Advisory Committee",
    affiliation: "Elmu University",
    bio: "Bio Here"
  },
  {
    name: "Datuk Mohd Shahrizan Bin Che Mat Din ",
    position: "Advisory Committee",
    affiliation: "Elmu University",
    bio: "Bio Here"
  },
  {
    name: "Prof. Madya Dr. Mohamad Maulana Magiman",
    position: "Advisory Committee",
    affiliation: "UPM",
    bio: "Bio Here"
  },
  {
    name: "Dato' Dr Yew Chong Hooi",
    position: "Advisory Committee",
    affiliation: "Elmu University",
    bio: "Bio Here"
  },
  {
    name: "Dr. Siti Norbaini Sabtu",
    position: "Secretary",
    affiliation: "Elmu University",
    bio: "Bio Here"
  },
  {
    name: "Yushairul bin Mohamad Yunus",
    position: "Secretariat",
    affiliation: "Elmu University",
    bio: "Bio Here"
  },
  {
    name: "Nur Nazirah binti Johari",
    position: "Secretariat",
    affiliation: "Elmu University",
    bio: "Bio Here"
  },
  {
    name: "Kong Li San",
    position: "Treasure & Registration",
    affiliation: "Elmu University",
    bio: "Bio Here"
  },
  {
    name: "Shankar Durairaja",
    position: "Techincal program",
    affiliation: "Elmu University",
    bio: "Bio Here"
  },
  {
    name: "Dr Rabieahtul Abu Bakar ",
    position: "Publicity & Publication",
    affiliation: "Elmu University",
    bio: "Bio Here"
  },
  {
    name: "Yahurin binti Mohd Yassin ",
    position: "Publicity & Publication",
    affiliation: "Elmu University",
    bio: "Bio Here"
  },
  {
    name: "Dr. Haji Norhafifi Haji Ismail ",
    position: "Protocol",
    affiliation: "Elmu University",
    bio: "Bio Here"
  },
  {
    name: "Norashikin Binti Othman ",
    position: "Protocol",
    affiliation: "Elmu University",
    bio: "Bio Here"
  },
  {
    name: "Muhammad Ghazali Bin Hamzah",
    position: "Website",
    affiliation: "Elmu University",
    bio: "Bio Here"
  },
]
</script>

<style scoped>
.v-card {
  height: 100%;
}
</style> 