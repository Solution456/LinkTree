<script setup lang="ts">
import {ElColorPicker} from 'element-plus'
import Input from '@/components/public/Input/Input.vue';


interface ColorPickerProps {
    modelValue: string | undefined
}

const props = defineProps<ColorPickerProps>()


const emit = defineEmits<{
    (e: 'update:modelValue', value: string | null): void
}>()


const handleColorChange = (event:string | null) => {
    emit('update:modelValue',event)
}
</script>


<template>
    <div :class="$style.colorPicker">
        <el-color-picker v-model="props.modelValue" @change="(e) => handleColorChange(e)" size="large"/>
        <Input disabled v-model="props.modelValue" id="color" name="color" label="color"/>
    </div>
</template>


<style scoped module lang="scss">
@import './ColorPicker.module.scss'
</style>


