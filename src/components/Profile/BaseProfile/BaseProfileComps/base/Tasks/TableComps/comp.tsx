"use client";

import Object_date from "@/components/DTO/items";
import { useAuth } from "@/context"
import React from "react"

const dates = new Object_date()

export const ButtonsTabs: React.FC = () => {
    const { curr, setCurr } = useAuth()
    return (
        <div className="flex flex-row justify-center items-center bg-blackGrey">
            {dates.slides.map((slide, index) => (
                <button
                    key={slide.id}
                    onClick={() => setCurr(index)}
                    className="456:text-xs"
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
            {dates.slides.map((slide, index) => curr === index && (
                <div key={slide.id}>
                    <h2 className="text-2xl 456:text-xl font-bold">{slide.title}</h2>
                    <ul className="list-disc my-1 w-200 456:text-xs">
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

