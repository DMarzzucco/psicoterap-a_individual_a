import React from "react";
import { ButtonsTabs, TabsCont } from "./comp";

const Carousels: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <ButtonsTabs />
            <TabsCont />
        </div>
    )
}
export default Carousels