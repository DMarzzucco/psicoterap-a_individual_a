import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss"

export const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button className="slick-next" onClick={onClick}>
            Next
        </button>
    );
};

// Componente para el botón de anterior
export const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
        <button className="slick-prev" onClick={onClick}>
            Prev
        </button>
    );
};