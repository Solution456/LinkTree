<script setup lang="ts">


</script>

<template>
    <div :class="$style.auth">
        <main :class="$style.auth__container">

            <slot />

        </main>

    </div>
</template>


<style module lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/breakpoints';

.auth {
    display: flex;
    position: relative;

    &__container {
        position: relative;
        display: flex;
        width: 100%;
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        @include md-u{
            padding: 0 20px;
        }
    }
}
</style>





