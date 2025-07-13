<template>
  <v-container class="pa-12">
    <div
      v-for="message in welcomeMessages"
      :key="message.id"
      class="mb-12"
    >
      <h3 class="text-h3 text-center mb-2">
        Welcome Message from {{ message.name }}
      </h3>
      <p class="text-body-1 text-center mb-4">
        {{ message.role }}
      </p>

      <v-row>
        <v-col cols="12" sm="6">
          <h4 class="text-h4 text-left mb-4">
            Message from {{ message.name }}
          </h4>
          <h6 class="text-h6 text-left mb-6" style="white-space: pre-line">
            {{ message.description }}
          </h6>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img
            :src="message.image"
            :alt="`Image of ${message.name}`"
            class="rounded-lg"
            cover
            height="400"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { welcomeMessages } from './Message_Data.ts'; // adjust path as needed

export default defineComponent({
  name: 'Component_Message',
  setup() {
    return {
      welcomeMessages,
    };
  },
});
</script>

<style scoped>
</style>
