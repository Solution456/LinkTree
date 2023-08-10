<script setup lang="ts">
import { ref } from 'vue';


const isShown = ref<boolean>(false)


const handleToggle = () => {
    isShown.value = !isShown.value
}

</script>

<template>
    <div :class="$style.dropdown">
        <div :class="$style.dropdown__button">
            <button @click="handleToggle" type="button">
                <slot name="button-content">Options</slot>
            </button>
        </div>

        <div v-if="isShown" :class="$style.dropdown__content">
            <ul>
                 <slot name="dropdown-content"/>
            </ul>
        </div>
    </div>
</template>


<style scoped module lang="scss">
@import '/src/assets/styles/_variables';
.dropdown {
    position: relative;
    display: inline-block;


    &__button{
        button{
            display: inline-flex;
            width: 100%;
            justify-content: center;
            border-radius: $rounded-md;
            background-color: white;
            padding: .5rem .75rem;
            font-size: .75rem;
            font-weight:500;
            cursor: pointer;
            

            &:hover{
                background-color: $gray-hover;
            }
            
        }
    }


    &__content{
        position: absolute;
        right: 0;
        z-index: 10;
        margin: .5rem;
        transform-origin: top right;
        border-radius: $rounded-md;
        width: 14rem;
        background-color: white;

        padding: .5rem 1.25rem;

        box-shadow: $shadow;    

        &:focus{
            outline: none;
        }
        ul{
            display: flex;
            flex-direction: column;
            padding: .5rem 0;
            row-gap: .5rem;
            
        }
    }


}

</style>