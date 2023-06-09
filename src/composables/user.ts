import { supabase } from "@/http/supabase";
import { useUserStore } from "@/stores/userStore";

import { AuthError, Session } from "@supabase/supabase-js";

import { ref } from "vue";





export default function useAuthUser() {
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
            const { error } = await supabase.auth.signInWithPassword({
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

    const userSignOut = async () => {
        try {
            loading.value = true
            const { error } = await supabase.auth.signOut()
            errors.value = error
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
        if (data.data.session?.user.role && !data.error){
            console.log('data')
            userStore.isAuth = true
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
