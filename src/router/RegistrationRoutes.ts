// RegistrationRoutes.ts

const RegistrationRoutes = {
    path: '/registration',
    meta: {
        requiresAuth: false,
    },
    component: () => import('@/layouts/RegistrationLayout.vue'),
    children: [
        {
            path: '',
            name: 'Registration',
            component: () => import('@/views/RegistrationPage.vue'), 
        },
    ]
}

export default RegistrationRoutes;
