import React from "react";
import "./style.css"

const LoaderComp: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-lightDark">
            <span className="loader"></span>
        </div>
    )
}
export default LoaderComp;