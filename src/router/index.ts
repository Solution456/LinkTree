import { createRouter, createWebHistory } from 'vue-router'

import { layout } from '@/layouts'

// import { useUserStore } from "@/stores/userStore";
// import {storeToRefs} from 'pinia'
import { getCookieToken } from '@/composables/Auth'


const authPage = () => import('@/pages/AuthPage.vue')
const linkPage = () => import('@/pages/LinkPage.vue')
const appearancePage = () => import('@/pages/AppearancePage.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
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

        {
            path: '/appearance',
            name: 'Appearance',
            component: appearancePage,
            meta: { layout: layout.Base, reqAuth: true}
        },
    ]
})



router.beforeEach((to, from, next) => {
    
    if (to.name !== 'Auth' && !getCookieToken()) {
        next({name: 'Auth'})
    } else if(to.name === 'Auth' && getCookieToken()){
        next({name:'Links'})
    }else{
        next()
    }
    
})


export default router