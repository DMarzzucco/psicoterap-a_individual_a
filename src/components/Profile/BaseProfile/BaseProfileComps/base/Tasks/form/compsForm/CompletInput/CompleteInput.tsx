import React from "react"
import { CompleteFormProp } from "../../../../../interfaces/interfaces"

const CompletInput: React.FC<CompleteFormProp> = ({ htmlFor, title, placeholder, name }) => {
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

export default CompletInput;