import {createRouter, createWebHistory} from 'vue-router';


const routes = [
    {
        path: '/',
        component: () => import('@/25-hw-router/components/layouts/DefaultLayout.vue'),
        children: [
            {
                path: '/',
                name: 'Profile',
                component: () => import('@/25-hw-router/views/Profile.vue')
            },
            {
                path: '/users',
                name: 'Users',
                component: () => import('@/25-hw-router/views/Users.vue')
            },
            {
                path: '/users/:userId',
                name: 'UserView',
                component: () => import('@/25-hw-router/views/UserView.vue'),
                props: true,
            },
            {
                path: '/company-groups',
                name: 'CompanyGroups',
                component: () => import('@/25-hw-router/views/CompanyGroups.vue')
            },
            {
                path: '/contractors',
                name: 'Contractors',
                component: () => import('@/25-hw-router/views/Contractors.vue')
            },
            {
                path: '/contracts',
                name: 'Contracts',
                component: () => import('@/25-hw-router/views/Contracts.vue')
            },
            {
                path: '/deals',
                name: 'Deals',
                component: () => import('@/25-hw-router/views/Deals.vue')
            },
            {
                path: '/settings',
                name: 'Settings',
                component: () => import('@/25-hw-router/views/Settings.vue')
            },
            {
                path: '/roles-permissions',
                name: 'RolesPermissions',
                component: () => import('@/25-hw-router/views/RolesAndPermissions.vue')
            },
            {
                path: '/deal-statuses',
                name: 'DealStatuses',
                component: () => import('@/25-hw-router/views/DealStatuses.vue')
            },
            {
                path: '/custom-fields',
                name: 'CustomFields',
                component: () => import('@/25-hw-router/views/CustomFields.vue')
            },
            {
                path: '/:pathMatch(.*)*',
                component: () => import('@/25-hw-router/views/NotFound.vue')
            },
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;