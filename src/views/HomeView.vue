<template>
  <v-container fluid class="pa-0 pa-sm-2 pa-md-4" max-width="1400">
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <div class="position-relative">
            <div class="banner-container">
              <v-window v-model="currentSlide">
                <!-- Slide 1: Conference Banner (default) -->
                <v-window-item :value="0">
                  <v-img
                    src="@/assets/homeBanner/conference-banner-postpone.jpeg"
                    lazy-src="https://placehold.co/1200x600/000000/FFF?text=Loading Conference Banner"
                    width="100%"
                    height="100%"
                    contain
                    class="text-white banner-slide"
                    :class="{ 'clickable-banner': !isPhone }"
                    alt="Conference Banner"
                    @click="openImagePreview(conferenceBannerImagePath, 'Conference Banner', 'conference-banner-postpone.jpeg')"
                  >
                    <v-card-title :class="bannerTitleClass" />
                  </v-img>
                </v-window-item>
                <!-- Add more v-window-item slides below -->
                <v-window-item :value="1">
                  <v-img
                    src="@/assets/homeBanner/workshop.webp"
                    lazy-src="https://placehold.co/1200x600/000000/FFF?text=Loading workshop banner"
                    width="100%"
                    height="100%"
                    contain
                    class="text-white banner-slide"
                    :class="{ 'clickable-banner': !isPhone }"
                    alt="Workshop Banner"
                    @click="openImagePreview(workshopImagePath, 'Workshop Banner', 'workshop-banner.jpg')"
                  >
                    <v-card-title :class="bannerTitleClass" />
                  </v-img>
                </v-window-item>
                <v-window-item :value="2">
                  <v-img
                    src="@/assets/homeBanner/important-deadline.jpg"
                    lazy-src="https://placehold.co/1200x600/000000/FFF?text=Loading important deadline banner"
                    width="100%"
                    height="100%"
                    contain
                    class="text-white banner-slide"
                    :class="{ 'clickable-banner': !isPhone }"
                    alt="Important Deadline Banner"
                    @click="openImagePreview(importantDeadlineImagePath, 'Important Deadline Banner', 'important-deadline-banner.jpg')"
                  >
                    <v-card-title :class="bannerTitleClass" />
                  </v-img>
                </v-window-item>
                <v-window-item :value="3">
                  <v-img
                    src="@/assets/homeBanner/yuran.jpg"
                    lazy-src="https://placehold.co/1200x600/000000/FFF?text=Loading fees banner"
                    width="100%"
                    height="100%"
                    contain
                    class="text-white banner-slide"
                    :class="{ 'clickable-banner': !isPhone }"
                    alt="Fees Registration Banner"
                    @click="openImagePreview(feesBannerImagePath, 'Fees Registration Banner', 'fees-registration-banner.jpg')"
                  >
                    <v-card-title :class="bannerTitleClass" />
                  </v-img>
                </v-window-item>
              </v-window>
            </div>
            <!-- Custom arrows overlaid on banner -->
            <v-btn
              class="banner-arrow banner-arrow-left"
              icon="mdi-chevron-left"
              variant="plain"
              @click="prev"
            />
            <v-btn
              class="banner-arrow banner-arrow-right"
              icon="mdi-chevron-right"
              variant="plain"
              @click="next"
            />
            <!-- Slide indicator dots -->
            <div class="banner-dots d-flex justify-center ga-2 py-2">
              <v-btn
                v-for="(_, i) in bannerSlides"
                :key="i"
                :color="currentSlide === i ? 'primary' : 'grey-lighten-1'"
                density="compact"
                icon
                size="x-small"
                @click="goToSlide(i)"
              />
            </div>

            <!-- Desktop-only image preview with zoom and download -->
            <v-dialog v-model="isImagePreviewOpen" max-width="1100" :fullscreen="false">
              <v-card>
                <v-toolbar density="comfortable" color="surface">
                  <v-toolbar-title>{{ selectedPreviewTitle }}</v-toolbar-title>
                  <v-spacer />
                  <v-btn
                    icon="mdi-minus"
                    variant="text"
                    :disabled="zoomLevel <= MIN_ZOOM"
                    @click="zoomOut"
                  />
                  <v-btn icon="mdi-refresh" variant="text" @click="resetZoom" />
                  <v-btn
                    icon="mdi-plus"
                    variant="text"
                    :disabled="zoomLevel >= MAX_ZOOM"
                    @click="zoomIn"
                  />
                  <v-btn
                    :href="selectedPreviewImagePath"
                    :download="selectedPreviewDownloadName"
                    icon="mdi-download"
                    variant="text"
                  />
                  <v-btn icon="mdi-close" variant="text" @click="closeImagePreview" />
                </v-toolbar>

                <v-card-text class="preview-image-wrapper pa-4">
                  <img
                    :src="selectedPreviewImagePath"
                    :alt="`${selectedPreviewTitle} (Preview)`"
                    class="preview-image"
                    :style="{ transform: `scale(${zoomLevel})` }"
                  />
                </v-card-text>
              </v-card>
            </v-dialog>
          </div>
          <v-card-text :class="contentTextClass">
            <!-- Add H1 here for SEO -->
            <h1 class="text-h5 text-center font-weight-bold mb-4">
              1st International Conference on Enforcement, Law & Integrity 2026 (ICELIn 2026) 
            </h1>
            <p class="text-body-2">
              Join us for a dynamic and multidisciplinary conference that brings together scholars,
              practitioners, policymakers, and thought leaders to explore the evolving challenges and
              innovations in enforcement, integrity, and climate resilience.
              This year’s conference will delve into critical topics ranging from legal reforms and
              leadership ethics to climate adaptation and disaster response.
            </p>
            <br/>
            <p class="text-body-2">
              With dedicated tracks on
              <strong class="text-decoration-underline">{{ data_subthemes[0].title }}</strong>,
              <strong class="text-decoration-underline">{{ data_subthemes[1].title }}</strong>,
              <strong class="text-decoration-underline">{{ data_subthemes[2].title }}</strong>, and
              <strong class="text-decoration-underline">{{ data_subthemes[3].title }}</strong>,
              the conference provides a rich platform for dialogue, collaboration, and knowledge exchange.
              Through keynote addresses, panel discussions, and research presentations, we aim to
              foster actionable insights that strengthen governance, promote ethical leadership, and
              support sustainable, resilient communities.
            </p>
            <v-row class="mt-2">
              <v-col :cols="width < 959 ? 12 : (width <= 1160 ? 6 : 4)">
                <CallForAbstractBanner/>
              </v-col>
              <v-col :cols="width < 959 ? 12 : (width <= 1160 ? 6 : 4)">
                <CallForPaperBanner/>
              </v-col>
              <v-col :cols="width < 959 ? 12 : (width <= 1160 ? 6 : 4)">
                <RegisterBanner/>
              </v-col>
            </v-row>
            <v-row class="mt-2 mt-sm-6">
              <v-col cols="12"><h4 class="text-h4 text-center font-weight-medium">Subthemes</h4></v-col>
                <p class="mb-4 text-h6">
                    Authors are invited to submit full paper describing original research work in areas including, but are not limited to:
                </p>
              <SubthemeList/>
              
            </v-row>
            <v-row class="mt-4">
              <v-col cols="12">
                <v-card class="mx-auto red-bottom-border" max-width="800" color="elmubackground" rounded="xl" >
                  <v-card-title class="text-h5 font-weight-bold text-center">
                    Join Our Workshop!
                  </v-card-title>
                  <v-card-text class="text-body-1 text-center">
                    Don’t miss our exclusive workshop sessions with renowned experts. Click below to learn more.
                  </v-card-text>
                  <v-card-actions class="d-flex justify-center">
                    <v-btn
                      color="primary"
                      rounded
                      class="elevation-2"
                      @click="$router.push({ path: '/panel-list', query: { scrollTo: 'workshop-section' } })"
                    >
                      Learn More
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <CountdownTimerMobile v-if="width < 959" />
        <CountdownTimer v-else />
      </v-col>
    </v-row>
    <!-- Vip Table here if exits -->
    <!-- <VipList/> -->
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { data_subthemes } from '@/assets/data/Subthemes_Data';

const { xs, sm, md, lg, xl, xxl, width } = useDisplay()

const conferenceBannerImagePath = new URL('@/assets/homeBanner/conference-banner.webp', import.meta.url).href
const workshopImagePath = new URL('@/assets/homeBanner/workshop.webp', import.meta.url).href
const importantDeadlineImagePath = new URL('@/assets/homeBanner/important-deadline.jpg', import.meta.url).href
const feesBannerImagePath = new URL('@/assets/homeBanner/yuran.jpg', import.meta.url).href

const isPhone = computed(() => xs.value)

const MIN_ZOOM = 1
const MAX_ZOOM = 3
const ZOOM_STEP = 0.25

const isImagePreviewOpen = ref(false)
const zoomLevel = ref(MIN_ZOOM)
const selectedPreviewImagePath = ref(feesBannerImagePath)
const selectedPreviewTitle = ref('Fees Registration Banner')
const selectedPreviewDownloadName = ref('fees-registration-banner.jpg')

// Banner slideshow
const currentSlide = ref(0)
const bannerSlides = [0] // extend this array when adding more slides
let slideInterval: ReturnType<typeof setInterval> | null = null

function next() {
  currentSlide.value = currentSlide.value + 1 >= bannerSlides.length ? 0 : currentSlide.value + 1
  resetInterval()
}

function prev() {
  currentSlide.value = currentSlide.value - 1 < 0 ? bannerSlides.length - 1 : currentSlide.value - 1
  resetInterval()
}

function goToSlide(index: number) {
  currentSlide.value = index
  resetInterval()
}

function openImagePreview(imagePath: string, title: string, downloadName: string) {
  if (isPhone.value) return

  selectedPreviewImagePath.value = imagePath
  selectedPreviewTitle.value = title
  selectedPreviewDownloadName.value = downloadName
  resetZoom()
  isImagePreviewOpen.value = true
}

function closeImagePreview() {
  isImagePreviewOpen.value = false
  resetZoom()
}

function zoomIn() {
  zoomLevel.value = Math.min(MAX_ZOOM, Number((zoomLevel.value + ZOOM_STEP).toFixed(2)))
}

function zoomOut() {
  zoomLevel.value = Math.max(MIN_ZOOM, Number((zoomLevel.value - ZOOM_STEP).toFixed(2)))
}

function resetZoom() {
  zoomLevel.value = MIN_ZOOM
}

function resetInterval() {
  if (slideInterval) clearInterval(slideInterval)
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % bannerSlides.length
  }, 10000)
}

onMounted(() => {
  slideInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % bannerSlides.length
  }, 10000)
})

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval)
})

// Dynamic classes for the banner title
const bannerTitleClass = computed(() => {
  const baseClasses = ['font-weight-bold']
  
  if (xs.value) {
    return [...baseClasses, 'text-h5']
  } else if (sm.value) {
    return [...baseClasses, 'text-h4']
  } else {
    return [...baseClasses, 'text-h3']
  }
})

// Dynamic classes for the content text
const contentTextClass = computed(() => {
  const baseClasses = ['py-4']
  
  if (xs.value || sm.value) {
    return [...baseClasses, 'text-body-2']
  } else {
    return [...baseClasses, 'text-body-1']
  }
})

// Dynamic classes for feature card titles
const featureTitleClass = computed(() => {
  if (xs.value || sm.value) {
    return 'text-h6'
  } else {
    return 'text-h5'
  }
})

// Ensure `data_subthemes` is available in the template context
const subthemes = data_subthemes;
</script>

<style scoped>
.red-bottom-border {
  border-bottom: 4px solid red;
}

.v-card-title {
  word-break: normal;
}

.v-card {
  overflow: hidden;
}

/* Mobile-specific adjustments */
@media (max-width: 600px) {
  .v-container {
    padding: 0;
  }
  
  .v-card {
    border-radius: 0;
  }
}

.position-relative {
  position: relative;
}

.banner-container {
  width: 100%;
  aspect-ratio: 2 / 1;
  background: rgb(80, 86, 127);
  overflow: hidden;
}

.banner-container .v-window {
  height: 100%;
}

.banner-container :deep(.v-window__container) {
  height: 100%;
}

.banner-container :deep(.v-window-item) {
  height: 100%;
}

.banner-slide {
  width: 100%;
  height: 100%;
}

.clickable-banner {
  cursor: zoom-in;
}

.preview-image-wrapper {
  max-height: 80vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: #101010;
}

.preview-image {
  max-width: 100%;
  height: auto;
  transform-origin: top center;
  transition: transform 0.2s ease;
}

.banner-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  color: white;
  font-size: 2rem;
}
.banner-arrow-left {
  left: 8px;
}
.banner-arrow-right {
  right: 8px;
}
/* Make feature cards have equal height */
.equal-height-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.equal-height-card .v-card-title {
  flex-shrink: 0;
}
.equal-height-card .v-card-text {
  flex-grow: 1;
}

</style>