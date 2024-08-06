import { CompleteFormProps } from "@/ts";
import React from "react"

const CompletInput: React.FC<CompleteFormProps> = ({ htmlFor, title, placeholder, name }) => {
    return (
        <div className="flex flex-col items-start">
            <label htmlFor={htmlFor} className="font-bold 456:text-xs">{title}</label>
            <input
                className="p-2 rounded-lg my-2 border border-slate-400 text-slate-300 456:text-xs"
                type="text"
                name={name}
                placeholder={placeholder}
                required
            />
        </div>
    )
}

export default CompletInput;