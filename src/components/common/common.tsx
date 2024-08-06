import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import React from "react"
import { ButtonCloseProps, infProps, LinkFProps } from "@/ts"
import { faXmark } from "@/assets"

export default class Coms {

    LinkFooter: React.FC<LinkFProps> = ({ path, title }) => {
        return (
            <Link
                href={path}
                className="p-2 font-bold 456:text-xs"
            >
                <p>{title}</p>
            </Link>
        )
    }
    ItemsInf: React.FC<infProps> = ({ icon, title }) => {
        return (
            <div className="flex flex-row justify-start items-center p-1 456:text-xs">
                <FontAwesomeIcon
                    icon={icon}
                    className="mr-2"
                />
                <p>{title}</p>
            </div>
        )
    }
    ButtonClose: React.FC<ButtonCloseProps> = ({ click }) => {
        return (
            <button onClick={click}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        )
    }
}