"use client";
import { slides } from "@/components"
import { useAuth } from "@/context"
import React from "react"

export const ButtonsTabs: React.FC = () => {
    const { curr, setCurr } = useAuth()
    return (
        <div className="flex flex-row justify-center items-center bg-blackGrey">
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
    const { curr } = useAuth()
    return (
        <div className="flex flex-col justify-center items-center bg-slate-300 text-slate-800 w-full h-200">
            {slides.map((slide, index) => curr === index && (
                <div key={slide.id}>
                    <h2 className="text-2xl font-bold">{slide.title}</h2>
                    <ul className="list-disc my-1 w-200">
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

