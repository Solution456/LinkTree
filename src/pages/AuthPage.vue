<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import {computed } from 'vue';


import AuthForm from '@/components/Auth/AuthForm.vue';


import type { typeState } from '@/components/Auth/AuthForm.vue';


const route = useRoute()
const router = useRouter()

const stateAuth = computed(() => route.query.state as typeState || 'register')

const setAuthState = (s:typeState):void => {
    router.replace({ query: {state: s}})

}

</script>

<template>
    <div :class="$style.authPage">
        <AuthForm @updateState="setAuthState" :state="stateAuth"/>
       
    </div>
</template>


<style scoped module lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/breakpoints';
.authPage{
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2.5rem;


    @include md-u{
        width: 650px;
    }

}
</style>


