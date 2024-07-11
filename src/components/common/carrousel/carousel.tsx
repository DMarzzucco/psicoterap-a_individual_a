import React from "react";
import { BoxSlider } from "./comp";
import { slides } from "../../func/items";

const Carousels: React.FC = () => {
    return (
        <BoxSlider slides={slides}>
            {slides.map((slide) => (
                <div
                    key={slide.id}
                    className="flex p-3 w-full m-2 justify-center items-center bg-slate-600"
                >
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-xl font-bold py-2">{slide.title}</h2>
                        <ul className="list-disc text-xs">
                            <li>{slide.text1}</li>
                            <li>{slide.text2}</li>
                            {slide.text3 && <li>{slide.text3}</li>}
                        </ul>
                    </div>
                </div>
            ))}
        </BoxSlider>
    )
}
export default Carousels