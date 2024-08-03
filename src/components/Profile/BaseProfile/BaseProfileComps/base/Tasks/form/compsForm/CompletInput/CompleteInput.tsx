import { useAuth } from "@/context";
import { CompleteFormProps } from "@/ts";
import React from "react"

const CompletInput: React.FC<CompleteFormProps> = ({ htmlFor, title, placeholder, name, value }) => {
    const { handleChange } = useAuth()
    return (
        <div className="flex flex-col items-start">
            <label htmlFor={htmlFor} className="font-bold">{title}</label>
            <input
                className="p-2 rounded-lg my-2 border border-slate-400 text-slate-300"
                type="text"
                onChange={handleChange}
                value={value}
                name={name}
                placeholder={placeholder}
                required
            />
        </div>
    )
}

export default CompletInput;