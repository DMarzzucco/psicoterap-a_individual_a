import React from "react";

const Confirmation: React.FC = () => {
    return (
        <div className="bg-lightDark w-250 flex flex-col justify-center items-center rounded-lg border border-slate-500 text-slate-300 p-4 -mt-10 absolute">
            <h1 className="m-0 text-2xl font-bold"> Mensaje Enviado</h1>
            <div className="flex justify-center items-center">
                <p className="p-5 text-center">Gracias por contactarse <br /> te respondere a breve.</p>
            </div>
        </div>
    )
}
export default Confirmation