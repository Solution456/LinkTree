<script setup lang="ts">

</script>

<template>
    <div :class="$style.account">
        <div :class="$style.account__inner">
            Account
        </div>

    </div>
</template>


<style scoped module lang="scss">
.account {
    position: relative;
    height: 100%;
    margin-top: 2rem;

    &__inner {
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
        padding: 0 2rem;
    }
}
</style>