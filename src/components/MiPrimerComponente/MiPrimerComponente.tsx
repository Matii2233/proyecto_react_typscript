import {FC} from "react"

interface IPropsPrimerCompo{
    text: string
    color: string
    fontSize?: number
}




export const MiPrimerComponente :
FC<IPropsPrimerCompo> = ({text,color,fontSize}) => {

    return (
    <div style={{color: `${color}`, fontSize: `${fontSize || 4}rem`}}> 
        <p>{text}</p>
    </div>
    )
}
