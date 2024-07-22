import React from "react";
import { useComps } from "../../../context/context";
import { CustomForm, TableComps } from "../../common";

export interface ActionProp {
    click: () => void;
    title: string;
    children: React.ReactNode
    context: Boolean
}
export const ButtonAction: React.FC<ActionProp> = ({ click, title, children, context }) => {
    return (
        <>
            {context ? null : <button onClick={click}>{title}</button>}
            {context ? children : null}
        </>
    )
}
export const ButtonClient: React.FC = () => {
    const { handleButton, openForm, table } = useComps()
    return (
        <div className="flex justify-center items-center">
                <div className="flex flex-row justify-center items-center">
                    <ButtonAction
                        title="Form"
                        click={() => { handleButton('input') }}
                        context={openForm}
                    >
                        {openForm && <CustomForm/>}
                    </ButtonAction>
                    <ButtonAction
                        title="Table"
                        click={() => { handleButton('table') }}
                        context={table}
                    >
                        {table && <TableComps/>}
                    </ButtonAction>

                </div> 
        </div>
    )
}