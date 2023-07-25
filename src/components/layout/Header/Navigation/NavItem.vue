<script setup lang="ts">
import { useRoute } from 'vue-router';

import { NavItem } from '@/@types/types';
import { computed } from 'vue';

const props = defineProps<{
    item: NavItem
}>()


const route = useRoute()
const isActive = computed(() => {
    return route.name?.toString().toLowerCase() === props.item.name
})


</script>

<template>
    <div :class="[$style.nav__item, isActive ? $style.active : '']">
        <RouterLink :to="props.item.path" :class="$style.nav__item__link" href="">
            <div :class="$style.nav__item__box">
                <component style="height: 30x; width: 30px; display: block;" :is="props.item.icon" />
                {{ props.item.name }}
            </div>
        </RouterLink>
    </div>
</template>


<style scoped module lang="scss">
@import './NavItem.module';


</style>