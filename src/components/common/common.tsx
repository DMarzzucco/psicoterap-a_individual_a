import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "../../assets/img"
import { ButtonCloseProps, infProps, LinkFProps } from "../../interfaces";

const LinkFooter: React.FC<LinkFProps> = ({ path, title }) => {
    return (
        <Link
            className="p-2 font-bold "
            to={path}>
            <p>{title}</p>
        </Link>
    )
}
const ItemsInf: React.FC<infProps> = ({ icon, title }) => {
    return (
        <div className="flex flex-row justify-start items-center p-1">
            <FontAwesomeIcon className="mr-2" icon={icon} />
            <p>{title}</p>
        </div>
    )
}
const ButtonClose: React.FC<ButtonCloseProps> = ({ click }) => {
    return (
        <button onClick={click}>
            <FontAwesomeIcon icon={faXmark} />
        </button>
    )
}
export { default as Footer } from './footer'
export { default as Header } from './header'
export { ItemsInf, LinkFooter, ButtonClose }