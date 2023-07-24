<script setup lang="ts">
import {computed, ref} from 'vue'

import Input from '@/components/public/Input/Input.vue'
import Button from '@/components/public/Button/Button.vue';


const formValue = ref({
    title:'',
    URL:''
})


const disabledState = computed(() => {
    return Boolean(formValue.value.title && formValue.value.URL)
})

</script>


<template>
    <div :class="$style.LinkForm">
        <div class="LinkForm_inner">
            <div class="LinkForm_title">
                <h1 class="title-2">
                    Enter Link
                </h1>
                <form>
                    <div class="my-2">
                        <Input name="title" id="1" label="title" v-model="formValue.title"/>
                    </div>
                    <div class="my-2">
                        <Input name="URL" id="2" label="URL" v-model="formValue.URL"/>
                    </div>

                    <div class="my-6">
                        
                        <Button type="submit" :disabled="!disabledState">
                            Add new link
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<style scoped module lang="scss">
@import './LinkForm.module.scss';
</style>


