<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router';

import { useUserStore } from "@/stores/userStore";
import useAuthUser from "@/composables/user";
import { NAV_ITEMS, MenuItems } from '@/constants';


import NavItem from '@/components/layout/Header/Navigation/NavItem.vue'
import { Dropdown, DropdownItem } from '@/components/public/Dropdown'

const { isAuth } = storeToRefs(useUserStore())
const { userSignOut } = useAuthUser()
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
                            <NavItem v-for="item of NAV_ITEMS" :key="item.name" :item="item" />
                        </div>
                    </div>
                </div>
                <div v-if="isAuth" :class="$style.nav__actions">
                    <div :class="$style.nav__actions__box">
                        <Dropdown>
                            <template #dropdown-content>
                                <DropdownItem v-for="item of MenuItems.slice(0, -1)" :key="item.name">
                                    <div :class="$style['menu-item']">
                                        <div :class="$style['menu-icon']">
                                            <component :class="$style['menu-icon']" :is="item.icon" />
                                        </div>

                                        {{ item.name }}
                                    </div>
                                </DropdownItem>
                                <DropdownItem>
                                    <button @click="handleLogOut" :class="$style['menu-item']" class="menu-button">
                                        <div :class="$style['menu-icon']">
                                            <component :is="MenuItems.at(-1)?.icon" />
                                        </div>

                                        {{ MenuItems.at(-1)?.name }}
                                    </button>
                                </DropdownItem>
                            </template>
                        </Dropdown>

                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>


<style scoped module lang="scss">
@import './Navigation.module.scss';
</style>