import { UserCircleIcon, UserMinusIcon } from "@heroicons/vue/24/outline";

export const MenuItems = [
    {
        name:'Account',
        icon:UserCircleIcon
    },

    {
        name:'Sign Out',
        icon: UserMinusIcon
    }
] as const