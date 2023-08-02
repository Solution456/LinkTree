<script setup lang="ts">

interface backgroundItemProps {
    isActive: boolean
    bgName:string
}

const props = defineProps<backgroundItemProps>()
</script>

<template>
    <button :class="[$style['background-item'], props.isActive ? $style['background-item--active'] : '']">
        <span :class="$style.cover">
            <span :class="$style.cover__inner">
                <span :class="$style['background-wrapper']">
                    <div :class="$style.background"></div>
                </span>
            </span>
        </span>
        <p>
            {{props.bgName}}
        </p>

    </button>
</template>



<style lang="scss" module scoped>
@import './backgroundItem.module.scss'
</style>