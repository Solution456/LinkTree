<script setup lang="ts">
import Navigation from '@/components/layout/Navigation/Navigation.vue';

</script>

<template>
    <header>
        
    </header>

    <main class="base">
        <slot/>
    </main>

    <Navigation/>
</template>

<style scoped lang="scss"> 
.base{
    display: flex;
    flex-grow: 1;
    flex-direction: column;
}
</style>