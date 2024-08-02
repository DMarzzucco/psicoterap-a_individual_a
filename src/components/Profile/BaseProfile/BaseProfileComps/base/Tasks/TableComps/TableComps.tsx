"use client";
import { ButtonClose } from "@/components/common/common";
import { ButtonsTabs, TabsCont } from "./comp";
import { useAuth } from "@/context";

function TableComps() {
    const { handleButton } = useAuth()
    return (
        <div className="rounded-lg bg-blackGrey p-1  my-3 absolute">
            <ButtonClose click={() => { handleButton({ type: "closeTable" }) }} />
            <div className="flex flex-col justify-center items-center  ">
                <ButtonsTabs />
                <TabsCont />
            </div>
        </div>
    )
}
export default TableComps