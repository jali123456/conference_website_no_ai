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
            component: () => import('@/pages/Home.vue'), 
        },
        {
            path: '/important-dates',
            name: 'Important Dates',
            component: () => import('@/pages/Important_Dates.vue'),
        },
        {
            path:'/about-us',
            name: 'About Us',
            component: () => import('@/pages/About_Us.vue')
        },
    ]
}

export default MainRoutes;
