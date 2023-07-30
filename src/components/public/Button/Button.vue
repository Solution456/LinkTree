<script setup lang="ts">

import Spinner from '@/components/public/Spinner/Spinner.vue';

type ButtonType = 'button' | 'submit'

interface ButtonProps {
    type?: ButtonType,
    disabled?: boolean,
    isLoading?: boolean
}


const props = withDefaults(defineProps<ButtonProps>(), {
    type: 'button',
    disabled: false
})

</script>

<template>
    <button :type="props.type" :disabled="props.disabled || props.isLoading" :class="$style.button">

        <template v-if="props.isLoading">
            <Spinner />
            <span :class="$style.loading">loading</span>
        </template>

        <template v-else>
            <div :class="$style.button_content">
                <slot />
            </div>
        </template>



    </button>
</template>



<style scoped module lang="scss">
@import './Button.module.scss';
</style>