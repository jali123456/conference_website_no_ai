<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">Conference Registration</h1>
      </v-col>
      <!-- Expanded Fees Explanation -->
      <v-col cols="12" md="12">
        <v-card>
          <v-card-title class="text-h5">Registration Fees (Expanded)</v-card-title>
          <v-card-text>
            <v-table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Price per participant</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Local Participant (Presenter)</td>
                  <td>RM1,600</td>
                  <td>Includes conference kit, meals, and access to all sessions.</td>
                </tr>
                <tr>
                  <td>Local Participant (Non-Presenter)</td>
                  <td>RM1,200</td>
                  <td>Includes conference kit, meals, and access to all sessions.</td>
                </tr>
                <tr>
                  <td>International Participant (Presenter)</td>
                  <td>USD 500</td>
                  <td>Includes conference kit, meals, and access to all sessions.</td>
                </tr>
                <tr>
                  <td>International Participant (Non-Presenter)</td>
                  <td>USD 400</td>
                  <td>Includes conference kit, meals, and access to all sessions.</td>
                </tr>
                <tr>
                  <td>Local Excursion/Networking Tour Fee</td>
                  <td>RM160</td>
                  <td>Optional. Covers local tour and networking event.</td>
                </tr>
                <tr>
                  <td>International Excursion/Networking Tour Fee</td>
                  <td>USD 50</td>
                  <td>Optional. Covers local tour and networking event.</td>
                </tr>
              </tbody>
            </v-table>
            <v-alert color="info" icon="mdi-information" class="mt-4">
              Early Bird registration: 15 May 2026 - 15 June 2026
            </v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineOptions({
  name: 'GeneralProcess'
});

</script>

<style scoped>
.v-table {
  width: 100%;
}
</style>
