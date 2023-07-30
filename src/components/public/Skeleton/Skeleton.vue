<script setup lang="ts">


interface skeletonProps {
    rows?: number
    loading: boolean
    count?: number
    bg?: boolean
}

const props = withDefaults(defineProps<skeletonProps>(), {
    count: 1,
    rows: 3,
    bg: false
})

</script>

<template>
    <template v-if="props.loading">
        <template v-for="i in props.count" :key="i">
            <div :class="[props.bg ? $style.skeleton : '']" v-bind="$attrs">
                <slot v-if="props.loading" :key="i" name="template">
                </slot>
            </div>
        </template>
    </template>

    <template v-else>
        <slot v-bind="$attrs" />
    </template>
</template>



<style scoped module lang="scss">
@import '/src/assets/styles/variables';

@keyframes skeleton-loading {
    0% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.skeleton {
    background: linear-gradient(90deg, rgba(190, 190, 190, .2) 25%, rgba(129, 129, 129, .24) 37%, rgba(190, 190, 190, .2) 63%);
    background-size: 400% 100%;
    padding: 1rem;
    border-radius: $rounded;
    animation: skeleton-loading 1.4s ease infinite;
}
</style>