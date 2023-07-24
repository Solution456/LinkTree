import { createRouter, createWebHistory } from 'vue-router'

import { layout } from '@/layouts'

import { authGuard } from '@/utils/authGuard'

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
            meta: { layout: layout.Base, reqAuth: true}
        },
    ]
})



router.beforeEach(async (to, from, next) => {
    if (to.matched.some(r => r.meta.reqAuth)) {
        authGuard(to, from, next)
    } else {
        next()
    }
    
})


export default router