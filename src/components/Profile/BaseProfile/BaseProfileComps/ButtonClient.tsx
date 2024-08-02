"use client";

import React from "react";
import { SchemaButton, CustomForm, TableComps } from "./base";
import { faAddressCard, faList } from "@/assets"
import { useAuth } from "@/context";

const ButtonClient: React.FC = () => {
    const { handleButton, state } = useAuth()
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-row justify-center items-center">
                <SchemaButton
                    title="Servicios"
                    icon={faAddressCard}
                    click={() => { handleButton({ type: "table" }) }}
                    context={state.table}
                >
                    {state.table && <TableComps />}
                </SchemaButton>
                <SchemaButton
                    title="Contactar"
                    icon={faList}
                    click={() => { handleButton({ type: "input" }) }}
                    context={state.form}
                >
                    {state.form && <CustomForm />}
                </SchemaButton>
            </div>
        </div>
    )
}

export default ButtonClient;