const AuthRoutes ={
    path: '/auth',
    component: () => import('@/layouts/RegistrationLayout.vue'),
    meta:{
        requiresAuth: false,

    },
    children: [
        {
            name: 'SideLogin',
            path: '/auth/login',
            component: () => import('@/views/authentication/SideLogin.vue'),
        },
        {
            name: 'Error',
            path: '/auth/404',
            component: () => import('@/views/authentication/Error.vue'),
        }
    ]
};
export default AuthRoutes;