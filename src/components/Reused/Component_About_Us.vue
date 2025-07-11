
<template>
  <section class="about-icelin">
    <h4 class="text-h4 text-center">ABOUT ICELIN 2026</h4>
    <p class="text-body-1">
      The ICELIN26 Conference is organized to discuss key issues related to law enforcement, legal systems, and integrity in administration. It aims to strengthen best practices in law enforcement and enhance the effectiveness of governance with integrity. This conference also provides a platform for academics, policymakers, legal practitioners, and enforcement officers to share ideas, discuss current challenges, and explore innovative solutions to increase public trust in legal and enforcement institutions.
    </p>
    <p class="text-body-1">
      In addition, ICELIN26 serves as an important avenue to strengthen collaboration between academic institutions, enforcement agencies, the private sector, and non-governmental organizations in promoting professionalism, transparency, and accountability within the justice system. By featuring the latest research presentations, panel discussions, and interactive workshops, this conference is expected to stimulate the development of more effective policies and practices in the fields of law, enforcement, and integrity.
    </p>
    <div class="event-organizers">
      <h5 class="text-h5 text-center">The event is organized by</h5>
      <div class="d-flex justify-center">
        <img src="@/assets/logo.png" alt="ICELIn26 logo" />
        <img src="@/assets/elmu_logo.png" alt="ELMU University Logo" />
      </div>
    </div>
    <p class="text-body-1">
      ICELIN26 will showcase the latest research presentations, panel discussions, and interactive workshops focused on law, enforcement, and integrity. The conference is designed to encourage the development of more effective policies and practices, while also fostering professionalism, transparency, and accountability in the justice system. Participants will have the opportunity to network, share experiences, and collaborate on innovative solutions to current challenges in the field.
    </p>
    <p class="text-body-1">
      The ICELIN26 team looks forward to welcoming all participants to Kuching, Sarawak Malaysia, and hopes this conference will inspire impactful change and lasting partnerships in the pursuit of justice and integrity.
    </p>
  </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ComponentAboutUs',
});
</script>


<style scoped>
.about-icelin {
  padding: 2rem 1rem;
}
.about-icelin h2 {
  margin-bottom: 1rem;
}
.event-organizers {
  margin: 2rem 0 1rem 0;
}

.organizer-images img {
  width: 150px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  background: #eee;
}

</style>