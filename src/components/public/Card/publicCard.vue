<script setup lang="ts">

</script>

<template>
    <div>
        <template v-if="$slots.title">
            <h3 class="title-2 mb-2" :class="$style['card-title']">
                <slot name="title">Title</slot>
            </h3>
        </template>

        <div :class="$style.card">
            <slot name="content" />


            <template v-if="$slots.footer">
                <div :class="$style.card__footer">
                    <slot name="footer" />
                </div>
            </template>

        </div>


    </div>
</template>



<style scoped module lang="scss">
@import './publicCard.module';
</style>