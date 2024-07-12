import { useComps } from "../../../context/context";
import { CompletForm, FormButton, Loader, TextareaForm } from "./compForms";

function Form() {
    const { sendEmail, reForm} = useComps()
    return (
        <div className="rounded-xl border border-slate-400 absolute w-300 flex bg-slate-800 p-2 justify-center items-center">
            <FormButton />
            <form onSubmit={sendEmail} ref={reForm} className="flex flex-col justify-center items-center w-full">
                <CompletForm
                    htmlFor="name"
                    title="Nombre Completo"
                    name="name"
                    placeholder="Nombre & Apellido"
                />
                <CompletForm
                    htmlFor="phone"
                    title="Numero de Teléfono"
                    name="phone"
                    placeholder="Numero de Teléfono"
                />
                <CompletForm
                    htmlFor="mail"
                    title="Correo Electronico"
                    name="mail"
                    placeholder="Correo Electronico"
                />
                <CompletForm
                    htmlFor="context"
                    title="Contexto"
                    name="context"
                    placeholder="Contexto"
                />
                <TextareaForm />
                <button type="submit" value="Enviar" className='btSend'>Enviar</button>
                <Loader />
            </form>
        </div>
    )
}

export default Form;