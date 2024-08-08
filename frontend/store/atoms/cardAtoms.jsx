import { atom, selector } from 'recoil'
export const cardAtom = atom({
    key : "cardAtom",
    default : []
})
export const nameAtom = atom({
    key : "name",
    default : ""
})

export const filteredCards  = selector({
    key : "filterName",
    get : ({get})=>{
        const cards = get(cardAtom)
        const name = get(nameAtom)
        const filtered = cards.filter(card=> card.name.includes(name))
        return  filtered
    }
})
export const isThere  = selector({
    key : "isThere",
    get : ({get})=>{
        const x = get(filteredCards)
        let val
        x.length !== 0 ? val = 1 : val = 0
        return val
    }
})