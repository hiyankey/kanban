

export enum Columns {
    TODO,
    DOING,
    DONE
}

export type Card = {
    id: string,
    title: string
}

export type Cards = {[key in Columns]: Card[]}