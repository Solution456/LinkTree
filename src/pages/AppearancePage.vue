<script setup lang="ts">

import appearanceProfie from '@/components/Appearance/Profile/appearanceProfile.vue'
import appearanceBackground from '@/components/Appearance/Background/appearanceBackground.vue'


</script>

<template>
    <section :class="$style.appearance">
        <div :class="$style.appearance__inner">
            <div class="mb-6">
                <appearanceProfie/>
            </div>
            <div class="mb-6">
                <appearanceBackground/>
            </div>
        </div>
    </section>
</template>



<style module scoped lang="scss">
.appearance {
    position: relative;
    height: 100%;
    margin-top: 2rem;

    &__inner{
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
        padding: 0 2rem;
    }
} 

</style>