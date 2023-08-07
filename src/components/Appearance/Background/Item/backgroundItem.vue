<script setup lang="ts">
import { computed } from 'vue';

import type { backgroundItem } from '@/constants';


interface backgroundItemProps extends backgroundItem {
    isActive: boolean

}

const props = defineProps<backgroundItemProps>()


const bgGradient = computed(() => {
    return props.name === 'Gradient'
})

const bgMedia = computed(() => {
    return props.name === 'Image' || props.name === 'Video'
})
</script>

<template>
    <button :class="[$style['background-item'], props.isActive ? $style['background-item--active'] : '']">
        <span :class="$style.cover">
            <span :class="$style.cover__inner">
                <span :class="$style['background-wrapper']">
                    <div :class="[
                        $style.background,
                        bgGradient ? $style['--gradient'] : '',
                        bgMedia ? $style['--media']: ''
                        ]"
                        >
                        <svg v-if="bgMedia" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><rect width="15" height="15" x=".5" y=".5" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" rx="3"></rect> <circle cx="11.5" cy="4.5" r="2" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></circle> <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M10.123 13.142L6.429 7.5l-3.694 5.642"></path> <path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M9.18 11.702L10.621 9.5l2.385 3.642"></path> </svg>
                    </div>
                </span>
            </span>
        </span>
        <p>
            {{ props.name }}
        </p>

    </button>
</template>



<style lang="scss" module scoped>
@import './backgroundItem.module.scss'
</style>