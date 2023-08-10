<script setup lang="ts">
import HeaderNavigation from '@/components/layout/Header/Navigation/Navigation.vue'
</script>


<template>
    <header class="header">
        <div class="header__inner">
            <header-navigation/>
        </div>

    </header>
</template>

<style scoped lang="scss">

.header {
    min-width: 0px;
    background-color: transparent;
    position: sticky;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 100;

    transition: all .1s ease-in-out 0s;

    &__inner {
        display: flex;
        box-sizing: border-box;
        min-width: 0px;
        justify-content: center;
    }




}
</style>