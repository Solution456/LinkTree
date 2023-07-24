<script setup lang="ts">

import $style from './IconButton.module.scss'


</script>



<template>
    <button type="button" :class="$style.iconButton">
        <slot name="icon"/>
    </button>
</template>


<style scoped module lang="scss">
@import './IconButton.module.scss';
</style>

