import React from "react";
import { useComps } from "../../../../context/context";
import { SchemaButton, CustomForm, TableComps } from "./base";
import { faAddressCard, faList } from "../../../../assets/img"

const ButtonClient: React.FC = () => {
    const { handleButton, openForm, table } = useComps()
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-row justify-center items-center">
                <SchemaButton
                    title="Servicios"
                    icon={faAddressCard}
                    click={() => { handleButton('table') }}
                    context={table}
                >
                    {table && <TableComps />}
                </SchemaButton>
                <SchemaButton
                    title="Contactar"
                    icon={faList}
                    click={() => { handleButton('input') }}
                    context={openForm}
                >
                    {openForm && <CustomForm />}
                </SchemaButton>
            </div>
        </div>
    )
}

export default ButtonClient;