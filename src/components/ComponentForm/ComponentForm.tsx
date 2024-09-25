import "./formStyle.css"
import { useForm } from "../hooks/useForm"

export const ComponentForm = () => {
    const {values, handleChange,handleSubmitForm, resetForm} = useForm({email: '', nombre: '', edad: 0})

    return (
        <div>
            <div className="container-form">
                <div>
                    <h2>FORMULARIO</h2>
                </div>

                <div className="container-inputs" >
                    <input value={values.email} name="email" type="email" placeholder="example@example.com" onChange={handleChange} />

                    <input value={values.nombre} name="nombre" type="text" placeholder="Nombre" onChange={handleChange} />

                    <input value={values.edad} name="edad" type="number" placeholder="Edad" onChange={handleChange} />

                </div>

                <div>
                    <button onClick={handleSubmitForm} >ENVIAR</button>
                    <button onClick={resetForm} >RESTABLECER</button>
                </div>

            </div>
        </div>
    )
}
