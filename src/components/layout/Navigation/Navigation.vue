<script setup lang="ts">

import styles from "./Navigation.module.scss"

const NAV_ITEMS = [
    {
        path:'/',
        name:'home',
        icon:0,
        
    },
    {
        path:'/links',
        name:'links',
        icon:1,
        
    },
    {
        path:'/more',
        name:'more',
        icon:2,
        
    }
]


</script>

<template>
    <nav :class="styles.nav">
        <ul :class="styles.nav_items">
            <li  v-for="route of NAV_ITEMS" :key="route.path">
                <router-link :class="styles.nav_items__link" :to="route.path">{{ route.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>

