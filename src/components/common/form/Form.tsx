// import { useForm } from "react-hook-form"
import { useComps } from "../../../context/context";
import { CompletForm, FormButton, Loader, TextareaForm } from "./compForms";
// import React from "react";

function Form() {
    const { sendEmail, reForm } = useComps()
    // const {
        //  handleSubmit,
        // register, formState: { errors } } = useForm()

    // const onSubmit = (_data: any, e: React.FormEvent) => {
    //     sendEmail(e)
    // }

    return (
        <div className="rounded-xl border border-slate-400 absolute w-300 flex flex-col bg-slate-800 p-2 justify-center items-center">
            <FormButton />
            <form
                ref={reForm}
                onSubmit={sendEmail}
                className="flex flex-col justify-center items-center w-full">
                <CompletForm
                    htmlFor="name"
                    title="Nombre Completo"
                    // name="name"
                    placeholder="Nombre & Apellido"
                    // {...register("name", { required: true })}
                />
                {/* {errors.name && <div className="bg-red-500 text-white">Nombre faltante</div>} */}
                <CompletForm
                    htmlFor="phone"
                    title="Numero de Teléfono"
                    // name="phone"
                    placeholder="Numero de Teléfono"
                />
                <CompletForm
                    htmlFor="mail"
                    title="Correo Electronico"
                    // name="mail"
                    placeholder="Correo Electronico"
                />
                <CompletForm
                    htmlFor="context"
                    title="Contexto"
                    // name="context"
                    placeholder="Contexto"
                />
                <TextareaForm />
                <button type="submit" value="Enviar" className='btSend'>Enviar</button>
            </form>
            <Loader />
        </div>
    )
}

export default Form;