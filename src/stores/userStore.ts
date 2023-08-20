import { defineStore } from 'pinia'
import { useUserApi } from '@/composables/user'

interface userInfo {
    username: string | null
    avatar_url: string | null
}

interface State {
    User: {
        id: string
        UserDetails: userInfo | null
    },
    isAuth: boolean,
    isLoading: boolean
}

export const useUserStore = defineStore('user', {
    state: (): State => {
        return {
            User: {
                id: '',
                UserDetails: null
            },
            isAuth: false,
            isLoading: false
        }
    },


    actions: {
        async fetchUser() {
            this.isLoading = true
            const { fetchUserData } = useUserApi()
            const userData = await fetchUserData(this.User.id)

            if (userData) {
                this.User.UserDetails = userData
                this.isLoading = false

            }
            this.isLoading = false

        },

        async updateUserData(userData: string) {
            this.isLoading = true
            const { updateUserData } = useUserApi()
            await updateUserData(this.User.id, userData)
            if (this.User.UserDetails) {
                this.User.UserDetails.username = userData
                this.isLoading = false
            }
            this.isLoading = false

        }
    }
})