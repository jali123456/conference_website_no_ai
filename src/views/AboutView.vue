<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">About the Conference</h1>
      </v-col>

      <!-- Conference Overview -->
      <v-col cols="12" lg="6" md="6">
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
      <!-- Objectives -->
      <v-col cols="12" lg="6" md="6">
        <v-card class="mb-6">
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
      <!-- Organizing Committee -->
      <v-col cols="12">
        <v-card>
          <v-card-title class="text-h5">
            <v-icon start>mdi-account-group</v-icon>
            Sub-Theme
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="4">
                <v-card variant="outlined">
                  <v-card-title >Enforcement & Law</v-card-title>
                  <v-card-text>
                    • Modernization of law enforcement and legal systems<br>
                    • Technology's impact on justice and cross-border cooperation<br>
                    • Best practices and policy reforms for effective enforcement
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card variant="outlined">
                  <v-card-title >Integrity & Leadership</v-card-title>
                  <v-card-text>
                    • Integrity and ethical leadership in institutions<br>
                    • Anti-corruption, transparency, and accountability<br>
                    • Building public trust and positive change
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12" md="4">
                <v-card variant="outlined">
                  <v-card-title >Disaster Science & Climate<br></br> Resilience</v-card-title>
                  <v-card-text>
                    • Disaster risk reduction and climate resilience<br>
                    • Preparedness, response, and adaptation strategies<br>
                    • Technology and collaboration for resilient communities
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