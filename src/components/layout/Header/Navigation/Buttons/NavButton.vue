<script setup lang="ts">



interface navButtonProps{
    variant: 'register' | 'login'
}


defineProps<navButtonProps>()


</script>




<template>
    <button class="nav__button">
        <div class="inner" :class="`nav__button_${variant}`">
            <span>
                <slot/>
            </span>
        </div>
    </button>
</template>


<style scoped lang="scss">
@import '@/assets/styles/variables';

.nav__button{
    padding: 0px;
    color: inherit;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;

    .inner{
        position: relative;
        z-index: 1;
        padding: 1.125rem 1.625rem 1.25rem;

        span{
            font-size: 1rem;
            font-weight: 400;
            letter-spacing: 0.01em;
            line-height: 1.5;
            font-family: $body-font;
        }

        
    }

    &_register{
        min-width: 0px;
        border-radius: 10000px;
        background-color: rgb(30,35,48);
        color: $text-white;

        &:hover{
            background-color: rgb(48, 53, 65);
        }
    }

    &_login{
        background-color: rgb(239,240,236);
        border-radius: $rounded;
        color: $text-primary-light;

        &:hover{
            background-color: rgba(0, 0, 0, 0.086);
        }
    }
}
</style>