import { Link } from "react-router-dom"

export const Enlas = ({ src, name }) => {
    return (
        <li className="m-1 w-full grid justify-center items-center">
            <Link className=" w-full bg-black hover:bg-white
             text-white hover:text-black p-8"
                to={src}>{name}</Link>
        </li>
    )
}
export const CImg = ({ src, alt, onClick }) => {
    return (
        <img className="m-3 bg- p-4 bg-teal-950 hover:bg-white"
            src={src} alt={alt} onClick={onClick} />
    )
}

import { useState } from "react"

export const Card = ({ title, img, prop, description }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className={
            `bg-black w-64 h-96 flex flex-col
             justify-center items-center m-3
             ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img className="w-16 h-16" src={img} alt='' />
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-2xl">{title}</h2>
                <p>{description}</p>
                {isHovered && <p>{prop}</p>}
            </div>"

        </div>

    )
}
export const BotonCOunter = ({ click, tip }) => {
    return (
        <div>
            <button className=" bg-slate-700 
            w-20 h-10 grid justify-center items-center"
                onClick={click}>
                <p>{tip}</p>
            </button>
        </div>
    )
}

export const CalBt = ({ click, tip }) => {
    return (
        <>
            <button onClick={click} className="
            h-20 w-auto border border-black">
                {tip}
            </button>
        </>
    )
}