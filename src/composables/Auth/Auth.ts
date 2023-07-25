import { useRouter } from "vue-router"


export const setAuth = (auth: boolean) => {

}

export const setCookieToken = (token: string) => {
    document.cookie = `link_token=${token};Secure;samesite=strict`
}

export const getCookieToken = ():string | undefined => {
    const {link_token} = Object.fromEntries(document.cookie.split('; ').map((v) => v.split('=')))
    
    return link_token
}

export const deleteCookieToken = () => {
    document.cookie = `link_token=;expires=${new Date(0).toUTCString()}`
}

export const useAuth = () => {

    const router = useRouter()

    const login = (token: string) => {
        setCookieToken(token)

        router.push({
            name:'Links'
        })
    }

    return {
        login
    }


    
}