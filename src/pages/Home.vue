<template>
    <v-img
    class="mx-auto"
    src="@/assets/conference-banner.png"
    lazy-src="https://picsum.photos/id/11/100/60"
    contain
    >
    </v-img>
    <v-row class="mb-2 border-thin"justify="center">
        <v-col cols="11">
         <Component_About_Us/>
        </v-col>
        <v-col cols="10">
            <Component_Countdown/>
        </v-col>
    </v-row>
    <Component_Welcome_Location/>
    <Component_Intro_Video/>
    <Component_Speakers_Launcher class="border-thin"/>
    <Component_Event_Calendar/>
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