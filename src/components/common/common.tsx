import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import React from "react"
import { ButtonCloseProps, infProps, LinkFProps } from "@/ts"
import { faXmark } from "@/assets"


export const LinkFooter: React.FC<LinkFProps> = ({ path, title }) => {
    return (
        <Link
            href={path}
            className="p-2 font-bold"
        >
            <p>{title}</p>
        </Link>
    )
}
export const ItemsInf: React.FC<infProps> = ({ icon, title }) => {
    return (
        <div className="flex flex-row justify-start items-center p-1">
            <FontAwesomeIcon
                icon={icon}
                className="mr-2"
            />
            <p>{title}</p>
        </div>
    )
}
export const ButtonClose: React.FC<ButtonCloseProps> = ({ click }) => {
    return (
        <button onClick={click}>
            <FontAwesomeIcon icon={faXmark} />
        </button>
    )
}