import React from "react"
import { slides } from "../../func/items";
import { useComps } from "../../../context/context"

export const ButtonsTabs: React.FC = () => {
    const { curr, setCurr } = useComps()
    return (
        <div className="flex flex-row justify-center items-center">
            {slides.map((slide, index) => (
                <button
                    key={slide.id}
                    className={curr === index ? "active:" : ""}
                    onClick={() => setCurr(index)}
                >
                    {slide.title}
                </button>
            ))}
        </div>
    )
}
export const TabsCont: React.FC = () => {
    const { curr } = useComps()
    return (
        <div className="flex flex-col justify-center items-center">
            {slides.map((slide, index) => curr === index && (
                <div key={slide.id}>
                    <h2>{slide.title}</h2>
                    <ul>
                        {Object.keys(slide).map((key) => {
                            if (key.startsWith("text")) {
                                return <li key={key}>{slide[key]}</li>
                            }
                            return null
                        })}
                    </ul>
                </div>
            ))}
        </div>
    )
}