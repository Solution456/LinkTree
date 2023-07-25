import { RectangleGroupIcon, LinkIcon, EllipsisHorizontalCircleIcon } from "@heroicons/vue/24/outline";

import { NavItem } from "@/@types/types";

export const NAV_ITEMS:NavItem[] = [
    {
        path: '/links',
        name: 'links',
        icon: LinkIcon,

    },
    {
        path: '/appearance',
        name: 'appearance',
        icon: RectangleGroupIcon
    },
    {
        path: '/more',
        name: 'more',
        icon: EllipsisHorizontalCircleIcon

    }
]