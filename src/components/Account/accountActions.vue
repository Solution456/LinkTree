<script setup lang="ts">

import { storeToRefs } from 'pinia';

import { useUserStore } from '@/stores/userStore';

import publicCard from '@/components/public/Card/publicCard.vue';
import Button from '@/components/public/Button/Button.vue';

const emit = defineEmits<{
    (e: 'openModal'):void
}>()

const { User } = storeToRefs(useUserStore())





</script>

<template>
    <div>
        <publicCard>
            <template #title>
                Account actions for {{ User.UserDetails?.username }}
            </template>

            <template #content>
                <div :class="$style['account-actions']">
                    <div :class="$style['account-actions__inner']">
                        <Button @click="emit('openModal')">Change username</Button>
                        <Button>Reset password</Button>
                    </div>
                </div>
            </template>
        </publicCard>
    </div>
</template>



<style scoped module lang="scss">
@import '/src/assets/styles/variables.scss';
@import '/src/assets/styles/breakpoints';


.account-actions {


    &__inner {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;


        @include sm-u {
            width: 33%;
            flex-direction: row;
        }
    }
}
</style>