<template>
    <v-container fluid>
        <h3 class="text-h3 text-center mb-10">SUBTHEMES</h3>
        <v-row justify="center">
            <v-col
                v-for="(subtheme, index) in data_subthemes"
                :key="subtheme.id"
                cols="12"
                sm="12"
                md="6"
                lg="4"
            >
                <v-card
                    class="d-flex flex-column text-center pa-4 border-b-xl"
                    color="elmubackground"
                    rounded="xl"
                    elevation="2"
                    height="100%"
                    :style="{ borderBottomColor: '#FF0000' }"
                >
                    <v-card-text>
                        <div class="text-h5 font-weight-bold mb-4">{{ subtheme.title }}</div>
                        <p v-html="subtheme.description"></p>
                    </v-card-text>

                    <v-spacer></v-spacer>

                    <v-card-actions class="justify-center pb-4">
                        <v-btn 
                            class="px-8 py-2 text-none font-weight-bold"
                            variant="outlined"
                            color="info"
                            rounded="pill"
                            size="large"
                        >
                            Read More
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
            
            <!-- Additional "More Info on topics" card -->
            <v-col
                cols="12"
                sm="12"
                md="6"
                lg="4"
            >
                <v-card
                    class="d-flex flex-column text-center pa-4 border-b-xl"
                    color="elmubackground"
                    rounded="xl"
                    elevation="2"
                    height="100%"
                    :style="{ borderBottomColor: '#FF0000' }"
                >
                    <v-card-text>
                        <div class="text-h5 font-weight-bold mb-4">More Info on Topics</div>
                        <p>Explore additional resources and detailed information about all available topics and themes.</p>
                    </v-card-text>

                    <v-spacer></v-spacer>

                    <v-card-actions class="justify-center pb-4">
                        <v-btn 
                            class="px-8 py-2 text-none font-weight-bold"
                            variant="outlined"
                            color="info"
                            rounded="pill"
                            size="large"
                        >
                            Read More
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { data_subthemes } from './Subthemes_Data';
export default defineComponent({
    name: 'EventSubtheme',
    data(){
        return {
            data_subthemes
        };
    },
});

</script>

<style scoped>

</style>