<script setup lang="ts">
import {EllipsisVerticalIcon} from "@heroicons/vue/24/outline"

import styles from './Card.module.scss'



</script>

<template>
    <div :class="styles.LinkCard">
        <div :class="styles.LinkCard_icon">
            <EllipsisVerticalIcon/>
        </div>
        <div :class="styles.LinkCard_main">
            <div :class="styles.LinkCard_main__top">
                <div class="title-1">World tour - tix on sale now</div>
                <div>Butt</div>
            </div>
            <div :class="styles.LinkCard_main__link">
                <a class="sub-title-1" href="#">
                    https://dribbble.com/shots/18797894-Linktree-Mobile-App-Links
                </a>
            </div>
        </div>
    </div>
</template>


