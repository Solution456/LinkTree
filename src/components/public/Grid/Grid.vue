<script setup lang="ts">

</script>

<template>
    <div :class="$style.grid">
        <slot/>
    </div>
</template>


<style scoped module lang="scss">
@import './Grid.module.scss';
</style>

