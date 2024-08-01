import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ActionProp } from "@/ts";

const SchemaButton: React.FC<ActionProp> = ({ click, icon, children, context, title }) => {
    return (
        <>
            {context ? null :
                <button
                    className="mx-2 flex flex-col justify-center items-center"
                    onClick={click}>
                    <FontAwesomeIcon icon={icon} />
                    <p className="text-xs">{title}</p>
                </button>
            }
            {context ? children : null}
        </>
    )
}
export default SchemaButton;

