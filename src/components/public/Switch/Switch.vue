<script setup lang="ts">
import { computed } from 'vue';

// import styles from './Switch.module'

interface switchProps {
    id:string | number
    modelValue: boolean
    label?:string
}

const props = defineProps<switchProps>()

const emit = defineEmits<{
    (e: 'update:modelValue', value:boolean):void
}>()

const computedModel = computed({
    get() {
        return props.modelValue
    },
    set(value: boolean) {
        emit('update:modelValue',value)
    }
})


</script>

<template>
    <label :for="`switch-${props.id}`" class="switch">
        <input v-model="computedModel" :id="`switch-${props.id}`" is="switch" type="checkbox" role="switch">
        <span class="track">
            <span class="handle"></span>
        </span>
    </label>
</template>

<style scoped lang="scss">
.switch {
    --handle-diameter: 30px;
    --handle-color: #fff;
    --handle-border-radius: 50%;
    --handle-distance: 40px;
    --track-color: #ccc;
    --track-width: 70px;
    --track-height: 30px;
    --track-active-color: #21f380;
    --track-border-width: 0px;
    --track-border-radius: 34px;

    position: relative;
    display: inline-block;
    width: var(--track-width);
    height: var(--track-height);

    input {
        display: none;
    }

    .track {
        display: flex;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--track-color);
        cursor: pointer;
        border: var(--track-border-width) solid var(--track-color);
        border-radius: var(--track-border-radius);
        transition: .4s;

        .handle {
            display: flex;
            width: var(--handle-diameter);
            height: var(--handle-diameter);
            background-color: var(--handle-color);
            border-radius: var(--handle-border-radius);
            transition: .4s;
        }
    }

    input:checked+.track {
        background-color: var(--track-active-color);
        border: var(--track-border-width) solid var(--track-active-color);
    }

    input:focus+.track {
        box-shadow: 0 0 1px var(--track-active-color);
    }

    input:checked+.track>.handle {
        transform: translateX(var(--handle-distance));
    }
}
</style>



