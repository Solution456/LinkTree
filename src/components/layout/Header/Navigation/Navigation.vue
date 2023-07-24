<script setup lang="ts">
import NavButton from '@/components/layout/Header/Navigation/Buttons/NavButton.vue'
import NavItem from '@/components/layout/Header/Navigation/NavItem.vue'


</script>



<template>
    <nav :class="$style.nav">
        <div :class="$style.nav__box">
            <div :class="[$style.nav__inner,$style.nav_desktop]">
                <div :class="$style.nav__items">
                    <div :class="$style.nav__items_inner">
                        <a href="" class="logo"></a>
                        <div :class="$style.nav__list">
                            <NavItem>
                                Templates
                            </NavItem>
                        </div>
                    </div>
                </div>
                <div :class="$style.nav__actions">
                    <div :class="$style.nav__actions__box">
                        <NavButton variant="login">
                           Log in
                        </NavButton>
                        <NavButton variant="register">
                            Sign up free
                        </NavButton>
            
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>


<style scoped module lang="scss">

@import './Navigation.module.scss';

</style>