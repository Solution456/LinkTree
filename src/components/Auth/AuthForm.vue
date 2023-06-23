<script setup lang="ts">
import { computed, ref } from 'vue';


import Input from '@/components/public/Input/Input.vue';
import Button from '@/components/public/Button/Button.vue';


import useAuthUser from '@/composables/user';

import styles from './AuthForm.module.scss'



export type typeState = 'login' | 'register'

interface authFormProps {
    state: typeState
}

const props = defineProps<authFormProps>()
defineEmits<{
    (e: 'updateState', value: typeState): void
}>()

const {userSignIn, userSignUp} = useAuthUser()

const formValue = ref({
    email:'',
    password:'',
})


const handleSignIn = async ()=> {
    await userSignIn(formValue.value.email,formValue.value.password)
}

const handleSignUp = async ()=> {
    await userSignUp(formValue.value.email,formValue.value.password)
}
const disabledState = computed(() => {
    return Boolean(formValue.value.email && formValue.value.password)
})

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
                        <Input name="email" id="1" label="email" v-model="formValue.email"/>
                    </div>
                    <div class="mb-4">
                        <Input name="password" id="2" label="password" v-model="formValue.password" type="password"/>
                    </div>
                    <div class="mb-6">
                        <Button :disabled="!disabledState" type="submit">
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
                        <Input name="email" id="1" label="email" v-model="formValue.email"/>
                    </div>
                    <div class="mb-8">
                        <Input name="password" id="2" label="password" v-model="formValue.password" type="password"/>
                    </div>
                    <div class="mb-8">
                        <p class="sub-title-1 ">
                            By clicking <span class="title-1">Create account</span>, you agree to Linktree's Terms and Conditions and confirm you have read our Privacy Notice. You may receive offers, news and updates from us.
                        </p>
                    </div>
                    
                    <div class="mb-6">
                        <Button :disabled="!disabledState" type="submit">
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

