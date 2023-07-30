<script setup lang="ts">

import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { useLinks, Links } from '@/composables/links';

import Button from '@/components/public/Button/Button.vue';
import Modal from '@/components/public/Modal/Modal.vue';
import LinkForm from '@/components/Link/Form/LinkForm.vue';
import LinkDetails from '@/components/Link/Details/LinkDetails.vue'




import type { linkItem } from '@/@types/types';
import GridList from '@/components/Link/GridList/GridList.vue';




const userStore = useUserStore()
const {fetchLinks, isLoading} = useLinks()

const ModalAuth = ref<InstanceType<typeof Modal> | null>(null)
const ModalLinkForm = ref<InstanceType<typeof Modal> | null>(null)
const ModalLinkDetails = ref<InstanceType<typeof Modal> | null>(null)

const selectedLink = ref<linkItem | null>(null)

const clickAddHandle = () => {
    if (userStore.isAuth) {
        ModalLinkForm.value?.openClose()
    } else {
        ModalAuth.value?.openClose()
    }
}

const setSelectedLink = (link:linkItem) => {
    selectedLink.value = link
    if(selectedLink.value){
        console.log(selectedLink.value)
        ModalLinkDetails.value?.openClose()
    }
    else return
}


onMounted(async () => {
    await fetchLinks(userStore.User.id)
})




</script>

<template>
    <div class="home">
        <div class="container">
            <div class="home_title">
                <h4 class="title-2"> Links </h4>
            </div>
            <div class="home_actions">
                <Button @click="clickAddHandle">Add New Link</Button>
            </div>

            <div class="links">
                <GridList @set-selected-item="setSelectedLink" :items="Links" :is-loading="isLoading"/>
            </div>

            <Modal transition='bounce' ref="ModalLinkDetails">
                <template #body>
                    <LinkDetails v-if="selectedLink" :link="selectedLink"/>
                </template>
            </Modal>

            <Modal ref="ModalLinkForm">
                <template #body>
                    <LinkForm @close-modal="ModalLinkForm?.openClose" />
                </template>
            </Modal>
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

    &_actions {
        max-width: 600px;
        margin: 0 auto;
        margin-top: 2rem;
    }
}

.links {
    margin-top: 20px;
}
</style>
