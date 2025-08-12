<!-- VenueAccommodationView.vue -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
      <div class="d-flex align-center justify-center mb-6">
        <v-divider class="flex-grow-1"></v-divider>
        <h1 class="text-h mx-4 text-center font-weight-bold">Venue & Accommodation</h1>
        <v-divider class="flex-grow-1"></v-divider>
      </div>
      </v-col>

      <!-- Venue Information -->
      <v-col cols="12" md="6">
        <v-card>
          <v-img
            src="@/assets/images/venue_1.jpg"
            alt="Event Venue Image"
            width="100%"
            contain
          ></v-img>
          <v-card-title class="text-h5 text-wrap">Waterfront Hotel Kuching</v-card-title>
          <v-card-text>
            <div class="text-h6 mb-2 text-wrap">Waterfront Events Hall </div>
            <p class="mb-4 text-wrap">
              68 Jalan Tun Abang Haji Openg,
              93000 Kuching, Sarawak
              Malaysia
            </p>
            
            <!-- <div class="text-h6 mb-2 text-wrap">Getting There</div>
            <v-list class="text-wrap">
              <v-list-item
                v-for="(transport, index) in transportation_data"
                :key="index"
                class="text-black text-wrap"
              >
                <template v-slot:prepend>
                  <v-icon color="black">{{ transport.icon }}</v-icon>
                </template>
                <v-list-item-title class="text-black text-wrap" >{{ transport.mode }}</v-list-item-title>
                <v-list-item-subtitle class="text-black text-wrap">{{ transport.description }}</v-list-item-subtitle>
              </v-list-item>
            </v-list> -->
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Map -->
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title class="text-h6 text-wrap">Location Map</v-card-title>
          <v-card-text>
            <div class="map-placeholder">
              <iframe
                width="100%"
                height="300"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                :src="`https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.002},${latitude - 0.002},${longitude + 0.002},${latitude + 0.002}&layer=mapnik&marker=${latitude},${longitude}&zoom=17`"
              ></iframe>
            </div>
          </v-card-text>
          <!-- Add a button to open Google Maps -->
          <div class="text-center text-wrap"> 
            <v-btn
              color="primary"
              variant="flat"       
              size="large"         
              rounded="pill"       
              elevation="4"        
              prepend-icon="mdi-map-marker" 
              class="my-4"         
              @click="openGoogleMaps"
            >
              Open Google Maps
            </v-btn>
          </div>
        </v-card>
      </v-col>

      <!-- Accommodation -->
      <v-col cols="12" class="mt-6">
        <v-sheet>
          <h5 class="text-h5 mb-6 pa-4 text-wrap">Recommended Accommodation</h5>
          <p class="text-body-1 mx-4">Participants are advised to contact the respective hotels directly for room reservations. 
            Please note that accommodation is not included in the conference registration fees and 
            must be arranged separately by participants.’</p>
          <v-row>
            <v-col cols="12" md="6" v-for="(hotel, index) in accommodations" :key="index">
              <v-sheet class="pa-4">
                <v-card class="h-100">
                  <v-img
                    :src="hotel.image"
                    height="250"
                    alt="Recommended Recommendation"
                    contain
                  ></v-img>
                  <v-card-title class="text-wrap">{{ hotel.name }}</v-card-title>
                  <v-card-text>
                    <p class="mb-2 text-wrap">⭐{{ hotel.rating }}</p>
                    <p class="mb-2 text-wrap">{{ hotel.address }}</p>
                    <!-- <p class="mb-2 text-wrap">Phone: {{ hotel.phone }}</p> -->
                    <!-- <p class="mb-4 text-wrap" v-if="hotel.specialRate">
                      Special conference rate: {{ hotel.specialRate}}<br>
                      Use code: {{ hotel.promoCode }}
                    </p> -->
                    <!-- <v-list v-if="hotel.amenities && hotel.amenities.length > 0" class="text-wrap">
                      <v-list-item
                        v-for="(amenity, amenityIndex) in hotel.amenities"
                        :key="amenityIndex"
                      >
                      <template v-slot:prepend>
                        <v-icon color="black">{{ amenity.icon }}</v-icon>
                      </template>
                        <v-list-item-title class="text-black text-wrap">{{ amenity.name }}</v-list-item-title>
                      </v-list-item>
                    </v-list> -->
                  </v-card-text>
                  <v-card-actions v-if="hotel.bookingLink">
                    <v-btn
                      color="primary"
                      variant="outlined"
                      block
                      :href="hotel.bookingLink"
                      target="_blank"
                      class="text-wrap"
                    >
                      Book Now
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-sheet>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import theRaneeImage from '@/assets/images/hotel/hotel_8.jpg';
import theMarianImage from '@/assets/images/hotel/hotel_7.jpg';
import harbourViewImage from '@/assets/images/hotel/hotel_6.jpg';
import riversideMajesticAstanaImage from '@/assets/images/hotel/hotel_5.jpg';
import imperialRiverbankImage from '@/assets/images/hotel/hotel_4.jpg';
import grandMargheritaImage from '@/assets/images/hotel/hotel_3.jpg';
import pullmanKuchingImage from '@/assets/images/hotel/hotel_2.jpg';
import sheratonKuchingImage from '@/assets/images/hotel/hotel_1.jpg';

const longitude = 110.34449804478993;
const latitude = 1.5587105547653426;

const openGoogleMaps = (): void => {
  // Construct the Google Maps URL with the provided latitude and longitude
  const googleMapsUrl: string = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  // Open the URL in a new tab/window
  window.open(googleMapsUrl, '_blank');
};

const transportation_data = [
  {
    mode: 'From Airport',
    description: '30 minutes by taxi or airport shuttle',
    icon: 'mdi-airplane'
  },
  {
    mode: 'Public Transport',
    description: 'Bus, Grab and etc',
    icon: 'mdi-bus'
  },
]

const hotelAmenities = [
  { name: 'Free Wi-Fi', icon: 'mdi-wifi' },
  { name: 'Breakfast Included', icon: 'mdi-food' },
  { name: 'Fitness Center', icon: 'mdi-dumbbell' },
  { name: 'Conference Shuttle', icon: 'mdi-bus' }
]

const accommodations = [
  {
    name: 'The Ranee Boutique Suites',
    address: 'No 6 & 7 Main Bazaar, 93000 Kuching, Sarawak',
    phone: '+6082-258 833',
    rating: '⭐⭐⭐⭐',
    image: theRaneeImage,
    bookingLink: 'https://www.theranee.com/',
  },
  {
    name: 'The Marian Boutique Lodging House',
    address: 'No. 25 & 27, Wayang Street, 93000 Kuching, Sarawak',
    phone: '+6082-252 777',
    rating: '⭐⭐⭐',
    image: theMarianImage,
    bookingLink: 'https://www.themarian.com.my/',
  },
  {
    name: 'Harbour View Hotel',
    address: 'Temple St., 93100 Kuching, Sarawak',
    phone: '+6082-274 666',
    rating: '⭐⭐⭐',
    image: harbourViewImage,
    bookingLink: 'http://www.harbourviewhotelkuching.com/',
  },
  {
    name: 'Riverside Majestic Hotel - Astana Wing',
    address: 'Jalan Tunku Abdul Rahman, 93050 Kuching ,Sarawak',
    phone: '+6082-532 222',
    rating: '⭐⭐⭐⭐',
    image: riversideMajesticAstanaImage,
    bookingLink: 'https://www.riversidemajestic.com/astana-wing/',
  },
  {
    name: 'Imperial Riverbank Hotel Kuching',
    address: 'Jalan Tunku Abdul Rahman, 93100 Kuching, Sarawak',
    phone: '+6082-230 033',
    rating: '⭐⭐⭐',
    image: imperialRiverbankImage,
    bookingLink: 'https://imperialriverbankhotel.com/',
  },
  {
    name: 'Grand Margherita Hotel',
    address: 'Jalan Tunku Abdul Rahman, 93100 Kuching, Sarawak',
    phone: '+6082-532 111',
    rating: '⭐⭐⭐⭐',
    image: grandMargheritaImage,
    bookingLink: 'https://www.grandmargherita.com/',
  },
  {
    name: 'Pullman Kuching',
    address: 'Level 3, Interhill Place, 1A, Jalan Mathies, 93100 Kuching, Sarawak',
    phone: '+6082-222 888',
    rating: '⭐⭐⭐⭐⭐',
    image: pullmanKuchingImage,
    bookingLink: 'https://www.pullmanhotels.com/gb/hotel-6332-pullman-kuching/index.html',
  },
  {
    name: 'Sheraton Kuching Hotel',
    address: '2, Jln Padungan, 93100 Kuching, Sarawak',
    phone: '+6082-221 188',
    rating: '⭐⭐⭐⭐',
    image: sheratonKuchingImage,
    bookingLink: 'https://www.marriott.com/en-us/hotels/kchsi-sheraton-kuching-hotel/overview/',
    // specialRate: '$150/night',
    // promoCode: 'CONF2024',
  }
];
</script>

<style scoped>
.map-placeholder {
  border-radius: 4px;
  overflow: hidden;
}
.v-application {
  color: black !important;
}
</style>