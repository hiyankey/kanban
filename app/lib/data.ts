import { Columns } from "./definitions";


export const initialCardPosition = {
    [Columns.TODO]: [
        {id: 'a1b2', title: "Create user authentication"},
        {id: 'c3d4', title: "Design database schema"},
        {id: 'e5f6', title: "Set up CI/CD pipeline"},

    ],
    [Columns.DOING]: [
        {id: 'g7h8', title: "Implement API endpoints"},
        {id: 'i9j0', title: "Write unit tests"},
        {id: 'k1l2', title: "Optimize performance"},
    ],
    [Columns.DONE]: [
        {id: 'm3n4', title: "Project setup"},
        {id: 'o5p6', title: "Create wireframes"},
        {id: 'q7r8', title: "Requirements gathering"},
    ]
}