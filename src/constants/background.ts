
type bgVariant = 'Flat Colour' | 'Gradient' | 'Image' | 'Video'

export interface backgroundItem {
    id:string | number,
    name: bgVariant
}


export const backgroundVariant: backgroundItem[] = [
    {
        id:1,
        name:'Flat Colour'
    },
    {
        id:2,
        name:'Gradient'
    },
    {
        id:3,
        name:'Image'
    },
    {
        id:4,
        name:'Video'
    }
]