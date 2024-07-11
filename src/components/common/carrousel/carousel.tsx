import React from "react";
import { BoxSlider } from "./comp";

export interface SlideProps {
    id: number;
    title: string;
    text1: string;
    text2: string;
    text3?: string;
}
export const slides: SlideProps[] = [
    {
        id: 0,
        title: "Terapia Individual",
        text1: "Terapia para Adolescentes",
        text2: "Terapia para Adultos",
        text3: "Terapia para Personas Mayores"
    },
    {
        id: 1,
        title: "Asesoramiento Psicológico",
        text1: "Orientación vocacional y profesional",
        text2: "Asesoramiento en casos de estrés y ansiedad",
        text3: "Manejo de la depresión"
    },
    {
        id: 2,
        title: "Modalidades de Atención",
        text1: "Consultas presenciales",
        text2: "Consultas remotas (videollamadas)",
    },
    // 
    

]

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