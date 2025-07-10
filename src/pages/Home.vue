<template>
    <v-img
    class="mx-auto"
    src="@/assets/conference-banner.png"
    lazy-src="https://picsum.photos/id/11/100/60"
    contain
    >
    </v-img>
    <v-row class="mb-2"justify="center">
        <v-col cols="11">
         <Component_About_Us/>
        </v-col>
        <v-col cols="10">
            <Component_Countdown/>
        </v-col>
    </v-row>
    <Component_Welcome_Location/>
    <Component_Intro_Video/>
    <Component_Speakers_Launcher/>
    <Component_Event_Calendar/>
</template>
<script lang="ts" setup>
//
</script>

<style>
</style>