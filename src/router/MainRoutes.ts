// MainRoutes.ts
const MainRoutes = {
    path: '/',
    meta: {
        requiresAuth: false,
    },
    component: () => import('@/layouts/default.vue'),
    children: [
        {
            path: '',
            name: 'Home',
            component: () => import('@/views/HomeView.vue'), 
        },
        {
            path: 'about',
            name: 'About',
            component: () => import('@/views/AboutView.vue'),
        },
        {
            path: 'faq',
            name: 'FAQ',
            component: () => import('@/views/FAQView.vue'),
        },
        {
            path: 'news',
            name: 'News',
            component: () => import('@/views/NewsView.vue'),
        },
        {
            path: 'schedule',
            name: 'Schedule',
            component: () => import('@/views/ScheduleView.vue'),
        },
        {
            path: 'profile',
            name: 'Profile',
            component: () => import('@/views/ProfileView.vue'),
        },
        {
            path: 'settings',
            name: 'Settings',
            component: () => import('@/views/SettingsView.vue'),
        },
        {
            path: 'keynote-speakers',
            name: 'KeynoteSpeakers',
            component: () => import('@/views/KeynoteSpeakersView.vue'),
        },
        {
            path: 'fees-registration',
            name: 'FeesRegistration',
            component: () => import('@/views/FeesRegistrationView.vue'),
        },
        {
            path: 'venue-accommodation',
            name: 'VenueAccommodation',
            component: () => import('@/views/VenueAccommodationView.vue'),
        },
        { 
            path: 'programme-dates',
            name: 'ProgrammeDates',
            component: () => import('@/views/ProgrammeDatesView.vue'),
        },
        {
            path: 'guidelines-publication',
            name: 'GuidelinesPublication',
            component: () => import('@/views/GuidelinesPublicationView.vue'),
        },
        {
            path: 'paper-submission',
            name: 'PaperSubmission',
            component: () => import('@/views/PaperSubmissionView.vue'),
        },
        {
            path: 'downloads',
            name: 'Downloads',
            component: () => import('@/views/DownloadsView.vue'),
        }   
    ]
}

export default MainRoutes;
