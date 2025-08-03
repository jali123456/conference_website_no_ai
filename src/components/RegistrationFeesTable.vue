<template>
  <v-col cols="12" md="6">
    <h5 class="text-h5 mb-2 heading-white-bg">Registration Fees (Local)</h5>
    <v-table class="fees-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Price per participant</th>
          <th class="early-bird-header">Early Bird Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Local Participant (Presenter)</td>
          <td>RM1,600</td>
          <td class="early-bird">TBA</td>
        </tr>
        <tr>
          <td>Local Participant (Non-Presenter)</td>
          <td>RM1,200</td>
          <td class="early-bird">TBA</td>
        </tr>
        <tr>
          <td>Local Excursion/Networking Tour Fee</td>
          <td>RM160</td>
          <td class="early-bird">TBA</td>
        </tr>
      </tbody>
    </v-table>
    <v-alert color="info" icon="mdi-information" class="mt-4">
      Early Bird registration date: 15 May 2026 - 15 June 2026
    </v-alert>
  </v-col>

  <v-col cols="12" md="6">
    <h5 class="text-h5 mb-2 heading-white-bg">Registration Fees (International)</h5>
    <v-table class="fees-table">
      <thead>
        <tr>
          <th>Category</th>
          <th>Price per participant</th>
          <th class="early-bird-header">Early Bird Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>International Participant (Presenter)</td>
          <td>USD 500</td>
          <td class="early-bird">TBA</td>
        </tr>
        <tr>
          <td>International Participant (Non-Presenter)</td>
          <td>USD 400</td>
          <td class="early-bird">TBA</td>
        </tr>
        <tr>
          <td>International Excursion/Networking Tour Fee</td>
          <td>USD 50</td>
          <td class="early-bird">TBA</td>
        </tr>
      </tbody>
    </v-table>
    <v-alert color="info" icon="mdi-information" class="mt-4">
      Early Bird registration date: 15 May 2026 - 15 June 2026
    </v-alert>
  </v-col>
</template>


<script lang="ts">

</script>

<style scoped>
.heading-white-bg {
  background-color: white;
  padding: 8px 16px;
  border-radius: 4px;
  display: inline-block;
}

.v-table {
  width: 100%;
}
.fees-table {
  width: 100%;
  margin-top: 16px;
}
.bg-primary {
  background-color: #1976d2 !important;
}
.bg-secondary {
  background-color: #424242 !important;
}
.text-white {
  color: #ffffff !important;
}
.elevation-3 {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
}
.early-bird {
  color: #388e3c;
  font-weight: 500;
}
.early-bird-header {
  background-color: #e8f5e9;
}
</style>