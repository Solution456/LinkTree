<script setup lang="ts">

</script>

<template>
    <div>
        <template v-if="$slots.title">
            <h2 class="title-1 mb-2">
                <slot name="title">Title</slot>
            </h2>
        </template>

        <div :class="$style.card">
            <slot name="content"/>
        </div>

    </div>
</template>



<style scoped module lang="scss">
@import './publicCard.module';
</style>