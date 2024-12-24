'use client'

 import { Columns } from "./lib/definitions";
import { Column } from "./ui/columns";
import { initialCardPosition } from "./lib/data";
import { useState } from "react";
import { store } from "./lib/store";
import { moveCardToColumn } from "./lib/utils";

const columnTitles: {[key in Columns]: string} = {
  [Columns.TODO]: 'To do',
  [Columns.DOING]: 'Doing',
  [Columns.DONE]: 'Done',
}

const columns = Object.entries(columnTitles) as unknown as [Columns, string][]

export default function Home() {
  const [cards, setCards]= useState(initialCardPosition)
  const draggingCard = store((state)=> state.draggingCard)

  const onDrop = (column: Columns, index: number)=> {
    if (!draggingCard) return;
    const newCards = moveCardToColumn({
      cards,
      cardId: draggingCard,
      column,
      index
    })

    setCards(newCards)
  }
  return (
   <main className="bg-white/[0.03] border  border-white/[.05] w-[calc(100vw-20rem)] h-[calc(100vh-1.2rem)] rounded-tl-[16px] rounded-bl-[16px] mt-[1.2rem] p-[3.2rem]">

    <ul className="grid grid-cols-[repeat(3,300px)] gap-4 overflow-auto scrollbar-hide">{columns.map(([columnId, columnTitle])=><li key={columnId}><Column id={columnId} title={columnTitle} cards={cards[columnId]} onDrop={onDrop}/></li>)}</ul>

 
 
   </main>
  );
}
