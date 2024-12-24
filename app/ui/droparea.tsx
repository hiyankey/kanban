import { useState } from "react"


type DropAreaProps = {onDrop: ()=> void}
export function DropArea({onDrop}: DropAreaProps){
const [isVisible, setIsVisible] = useState(false)
    const showArea = ()=> {setIsVisible(true)}
    const hideArea = ()=> {setIsVisible(false)}
    return <div onDragEnter={showArea} onDragLeave={hideArea} onDrop={()=> {onDrop(); hideArea()}} onDragOver={(ev)=> ev.preventDefault()} className={`h-[1rem]  ${isVisible && "my-2.5 transition-[padding] py-8 border-dashed border rounded-[1.2rem] border-white/10"}`}/>
}