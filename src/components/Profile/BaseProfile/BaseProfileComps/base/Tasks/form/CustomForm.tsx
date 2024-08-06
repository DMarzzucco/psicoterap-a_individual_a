"use client";

import { useAuth } from "@/context";
import { CompleteInput, CompleteTextarea } from "./compsForm";
import Coms from "@/components/common/common";
const It = new Coms()

function CustomForm() {
    const { handleButton, formAction } = useAuth()
    return (
        <div className="rounded-xl border border-slate-400 absolute w-300  bg-slate-800 p-2 ">
            <It.ButtonClose click={() => { handleButton({ type: "closeInput" }) }} />
            <div className="flex flex-col justify-center items-center">
                <form
                    action={formAction}
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
            </div>

        </div>
    )
}

export default CustomForm;