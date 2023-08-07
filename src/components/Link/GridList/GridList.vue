<script setup lang="ts">

import Grid from '@/components/public/Grid/Grid.vue'
import LinkCard from '@/components/Link/Card.vue'
import Skeleton from '@/components/public/Skeleton/Skeleton.vue'
import SkeletonLink from "@/components/Link/SkeletonLink/SkeletonLink.vue"

import { linkItem } from '@/@types/types.ts'


interface GridListProps {
    items: linkItem[]
    isLoading: boolean
}


const props = defineProps<GridListProps>()
const emit = defineEmits<{
    (e: 'setSelectedItem', value: linkItem): void
}>()

</script>

<template>
    <div>
        <Grid>
            <Skeleton bg :count=3 :loading="isLoading && props.items.length <1">
                <template #template>
                    <SkeletonLink />
                </template>

                <template #default>
                    <LinkCard v-for="item in props.items" :key="item.id" :link="item"
                        @click="emit('setSelectedItem', item)" />
                </template>
            </Skeleton>
        </Grid>
    </div>
</template>



<style scoped module lang="scss"></style>