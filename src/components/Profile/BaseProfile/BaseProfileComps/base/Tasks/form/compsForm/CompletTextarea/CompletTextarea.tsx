const TextareaForm: React.FC = () => {
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
export default TextareaForm;