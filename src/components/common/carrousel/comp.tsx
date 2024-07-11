import { faChevronLeft, faChevronRight } from "../../../assets/img"
import React, { useState } from "react"
import { BoxProp } from "../../../interfaces/interfaces"
import { slides } from "../../func/items"
import { SlidButton } from "../../assets/assets"

export const BoxSlider: React.FC<BoxProp> = ({ children }) => {
    const [curr, setCurr] = useState<number>(0)

    const Sld = (op: "next" | "prev") => {
        setCurr(prev => {
            const index = op === "next" ?
                (prev === slides.length - 1 ? 0 : prev + 1) :
                (prev === 0 ? slides.length - 1 : prev - 1)
            return index

        })
    }
    return (
        <div className="w-350 overflow-hidden relativ my-3 ">
            <div
                className="
             w-full flex flex-row justify-center items-center transition-transform ease-out 
             duration-700
             " style={{ transform: `translateX(-${curr * 30}%)` }}>
                {children}
            </div>
            <div className="relative inset-0">
                <SlidButton icon={faChevronLeft} click={() => { Sld("prev") }} />
                <SlidButton icon={faChevronRight} click={() => { Sld("next") }} />
            </div>
        </div>
    )
}