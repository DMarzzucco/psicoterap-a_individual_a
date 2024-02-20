import { Link } from "react-router-dom"

export const Enlas = ({ src, name }) => {
    return (
        <Link to={src}>{name}</Link>
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