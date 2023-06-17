<script setup lang="ts">
import { ref } from 'vue';


import Input from '../public/Input/Input.vue';
import styles from './AuthForm.module.scss'


const formValue = ref({
    email:'',
    password:'',
})

</script>

<template>
    <div :class="styles.auth">
        <div :class="styles.auth_inner">
            <div class="auth_container">
                <div :class="styles.auth_title">
                    <h1 class="title-2">Log in to your Linktree</h1>
                </div>
                <form class="auth_form">
                    <div>
                        <Input name="email" id="1" label="email" v-model="formValue.email"/>
                    </div>
                    <div>
                        <Input name="password" id="2" label="password" v-model="formValue.password" type="password"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

