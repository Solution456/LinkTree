<script setup lang="ts">

import { ref } from 'vue';
import { useUserStore } from '@/stores/userStore';

import Button from '@/components/public/Button/Button.vue';
import LinkCard from '@/components/Link/Card.vue'
import Grid from '@/components/public/Grid/Grid.vue';
import Modal from '@/components/public/Modal/Modal.vue';
import AuthForm from '@/components/Auth/AuthForm.vue';
import LinkForm from '@/components/Link/Form/LinkForm.vue';
import LinkDetails from '@/components/Link/Details/LinkDetails.vue'



import type { typeState } from '@/components/Auth/AuthForm.vue';
import type { linkItem } from '@/@types/types';



const userStore = useUserStore()

const ModalAuth = ref<InstanceType<typeof Modal> | null>(null)
const ModalLinkForm = ref<InstanceType<typeof Modal> | null>(null)
const ModalLinkDetails = ref<InstanceType<typeof Modal> | null>(null)

const selectedLink = ref<linkItem | null>(null)

const authFormState = ref<typeState>('login')


const tempData: linkItem[] = [
    {
        id:1,
        path:'https://dribbble.com/shots/20378404-Linktree-Mobile-App',
        title:'dribble LinkTree'
    },
    {
        id:2,
        path:'https://youtube.com/watch?v=8edZVkacijA&ab_channel=CURSEDEVIL',
        title:'Playlist YT'
    },
    {
        id:3,
        path:'https://vuejs.org/',
        title:'vuejs'
    }
]

const updateAuthState = (value: typeState) => {
    authFormState.value = value
}



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
                <Grid>
                    <LinkCard v-for="link of tempData" :key="link.id" :link="link" @click="setSelectedLink(link)"/>
                </Grid>
            </div>

            <Modal transition='bounce' ref="ModalLinkDetails">
                <template #body>
                    <LinkDetails v-if="selectedLink" :link="selectedLink"/>
                </template>
            </Modal>

            <Modal ref="ModalLinkForm">
                <template #body>
                    <LinkForm />
                </template>
            </Modal>

            <Modal transition='bounce' ref="ModalAuth">
                <template #body>
                    <AuthForm @close="ModalAuth?.openClose" @update-state="updateAuthState" :state="authFormState" />
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
