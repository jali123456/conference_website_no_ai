<!-- SubthemeList.vue -->
<template>
<v-col
    v-for="(subtheme, index) in data_subthemes"
    :key="subtheme.id"
    cols="12"
    sm="12"
    md="6"
    lg="4"
>
    <v-card
        class="d-flex flex-column text-center pa-4 hover-scale red-bottom-border"
        color="elmubackground"
        rounded="xl"
        elevation="2"
        height="100%"
    >
        <v-card-text>
            <div class="text-h5 font-weight-bold mb-4">{{ subtheme.title }}</div>
            <p class="text-left text-subtitle-2" v-html="subtheme.description"></p>
        </v-card-text>

        <v-spacer></v-spacer>

        <!-- <v-card-actions class="justify-center pb-4">
            <v-btn 
                class="px-8 py-2 text-none font-weight-bold"
                variant="outlined"
                color="info"
                rounded="pill"
                size="large"
            >
                Read More
            </v-btn>
        </v-card-actions> -->
    </v-card>
</v-col>
</template>

<script setup lang="ts">
import { data_subthemes } from '@/assets/data/Subthemes_Data';

</script>

<style scoped>
.red-bottom-border {
  border-bottom: 4px solid red;
}
.v-card{
  height: 100%;
}

.hover-scale {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;
}

.hover-scale:hover {
  transform: scale(1.03);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 2;
}
</style>