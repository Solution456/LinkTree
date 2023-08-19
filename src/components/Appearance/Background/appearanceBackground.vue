<script setup lang="ts">

import { ref } from 'vue';

import { backgroundVariant } from '@/constants/background';

import publicCard from '@/components/public/Card/publicCard.vue'
import Grid from '@/components/public/Grid/Grid.vue';
import backgroundItem from '@/components/Appearance/Background/Item/backgroundItem.vue'
import ColorPicker from '@/components/Appearance/ColorPicker/ColorPicker.vue'




const activeBg = ref(1)
const backgroundColor = ref<string >()

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
                      v-for="bg in backgroundVariant" :key="bg.id" 
                      :id="bg.id"
                      :name="bg.name"
                      :is-active="bg.id === activeBg"
                      @click="handleClick(Number(bg.id))"
                      />
                </Grid>
            </template>
            <template #footer>
                <h4 class="body-base">
                    Color
                </h4>
                <div>
                    <ColorPicker v-model:model-value="backgroundColor" />
                </div>
            </template>
        </publicCard>

    </div>
</template>

<style scoped lang="scss"></style>