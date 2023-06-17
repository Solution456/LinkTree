<script setup lang="ts">
import styles from "./Button.module.scss"

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
    <button :type="props.type" :disabled="disabled" :class="styles.button">
        <div :class="styles.button_content">
            <slot/>
        </div>
    </button>
</template>



<style scoped>
button{
    cursor: pointer;
}
</style>