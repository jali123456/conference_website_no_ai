<template>
  <v-container class="d-flex justify-center">
    <v-lazy
      :options="{ threshold: 0.5 }"
      transition="fade-transition"
      width="100%" 
      class="my-4"
      >
      <v-responsive :aspect-ratio="16 / 9" max-width="1200">
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
  </v-container>
</template>
<script lang="ts">
export default {
  name: "ComponentIntroVideo",
};
</script>

<style scoped></style>