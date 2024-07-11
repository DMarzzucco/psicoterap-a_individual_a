// import { useComps } from "../../../context/context";

import { FormButton } from "./compForms";

function Form() {
    // const {closeForm} =useComps ()
    return (
        <div className="absolute w-300 flex bg-slate-800 p-2 justify-center items-center">
            {/* <button onClick={closeForm}>Cerrar</button> */}
            <FormButton />
            <form className="flex flex-col justify-center items-center w-full">
                <input type="text" name="name" placeholder="Nombre & Apellido" required />
                <input type="text" name="phone" placeholder=" Teléfono" pattern="[0-9]*" title="Por favor, ingrese solo números en el campo de teléfono" required />
                <input type="text" name="mail" placeholder="Correo Electronico (opcional)" />
                <input type="text" name="context" placeholder="Contexto" required />
                <textarea name="message" id="" placeholder="Mensaje" required />
                <button type="submit" value="Enviar" className='btSend'>Enviar</button>
                {/* {sending && <Loader />}
                {messageSent && <MessageConfirmation />} */}
            </form>
        </div>
    )
}

export default Form;