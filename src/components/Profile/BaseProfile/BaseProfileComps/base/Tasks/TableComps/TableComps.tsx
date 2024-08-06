"use client";
import {Coms} from "@/components";
import { ButtonsTabs, TabsCont } from "./comp";
import { useAuth } from "@/context";

const It = new Coms()
export default function TableComps() {
    const { handleButton } = useAuth()
    return (
        <div className="rounded-lg bg-blackGrey p-1  my-3 absolute">
            <It.ButtonClose click={() => { handleButton({ type: "closeTable" }) }} />
            <div className="flex flex-col justify-center items-center  456:w-300 ">
                <ButtonsTabs />
                <TabsCont />
            </div>
        </div>
    )
}