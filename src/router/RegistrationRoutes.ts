// RegistrationRoutes.ts

const RegistrationRoutes = {
    path: '/registration',
    component: () => import('@/layouts/RegistrationLayout.vue'),
    children: [
        {
            path: '',
            name: 'Registration',
            component: () => import('@/views/RegistrationPage.vue'), 
        },
        {
            path: 'profile',
            name: 'Profile',
            component: () => import('@/views/ProfileView.vue'),
            meta: {
                requiresAuth: true,
            },
        },
    ]
}

export default RegistrationRoutes;
