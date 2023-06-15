<script setup lang="ts">
import styles from './AuthForm.module.scss'

</script>

<template>
    <div :class="styles.auth">
        <div :class="styles.auth_inner">
            <div class="auth_container">
                <div :class="styles.auth_title">
                    <h1 class="title-2">Log in to your Linktree</h1>
                </div>
                <form class="auth_form">
                    <div class="input">
                        <div class="input_control">
                            <div>
                                <div class="input_el">
                                    <div class="input_container">
                                        <input type="text">
                                        <label for="">
                                            LABEL
                                        </label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="input_error"></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
@import '/src/assets/styles/variables';

.input {
    &_control {
        display: block;
        border-radius: $rounded;
        transition: margin-bottom cubic-bezier(0, 0, .2, 1) 75ms;
    }

    &_el {
        display: flex;
        border-radius: $rounded;

    }

    &_container {
        position: relative;
        flex-grow: 1;

        input {
            display: block;
            width: 100%;
            border: none;
            border-radius: $rounded-md;
            background-color: $bg-light;
            padding: 1rem;
            outline: 2px solid #0000;
            outline-offset: 2px;

            &:focus~label,
            &:not(&:placeholder-shown)~label{
                transform: scale(.85) translateY(-.75rem) translateX(.15rem);
            }

        }

        label {
            overflow: hidden;
            text-overflow: ellipsis;
            position: absolute;
            top: 13px;
            left: 1rem;
            max-width: calc(100% - 50px);
            transform-origin: 0 0;
            transition: all cubic-bezier(.4, 0, .2, 1) .15s;
        }
    }
}
</style>