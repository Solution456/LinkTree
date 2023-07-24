import { createRouter, createWebHistory } from 'vue-router'

import { layout } from '@/layouts'

const authPage = () => import('@/pages/AuthPage.vue')
const linkPage = () => import('@/pages/LinkPage.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            name: 'Auth',
            component: authPage,
            meta: { layout: layout.Auth }
        },

        {
            path: '/links',
            name: 'Links',
            component: linkPage,
            meta: { layout: layout.Base}
        },
    ]
})


export default router