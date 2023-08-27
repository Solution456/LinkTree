<script setup lang="ts">

import { ref } from 'vue';


import Button from '@/components/public/Button/Button.vue';
import Input from '@/components/public/Input/Input.vue';
import UploadButton from '@/components/public/Upload/uploadButton.vue';
import publicCard from '@/components/public/Card/publicCard.vue'

import { useUserStore } from '@/stores/userStore';


const userStore = useUserStore()

const tempData = ref({
    profileTitle: '@pinkStorm',
    profileBio: '',
})

const image = ref<File>();


const addImage = (file: File) => {
    image.value = file
}

const removeImage = () => {
    image.value = undefined
}

</script>


<template>
    <div :class="$style.appearance__profile">
        <publicCard>
            <template #title>
                Profife
            </template>
            <template #content>
                <div :class="$style.profile__info">
                    <div :class="$style.profile__avatar">
                        <div v-if="userStore.User.UserDetails?.avatar_url" :class="$style.wrapper">
                            <img :src="userStore.User.UserDetails.avatar_url" alt="" :class="$style.avatar">
                        </div>

                        <div v-else :class="$style['temp-avatar']">
                            <span>
                                @
                            </span>
                        </div>
                    </div>

                    <div :class="$style.profile__actions">
                        <div class="mb-2">
                            <UploadButton 
                                :extensions="['jpg', 'png']"
                                isSingle
                                :file="image"
                                @add="addImage"
                                @remove="removeImage"
                            />
                        </div>
                        <Button disabled>Remove</Button>
                    </div>
                </div>
                <div :class="$style.profile__form">
                    <div :class="$style.wrapper">
                        <Input  name="Profile-title" id="1" label="Profile Title" v-model="tempData.profileTitle" />
                        <Input  name="Profile-bio" id="2" label="Bio" v-model="tempData.profileBio" />
                    </div>
                </div>
            </template>
        </publicCard>

    </div>
</template>

<style scoped module lang="scss">
@import './appearance.module';
</style>