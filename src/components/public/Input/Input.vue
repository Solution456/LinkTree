<script setup lang="ts">

type InputType = 'text' | 'password' | 'file'

interface InputProps {
    name: string,
    id: string,
    type?: InputType,
    label: string,
    required?: boolean,
    disabled?: boolean,
    error?: string | false
    modelValue: any
}

withDefaults(defineProps<InputProps>(), {
    type: 'text',
    required: true
})
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
}>()

const inputHandler = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>


<template>
    <div>
        <div :class="$style.input">
            <div :class="$style.input__el">
                <div :class="$style.input__box">
                    <input @input="inputHandler" :value='modelValue' :required="required" :id="id" :name="name"
                        :type="type" :disabled="disabled">
                    <label :for="id">
                        {{ label }}
                    </label>
                </div>
            </div>
        </div>
        <div v-show="!!error" :class="$style.input__error">
            {{ error }}
        </div>
    </div>
</template>

<style scoped module lang="scss">
@import './Input.module.scss';
</style>


