<script setup lang="ts">
import { HomeIcon, LinkIcon, EllipsisHorizontalCircleIcon } from "@heroicons/vue/24/outline";

import styles from "./Navigation.module.scss"

const NAV_ITEMS = [
    {
        path:'/',
        name:'home',
        icon:HomeIcon,
        
    },
    {
        path:'/links',
        name:'links',
        icon:LinkIcon,
        
    },
    {
        path:'/more',
        name:'more',
        icon:EllipsisHorizontalCircleIcon
        
    }
]


</script>

<template>
    <nav :class="styles.nav">
        <ul :class="styles.nav_items">
            <li  v-for="route of NAV_ITEMS" :key="route.path">
                <router-link :class="styles.nav_items__link" :to="route.path">
                    <component style="height: 24px; width: 24px;" :is="route.icon"/>
                    <p class="sub-title-1">{{ route.name }}</p>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

