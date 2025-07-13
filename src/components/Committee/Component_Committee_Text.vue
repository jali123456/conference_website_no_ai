<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="8" lg="8">
        <h5 class="text-h5 text-center mb-4">Your Centered Text Here</h5>
        <p class="text-body-1 mb-4">
          It is our esteemed privilege to host the International Conference on Law, Enforcement, and Integrity (ICELIN 2026)
          in the vibrant city of Kuching, Sarawak, Malaysia, from 20–24 April 2026. Organized by ELMU University in collaboration
          with the International Association for Legal Studies (IALS), ICELIN 2026 unites global academics, policymakers,
          legal practitioners, and enforcement professionals under the theme “Strengthening Justice through Innovation and Integrity.”
        </p>
        <br><br><br>
      </v-col>

      <!-- Committee section -->
      <v-col cols="12" sm="10" md="8" lg="8">
        <v-row>
          <v-col
            v-for="(group, index) in committees"
            :key="index"
            cols="12"
            md="6"
            lg="6"
          >
            <h3 class="text-h5 text-center mb-3">— {{ group.committeeName }} —</h3>
            <v-list two-line>
              <v-list-item
                v-for="(member, idx) in group.members"
                :key="idx"
              >
                <v-list-item-content>
                    <v-list-item-title class="wrap-text font-weight-bold">
                    {{ member.name }}
                    </v-list-item-title>

                    <v-list-item-subtitle v-if="member.title" class="text-break">
                    {{ member.title }}
                    </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { committees } from './Committee_Data';

export default defineComponent({
  name: 'CommitteeText', // Renamed for clarity
  setup(){
    return {
        committees
    };
    },
});
</script>

<style scoped>
.event-organizers {
  background-color: rgba(0, 0, 0, 0.02);
  border-radius: 8px;
  padding: 16px;
}
.wrap-text {
  white-space: normal !important;
  overflow: visible !important;
  text-overflow: unset !important;
  word-break: break-word;
}
</style>