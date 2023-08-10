<script setup lang="ts">

</script>


<template>
    <li :class="$style.dropdown__item">
        <span>
            <slot>label</slot>
        </span>
    </li>
</template>


<style scoped module lang="scss">
.dropdown__item {
    cursor: pointer;

    &>span {
        display: flex;
        align-items: center;
        position: relative;
        padding: 1rem;

        transition: background-color cubic-bezier(0, 0, 0.2, 1) .75s;
    }

    &>span:hover {
        background-color: rgb(246, 247, 245);
    }

}

</style>