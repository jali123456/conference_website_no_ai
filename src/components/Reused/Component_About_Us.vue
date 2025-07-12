<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" md="10" lg="12">
        <v-card class="pa-6" elevation="0">
          <v-card-title class="text-h4 text-center mb-4 px-0">
            ABOUT ICELIN 2026
          </v-card-title>
          
          <v-card-text class="px-0">
            <p class="text-body-1 mb-4">
              The ICELIN26 Conference is organized to discuss key issues related to law enforcement, legal systems, and integrity in administration. It aims to strengthen best practices in law enforcement and enhance the effectiveness of governance with integrity. This conference also provides a platform for academics, policymakers, legal practitioners, and enforcement officers to share ideas, discuss current challenges, and explore innovative solutions to increase public trust in legal and enforcement institutions.
            </p>
            
            <p class="text-body-1 mb-6">
              In addition, ICELIN26 serves as an important avenue to strengthen collaboration between academic institutions, enforcement agencies, the private sector, and non-governmental organizations in promoting professionalism, transparency, and accountability within the justice system. By featuring the latest research presentations, panel discussions, and interactive workshops, this conference is expected to stimulate the development of more effective policies and practices in the fields of law, enforcement, and integrity.
            </p>
            
            <!-- Event Organizers Section -->
            <div class="event-organizers mb-6">
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
                    src="@/assets/elmu_logo.png" 
                    alt="ELMU University Logo"
                    contain
                    max-height="200"
                  />
                </v-col>
              </v-row>
            </div>
            
            <p class="text-body-1 mb-4">
              ICELIN26 will showcase the latest research presentations, panel discussions, and interactive workshops focused on law, enforcement, and integrity. The conference is designed to encourage the development of more effective policies and practices, while also fostering professionalism, transparency, and accountability in the justice system. Participants will have the opportunity to network, share experiences, and collaborate on innovative solutions to current challenges in the field.
            </p>
            
            <p class="text-body-1 mb-0">
              The ICELIN26 team looks forward to welcoming all participants to Kuching, Sarawak Malaysia, and hopes this conference will inspire impactful change and lasting partnerships in the pursuit of justice and integrity.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentAboutUs',
});
</script>


<style scoped>
.event-organizers {
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
  padding: 16px;
}
</style>