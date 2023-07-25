<script setup lang="ts">
import {storeToRefs} from 'pinia'
import { useRouter } from 'vue-router';

import { useUserStore } from "@/stores/userStore";
import useAuthUser from "@/composables/user";
import { NAV_ITEMS } from '@/constants';


import Button from "@/components/public/Button/Button.vue";
import NavItem from '@/components/layout/Header/Navigation/NavItem.vue'


const {isAuth} = storeToRefs(useUserStore())
const {userSignOut} = useAuthUser()
const router = useRouter()

const handleLogOut = async () => {
    await userSignOut()

    router.push({
        name: 'Auth'
    })
}


</script>



<template>
    <nav :class="$style.nav">
        <div :class="$style.nav__box">
            <div :class="[$style.nav__inner, $style.nav_desktop]">
                <div :class="$style.nav__items">
                    <div :class="$style.nav__items_inner">
                        <a href="" class="logo"></a>
                        <div :class="$style.nav__list">
                            <NavItem v-for="item of NAV_ITEMS" :key="item.name">
                                <RouterLink :to="item.path">
                                    {{item.name}}
                                </RouterLink>
                            </NavItem>
                        </div>
                    </div>
                </div>
                <div v-if="isAuth" :class="$style.nav__actions">
                    <div :class="$style.nav__actions__box">
                        <Button @click="handleLogOut">
                            Выход
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>


<style scoped module lang="scss">
@import './Navigation.module.scss';
</style>