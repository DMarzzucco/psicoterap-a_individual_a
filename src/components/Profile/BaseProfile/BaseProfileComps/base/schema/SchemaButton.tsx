import { ActionProp } from "../../../../../../interfaces/interfaces"

const SchemaButton: React.FC<ActionProp> = ({ click, title, children, context }) => {
    return (
        <>
            {context ? null : <button onClick={click}>{title}</button>}
            {context ? children : null}
        </>
    )
}
export default SchemaButton;

