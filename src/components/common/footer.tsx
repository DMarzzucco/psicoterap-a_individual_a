import { faEnvelope, faLocationDot, faPhone, headerlogo } from "../../assets/img"
import { ItemsInf, LinkFooter } from "./common";

function Footer() {
    return (
        <footer className="flex bg-lightDark text-slate-400 flex-col justify-center items-center w-full ">
            <div className="grid grid-cols-2 py-3 justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <figure>
                        <img width={290} src={headerlogo} alt="" />
                    </figure>
                    <div className="flex flex-row justify-center items-center">
                        <LinkFooter
                            path="https://github.com/DMarzzucco/sorciere.git"
                            title="Source"
                        />
                        <LinkFooter
                            path="https://systemarzz.netlify.app/"
                            title="SysteMarzz"
                        />
                    </div>
                </div>
                <div className="border-l border-slate-500 pl-2 flex flex-col justify-start items-center">
                    <h2 className="font-bold text-2xl p-1">CONTACTO</h2>
                    <div className="flex flex-col  w-auto ">
                        <ItemsInf
                            icon={faPhone}
                            title="+54 9 3463 41-1187"
                        />
                        <ItemsInf
                            icon={faLocationDot}
                            title="Alvear 686 - Venado Tuerto, Santa Fe, Argentina"
                        />
                        <ItemsInf
                            icon={faEnvelope}
                            title="maricelsovran@gmail.com"
                        />

                    </div>
                </div>
            </div>
            <div className="grupo3">
                <small>&copy; 2023 <b>Psicoterapia Individual-SysteMarzz</b> - Todos los Derechos Reservados. </small>
            </div>
        </footer>
    )
}
export default Footer;