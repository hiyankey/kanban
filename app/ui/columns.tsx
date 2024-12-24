import * as React from 'react';
import { Card } from "./card"
import { Card as CardType, Columns } from "../lib/definitions";
import { DropArea } from "./droparea";


type ColumnProps = {
    id: number;
    title: string;
    cards: CardType[]
    onDrop: (column: Columns, index: number)=> void
}

export function Column({title, id, cards, onDrop}: ColumnProps) {
    const bgColor = title === 'To do' ? '#D9D9D9' : 
                    title === 'Doing' ? '#FFC44F' :
                    title === 'Done' ? '#65FFB5' : '';

    return (<div key={id} className="border-white/5 border  rounded-[1.6rem] p-4">
        <h4 className="mb-3 items-center flex">
            <div style={{backgroundColor: bgColor}} className="h-6 w-6 rounded-full inline-block mr-4"/>
            {title}
        </h4>
        <div className="flex flex-col">
            <DropArea onDrop={() => onDrop(id, 0)}/>
            {cards.map((card, index) => (
                <React.Fragment key={card.id}>
                    <Card {...card}/>
                    <DropArea onDrop={() => onDrop(id, index + 1)}/>
                </React.Fragment>
            ))}
        </div>
    </div>)
}