<template>
  <v-row justify="center">
    <v-col cols="10" md="8" lg="6">
      <v-lazy
        :options="{ threshold: 0.5 }"
        transition="fade-transition"
        class="my-4"
        >
        <v-responsive :aspect-ratio="16 / 9">
          <iframe 
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/SmctEhXLkVo?si=dnkFp8UGv2ZjkfSY"
            title="Kuching Capital of Sarawak, Malaysia - A City of Culture and Nature"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </v-responsive>
      </v-lazy>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'IntroVideo',
});

</script>

<style scoped></style>