<script setup lang="ts">
import NavButton from './Buttons/NavButton.vue';

</script>



<template>
    <nav class="nav">
        <div class="nav__box">
            <div class="nav__inner nav_desktop">
                <div class="nav__items">
                    <div class="nav__items_inner">
                        <a href="" class="logo"></a>
                        <div class="nav__list">
                            <div class="nav__item">
                                <a class="nav__item__link" href="">
                                    <div class="nav__item__box">
                                        <span>
                                            Templates
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div class="nav__item">
                                <a class="nav__item__link" href="">
                                    <div class="nav__item__box">
                                        <span>
                                            Templates
                                        </span>
                                    </div>
                                </a>
                            </div>

                            <div class="nav__item">
                                <a class="nav__item__link" href="">
                                    <div class="nav__item__box">
                                        <span>
                                            Templates
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav__actions">
                    <div class="nav__actions__box">
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


<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/breakpoints';
.nav {
    min-width: 0px;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1rem;
    flex: 1 1 0%;
    width: 100%;

    @include lg-u {
        max-width: 1440px;
        padding-left: 6rem;
        padding-right: 6rem;
    }

    @include md-u {
        max-width: 1248px;
        padding-left: 3rem;
        padding-right: 3rem;
        padding-top: 3rem;
    }

    @include sm-u {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 1rem;
    }

    &__box {
        min-width: 0px;
        margin-left: auto;
        margin-right: auto;
        padding: 0.5rem;
        background-color: $text-white;
        border-radius: 10000px;
        border-width: 1px;
        border-color: rgba(0, 0, 0, 0.08);
        border-style: solid;
        position: relative;

        z-index: 2;

        @include md-u {
            padding: 0.75rem;
        }

        @include sm-u {
            margin-left: -1rem;
            margin-right: -1rem;
            padding: 0.5rem;
        }
    }

    &__inner {
        display: flex;
        box-sizing: border-box;
        min-width: 0px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    &__items {
        min-width: 0px;
        padding: 0.5rem;

        @include lg-u {
            padding-left: 2rem;
        }

        &_inner {
            display: flex;
            box-sizing: border-box;
            min-width: 0px;
            align-items: center;
        }
    }

    &__list {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        min-width: 0px;
    }

    &__item {
        min-width: 0px;
        position: relative;

        &__link {
            text-decoration: none;
        }

        &__box {
            min-width: 0px;
            padding: 0.75rem 1rem;
        }
    }

    &__actions {
        min-width: 0px;

        &__box{
            display: flex;
            gap: .5rem;
            box-sizing: border-box;
        }
    }


}
</style>