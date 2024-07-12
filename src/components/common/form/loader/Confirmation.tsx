import React from "react";

const Confirmation: React.FC = () => {
    return (
        <div className="bg-lightDark w-300 flex flex-col justify-center items-center rounded-lg border border-slate-500 text-slate-300 p-4 -mt-10 absolute">
            <h1 className="m-0 font-bold"> Mensaje Enviado</h1>
            <p className="p-5">Gracias por contactarse <br /> te respondere a brevedad</p>
        </div>
    )
}
export default Confirmation