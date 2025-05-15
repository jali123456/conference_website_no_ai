<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h3 mb-6 text-center">News & Updates</h1>
      </v-col>

      <!-- Featured News -->
      <v-col cols="12" class="mb-5">
        <v-card class="featured-news">
          <v-row>
            <v-col cols="12" md="5">
              <v-img
                src="@/assets/speakers-banner.jpg"
                height="300"
                cover
                class="h-100"
              ></v-img>
            </v-col>
            <v-col cols="12" md="7">
              <v-card-title class="text-h4">{{ featuredNews.title }}</v-card-title>
              <v-card-subtitle class="pt-2">
                <v-icon small class="mr-1">mdi-calendar</v-icon>
                {{ featuredNews.date }}
              </v-card-subtitle>
              <v-card-text>
                <p class="text-body-1">{{ featuredNews.summary }}</p>
                <v-btn
                  color="primary"
                  variant="outlined"
                  class="mt-4"
                  :to="featuredNews.link"
                >
                  Read More
                </v-btn>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- News Filters -->
      <v-col cols="12">
        <div class="d-flex align-center flex-wrap mb-4">
          <h2 class="text-h5 mr-4 mb-0">Filter News:</h2>
          <v-chip-group
            v-model="selectedCategories"
            multiple
            column
          >
            <v-chip
              v-for="category in newsCategories"
              :key="category"
              filter
              :value="category"
              color="primary"
            >
              {{ category }}
            </v-chip>
          </v-chip-group>
        </div>
      </v-col>

      <!-- News List -->
      <template v-for="(newsItem, index) in filteredNewsItems" :key="index">
        <v-col cols="12" md="6">
          <v-card height="100%">
            <v-img
              :src="newsItem.image"
              height="200"
              cover
            ></v-img>
            <v-card-title>{{ newsItem.title }}</v-card-title>
            <v-card-subtitle>
              <div class="d-flex align-center">
                <v-icon small class="mr-1">mdi-calendar</v-icon>
                <span>{{ newsItem.date }}</span>
              </div>
              <v-chip
                class="mt-2 mr-1"
                size="small"
                color="primary"
                v-for="(tag, tagIndex) in newsItem.categories"
                :key="tagIndex"
              >
                {{ tag }}
              </v-chip>
            </v-card-subtitle>
            <v-card-text>
              <p>{{ newsItem.summary }}</p>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                variant="text"
                :to="newsItem.link"
              >
                Read More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </template>

      <!-- Newsletter Signup -->
      <v-col cols="12" class="mt-6">
        <v-card color="primary" class="text-center">
          <v-card-title class="text-h5 text-white">Stay Updated with Conference News</v-card-title>
          <v-card-text class="text-white pb-0">
            <p>Subscribe to our newsletter to receive regular updates about the conference.</p>
          </v-card-text>
          <v-card-text class="pt-0">
            <v-form @submit.prevent="subscribeNewsletter">
              <v-row align="center" justify="center">
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="email"
                    label="Your email address"
                    variant="outlined"
                    color="white"
                    bg-color="rgba(255,255,255,0.1)"
                    hide-details
                    class="rounded-lg newsletter-input"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="auto">
                  <v-btn color="white" type="submit" variant="elevated">
                    Subscribe
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface NewsItem {
  title: string
  date: string
  summary: string
  image: string
  link: string
  categories: string[]
}

const email = ref('')
const selectedCategories = ref<string[]>([])

const subscribeNewsletter = () => {
  // This would connect to a newsletter service in a real application
  alert(`Thank you for subscribing with ${email.value}!`)
  email.value = ''
}

const newsCategories = [
  'Call for Papers',
  'Registration',
  'Keynote Speakers',
  'Program Updates',
  'Sponsors',
  'Venue'
]

const featuredNews = {
  title: 'Renowned AI Expert Dr. Lisa Chen to Deliver Keynote',
  date: 'June 5, 2023',
  summary: "We are thrilled to announce that Dr. Lisa Chen, leading AI researcher and CEO of FutureTech AI, will deliver the opening keynote address at this year's conference. Dr. Chen will discuss 'The Future of Ethical AI in Society' and share insights from her groundbreaking work in responsible AI development.",
  image: '@/assets/news/keynote-announcement.jpg',
  link: '/news/keynote-announcement',
  categories: ['Keynote Speakers', 'Program Updates']
}

const newsItems: NewsItem[] = [
  {
    title: 'Paper Submission Deadline Extended',
    date: 'May 20, 2023',
    summary: 'Due to numerous requests, we have extended the paper submission deadline by two weeks to June 1, 2023. This is the final extension, and no further extensions will be granted.',
    image: '@/assets/news/deadline-extension.jpg',
    link: '/news/submission-extended',
    categories: ['Call for Papers']
  },
  {
    title: 'Early Bird Registration Now Open',
    date: 'May 15, 2023',
    summary: 'Take advantage of our early bird registration rates before June 30. Early registrants receive a 20% discount on conference fees and guaranteed accommodation at our partner hotels.',
    image: '@/assets/news/early-registration.jpg',
    link: '/news/early-registration',
    categories: ['Registration']
  },
  {
    title: 'New Platinum Sponsor Announced',
    date: 'May 10, 2023',
    summary: 'We are pleased to welcome TechInnovate as our newest Platinum sponsor. Their support will enable us to enhance the conference experience with additional networking events.',
    image: '@/assets/news/sponsor-announcement.jpg',
    link: '/news/new-sponsor',
    categories: ['Sponsors']
  },
  {
    title: 'Workshop on Quantum Computing Added',
    date: 'May 5, 2023',
    summary: 'A new pre-conference workshop on "Practical Applications of Quantum Computing" has been added to the program. The workshop will be led by Dr. James Wilson from Quantum Labs.',
    image: '@/assets/news/workshop-announcement.jpg',
    link: '/news/quantum-workshop',
    categories: ['Program Updates']
  },
  {
    title: 'Virtual Attendance Option Available',
    date: 'April 28, 2023',
    summary: 'For those unable to travel, we now offer a comprehensive virtual attendance option. Virtual attendees will have access to livestreams of all main sessions and interactive networking opportunities.',
    image: '@/assets/news/virtual-attendance.jpg',
    link: '/news/virtual-option',
    categories: ['Registration']
  },
  {
    title: 'Conference Venue Tour Available Online',
    date: 'April 20, 2023',
    summary: 'Take a virtual tour of our conference venue and surrounding facilities. The tour includes the main hall, workshop rooms, dining areas, and nearby accommodations.',
    image: '@/assets/news/venue-tour.jpg',
    link: '/news/venue-tour',
    categories: ['Venue']
  }
]

const filteredNewsItems = computed(() => {
  if (selectedCategories.value.length === 0) {
    return newsItems
  }
  
  return newsItems.filter((item) => 
    item.categories.some((category: string) => selectedCategories.value.includes(category))
  )
})
</script>

<style scoped>
.featured-news {
  overflow: hidden;
}

.newsletter-input :deep(.v-field__field) {
  color: white !important;
}

.newsletter-input :deep(label) {
  color: rgba(255, 255, 255, 0.7) !important;
}
</style> 