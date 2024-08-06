import React from "react";

const TitleComp: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-start m-3">
            <h1 className=" font-bold 456:text-4xl ">
                Psicoterapia Individual
            </h1>
            <p className=" 456:text-xl font-sans text-slate-300">
                No hay salud, sin salud mental.
            </p>
        </div>
    )
}

export default TitleComp;