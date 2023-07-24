<script setup lang="ts">
import { ref } from 'vue';

import { TrashIcon } from '@heroicons/vue/24/outline';

import IconButton from '@/components/public/Button/IconButton.vue';
import Switch from '@/components/public/Switch/Switch.vue'


import type {linkItem} from '@/@types/types'


interface linkDetailsProps {
    link: linkItem
}

defineProps<linkDetailsProps>()

const tempStatus = ref(false)

</script>


<template>
    <div :class="$style.linkDetails">
        <div :class="$style.linkDetails_head">
            <IconButton>
                <template #icon>
                    <TrashIcon/>
                </template>
            </IconButton>
            <div class="status">
                <Switch v-model:model-value="tempStatus" :id="link.id"/>
            </div>
        </div>
        <div :class="$style.linkDetails_content">
            <h2 class="title-2 mb-4">{{ link.title }}</h2>
            <p class="sub-title-1">
                <a :href="link.path" target="_blank">{{ link.path }}</a>
            </p>
        </div>
    </div>
</template>


<style scoped module lang="scss">
@import './LinkDetails.module.scss';
</style>



