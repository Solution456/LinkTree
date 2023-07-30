
import { defineStore } from 'pinia'

interface userInfo {
    username: string
    avatar_url:string
}

interface State {
    User:{
        id:string
        UserDetails : userInfo | null
    },
    isAuth: boolean
}

export const useUserStore = defineStore('user', {
    state: () : State => {
        return {
            User: {
                id:'',
                UserDetails: null
            },
            isAuth: false
        }
    },
})