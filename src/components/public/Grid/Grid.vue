<script setup lang="ts">
import styles from './Grid.module.scss'
</script>

<template>
    <div :class="styles.grid">
        <slot/>
    </div>
</template>

