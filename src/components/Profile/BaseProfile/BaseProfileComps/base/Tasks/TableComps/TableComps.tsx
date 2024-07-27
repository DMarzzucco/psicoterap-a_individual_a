import { ButtonsTabs, TabsCont } from "./comp";
import { useComps } from "../../../../../../../context/context";
import { ButtonClose } from "../../../../../../common/common";

function TableComps() {
    const { handleButton } = useComps()
    return (
        <div className="rounded-lg bg-blackGrey p-1  my-3 absolute">
            <ButtonClose click={() => { handleButton("closeTable") }} />
            <div className="flex flex-col justify-center items-center  ">
                <ButtonsTabs />
                <TabsCont />
            </div>
        </div>
    )
}
export default TableComps