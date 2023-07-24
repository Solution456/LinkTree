<script setup lang="ts">
type ButtonType = 'button' | 'submit'

interface ButtonProps {
    type?:ButtonType,
    disabled?:boolean,
}


const props = withDefaults(defineProps<ButtonProps>(),{
    type:'button',
    disabled:false
})

</script>

<template>
    <button :type="props.type" :disabled="disabled" :class="$style.button">
        <div :class="$style.button_content">
            <slot/>
        </div>
    </button>
</template>



<style scoped module lang="scss">
@import './Button.module.scss';
</style>