import react, { useState } from "react";
import { CImg } from "../components/Enlas";
function Secon() {
    const [modalImage, setModalImage] = useState(null);
    const openModal = (image) => {
        setModalImage(image);
    }
    const closeModal = () => {
        setModalImage(null);
    }
    return (
        <main className="flex flex-col justify-center items-center">
            <section className="flex flex-col justify-center items-center">
                <h1 className="text-7xl text-center">Galeria <br /> de <br /> IMagenes </h1>
                <div className="flex flex-col justify-center items-center">
                    <div className="grid grid-cols-2 justify-center items-center p-4">
                        <CImg src="/vite.svg" alt="img1" onClick={() => openModal('/vite.svg')} />
                        <CImg src="/react.svg" alt="img2" onClick={() => openModal('/react.svg')} />
                        <CImg src="/vite.svg" alt="img3" onClick={() => openModal('/vite.svg')} />
                        <CImg src="/react.svg" alt="img4" onClick={() => openModal('/react.svg')}
                        />
                    </div>
                    {modalImage && (
                        <div className=" bg-black" onClick={closeModal}>
                            <CImg src={modalImage} alt="imagen en modal" />
                        </div>
                    )}
                </div>

            </section>
        </main>
    )
}
export default Secon;

