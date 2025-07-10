<template>
  <v-container fluid>
    <h1 class="text-h3 text-center mb-4">SPEAKERS</h1>
    <p class="text-body-1 text-center mb-4">
      The 1st International Conference on Enforcement, Law & Integrity 2025 brings together
      distinguished leaders, experts, and changemakers from the fields of law enforcement,
      legal practice, governance, and emerging technologies. From high-ranking officers and
      legal scholars to industry pioneers and innovators, our speakers will share their
      insights, experiences, and cutting-edge approaches that are redefining enforcement
      strategies, promoting integrity, and advancing justice in an increasingly complex world.
    </p>

    <h1 class="text-h3 text-center mb-4">OPENING AND KEYNOTE SPEECH</h1>
    <div class="d-flex justify-center mb-6">
      <div class="text-center">
        <!-- The v-avatar component uses the 'image' prop to load images -->
        <v-avatar
          color="surface-variant"
          size="200"
          class="mb-3"
        >
          <img :src="keynoteSpeaker.imagePath" alt="Keynote Speaker" style="width: 100%; height: 100%; object-fit: cover;" />
        </v-avatar>
        <h3 class="text-h5 mb-1">{{ keynoteSpeaker.name }}</h3>
        <p class="text-body-2 text-medium-emphasis">{{ keynoteSpeaker.title }}</p>
      </div>
    </div>


    <h1 class="text-h3 text-center mb-4">CONFERENCE SPEAKERS</h1>
    <v-row class="justify-center">
      <v-col
        v-for="speaker in speakers"
        :key="speaker.id"
        cols="12"
        sm="6"
        md="4"
        class="d-flex justify-center"
      >
        <div class="text-center">
          <!-- FIX: Changed :src to :image -->
          <v-avatar
            :image="speaker.imagePath"
            color="grey"
            size="350"
            rounded="0"
            class="mb-3"
          >
            <img :src="speaker.imagePath" alt="Speaker" style="width: 100%; height: 100%; object-fit: cover;" />
          </v-avatar>
          <h4 class="text-h6 mb-1">{{ speaker.name }}</h4>
          <p class="text-body-2 text-medium-emphasis">{{ speaker.title }}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { keynoteSpeaker, speakers } from '@/components/Home/Speakers_Data.ts' 
export default defineComponent({
    name: 'ConferenceSpeakers',
    data(){
        return{
            keynoteSpeaker,
            speakers
        };
    }
});
</script>

<style scoped>
.v-avatar {
    border: 2px solid rgba(0, 0, 0, 0.1);
}

.text-medium-emphasis {
    color: rgba(0, 0, 0, 0.6);
}

</style>