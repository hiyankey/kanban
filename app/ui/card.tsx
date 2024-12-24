import { Card as CardProps} from "../lib/definitions";
import { store } from "../lib/store";

export function Card({title, id}: CardProps){

    const setDraggingCard = store((state)=> state.setDraggingCard)
    return <div draggable onDragStart={()=> setDraggingCard(id)} onDragEnd={()=> setDraggingCard(null)} className=" cursor-grab active:animate-pulse active:cursor-grabbing px-[2rem] py-[1rem] bg-white/[.03] border border-white/[.05] rounded-[1.2rem]">{title}</div>
}