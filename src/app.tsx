//import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { ComponentForm } from "./components/ComponentForm/ComponentForm"
// import { ComponentUseEffect } from "./components/ComponentUseEffect/UseEffect"
// import { MiPrimerComponente } from "./components/MiPrimerComponente/MiPrimerComponente"

export const App = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '2vh'}}>

            {/* <MiPrimerComponente text={"Texto desde propiedades"} color="#059" fontSize={2}/>
            <ComponentCounter/>
            <ComponentUseEffect/> */}
            <ComponentForm/>
        </div>
    )
}
