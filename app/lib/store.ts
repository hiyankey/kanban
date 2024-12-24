import {create} from "zustand"
 type Store = {
    draggingCard: string| null;
    setDraggingCard: (cardId: string| null)=> void
 }

export const store = create<Store>((set)=>({
    draggingCard: null,
    setDraggingCard: (cardId: string| null)=> set({draggingCard: cardId})}))