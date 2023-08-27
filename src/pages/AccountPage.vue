<script setup lang="ts">
import { ref } from 'vue';


import accountBio from '@/components/Account/accountBio.vue'
import accountActions from '@/components/Account/accountActions.vue';
import accountActionsForm from '@/components/Account/accountActionsForm.vue';
import Modal from '@/components/public/Modal/Modal.vue';

const accountActionsModal = ref<InstanceType<typeof Modal> | null>(null)

const accountActionsModalShown = () => {
    accountActionsModal.value?.openClose()
}


</script>

<template>
    <section :class="$style.account">
        <div :class="$style.account__inner">
            <div :class="$style.account__title">
                <h2 class="title-2">My account</h2>
            </div>

            <accountBio />
            <accountActions @open-modal="accountActionsModalShown"/>

            <Modal transition='bounce' ref="accountActionsModal">
                <template #body>
                    <accountActionsForm/>
                </template>
            </Modal>

        </div>
    </section>
</template>


<style scoped module lang="scss">
.account {
    position: relative;
    height: 100%;
    margin-top: 2rem;

    &__inner {
        display: flex;
        flex-direction: column;
        row-gap: 2rem;
        width: 100%;
        max-width: 700px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    &__title {
        width: 100%;
        text-align: center;
    }
}
</style>