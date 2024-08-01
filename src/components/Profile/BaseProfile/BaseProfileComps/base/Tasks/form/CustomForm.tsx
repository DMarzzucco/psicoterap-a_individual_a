import { useAuth } from "@/context";
import { TemporalComps, CompleteInput, CompleteTextarea } from "./compsForm";
import { ButtonClose } from "@/components";

function CustomForm() {
    const { sendEmail, reForm, handleButton } = useAuth()
    return (
        <div className="rounded-xl border border-slate-400 absolute w-300  bg-slate-800 p-2 ">
            <ButtonClose click={() => { handleButton({type:"closeInput"}) }} />
            <div className="flex flex-col justify-center items-center">
                <form
                    ref={reForm}
                    onSubmit={sendEmail}
                    className="flex flex-col justify-center items-center w-full">
                    <CompleteInput
                        htmlFor="name"
                        title="Nombre Completo"
                        name="name"
                        placeholder="Nombre & Apellido"
                    />
                    <CompleteInput
                        htmlFor="phone"
                        title="Numero de Teléfono"
                        name="phone"
                        placeholder="Numero de Teléfono"
                    />
                    <CompleteInput
                        htmlFor="mail"
                        title="Correo Electronico"
                        name="mail"
                        placeholder="Correo Electronico"
                    />
                    <CompleteInput
                        htmlFor="context"
                        title="Contexto"
                        name="context"
                        placeholder="Contexto"
                    />
                    <CompleteTextarea />
                    <button type="submit" value="Enviar" className='btSend'>Enviar</button>
                </form>
                <TemporalComps />
            </div>

        </div>
    )
}

export default CustomForm;