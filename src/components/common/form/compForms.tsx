import React from "react"
import { useComps } from "../../../context/context"
import { CompleteFormProp } from "../../../interfaces/interfaces"
import { Confirmation, LoaderComp } from "./loader"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "../../../assets/img"

export const FormButton: React.FC = () => {
    const { handleButton } = useComps()
    return (
        <button className="right-1 absolute top-1 p-3" onClick={() => { handleButton("closeInput") }}>
            <FontAwesomeIcon icon={faXmark} />
        </button>
    )
}
export const TextareaForm: React.FC = () => {
    return (
        <div className="flex flex-col items-start">
            <label htmlFor="message" className="font-bold">Mensaje</label>
            <textarea
                className="p-2 rounded-lg my-2 border border-slate-400 text-slate-300"
                name="message"
                placeholder="Mensaje"
                id=""
                required
            />
        </div>
    )
}
export const CompletForm: React.FC<CompleteFormProp> = ({ htmlFor, title, placeholder, name }) => {
    return (
        <div className="flex flex-col items-start">
            <label htmlFor={htmlFor} className="font-bold">{title}</label>
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