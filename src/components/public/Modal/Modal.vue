<script setup lang="ts">

import { ChevronLeftIcon } from '@heroicons/vue/24/outline';

import { ref } from 'vue';


interface ModalProps {
    fullscreen?: boolean
    transition?: 'default' | 'bounce'
}


const props = withDefaults(defineProps<ModalProps>(), {
    fullscreen: false,
    transition: 'default'
})

const isModalShown = ref(false)

const openClose = () => {
    isModalShown.value = !isModalShown.value
    if (isModalShown.value) {
        document.body.classList.add('overflow-hidden')
    } else {
        document.body.classList.remove('overflow-hidden')
    }
}


defineExpose({
    openClose
})
</script>


<template>
    <Teleport to="body">
        <Transition :name="props.transition">
            <div @click="openClose" v-if="isModalShown" :class="[$style.modal,
            isModalShown ? $style.modal_show : ','
            ]
            ">
                <div @click.stop class="modal__inner" :class="$style.modal__inner">
                    <div :class="$style.card">
                        <div :class="$style.card__inner">
                            <div :class="$style.card__header">
                                <button @click="openClose" :class="$style.modal__close">
                                    <ChevronLeftIcon />
                                </button>
                                <h5>
                                    <slot name="header" />

                                </h5>

                            </div>

                            <div :class="$style.card__body">
                                <slot name="body" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>


<style scoped module lang="scss">
@import './Modal.module.scss';
</style>


<style scoped>
.bounce-enter-active .modal__inner {
    animation: bounce-in 0.5s;
}

.bounce-leave-active .modal__inner {
    animation: bounce-in 0.5s reverse;
}



.default-enter-active .modal__inner,
.default-leave-active .modal__inner {
    transition: all 0.3s ease-in-out;
}

.default-enter-from .modal__inner,
.default-leave-to .modal__inner {
    transform: translateX(30px);
    opacity: 0;
}




@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
}
</style>

