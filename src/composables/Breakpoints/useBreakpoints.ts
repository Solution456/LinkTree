import { useBreakpoints } from "@vueuse/core"


export const useBreakPoints = () => {
    const breakpoints = useBreakpoints({
        tablet: 576,
        laptop: 960,
        desktop: 1440,
    })


    const mobile = breakpoints.smaller('laptop')
    const laptop = breakpoints.between('laptop', 'desktop')
    const desktop = breakpoints.greaterOrEqual('desktop')


    return {
        mobile,
        laptop,
        desktop
    }
}