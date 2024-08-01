import React from "react";
import "./style.css"

const LoaderComp: React.FC = () => {
    return (
        <div className="flex flex-col p-3 rounded-full justify-center items-center bg-lightDark">
            <span className="loader"></span>
        </div>
    )
}
export default LoaderComp;