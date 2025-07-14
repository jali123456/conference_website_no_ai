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
            component: () => import('@/pages/About_Us.vue'),
        },
        {
            path: '/welcome-message',
            name: 'Welcome Message',
            component: () => import('@/pages/Welcome_Message.vue'),
        },
        {
            path:'/Committee',
            name: 'Committee',
            component: () => import('@/pages/Committee.vue'),
        },
        {
            path: '/call-for-paper',
            name: 'Call For Paper',
            component: () => import('@/pages/Call_For_Paper.vue')
        },
        {
            path: '/registration-payment',
            name: 'Registration Payment',
            component: () => import('@/pages/Registration_Payment.vue'),
        },
        
    ]
}

export default MainRoutes;
