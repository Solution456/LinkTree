<script setup lang="ts">

import styles from './IconButton.module.scss'


</script>



<template>
    <button type="button" :class="styles.iconButton">
        <slot name="icon"/>
    </button>
</template>


