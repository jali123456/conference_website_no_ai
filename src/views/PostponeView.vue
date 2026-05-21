<template>
    <v-container class="py-8">
        <v-card class="mx-auto postpone-card" max-width="900" elevation="2">
            <v-card-title class="text-h5 text-md-h4 font-weight-bold pb-2">
                Conference Postponement Notice
            </v-card-title>

            <v-card-text class="text-body-1">
                <p class="mb-4">
                    The conference has been postponed 
                </p>
                <p class="mt-6 mb-0 font-weight-medium">
                    We have decided to postpone the conference indefinitely.
                </p>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script setup lang="ts"></script>

<style scoped lang="css">
.postpone-card {
    border-left: 6px solid #ef6c00;
}

.reason-list {
    margin: 0;
    padding-left: 1.25rem;
}

.reason-list li {
    margin-bottom: 0.8rem;
    line-height: 1.5;
}

</style>