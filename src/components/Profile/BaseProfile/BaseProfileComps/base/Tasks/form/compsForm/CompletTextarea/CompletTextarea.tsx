import { useAuth } from "@/context";

const TextareaForm: React.FC = () => {
    const {date, handleChange} =useAuth()
    return (
        <div className="flex flex-col items-start">
            <label htmlFor="message" className="font-bold">Mensaje</label>
            <textarea
                className="p-2 rounded-lg my-2 border border-slate-400 text-slate-300"
                name="message"
                placeholder="Mensaje"
                value={date.message}
                onChange={handleChange}
                required
            />
        </div>
    )
}
export default TextareaForm;