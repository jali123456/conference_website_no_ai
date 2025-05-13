/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/keynote-speakers',
      name: 'KeynoteSpeakers',
      component: () => import('@/views/KeynoteSpeakersView.vue')
    },
    {
      path: '/fees-registration',
      name: 'FeesRegistration',
      component: () => import('@/views/FeesRegistrationView.vue')
    },
    {
      path: '/venue-accommodation',
      name: 'VenueAccommodation',
      component: () => import('@/views/VenueAccommodationView.vue')
    },
    {
      path: '/programme-dates',
      name: 'ProgrammeDates',
      component: () => import('@/views/ProgrammeDatesView.vue')
    },
    {
      path: '/guidelines-publication',
      name: 'GuidelinesPublication',
      component: () => import('@/views/GuidelinesPublicationView.vue')
    },
    {
      path: '/paper-submission',
      name: 'PaperSubmission',
      component: () => import('@/views/PaperSubmissionView.vue')
    },
    {
      path: '/downloads',
      name: 'Downloads',
      component: () => import('@/views/DownloadsView.vue')
    }
  ]
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
