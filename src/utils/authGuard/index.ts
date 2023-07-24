import { useUserStore } from "@/stores/userStore";

import type { NavigationGuard } from "vue-router";


export const authGuard: NavigationGuard = async (to, from, next) => {
    const {isAuth} = useUserStore()

    if(isAuth){
        next()
    } else {
        next('/')
    }
}