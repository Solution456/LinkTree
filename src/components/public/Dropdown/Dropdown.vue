<script setup lang="ts">
import { ref } from 'vue';

import { onClickOutside } from '@vueuse/core';


const isShown = ref<boolean>(false)
const target = ref<HTMLDivElement | null>(null)

onClickOutside(target, () => handleToggle())

const handleToggle = () => {
    isShown.value = !isShown.value
}

</script>

<template>
    <div :class="$style.dropdown">
        <div :class="$style.dropdown__button">
            <template v-if="$slots['button-content-icon']">
                <button @click="handleToggle" :class="$style['dropdown__button-icon']" type="button">
                    <slot name="button-content-icon">Options</slot>
                </button>
            </template>

            <template v-if="$slots['button-content']">
                <button @click="handleToggle" type="button" :class="$style['dropdown__button-main']">
                    <slot name="button-content">Options</slot>
                </button>
            </template>

        </div>
        <Transition name="bounce">
            <div ref="target" v-if="isShown" :class="$style.dropdown__content">
                <ul>
                    <slot :isActive="isShown" name="dropdown-content" />
                </ul>
            </div>
        </Transition>

    </div>
</template>


<style scoped module lang="scss">
@import './Dropdown.module.scss';
</style>

