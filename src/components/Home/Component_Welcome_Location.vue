<!-- <template>
    <v-card
    image="@/assets/images/sarawak/Sarawak_Nature.png"
    height="600"
    >
        <v-sheet color="white" elevation="3" rounded class="pa-6 d-inline-block" style="max-width: 600px; margin-top: 40px; margin-left: 40px;">
            <v-card-title class="text-h4 text-center" style="white-space: normal;">WELCOME TO SARAWAK</v-card-title>
            <v-card-subtitle class="text-subtitle-1 text-center" style="white-space: normal;">With the support of the BESarawak</v-card-subtitle>
            <v-card-text class="text-body-1">
                <v-img
                    src="@/assets/logo.png"
                    width="300"
                    class="mx-auto"
                ></v-img>
                Kuching, the capital of Sarawak, Malaysia, is a vibrant city known for its rich cultural heritage, diverse wildlife, and historical significance. Located on the island of Borneo, Kuching is the largest city in Sarawak and serves as a gateway to exploring the region's natural and cultural wonders.
            </v-card-text>
        </v-sheet>
    </v-card>
</template> -->
<template>
  <v-card class="position-relative" min-height="600">
    <v-img
      src="@/assets/images/sarawak/Sarawak_Nature.png"
      class="position-absolute w-100 h-100"
      cover
    ></v-img>

    <v-container class="position-relative fill-height">
      <v-row align="center"> <v-col cols="12" sm="8" md="6" lg="5">
          <v-sheet color="white" elevation="3" rounded class="pa-6">
            <v-card-title class="text-h4" style="white-space: normal;">WELCOME TO SARAWAK</v-card-title>
            <v-card-subtitle class="text-subtitle-1" style="white-space: normal;">With the support of the BESarawak</v-card-subtitle>
            <v-card-text class="text-body-1">
              <v-img
                src="@/assets/logo.png"
                width="300"
                class="my-4"
              ></v-img>
              Kuching, the capital of Sarawak, Malaysia, is a vibrant city known for its rich cultural heritage, diverse wildlife, and historical significance. Located on the island of Borneo, Kuching is the largest city in Sarawak and serves as a gateway to exploring the region's natural and cultural wonders.
            </v-card-text>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>


<script lang="ts">
export default {
    name: "ComponentWelcomeLocation",
};
</script>
<style scoped>

</style>