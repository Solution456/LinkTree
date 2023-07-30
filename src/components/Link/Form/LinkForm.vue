<script setup lang="ts">
import {computed, ref} from 'vue'

import {Links, useLinks} from '@/composables/links'

import Input from '@/components/public/Input/Input.vue'
import Button from '@/components/public/Button/Button.vue';

import { linkItem, LinkPayload } from '@/@types/types';
import { useUserStore } from '@/stores/userStore';

type formDataLink = Omit<linkItem, 'id'>;

const emit = defineEmits<{
    (e: 'closeModal'): void
}>()
const {insertLink, isLoading} = useLinks()
const userStore = useUserStore()

const formValue = ref<formDataLink>({
    title:'',
    path:''
})


const disabledState = computed(() => {
    return Boolean(formValue.value.title && formValue.value.path)
})


const submitForm = async () => {

    const data:LinkPayload = {
        ...formValue.value,
        user_id: userStore.User.id
    }
    const link = await insertLink(data)
    if(!link){
        return
    }
    Links.value.push(link)
    emit('closeModal')
}

</script>


<template>
    <div :class="$style.LinkForm">
        <div class="LinkForm_inner">
            <div class="LinkForm_title">
                <h1 class="title-2">
                    Enter Link
                </h1>
                <form @submit.prevent="submitForm">
                    <div class="my-2">
                        <Input name="title" id="1" label="title" v-model="formValue.title"/>
                    </div>
                    <div class="my-2">
                        <Input name="URL" id="2" label="URL" v-model="formValue.path"/>
                    </div>

                    <div class="my-6">
                        
                        <Button :is-loading="isLoading" type="submit" :disabled="!disabledState">
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


