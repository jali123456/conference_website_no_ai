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
