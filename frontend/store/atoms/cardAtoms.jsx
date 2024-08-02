import { atom, selector } from 'recoil'
export const cardAtom = atom({
    key : "cardAtom",
    default : []
})

export const nameAtom = atom({
    key : "name",
    default : ""
})

export const filterName = selector({
    key : "filterName",
    get : ({get})=>{
        const cards = get(cardAtom)
        const name = get(nameAtom)
        const filtered = cards.filter(card=> card.name.includes(name))
        
        return  filtered
    }
})
