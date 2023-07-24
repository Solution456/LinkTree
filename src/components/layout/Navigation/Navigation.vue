<script setup lang="ts">
import {storeToRefs} from 'pinia'

import { RectangleGroupIcon, LinkIcon, EllipsisHorizontalCircleIcon } from "@heroicons/vue/24/outline";
import Button from "@/components/public/Button/Button.vue";


import { useUserStore } from "@/stores/userStore";
import useAuthUser from "@/composables/user";


const {isAuth} = storeToRefs(useUserStore())
const {userSignOut} = useAuthUser()

const NAV_ITEMS = [
    {
        path:'/links',
        name:'links',
        icon:LinkIcon,
        
    },
    {
        path:'/appearance',
        name:'appearance',
        icon: RectangleGroupIcon
    },
    {
        path:'/more',
        name:'more',
        icon:EllipsisHorizontalCircleIcon
        
    }
]


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
                <Button @click="userSignOut" >
                    Выход
                </Button>
            </li>
        </ul>
    </nav>
</template>

<style scoped module lang="scss">
@import './Navigation.module.scss';
</style>

