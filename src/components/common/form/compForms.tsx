import { useComps } from "../../../context/context"

export const FormButton: React.FC = () => {
    const { handleButton } = useComps()
    return (
        <button onClick={() => { handleButton("close") }}>
            cerrar
        </button>
    )
}
export const inputForm: React.FC = () => {
    return (
        <input
            type="text"
            // onChange={}
            name=""
            placeholder=""
            required
        />
    )
}