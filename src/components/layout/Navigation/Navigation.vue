<script setup lang="ts">
import {storeToRefs} from 'pinia'
import { useRouter } from 'vue-router';


import { useUserStore } from "@/stores/userStore";
import useAuthUser from "@/composables/user";
import {NAV_ITEMS} from '@/constants'

import Button from "@/components/public/Button/Button.vue";





const {isAuth} = storeToRefs(useUserStore())
const {userSignOut} = useAuthUser()
const router = useRouter()

const handleLogOut = async () => {
    await userSignOut()

    router.push({
        name: 'Auth'
    })
}






</script>

<template>
    <nav :class="$style.nav">
        <ul :class="$style.nav_items">
            <li  v-for="route of NAV_ITEMS" :key="route.path">
                <router-link :class="$style.nav_items__link" :to="route.path">
                    <component style="height: 24px; width: 24px;" :is="route.icon"/>
                    <p class="sub-title-1">{{ route.name }}</p>
                </router-link>
            </li>
            <li v-if="isAuth">
                <Button @click="handleLogOut" >
                    Выход
                </Button>
            </li>
        </ul>
    </nav>
</template>

<style scoped module lang="scss">
@import './Navigation.module.scss';
</style>

