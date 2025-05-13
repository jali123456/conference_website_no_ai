<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">Venue & Accommodation</h1>
      </v-col>

      <!-- Venue Information -->
      <v-col cols="12" md="8">
        <v-card>
          <v-img
            src="@/assets/venue.jpg"
            height="400"
            cover
          ></v-img>
          
          <v-card-title class="text-h5">Conference Venue</v-card-title>
          <v-card-text>
            <div class="text-h6 mb-2">University Convention Center</div>
            <p class="mb-4">
              123 University Avenue<br>
              City, State 12345<br>
              Country
            </p>
            
            <div class="text-h6 mb-2">Getting There</div>
            <v-list>
              <v-list-item
                v-for="(transport, index) in transportation"
                :key="index"
                :prepend-icon="transport.icon"
              >
                <v-list-item-title>{{ transport.mode }}</v-list-item-title>
                <v-list-item-subtitle>{{ transport.description }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Map -->
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title class="text-h6">Location Map</v-card-title>
          <v-card-text>
            <div class="map-placeholder">
              <!-- Replace this with actual map integration -->
              <v-img
                src="@/assets/map.jpg"
                height="300"
                cover
              ></v-img>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Accommodation -->
      <v-col cols="12" class="mt-6">
        <v-card>
          <v-card-title class="text-h5">Recommended Accommodation</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6">
                <v-card>
                  <v-img
                    src="@/assets/hotel.jpg"
                    height="250"
                    cover
                  ></v-img>
                  <v-card-title>Grand Conference Hotel</v-card-title>
                  <v-card-text>
                    <p class="mb-2">⭐⭐⭐⭐</p>
                    <p class="mb-2">Distance from venue: 0.5 km</p>
                    <p class="mb-4">
                      Special conference rate: $150/night<br>
                      Use code: CONF2024
                    </p>
                    <v-list>
                      <v-list-item
                        v-for="(amenity, index) in hotelAmenities"
                        :key="index"
                        :prepend-icon="amenity.icon"
                      >
                        {{ amenity.name }}
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn
                      color="primary"
                      variant="outlined"
                      block
                      href="https://example.com/hotel-booking"
                      target="_blank"
                    >
                      Book Now
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const transportation = [
  {
    mode: 'From Airport',
    description: '30 minutes by taxi or airport shuttle',
    icon: 'mdi-airplane'
  },
  {
    mode: 'Public Transport',
    description: 'Metro Line A to University Station',
    icon: 'mdi-train'
  },
  {
    mode: 'Parking',
    description: 'Available on-site (free for attendees)',
    icon: 'mdi-parking'
  }
]

const hotelAmenities = [
  { name: 'Free Wi-Fi', icon: 'mdi-wifi' },
  { name: 'Breakfast Included', icon: 'mdi-food' },
  { name: 'Fitness Center', icon: 'mdi-dumbbell' },
  { name: 'Conference Shuttle', icon: 'mdi-bus' }
]
</script>

<style scoped>
.map-placeholder {
  border-radius: 4px;
  overflow: hidden;
}
</style> 