import { ButtonsTabs, TabsCont } from "./comp";
import { useComps } from "../../../context/context";

function TableComps() {
    const { handleButton } = useComps()
    return (
        <div className="rounded-lg bg-blackGrey p-1  my-3 absolute">
            <button onClick={() => { handleButton("closeTable") }}>Close</button>
            <div className="flex flex-col justify-center items-center  ">
                <ButtonsTabs />
                <TabsCont />
            </div>
        </div>
    )
}
export default TableComps