<script setup lang="ts">
import {useBreakPoints} from '@/composables/Breakpoints'

import Navigation from '@/components/layout/Navigation/Navigation.vue';
import Header from '@/components/layout/Header/Header.vue'



const {mobile} = useBreakPoints()

</script>

<template>
    <div class="layout">
        <Header v-if="!mobile"/>

        <main class="base">
            <slot />
        </main>

        <Navigation v-if="mobile" />
    </div>
</template>

<style scoped lang="scss"> 
@import '@/assets/styles/variables.scss';
.layout {
     min-height: 100vh;
     display: flex;
     flex-direction: column;

     background-color: $bg-light;
 }

 .base {
     display: flex;
     flex-grow: 1;
     flex-direction: column;
 }
</style>