<template>
    <v-img
    class="mx-auto"
    src="@/assets/conference-banner.png"
    lazy-src="https://picsum.photos/id/11/100/60"
    contain
    >
    </v-img>
    <v-row class="mx-2 my-4"justify="center">
        <v-col cols="12">
         <Component_About_Us/>
        </v-col>
        <v-col cols="12" md="10" lg="6">
            <Component_Countdown/>
        </v-col>
    </v-row>
    <Component_Welcome_Location/>
    <Component_Intro_Video/>
    <Component_Speakers_Launcher class="border-thin"/>
    <Component_Event_Calendar/>
    <Component_Event_Calendar_Programme/>
    <Component_Event_Subtheme class="border-thin"/>
    <Component_About_Conference_Sponsor/>
    <Component_Register_Banner class="mb-4"/>
    <Component_Event_Highlights/>
    <Component_Why_Choose/>
    <Component_Event_Comments class="mb-4"/>
    <Component_Event_Proceedings/>
    <Component_FAQ/>
</template>
<script lang="ts" setup>
//
</script>

<style>
</style>