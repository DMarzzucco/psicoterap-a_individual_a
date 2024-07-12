import React from "react"
import { useComps } from "../../../context/context"
import { CompleteFormProp } from "../../../interfaces/interfaces"
import { Confirmation, LoaderComp } from "./loader"

export const FormButton: React.FC = () => {
    const { handleButton } = useComps()
    return (
        <button onClick={() => { handleButton("close") }}>
            cerrar
        </button>
    )
}
export const TextareaForm: React.FC = () => {
    return (
        <div>
            <label htmlFor="message">Mensaje</label>
            <textarea
                className="p-2 rounded-lg my-2 border border-slate-400 text-slate-300"
                name="message"
                placeholder="Mensaje"
                id=""
                required />
        </div>
    )
}
export const CompletForm: React.FC<CompleteFormProp> = ({ htmlFor, title, name, placeholder }) => {
    return (
        <div>
            <label htmlFor={htmlFor}>{title}</label>
            <input
                className="p-2 rounded-lg my-2 border border-slate-400 text-slate-300"
                type="text"
                name={name}
                placeholder={placeholder}
                required
            />
        </div>
    )
}
export const Loader: React.FC = () => {
    const { sending, messageSent } = useComps()
    return (
        <div className=" absolute flex flex-col justify-center items-center">
            {sending && <LoaderComp />}
            {messageSent && <Confirmation />}
        </div>
    )
}