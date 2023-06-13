<script setup lang="ts">
import Button from '@/components/public/Button/Button.vue';
import LinkCard from '@/components/Link/Card.vue'
import Grid from '@/components/public/Grid/Grid.vue';


</script>

<template>
    <div class="home">
        <div class="container">
            <div class="home_title">
                <h4 class="title-2"> Links </h4>
            </div>
            <div class="home_actions">
                <Button>Add New Link</Button>
            </div>

            <div class="links">
                <Grid>
                    <LinkCard/>
                    <LinkCard/>
                    <LinkCard/>
                    <LinkCard/>
                    <LinkCard/>
                </Grid>
                
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.home {
    &_title {
        width: 100%;
        display: flex;
        justify-content: start;
        align-items: center;
        margin-top: 2rem;
    }

    &_actions{
        max-width: 600px;
        margin: 0 auto;
        margin-top: 2rem;
    }
}

.links{
    margin-top: 20px;
}
</style>
