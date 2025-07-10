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
    ]
}

export default MainRoutes;
