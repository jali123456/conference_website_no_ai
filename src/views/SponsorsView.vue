<template>
<v-container fluid class="pa-0 pa-sm-2 pa-md-4">
    <div class="d-flex align-center justify-center mb-6">
        <v-divider class="flex-grow-1"></v-divider>
        <h1 class="text-h mx-4 text-center font-weight-bold">Sponsors</h1>
        <v-divider class="flex-grow-1"></v-divider>
    </div>
    <ContactSponsor/>
    <SponsorsPackage/>
</v-container>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({
  title: 'Sponsors | ICELIn 2026 Conference',
  meta: [
    {
      name: 'description',
      content: 'Learn about sponsorship opportunities and our valued sponsors for the ICELIn 2026 Conference.'
    },
    {
      property: 'og:title',
      content: 'Sponsors | ICELIn 2026 Conference'
    },
    {
      property: 'og:description',
      content: 'Discover sponsorship packages and see our sponsors for ICELIn 2026.'
    },
    {
      property: 'og:url',
      content: 'https://icelin.my/sponsors'
    },
    {
      name: 'twitter:title',
      content: 'Sponsors | ICELIn 2026 Conference'
    },
    {
      name: 'twitter:description',
      content: 'Explore sponsorship opportunities and meet our sponsors for ICELIn 2026.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://icelin.my/sponsors'
    }
  ]
})

</script>

<style scoped>

</style>