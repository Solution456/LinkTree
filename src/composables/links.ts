import { ref } from "vue";

import { supabase } from "@/http/supabase";

import { LinkPayload, linkItem } from "@/@types/types";



export const Links = ref<linkItem[]>([])


export const useLinks = () => {

    const isLoading = ref<boolean>(false)
    const Error = ref<unknown>()

    const fetchLinks = async (userid:string) => {
        isLoading.value = true
        try{
            const {data:links, error} = await supabase.from('links')
                .select('id, title, path')
                .eq('user_id',userid)
                .order('id')
            
            if (error) {
                console.log('ERROR: fetch links',error)
                Error.value = error
                return
            }

            if (links === null) {
                Links.value = []
                isLoading.value = false

            }
            
            Links.value = links
            isLoading.value = false
        } catch (err) {
            Error.value = err
            isLoading.value = false
            return null
        }
    }

    const insertLink = async (data:LinkPayload):Promise<linkItem | null> => {
        isLoading.value = true
        try{
            const {error, data:link} = await supabase.from('links')
                .insert(data).select('id, title, path').single()
            
            if (error) {
                console.log(error)
                isLoading.value = false
                return null
            }
            isLoading.value = false
            return link
        } catch (err) {
            console.log('Add error', err)
            isLoading.value = false
            return null
        }
    }


    return {
        insertLink,
        fetchLinks,
        isLoading,
        Error
    }


}