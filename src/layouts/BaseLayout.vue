<script setup lang="ts">
import Navigation from '@/components/layout/Navigation/Navigation.vue';

</script>

<template>
    <div class="layout">
        <header>

        </header>

        <main class="base">
            <slot />
        </main>

        <Navigation />
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