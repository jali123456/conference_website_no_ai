<template>
  <v-container fluid class="pa-10 bg-blue-lighten-5">
    <v-row>
      <!-- Left Column: Our Purpose -->
      <v-col cols="12" md="6">
        <h5 class="text-h5 font-weight-bold text-blue-darken-3 mb-2">
          Our Purpose
        </h5>
        <h3 class="text-h4 font-weight-medium text-primary">
          Commitment to Sustainability and Innovation
        </h3>
      </v-col>

      <!-- Right Column: Our Mission and Values -->
      <v-col cols="12" md="6">
        <h5 class="text-h5 font-weight-bold text-blue-darken-3 mb-2">
          Our Mission
        </h5>
        <p class="text-body-1 text-left mb-6">
          To advance the fields of law enforcement, legal systems, and integrity through knowledge-sharing, collaboration, and policy innovation. 
          ICELIN 2026 is committed to building a platform that empowers academics, 
          practitioners, and enforcement professionals to shape effective governance and enhance public trust in justice institutions.
        </p>

        <h5 class="text-h5 font-weight-bold text-blue-darken-3 mb-2">
          Our Values
        </h5>
        <p class="text-body-1 text-left mb-0">
          <strong>Integrity</strong> – We champion ethical conduct, honesty, and transparency in all initiatives.<br>
          <strong>Collaboration</strong> – We foster strong partnerships across academia, enforcement agencies, and civil society.<br>
          <strong>Professionalism</strong> – We uphold excellence, accountability, and continuous improvement.<br>
          <strong>Innovation</strong> – We encourage creative thinking and research-based approaches to tackle real-world challenges.<br>
          <strong>Inclusivity</strong> – We embrace diverse perspectives to ensure equitable and just systems for all.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>



<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "Purpose",
})
</script>