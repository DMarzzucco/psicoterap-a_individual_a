import { faPhone, faLocationDot, faEnvelope, headerlogo } from "@/assets"
import Image from "next/image"
import Coms from "./common"
import Link from "next/link"

const It = new Coms()

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center w-full bg-lightDark text-slate-400">
            <div className="grid grid-cols-2 py-3 justify-center items-center 456:flex 456:flex-col">
                <figure className="hidden 456:block">
                    <Image width={240} src={headerlogo} alt="" />
                </figure>

                <div className="border-r 456:border-none border-slate-500 pr-2 flex flex-col justify-start items-center">
                    <h2 className="font-bold text-2xl p-1">CONTACTO</h2>
                    <div className="flex flex-col  w-auto ">
                        <It.ItemsInf
                            icon={faPhone}
                            title="+54 9 3463 41-1187"
                        />
                        <It.ItemsInf
                            icon={faLocationDot}
                            title="Alvear 686 - Venado Tuerto, Santa Fe, Argentina"
                        />
                        <It.ItemsInf
                            icon={faEnvelope}
                            title="maricelsovran@gmail.com"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <figure className=" 456:hidden">
                        <Image width={290} src={headerlogo} alt="" />
                    </figure>
                    <div className="flex flex-row justify-center items-center">
                        <It.LinkFooter
                            path="https://www.linkedin.com/in/lic-nancy-maricel-sovr%C3%A1n-575609227/"
                            title="Linkedin"
                        />
                    </div>
                </div>
            </div>
            <div className="grupo3">
                <small>&copy; 2023 Psicoterapia Individual <Link href={"https://systemarzz.netlify.app/"}><b> SysteMarzz</b></Link> - Todos los Derechos Reservados. </small>
            </div>
        </footer>
    )
}