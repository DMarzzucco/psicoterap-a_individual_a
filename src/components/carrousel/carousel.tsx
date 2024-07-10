import React, { useState } from "react";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss"
import "./carousel.scss"

const Carousels: React.FC = ({ }) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    
    const slides = ["slide 1", "slide 2", "slide 3"]

    const slideArrow = (op: "next" | "prev") => {
        setCurrentSlide(prev => {
            const index = op === "next" ?
                (prev === slides.length - 1 ? 0 : prev + 1) :
                (prev === 0 ? slides.length - 1 : prev - 1)
            return index
        })
    }
    return (
        <div className="carousel">
            <div className="slides">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={index === currentSlide ? "slide active" : "slide"}>
                        {slide}
                    </div>
                ))}
            </div>
            <div>
                <button className="arrow next" onClick={() => (slideArrow('prev'))}>Prev</button>
                <button className="arrow prev" onClick={() => (slideArrow('next'))}>Next</button>
            </div>
        </div>
    )
}
export default Carousels