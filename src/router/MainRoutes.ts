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
            path: '/about',
            name: 'About',
            component: () => import('@/views/AboutView.vue'),
        },
        {
            path: '/faq',
            name: 'FAQ',
            component: () => import('@/views/FAQView.vue'),
        },
        {
            path: '/news',
            name: 'News',
            component: () => import('@/views/NewsView.vue'),
        },
        {
            path: '/panel-list',
            name: 'PanelList',
            component: () => import('@/views/PanelList.vue'),
        },
        {
            path: '/fees-registration',
            name: 'FeesRegistration',
            component: () => import('@/views/FeesRegistrationView.vue'),
        },
        {
            path: '/venue-accommodation',
            name: 'VenueAccommodation',
            component: () => import('@/views/VenueAccommodationView.vue'),
        },
        { 
            path: '/programme-dates',
            name: 'ProgrammeDates',
            component: () => import('@/views/ProgrammeDatesView.vue'),
        },
        {
            path: '/downloads',
            name: 'Downloads',
            component: () => import('@/views/DownloadsView.vue'),
        },
        {
            path: '/contact',
            name: 'Contact',
            component: () => import('@/views/ContactView.vue'),
        },
        {
            path: '/sponsors',
            name: 'Sponsors',
            component: () => import('@/views/SponsorsView.vue'),

        },
        {
            path: '/call-for-reviewers',
            name: 'CallForReviewers',
            component: () => import('@/views/CallForReviewersView.vue'),
        },
        {
            path: '/call-for-abstracts',
            name: 'CallForAbstracts',
            component: () => import('@/views/CallForAbstractsView.vue'),
        },
        {
            path: '/call-for-papers',
            name: 'CallForPapers',
            component: () => import('@/views/CallForPapersView.vue'),
        }
    ]
}

export default MainRoutes;
