import { createRouter, createWebHistory } from 'vue-router'

import { layout } from '@/layouts'

const homePage = () => import('@/pages/HomePage.vue')
const linkPage = () => import('@/pages/LinkPage.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            name: 'Home',
            component: homePage,
            meta: { layout: layout.Landing }
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