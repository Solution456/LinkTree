<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

import Button from '@/components/public/Button/Button.vue';
import Input from '@/components/public/Input/Input.vue';

import { required, useValidator } from '@/composables/Validate';

import { useUserStore } from '@/stores/userStore';
import { clone } from '@/utils/clone';



const userStore = useUserStore()

const { User, isLoading } = storeToRefs(userStore)

const userName = computed(() => {
    return User.value.UserDetails?.username ? User.value.UserDetails?.username : ''
})

const formData = ref({
    username: clone(userName.value)
})



const rules = computed(() => {
    return {
        username: [required],
    }
})
const { error, isValid } = useValidator(formData, rules)


watch(
    () => formData.value.username,
    () => {
        isValid()
    }
)

const disabledState = computed(() => {
    if (userName.value === formData.value.username)
        return true


    return !isValid()
})


const submitForm = () => {
    if (isValid()) {
        userStore.updateUserData(formData.value.username)
    }

}


</script>

<template>
    <div>
        <form @submit.prevent="submitForm" autocomplete="off" :class="$style['account-actions__form']">
            <Input name="username" id="1" label="username" v-model="formData.username" :error="error('username')"
                autocomplete="off" />

            <div>
                <p class="body-sm mb-4">Note: changing your username will also change your QR code and URL</p>
                <Button type="submit" :isLoading="isLoading" :disabled="disabledState">Change username</Button>
            </div>
        </form>


    </div>
</template>


<style scoped module lang="scss">
.account-actions__form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>