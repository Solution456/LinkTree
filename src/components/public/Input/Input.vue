<script setup lang="ts">

type InputType = 'text' | 'password' | 'file'

interface InputProps {
    name:string,
    id:string,
    type?:InputType,
    label:string,
    required?:boolean,
    disabled?:boolean,
    modelValue:string
}

const props = withDefaults(defineProps<InputProps>(),{
    type:'text',
    required:true
})
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const inputHandler = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value)


}
</script>


<template>
    <div :class="$style.input">
        <div :class="$style.input_el">
            <div :class="$style.input_box">
                <input @input="inputHandler"  :required="props.required" :id="props.id" :name="props.name" :type="props.type">
                <label :for="props.id">
                    {{props.label}}
                </label>
            </div>
        </div>
        <div class="input_error"></div>
    </div>
</template>

<style scoped module lang="scss">
@import './Input.module.scss';
</style>


