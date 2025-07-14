<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col
            cols="12"
            md="10"
            lg="10"
            >
                <h4 class="text-h4 text-center mb-4">
                    Registration & Payment Guidelines
                </h4>
                <p class="text-body-1 text-center mb-4">
                    Descriptions Here
                </p>
                <!-- Centered Button -->
                <div class="text-center">
                <v-btn
                    color="elmubackground"
                    size="x-large"
                    rounded
                    class="elevation-6"
                    @click="goToRegistration"
                >
                    Read More
                </v-btn>
                </div>
            </v-col>   
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent ({
    name: "RegistrationpaymentGuidelines",
    setup(){
        const router = useRouter();
        const goToRegistration = () => {
            router.push('/');
        };
        return{
            goToRegistration
        }
    }
})

</script>

<style scoped>

</style>