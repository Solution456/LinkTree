<script setup lang="ts">

interface navButtonProps {
    variant: 'register' | 'login'
}


defineProps<navButtonProps>()


</script>


<template>
    <button :class="$style.nav__button">
        <div class="" :class="[variant === 'login' ? $style.nav__button_login: $style.nav__button_register, $style.inner]">
            <span>
                <slot />
            </span>
        </div>
    </button>
</template>


<style scoped module lang="scss">
@import './NavButton.module.scss';
</style>
