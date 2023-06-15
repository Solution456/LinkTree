import { supabase } from "@/http/supabase";

import { AuthError } from "@supabase/supabase-js";

import { ref } from "vue";





export default function useAuthUser() {
    const loading = ref(false)
    const errors = ref<AuthError | null>(null)
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
            return { loading, errors }
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message)
            }
        } finally {
            loading.value = false
        }
    }


    const getSession = async () => {
        supabase.auth.getSession()
    }

    return {
        userSignIn,
        userSignUp,
        getSession,
        errors,
        loading
    }
}
