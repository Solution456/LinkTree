import { FunctionalComponent, HTMLAttributes, VNodeProps } from "vue"


export interface linkItem {
    id: number
    title: string,
    path: string,
}

export interface NavItem {
    path: string,
    name: string
    icon: FunctionalComponent<HTMLAttributes & VNodeProps, {}, any>
}

export interface LinkPayload {
    title: string,
    path: string,
    user_id: string
}

