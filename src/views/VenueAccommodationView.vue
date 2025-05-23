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
            src="@/assets/images/venue_1.jpg"
            height="600"
            cover
          ></v-img>
          
          <v-card-title class="text-h5">Waterfront Hotel Kuching</v-card-title>
          <v-card-text>
            <div class="text-h6 mb-2">Waterfront Events Hall</div>
            <p class="mb-4">
              68 Jalan Tun Abang Haji Openg,<br>
              93000 Kuching, Sarawak<br>
              Malaysia
            </p>
            
            <div class="text-h6 mb-2">Getting There</div>
            <v-list >
              <v-list-item
                v-for="(transport, index) in transportation_data"
                :key="index"
                class="text-black"
              >
                <template v-slot:prepend>
                  <v-icon color="black">{{ transport.icon }}</v-icon>
                </template>
                <v-list-item-title class="text-black" >{{ transport.mode }}</v-list-item-title>
                <v-list-item-subtitle class="text-black">{{ transport.description }}</v-list-item-subtitle>
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
              <iframe
                width="100%"
                height="300"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                :src="`https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.002},${latitude - 0.002},${longitude + 0.002},${latitude + 0.002}&layer=mapnik&marker=${latitude},${longitude}&zoom=17`"
                style="border: 1px solid #ccc"
              ></iframe>
            </div>
          </v-card-text>
          <!-- Add a button to open Google Maps -->
          <div class="text-center"> <v-btn
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
        <v-card>
          <v-card-title class="text-h5">Recommended Accommodation</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" md="6" v-for="(hotel, index) in accommodations" :key="index">
                <v-card>
                  <v-img
                    :src="hotel.image"
                    height="250"
                    cover
                  ></v-img>
                  <v-card-title>{{ hotel.name }}</v-card-title>
                  <v-card-text>
                    <p class="mb-2">⭐{{ hotel.rating }}</p>
                    <p class="mb-2">{{ hotel.address }}</p>
                    <p class="mb-2">Phone: {{ hotel.phone }}</p>
                    <p class="mb-4" v-if="hotel.specialRate">
                      Special conference rate: {{ hotel.specialRate}}<br>
                      Use code: {{ hotel.promoCode }}
                    </p>
                    <v-list v-if="hotel.amenities && hotel.amenities.length > 0">
                      <v-list-item
                        v-for="(amenity, amenityIndex) in hotel.amenities"
                        :key="amenityIndex"
                      >
                      <template v-slot:prepend>
                        <v-icon color="black">{{ amenity.icon }}</v-icon>
                      </template>
                        <v-list-item-title class="text-black">{{ amenity.name }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                  <v-card-actions v-if="hotel.bookingLink">
                    <v-btn
                      color="primary"
                      variant="outlined"
                      block
                      :href="hotel.bookingLink"
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
      <!-- Transportation -->
       <transportation />
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
const accommodations = [
  {
    name: 'The Ranee Boutique Suites',
    address: 'No 6 & 7 Main Bazaar, 93000 Kuching, Sarawak',
    phone: '+6082-258 833',
    rating: '⭐⭐⭐⭐',
    image: theRaneeImage, // You'll need to add images for these hotels
    bookingLink: 'https://www.theranee.com/', // Example booking link
    amenities: [
      { name: 'Free Wi-Fi', icon: 'mdi-wifi' },
      { name: 'Breakfast Included', icon: 'mdi-food' },
      { name: 'Fitness Center', icon: 'mdi-dumbbell' },
      { name: 'Conference Shuttle', icon: 'mdi-bus' }
    ]
  },
  {
    name: 'The Marian Boutique Lodging House',
    address: 'No. 25 & 27, Wayang Street, 93000 Kuching, Sarawak',
    phone: '+6082-252 777',
    rating: '⭐⭐⭐',
    image: theMarianImage,
    bookingLink: 'https://www.themarian.com.my/',
    amenities: [
      { name: 'Free Wi-Fi', icon: 'mdi-wifi' },
      { name: 'Breakfast Included', icon: 'mdi-food' },
      { name: 'Fitness Center', icon: 'mdi-dumbbell' },
      { name: 'Conference Shuttle', icon: 'mdi-bus' }
    ]
  },
  {
    name: 'Harbour View Hotel',
    address: 'Temple St., 93100 Kuching, Sarawak',
    phone: '+6082-274 666',
    rating: '⭐⭐⭐',
    image: harbourViewImage,
    bookingLink: 'http://www.harbourviewhotelkuching.com/',
    amenities: [
      { name: 'Free Wi-Fi', icon: 'mdi-wifi' },
      { name: 'Breakfast Included', icon: 'mdi-food' },
      { name: 'Fitness Center', icon: 'mdi-dumbbell' },
      { name: 'Conference Shuttle', icon: 'mdi-bus' }
    ]
  },
  {
    name: 'Riverside Majestic Hotel - Astana Wing',
    address: 'Jalan Tunku Abdul Rahman, 93050 Kuching ,Sarawak',
    phone: '+6082-532 222',
    rating: '⭐⭐⭐⭐',
    image: riversideMajesticAstanaImage,
    bookingLink: 'https://www.riversidemajestic.com/astana-wing/',
    amenities: [
      { name: 'Free Wi-Fi', icon: 'mdi-wifi' },
      { name: 'Breakfast Included', icon: 'mdi-food' },
      { name: 'Fitness Center', icon: 'mdi-dumbbell' },
      { name: 'Conference Shuttle', icon: 'mdi-bus' }
    ]
  },
  {
    name: 'Imperial Riverbank Hotel Kuching',
    address: 'Jalan Tunku Abdul Rahman, 93100 Kuching, Sarawak',
    phone: '+6082-230 033',
    rating: '⭐⭐⭐',
    image: imperialRiverbankImage,
    bookingLink: 'https://imperialriverbankhotel.com/',
    amenities: [
      { name: 'Free Wi-Fi', icon: 'mdi-wifi' },
      { name: 'Breakfast Included', icon: 'mdi-food' },
      { name: 'Fitness Center', icon: 'mdi-dumbbell' },
      { name: 'Conference Shuttle', icon: 'mdi-bus' }
    ]
  },
  {
    name: 'Grand Margherita Hotel',
    address: 'Jalan Tunku Abdul Rahman, 93100 Kuching, Sarawak',
    phone: '+6082-532 111',
    rating: '⭐⭐⭐⭐',
    image: grandMargheritaImage,
    bookingLink: 'https://www.grandmargherita.com/',
    amenities: [
      { name: 'Free Wi-Fi', icon: 'mdi-wifi' },
      { name: 'Breakfast Included', icon: 'mdi-food' },
      { name: 'Fitness Center', icon: 'mdi-dumbbell' },
      { name: 'Conference Shuttle', icon: 'mdi-bus' }
    ]
  },
  {
    name: 'Pullman Kuching',
    address: 'Level 3, Interhill Place, 1A, Jalan Mathies, 93100 Kuching, Sarawak',
    phone: '+6082-222 888',
    rating: '⭐⭐⭐⭐⭐',
    image: pullmanKuchingImage,
    bookingLink: 'https://www.pullmanhotels.com/gb/hotel-6332-pullman-kuching/index.html',
    amenities: [
      { name: 'Free Wi-Fi', icon: 'mdi-wifi' },
      { name: 'Breakfast Included', icon: 'mdi-food' },
      { name: 'Fitness Center', icon: 'mdi-dumbbell' },
      { name: 'Conference Shuttle', icon: 'mdi-bus' }
    ]
  },
  {
    name: 'Sheraton Kuching Hotel',
    address: '2, Jln Padungan, 93100 Kuching, Sarawak',
    phone: '+6082-221 188',
    rating: '⭐⭐⭐⭐',
    image: sheratonKuchingImage,
    bookingLink: 'https://www.marriott.com/en-us/hotels/kchsi-sheraton-kuching-hotel/overview/',
    specialRate: '$150/night',
    promoCode: 'CONF2024',
    amenities: [
      { name: 'Free Wi-Fi', icon: 'mdi-wifi' },
      { name: 'Breakfast Included', icon: 'mdi-food' },
      { name: 'Fitness Center', icon: 'mdi-dumbbell' },
      { name: 'Conference Shuttle', icon: 'mdi-bus' }
    ]
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