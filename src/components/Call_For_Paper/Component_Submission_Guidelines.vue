<template>
  <v-container fluid class="pa-0 mb-8">
    <h3 class="text-h3 text-center mb-10">Submission Guidelines</h3>
    <p class="text-body-1 text-center mb-12">
      Authors are recommended to prepare their manuscript according to the following guidelines
    </p>

    <v-row justify="center" align="stretch" dense>
      <v-col
        v-for="(guideline, index) in data_submission_guidelines"
        :key="guideline.id"
        cols="12"
        sm="6"
        md="4"
        lg="4"
        x="4"
        xxl="4"
        class="mx-2"
      >
        <v-card
          class="d-flex flex-column text-center pa-6 border-b-xl"
          color="elmubackground"
          rounded="xl"
          elevation="2"
          height="100%"
          :style="{ borderBottomColor: '#FF0000' }"
        >
          <v-card-text>
            <div class="text-h6 text-grey-lighten-1 mb-2">
              {{ String(index + 1).padStart(2, '0') }}
            </div>
            <div class="text-subtitle-1 font-weight-bold text-white mb-2">
              {{ guideline.title }}
            </div>
            <div class="text-body-2 text-grey-lighten-2">
              {{ guideline.description }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { data_submission_guidelines } from './Submission_Guidelines_Data';

export default defineComponent({
  name: 'SubmissionGuidelines',
  data() {
    return {
      data_submission_guidelines
    };
  }
});
</script>

<style scoped>
.v-card {
  border-bottom-width: 6px !important;
}
</style>
