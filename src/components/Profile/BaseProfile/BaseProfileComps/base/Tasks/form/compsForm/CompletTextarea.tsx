const TextareaForm: React.FC = () => {
    return (
        <div className="flex flex-col items-start">
            <label htmlFor="message" className="font-bold 456:text-xs">Mensaje</label>
            <textarea
                className="p-2 rounded-lg my-2 border border-slate-400 text-slate-300 456:text-xs"
                name="message"
                placeholder="Mensaje"
                required
            />
        </div>
    )
}
export default TextareaForm;