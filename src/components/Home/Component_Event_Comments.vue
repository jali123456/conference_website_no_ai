<template>
    <v-container fluid>
        <h6 class="text-h6 mb text-center"> Event Comments</h6>
        <h4 class="text-h4 text-center">What Our Attendees Say</h4>
        <v-row justify="center">
            <v-col
            v-for="comment in data_comments"
            :key="comment.id"
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
                >
                    <v-card-text>
                        <div class="text-h5 font-weight-bold mb-4">{{ comment.name }}</div>
                        <p v-html="comment.comment"></p>
                    </v-card-text>

                    <v-spacer></v-spacer>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { data_comments } from './Comments_Data';

export default defineComponent({
    name: 'Component_Event_Comments',
    data(){
        return {
            data_comments
        };
    }
});
</script>

<style scoped>

</style>