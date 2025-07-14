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
                    Registration & Payment Guidelines
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
            <h4 class="text-h4 text-center mb-6">Registration & Payment Guidelines</h4>
            <p class="text-body-1"> Welcome to the ICELIn 2026. This page provides detailed instructions and guidelines on the registration process,
             payment methods, fee structures, and important dates. We encourage all participants, 
             including presenters (both oral and poster), to read these guidelines carefully to ensure a seamless registration experience.
            </p>
        </v-col>
    </v-row>
    <Component_General_Process/>
    <Component_Registration_Instructions/>
    <Component_Register_Banner/>
</v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>