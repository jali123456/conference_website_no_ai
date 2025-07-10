<template>
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
</template>

<script lang="ts">
export default {
    name: "ComponentWelcomeLocation",
};
</script>
<style scoped>

</style>