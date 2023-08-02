<script setup lang="ts">

import { ref } from 'vue';

import publicCard from '@/components/Appearance/Public/publicCard.vue'
import Grid from '@/components/public/Grid/Grid.vue';
import backgroundItem from '@/components/Appearance/Background/Item/backgroundItem.vue'


const tempBgData = [
    {
        id: 1,
        bgName: 'Flat Colour'
    },
    {
        id: 2,
        bgName: 'Gradient'
    },
    {
        id: 3,
        bgName: 'Image'
    },
    {
        id: 4,
        bgName: 'Video'
    },
]

const activeBg = ref(1)

const handleClick = (id:number) => {
    activeBg.value = id
}

</script>



<template>
    <div class="appearance__background">
        <publicCard>
            <template #title>
                Background
            </template>
            <template #content>
                <Grid>
                    <backgroundItem 
                      v-for="bg in tempBgData" :key="bg.id" 
                      :bg-name="bg.bgName"
                      :is-active="bg.id === activeBg"
                      @click="handleClick(bg.id)"
                      />
                </Grid>
            </template>
        </publicCard>

    </div>
</template>

<style scoped lang="scss"></style>