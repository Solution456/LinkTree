<script setup lang="ts">
import styles from './Input.module.scss'

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
    <div :class="styles.input">
        <div :class="styles.input_el">
            <div :class="styles.input_box">
                <input @input="inputHandler"  :required="props.required" :id="props.id" :name="props.name" :type="props.type">
                <label for="test">
                    {{props.label}}
                </label>
            </div>
        </div>
        <div class="input_error"></div>
    </div>
</template>


