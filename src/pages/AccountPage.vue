<script setup lang="ts">


import accountBio from '@/components/Account/accountBio.vue'




</script>

<template>
    <section :class="$style.account">
        <div :class="$style.account__inner">
            <div :class="$style.account__title">
                <h2 class="title-2">My account</h2>
            </div>

            <accountBio />

            

        </div>

    </section>
</template>


<style scoped module lang="scss">
.account {
    position: relative;
    height: 100%;
    margin-top: 2rem;

    &__inner {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    &__title {
        width: 100%;
        text-align: center;
    }
}
</style>