<script setup lang="ts">

import { ref } from 'vue';


import Button from '@/components/public/Button/Button.vue';
import Input from '@/components/public/Input/Input.vue';
import publicCard from '@/components/Appearance/Public/publicCard.vue'


const tempData = ref({
    profileTitle: '@pinkStorm',
    profileBio: '',
})

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
                        <div v-if="false" :class="$style.wrapper">
                            <img src="" alt="" :class="$style.avatar">
                        </div>

                        <div v-else :class="$style['temp-avatar']">
                            <span>
                                @
                            </span>
                        </div>
                    </div>

                    <div :class="$style.profile__actions">
                        <div class="mb-2">
                            <Button>Upload avatar</Button>
                        </div>
                        <Button disabled>Remove</Button>
                    </div>
                </div>
                <div :class="$style.profile__form">
                    <div :class="$style.wrapper">
                        <Input value="" name="Profile-title" id="1" label="Profile Title" v-model="tempData.profileTitle" />
                        <Input value="" name="Profile-bio" id="2" label="Bio" v-model="tempData.profileBio" />
                    </div>
                </div>
            </template>
        </publicCard>

    </div>
</template>

<style scoped module lang="scss">
@import './appearance.module';
</style>