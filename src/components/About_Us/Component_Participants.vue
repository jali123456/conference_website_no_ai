<template>
  <v-container fluid>
    <v-row align="center">
        <v-col
            cols="12"
            sm="6"
            md="6"
            lg="6"
            class="pa-8"
        >
            <div class="text-left">
                <p class="text-h5 mb-4">Who Participates in ICELIn?</p>
                <h5 class="text-h5 mb-2 font-weight-medium">Participants 1</h5>
                <p class="text-body-1 mb-4"> This is a description of Participant 1.</p>
                <h5 class="text-h5 mb-2 font-weight-medium">Participants 2</h5>
                <p class="text-body-1 mb-4"> This is a description of Participant 2.</p>
                <h5 class="text-h5 mb-2 font-weight-medium">Participants 3</h5>
                <p class="text-body-1 mb-4"> This is a description of Participant 3.</p>
                <h5 class="text-h5 mb-2 font-weight-medium">Participants 4</h5>
                <p class="text-body-1 mb-4"> This is a description of Participant 4.</p>
            </div>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="6"
            lg="6"
            class="pa-8"
        >
        <v-img
        src="https://placehold.co/500x400"
        alt="Participant Image"
        lazy-src="https://placehold.co/500x400"
        class="rounded-lg mb-6"
        cover
        max-height="200px"
        />
        <v-img
        src="https://placehold.co/500x400"
        alt="Participant Image"
        lazy-src="https://placehold.co/500x400"
        class="rounded-lg"
        cover
        width="100%"
        max-height="200px"
        />
        </v-col>
                <v-col
            cols="12"
            sm="6"
            md="6"
            lg="6"
            class="pa-8"
        >
        <v-img
        src="https://placehold.co/500x400"
        alt="Participant Image"
        lazy-src="https://placehold.co/500x400"
        class="rounded-lg mb-6"
        cover
        max-height="200px"
        />
        <v-img
        src="https://placehold.co/500x400"
        alt="Participant Image"
        lazy-src="https://placehold.co/500x400"
        class="rounded-lg"
        cover
        width="100%"
        max-height="200px"
        />
        </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Participants',
});
</script>

<style scoped>

</style>