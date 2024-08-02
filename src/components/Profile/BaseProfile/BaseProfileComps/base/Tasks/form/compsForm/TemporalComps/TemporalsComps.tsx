import { useAuth } from "@/context";
import { Confirmation, LoaderComp } from "./index"

const TemporalsComps: React.FC = () => {
    const { state } = useAuth()
    return (
        <div className=" absolute flex flex-col justify-center items-center">
            {state.loading && <LoaderComp />}
            {state.confirmation && <Confirmation />}
        </div>
    )
}
export default TemporalsComps;