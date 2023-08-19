import { supabase } from "@/http/supabase";
import { useUserStore } from "@/stores/userStore";
import { useAuth, deleteCookieToken } from "./Auth";

import { AuthError, Session } from "@supabase/supabase-js";

import { ref } from "vue";





export function useAuthUser() {
    const { login } = useAuth()
    const userStore = useUserStore()
    const loading = ref(false)
    const errors = ref<AuthError | null>(null)

    const session = ref<Session | null>(null)
    const userSignUp = async (email: string, password: string) => {

        try {
            loading.value = true
            const { error } = await supabase.auth.signUp({
                email,
                password
            })
            errors.value = error
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message)
            }
        } finally {
            loading.value = false
        }


    }

    const userSignIn = async (email: string, password: string) => {
        try {
            loading.value = true
            const { error, data } = await supabase.auth.signInWithPassword({
                email,
                password
            })
            errors.value = error
            if (data.session?.access_token) {
                login(data.session.access_token)
                userStore.User.id = data.session.user.id
            }

        } catch (error) {
            if (error instanceof Error) {
                alert(error.message)
            }
        } finally {
            loading.value = false
        }
    }

    const userSignOut = async () => {
        try {
            loading.value = true
            const { error } = await supabase.auth.signOut()
            errors.value = error
            deleteCookieToken()
            userStore.$reset()

        } catch (error) {
            if (error instanceof Error) {
                alert(error.message)
            }
        } finally {
            loading.value = false
        }
    }


    const getSession = async () => {
        const data = await supabase.auth.getSession()
        if (data.data.session?.user.role && !data.error) {

            console.log('data')
            userStore.isAuth = true
            userStore.User.id = data.data.session.user.id
        }


    }

    const updateSession = () => {

    }

    return {
        userSignIn,
        userSignUp,
        userSignOut,
        getSession,
        updateSession,
        errors,
        loading,
        session
    }
}

export const useUserApi = () => {
    const isLoading = ref<boolean>(false)
    const Error = ref<unknown>()

    const fetchUserData = async (userId: string) => {
        isLoading.value = true

        try {
            const { data, error } = await supabase.from('users')
                .select('username, avatar_url')
                .eq('id', userId)
                .single()

            if (error) {
                console.log(error)
                isLoading.value = false
                return null
            }

            isLoading.value = false

            return data
        } catch (error) {
            console.log('Add error', error)
            isLoading.value = false
            return null
        }
    }

    const updateUserData = async (userId: string, userData: string) => {
        isLoading.value = true
        try {
            const { error } = await supabase.from('users')
                .update({
                    'username': userData
                })
                .eq('id', userId)

            if (error) {
                console.log(error)
                isLoading.value = false
                return null
            }

            isLoading.value = false
        } catch (error) {
            console.log('Add error', error)
            isLoading.value = false
            return null
        }
    }


    return {
        fetchUserData,
        updateUserData,
        isLoading,
        Error
    }
}

