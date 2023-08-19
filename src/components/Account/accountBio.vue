<script setup lang="ts">

import { computed, ref, watch } from 'vue';

import publicCard from '@/components/public/Card/publicCard.vue'
import Input from '@/components/public/Input/Input.vue';
import Button from '@/components/public/Button/Button.vue';

import { useUserStore } from '@/stores/userStore'
import { storeToRefs } from 'pinia';



const userStore = useUserStore()
let copyFormData = {username:''}
const { isLoading } = storeToRefs(userStore)

const username = computed(() => {
    if (userStore.User.UserDetails?.username)
        return userStore.User.UserDetails.username
    return ''
})

const formData = ref({
    username: '' ,
})



const editState = ref(false)


const handleUpdateEditState = () => {
    if (!editState.value) {
        editState.value = !editState.value
        return
    }

    formData.value.username = copyFormData?.username

    editState.value = false
}

const handleApprove = () => {
    userStore.updateUserData(formData.value.username)
    editState.value = false
}

watch(() => username.value,
    (value) => {
        formData.value.username = value

        copyFormData = Object.assign({}, formData.value)
    }
)


</script>


<template>
    <div>
        <publicCard>
            <template #title>
                My bio
            </template>
            <template #content>
                <div :class="$style['account-bio__form']">
                    <div :class="$style.wrapper">
                        <Input :disabled="!editState || isLoading" name="username" id="1" label="username"
                            v-model="formData.username" />
                    </div>
                </div>
            </template>
        </publicCard>


        <div class="mt-2" :class="$style.actions">
            <div>
                <Button :isLoading="isLoading" @click="handleUpdateEditState"
                    :class="editState ? $style.cancel__button : ''">
                    <template v-if="!editState">
                        Edit Bio
                    </template>

                    <template v-else>
                        Cancel Edit
                    </template>
                </Button>
            </div>

            <div v-if="editState">
                <Button @click="handleApprove" :isLoading="isLoading" :class="$style.approve__button">
                    Approve
                </Button>
            </div>
        </div>
    </div>
</template>


<style scoped module lang="scss">
@import '/src/assets/styles/_variables';

.account-bio {

    &__form {

        margin: 2.25rem 0;

        .wrapper {
            display: flex;
            flex-direction: column;
            gap: .75rem;
        }
    }
}

.actions {
    display: flex;
    align-items: center;
    gap: 1rem;

}

.approve__button {
    background-color: $success;

    &:hover {
        background-color: $success-hover;
    }
}

.cancel__button {
    background-color: $warn;

    &:hover {
        background-color: $warn-hover;
    }
}
</style>