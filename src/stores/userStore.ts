
import { defineStore } from 'pinia'

interface userInfo {
    username: string
    avatar_url:string
}

interface State {
    UserDetails: userInfo | null,
    isAuth: boolean
}

export const useUserStore = defineStore('user', {
    state: () : State => {
        return {
            UserDetails: null,
            isAuth: false
        }
    },
})