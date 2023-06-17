<script setup lang="ts">

import { ChevronLeftIcon } from '@heroicons/vue/24/outline';

import styles from './Modal.module.scss'
import { ref } from 'vue';


interface ModalProps {
    fullscreen?: boolean
    transition?: 'default' | 'bounce' | 'vodal-zoom'
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
            <div @click="openClose" v-if="isModalShown" :class="[styles.modal,
            isModalShown ? styles.modal_show : ','
            ]
            ">
                <div @click.stop :class="styles.modal__inner">
                    <div :class="styles.card">
                        <div :class="styles.card__inner">
                            <div :class="styles.card__header">
                                <button @click="openClose" :class="styles.modal__close">
                                    <ChevronLeftIcon />
                                </button>
                                <h5>
                                    <slot name="header" />

                                </h5>

                            </div>

                            <div :class="styles.card__body">
                                <slot name="body" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>


<style scoped>
@-webkit-keyframes vodal-zoom-enter {
    from {
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
}

@keyframes vodal-zoom-enter {
    from {
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
}

.vodal-zoom-enter-active .modal__inner{
    -webkit-animation: vodal-zoom-enter both cubic-bezier(0.4, 0, 0, 1.5);
    animation: vodal-zoom-enter both cubic-bezier(0.4, 0, 0, 1.5);
}

@-webkit-keyframes vodal-zoom-leave {
    to {
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
}

@keyframes vodal-zoom-leave {
    to {
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
    }
}

.vodal-zoom-leave-active .modal__inner{
    -webkit-animation: vodal-zoom-leave both;
    animation: vodal-zoom-leave both;
}
</style>

