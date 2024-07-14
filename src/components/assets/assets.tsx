import React from "react";
import { gridProps, infProps, LinkFProps, SlideBtn } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const TitleComp: React.FC<gridProps> = ({ header, sub }) => {
    return (
        <div className="flex flex-col justify-center items-start">
            <h1 className="text-7xl font-bold">{header}</h1>
            <p className="text-xl ">{sub}</p>
        </div>
    )
}

export const Profile: React.FC<gridProps> = ({ img, header, sub }) => {
    return (
        <div className="flex p-3 bg-slate-300 rounded-2xl flex-row justify-start items-center w-auto">
            <img src={img} alt=""
                width={60}
                className="rounded-full mx-2"
            />
            <div className=" flex flex-col justify-start items-start">
                <h1 className="text-xl text-slate-800 ">{header}</h1>
                <p className="text-xs text-slate-600">{sub}</p>
            </div>
        </div>
    )
}
export const LinkFooter: React.FC<LinkFProps> = ({ path, title }) => {
    return (
        <Link
            className="p-2 font-bold "
            to={path}>
            <p>{title}</p>
        </Link>
    )
}
export const ItemsInf: React.FC<infProps> = ({ icon, title }) => {
    return (
        <div className="flex flex-row justify-start items-center p-1">
            <FontAwesomeIcon className="mr-2" icon={icon} />
            <p>{title}</p>
        </div>
    )
}
//////////