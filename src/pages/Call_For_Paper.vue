<template>
<v-container fluid class="pa-0">
    <v-img
        src="https://placehold.co/500x100"
        lazy-src="https://placehold.co/500x100"
        cover
        min-height="250"
        class="align-center justify-center text-center mb-6"
        gradient="to top right, rgba(0,0,0,.5), rgba(0,0,0,.7)"
    >
        <div class="banner-overlay d-flex align-center justify-center pa-4">
        <v-container>
            <v-row justify="center">
            <v-col cols="12" md="10" lg="8">
                <h2 class="text-h3 text-md-h2 font-weight-bold mb-4 text-white">
                    Call for Paper
                </h2>
            </v-col>
            </v-row>
        </v-container>
        </div>
    </v-img>
    <v-row justify="center" align="center">
        <v-col
        cols="12"
        sm="8"
        md="8"
        lg="8"
        >
            <p class="text-body-1"> The 1st International Conference on Enforcement, Law & Integrity 2026 The ICELIN26 Conference invites scholars, researchers, practitioners, and policymakers to submit original papers that explore the evolving landscape of law enforcement, legal systems, and administrative integrity. This conference serves as a vital platform to exchange knowledge, 
            share best practices, and address current challenges in strengthening public trust and institutional accountability.
            With a focus on fostering collaboration across academic, enforcement, governmental, and non-governmental sectors, ICELIN26 aims to inspire impactful dialogue and innovative solutions that advance professionalism, transparency, and integrity within the justice system.
            Join us in Kuching as we explore forward-thinking approaches through research presentations, panel discussions, and interactive workshops that will shape the future of governance, law, and enforcement.
            </p>
        </v-col>
    </v-row>
    <Component_Overview_Guideline/>
    <Component_Event_Subtheme/>
    <Component_Event_Calendar/>
    <Component_Submission_Guidelines/>
    <Component_Registrationpayment_Guidelines/>
    <Component_Contact_Us/>
</v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>