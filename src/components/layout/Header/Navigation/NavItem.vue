<script setup lang="ts">


</script>

<template>
    <div :class="$style.nav__item">
        <a :class="$style.nav__item__link" href="">
            <div :class="$style.nav__item__box">
                <span>
                    <slot/>
                </span>
            </div>
        </a>
    </div>
</template>


<style scoped module lang="scss">
@import './NavItem.module'
</style>