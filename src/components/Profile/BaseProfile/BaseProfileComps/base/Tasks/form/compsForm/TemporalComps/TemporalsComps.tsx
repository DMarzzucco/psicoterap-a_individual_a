import { useAuth } from "@/context";
import { Confirmation, LoaderComp } from "./index"

const TemporalsComps: React.FC = () => {
    const { sending, messageSent } = useAuth()
    return (
        <div className=" absolute flex flex-col justify-center items-center">
            {sending && <LoaderComp />}
            {messageSent && <Confirmation />}
        </div>
    )
}
export default TemporalsComps;