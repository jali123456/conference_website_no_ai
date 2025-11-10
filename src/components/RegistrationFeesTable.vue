<template>
  <v-col cols="12" md="6">
    <div class="fees-card">
      <div class="fees-card-header">
        <h5 class="text-h5 mb-2">Registration Fees (Local)</h5>
      </div>
      <div class="fees-card-body">
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
      </div>
    </div>
  </v-col>

  <v-col cols="12" md="6">
    <div class="fees-card">
      <div class="fees-card-header">
        <h5 class="text-h5 mb-2">Registration Fees (International)</h5>
      </div>
      <div class="fees-card-body">
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
      </div>
    </div>
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
.fees-card {
  background: var(--v-theme-surface, #ffffff);
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 6px rgba(16,24,40,0.04);
  display: flex;
  flex-direction: column;
  height: 100%;
}
.fees-card-header {
  border-bottom: 1px solid rgba(0,0,0,0.04);
  padding-bottom: 8px;
  margin-bottom: 8px;
}
.fees-card-body {
  flex: 1 1 auto;
}
/* Table visual improvements */
.fees-table table,
.fees-table thead,
.fees-table tbody,
.fees-table tr,
.fees-table th,
.fees-table td {
  border-collapse: collapse;
}
.fees-table thead th {
  text-align: left;
  padding: 10px 12px;
  background: rgba(25,118,210,0.06);
  font-weight: 600;
  color: var(--v-theme-on-surface, #0f1724);
}
.fees-table tbody td {
  padding: 10px 12px;
  border-top: 1px solid rgba(0,0,0,0.04);
}
.fees-table {
  width: 100%;
  overflow: auto;
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

/* Make sure the heading white bg class still works but isn't floating */
.heading-white-bg {
  background: transparent;
  padding: 0;
  display: block;
}
</style>