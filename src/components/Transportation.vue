<!-- Transportation -->
<template>
<v-col cols="12" class="mt-6">
  <v-card>
    <v-card-title class="text-h5 primary lighten-1 white--text py-4">
      <v-icon large color="white" class="mr-2">mdi-directions</v-icon>
      Transportation Options
    </v-card-title>
    
    <v-card-text class="pa-4">
      <!-- Transportation Flow Component -->
      <v-container fluid>
        <v-row justify="center" class="my-4">
          <v-col cols="12">
            <div class="transportation-timeline">
              <!-- Airport Transportation -->
              <v-card elevation="2" class="mb-6">
                <v-card-title class="text-h6">
                  <v-icon large color="blue darken-1" class="mr-2">mdi-airplane</v-icon>
                  From Airport to Conference
                </v-card-title>
                <v-card-text>
                  <v-timeline dense>
                    <v-timeline-item color="blue" small>
                      <div class="font-weight-bold">Airport Arrival</div>
                      <div class="body-2">Exit terminal and follow signs to transportation area</div>
                    </v-timeline-item>
                    
                    <v-timeline-item color="blue" small>
                      <div class="d-flex">
                        <v-icon color="blue darken-1" class="mr-2">mdi-taxi</v-icon>
                        <div>
                          <div class="font-weight-bold">Taxi</div>
                          <div class="body-2">30 minutes, approximately $35</div>
                          <div class="caption">Available 24/7 outside all terminals</div>
                        </div>
                      </div>
                    </v-timeline-item>
                    
                    <v-timeline-item color="purple" small>
                      <div class="d-flex">
                        <v-icon color="purple darken-1" class="mr-2">mdi-bus</v-icon>
                        <div>
                          <div class="font-weight-bold">Airport Shuttle</div>
                          <div class="body-2">35 minutes, $15 per person</div>
                          <div class="caption">Shuttles depart every 30 minutes (5:00 AM - 11:00 PM)</div>
                          <div class="caption">Book online or at information desk</div>
                        </div>
                      </div>
                    </v-timeline-item>
                    
                    <v-timeline-item color="green" small>
                      <div class="d-flex">
                        <v-icon color="green darken-1" class="mr-2">mdi-train-variant</v-icon>
                        <div>
                          <div class="font-weight-bold">Express Train + Metro</div>
                          <div class="body-2">40 minutes total, $12</div>
                          <div class="caption">
                            Take Airport Express to Central Station (20 min)<br>
                            Transfer to Metro Line A to University Station (15 min)<br>
                            5 minute walk to conference venue
                          </div>
                        </div>
                      </div>
                    </v-timeline-item>
                  </v-timeline>
                </v-card-text>
              </v-card>

              <!-- Public Transport -->
              <v-card elevation="2" class="mb-6">
                <v-card-title class="text-h6">
                  <v-icon large color="green darken-1" class="mr-2">mdi-train</v-icon>
                  Public Transport Options
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" md="4">
                      <v-card outlined>
                        <v-card-title class="subtitle-1">
                          <v-icon color="green" class="mr-2">mdi-subway</v-icon>
                          Metro
                        </v-card-title>
                        <v-card-text>
                          <div class="font-weight-bold mb-1">Line A (Red Line)</div>
                          <p>Exit at University Station</p>
                          <div class="font-weight-bold mb-1 mt-2">Line B (Blue Line)</div>
                          <p>Exit at Central Square, transfer to bus #42</p>
                          <div class="caption mt-2">
                            Trains run every 5-7 minutes from 5:00 AM to midnight
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    
                    <v-col cols="12" md="4">
                      <v-card outlined>
                        <v-card-title class="subtitle-1">
                          <v-icon color="amber darken-2" class="mr-2">mdi-bus</v-icon>
                          Bus
                        </v-card-title>
                        <v-card-text>
                          <div class="font-weight-bold mb-1">Routes #42, #67, #89</div>
                          <p>Stop directly in front of conference center</p>
                          <div class="caption mt-2">
                            Buses run every 10-15 minutes from 6:00 AM to 11:00 PM
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    
                    <v-col cols="12" md="4">
                      <v-card outlined>
                        <v-card-title class="subtitle-1">
                          <v-icon color="blue-grey" class="mr-2">mdi-bike</v-icon>
                          Bike Share
                        </v-card-title>
                        <v-card-text>
                          <div class="font-weight-bold mb-1">CityBike Stations</div>
                          <p>Located at University Plaza and Central Square</p>
                          <div class="caption mt-2">
                            $5 daily pass, unlimited 30-minute rides<br>
                            App download required
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                  
                  <v-alert
                    dense
                    text
                    color="info"
                    class="mt-4"
                    icon="mdi-information-outline"
                  >
                    A 3-day public transport pass is included with conference registration
                  </v-alert>
                </v-card-text>
              </v-card>

              <!-- Parking Information -->
              <v-card elevation="2">
                <v-card-title class="text-h6">
                  <v-icon large color="indigo darken-1" class="mr-2">mdi-parking</v-icon>
                  Parking Information
                </v-card-title>
                <v-card-text>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-card outlined>
                        <v-card-title class="subtitle-1">
                          <v-icon color="indigo" class="mr-2">mdi-car</v-icon>
                          On-site Parking
                        </v-card-title>
                        <v-card-text>
                          <div class="font-weight-bold">Conference Center Garage</div>
                          <ul class="pl-4">
                            <li>Free for registered attendees (show conference badge)</li>
                            <li>300 available spaces</li>
                            <li>Electric vehicle charging stations available</li>
                            <li>Open 24/7 during conference</li>
                          </ul>
                          <div class="caption font-italic mt-2">
                            *Registration required for vehicle plate number
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-col>
                    
                    <v-col cols="12" md="6">
                      <v-card outlined>
                        <v-card-title class="subtitle-1">
                          <v-icon color="brown" class="mr-2">mdi-map-marker</v-icon>
                          Alternative Parking
                        </v-card-title>
                        <v-card-text>
                          <div class="font-weight-bold">City Garage (400m away)</div>
                          <ul class="pl-4">
                            <li>$12 per day</li>
                            <li>Discounted rate available with conference code: CONF2025</li>
                          </ul>
                          
                          <div class="font-weight-bold mt-2">Street Parking</div>
                          <ul class="pl-4">
                            <li>Limited availability</li>
                            <li>$2 per hour (8:00 AM - 8:00 PM)</li>
                            <li>Max 3 hours during weekdays</li>
                          </ul>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
      
      <!-- Interactive Map Button -->
      <div class="text-center mt-4">
        <v-btn
          color="primary"
          large
          outlined
          @click="showTransportMap = true"
        >
          <v-icon left>mdi-map</v-icon>
          View Interactive Transport Map
        </v-btn>
      </div>
      
      <!-- Transportation Contact Info -->
      <v-alert
        border="left"
        colored-border
        color="deep-purple"
        class="mt-4"
        elevation="2"
      >
        <div class="font-weight-bold mb-2">Transportation Assistance</div>
        <div>Need help planning your journey? Contact our transportation desk:</div>
        <div class="mt-2">
          <v-icon small class="mr-1">mdi-phone</v-icon> (555) 123-4567
          <span class="mx-3">|</span>
          <v-icon small class="mr-1">mdi-email</v-icon> transport@conference2025.com
        </div>
      </v-alert>
    </v-card-text>
  </v-card>
</v-col>
</template>
<!-- Updated Data Array -->
<script>
export default {
  data() {
    return {
      showTransportMap: false,
      transportation: [
        {
          mode: 'Taxi',
          description: '30 minutes from airport, approximately $35',
          icon: 'mdi-taxi',
          color: 'amber darken-2',
          details: [
            'Available 24/7 outside all terminals',
            'Credit cards accepted in all official taxis',
            'No reservation needed'
          ]
        },
        {
          mode: 'Airport Shuttle',
          description: '35 minutes, $15 per person',
          icon: 'mdi-bus',
          color: 'purple darken-1',
          details: [
            'Departs every 30 minutes (5:00 AM - 11:00 PM)',
            'Book online or at airport information desk',
            'Stops at major hotels and conference center'
          ]
        },
        {
          mode: 'Express Train + Metro',
          description: '40 minutes total, $12',
          icon: 'mdi-train-variant',
          color: 'green darken-1',
          details: [
            'Airport Express to Central Station (20 min)',
            'Transfer to Metro Line A to University Station (15 min)',
            '5 minute walk to conference venue'
          ]
        },
        {
          mode: 'Metro',
          description: 'Lines A & B with connections to the conference center',
          icon: 'mdi-subway',
          color: 'green',
          details: [
            'Line A (Red): Exit at University Station',
            'Line B (Blue): Exit at Central Square, transfer to bus #42',
            'Trains run every 5-7 minutes from 5:00 AM to midnight'
          ]
        },
        {
          mode: 'Bus',
          description: 'Routes #42, #67, #89 stop at the conference center',
          icon: 'mdi-bus',
          color: 'amber darken-2',
          details: [
            'Stop directly in front of conference center',
            'Buses run every 10-15 minutes from 6:00 AM to 11:00 PM',
            'Real-time bus tracking available via City Transit app'
          ]
        },
        {
          mode: 'Bike Share',
          description: 'CityBike stations at University Plaza and Central Square',
          icon: 'mdi-bike',
          color: 'blue-grey',
          details: [
            '$5 daily pass, unlimited 30-minute rides',
            'App download required for rental',
            'Return bikes to any CityBike station'
          ]
        },
        {
          mode: 'On-site Parking',
          description: 'Free for conference attendees',
          icon: 'mdi-parking',
          color: 'indigo darken-1',
          details: [
            '300 available spaces',
            'Electric vehicle charging stations available',
            'Open 24/7 during conference',
            'Registration required for vehicle plate number'
          ]
        },
        {
          mode: 'Alternative Parking',
          description: 'City Garage ($12/day) and street parking options',
          icon: 'mdi-map-marker',
          color: 'brown',
          details: [
            'City Garage: 400m from venue, $12 per day',
            'Discounted rate with code: CONF2025',
            'Street Parking: $2/hour, max 3 hours during weekdays'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.transportation-timeline {
  position: relative;
}

.transportation-timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 24px;
  width: 2px;
  background: #e0e0e0;
  z-index: 0;
}
</style>