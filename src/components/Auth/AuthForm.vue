<script setup lang="ts">
import { computed, ref } from 'vue';


import Input from '@/components/public/Input/Input.vue';
import Button from '@/components/public/Button/Button.vue';


import {useAuthUser} from '@/composables/user';
import { required, useValidator, email } from '@/composables/Validate';

import styles from './AuthForm.module.scss'



export type typeState = 'login' | 'register'

interface authFormProps {
    state: typeState
}

const props = defineProps<authFormProps>()
const emit = defineEmits<{
    (e: 'updateState', value: typeState): void
}>()


const { userSignIn, userSignUp, errors, loading } = useAuthUser()


const formValue = ref({
    email: '',
    password: '',
})



const disabledState = computed(() => {
    return Boolean(formValue.value.email && formValue.value.password)
})

const rules = computed(() => {
    return {
        email: [required, email],
        password: required,
    }
})
const { error, isValid } = useValidator(formValue, rules)

const handleSignIn = async () => {
    if (isValid()) {
        await userSignIn(formValue.value.email, formValue.value.password)
        if (!errors.value) {
            
        }
    }

}

const handleSignUp = async () => {
    if (isValid()) {
        await userSignUp(formValue.value.email, formValue.value.password)
        formValue.value = {
            email: '',
            password: ''
        }
        emit('updateState', 'login')
    }
}

</script>

<template>
    <div :class="styles.auth">
        <div :class="styles.auth_inner">
            <div v-if="props.state === 'login'" class="auth_container">
                <div :class="styles.auth_title">
                    <h1 class="title-2">Log in to your Linktree</h1>
                </div>
                <form @submit.prevent="handleSignIn" class="auth_form">
                    <div class="mb-2">
                        <Input :error="error('email')" name="email" id="1" :key="'email'" label="email" v-model="formValue.email" />
                    </div>
                    <div class="mb-4">
                        <Input name="password" :error="error('password')" :key="'password'" id="2" label="password"
                            v-model="formValue.password" type="password" />
                    </div>
                    <div class="mb-6">
                        <Button :isLoading="loading" :disabled="!disabledState || loading" type="submit">
                            Log In
                        </Button>
                    </div>

                    <div :class="styles.auth_footer">
                        <p class="sub-title-1">
                            Don't have an account? <a @click="$emit('updateState', 'register')">Sign Up</a>
                        </p>
                    </div>
                </form>
            </div>

            <div v-else class="auth_container">
                <div :class="styles.auth_title">
                    <h1 class="title-2">Create your account</h1>
                </div>
                <form @submit.prevent="handleSignUp" class="auth_form">
                    <div class="mb-2">
                        <Input :error="error('email')" name="email" id="3" :key="'email'" label="email" v-model="formValue.email" />
                    </div>
                    <div class="mb-8">
                        <Input :error="error('password')" name="password" id="4" :key="'password'" label="password"
                            v-model="formValue.password" type="password" />
                    </div>
                    <div class="mb-8">
                        <p class="sub-title-1 ">
                            By clicking <span class="title-1">Create account</span>, you agree to Linktree's Terms and
                            Conditions and confirm you have read our Privacy Notice. You may receive offers, news and
                            updates from us.
                        </p>
                    </div>

                    <div class="mb-6">
                        <Button :isLoading="loading" :disabled="!disabledState || loading" type="submit">
                            Create account
                        </Button>
                    </div>

                    <div :class="styles.auth_footer">
                        <p class="sub-title-1">
                            Already have an account? <a @click="$emit('updateState', 'login')">Log in</a>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

