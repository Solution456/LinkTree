<script setup lang="ts">
import {EllipsisVerticalIcon} from "@heroicons/vue/24/outline"

import styles from './Card.module.scss'


import type { linkItem } from "@/@types/types";

interface linkCardProps {
    link: linkItem
}

defineProps<linkCardProps>()



</script>

<template>
    <div :class="styles.LinkCard">
        <div :class="styles.LinkCard_icon">
            <EllipsisVerticalIcon/>
        </div>
        <div :class="styles.LinkCard_main">
            <div :class="styles.LinkCard_main__top">
                <div class="title-1">{{link.title}}</div>
            </div>
            <div :class="styles.LinkCard_main__link">
                <a class="sub-title-1" :href="link.path" target="_blank">
                    {{link.path}}
                </a>
            </div>
        </div>
    </div>
</template>


