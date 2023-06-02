<script setup lang="ts">
import styles from "./Button.module.scss"
</script>

<template>
    <button :class="styles.button">
        <div :class="styles.button_content">
            <slot/>
        </div>
    </button>
</template>



<style scoped>
button{
    cursor: pointer;
}
</style>