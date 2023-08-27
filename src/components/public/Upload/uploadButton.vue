<script setup lang="ts">

import { computed, ref } from 'vue';


import Button from '@/components/public/Button/Button.vue'



interface uploadButtonProps {
    file?: File
    files?: File[] | never
    extensions?: string[]
    error?: string | boolean
    isDisabled?: boolean
    isSingle?: boolean
}


const props = withDefaults(defineProps<uploadButtonProps>(), {
    label: undefined,
    error: undefined,
    file: undefined,
    files: () => [],
    extensions: () => ['jpg', 'png'],
})

const emit = defineEmits(['add', 'remove', 'upload']);

const input = ref<HTMLElement | null>(null);
const inputKey = ref(0);

const accept = computed(() => props.extensions.map((ext) => `.${ext}`).join())

const inputClick = () => {
    input.value?.click?.()
}

const remove = async (file: File) => {
    emit('remove', file);
    inputKey.value++;
}

const handleFileChange = (target: EventTarget | null) => {
    if (props.isSingle) {
        const file = (target as HTMLInputElement).files?.[0];
        console.log(file)
        if (file?.size && file.size < 10 * 1024 * 1024) emit('add', file);
    } else {
        const files = (target as HTMLInputElement).files;

        if (files === null) return;

        for (let index = 0; index < files.length; index++) {
            if (files[index].size && files[index].size < 10 * 1024 * 1024) emit('add', files[index]);
        }
    }
}

</script>

<template>
    <div :class="$style.container">
        <div :class="$style.upload">
            <div :class="$style.upload__button">
                <Button @click="inputClick">
                    Upload Image
                </Button>
            </div>

            <input ref="input" type="file" :class="$style.input" :key="inputKey" :accept="accept"
                @input="handleFileChange($event.target)">

            <template v-if="props.isSingle && props.file">
                <div :class="$style.upload__file">
                    <p :class="$style.name">{{ props.file.name }}</p>
                    <div>
                        <Button @click="emit('remove')">remove</Button>
                    </div>
                </div>

            </template>
        </div>

        <div v-show="(props.isSingle && props.file) || !!props.files.length">
            <Button @click="emit('upload')">Upload</Button>
        </div>
    </div>
</template>



<style scoped module lang="scss">

.container {
    display: flex;
    gap: 2rem;
}
.upload {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
    

    &__file {
        display: flex;
        flex-direction: row;
        align-items: center;

        .name {
            flex: 1;
            max-width: 136px;
            overflow: hidden;
            font-size: 0.875rem;
            text-overflow: ellipsis;
        }
    }
}

.input {
    display: none;
}
</style>