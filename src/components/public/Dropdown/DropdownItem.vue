<script setup lang="ts">

</script>


<template>
    <li :class="$style.dropdown__item">
        <span>
            <slot>label</slot>
        </span>
    </li>
</template>


<style scoped module lang="scss">
@import './DropdownItem.module'

</style>