import { profileLogo } from "../assets/img";
import { Profile, TitleComp } from "../components/assets/assets";
import { Form } from "../components/common";
import Carousels from "../components/common/carrousel/carousel";
import { useComps } from "../context/context";

function Home() {
    const { handleButton, openForm } = useComps()
    return (
        <section className="flex flex-col justify-center items-center w-full h-screen">
            <div className="flex flex-col justify-center items-center">
                <TitleComp
                    header="Psicoterapia Individual"
                    sub="No hay salud, sin salud mental."
                />
                <Profile
                    img={profileLogo}
                    header="Nancy Maricel Sovran"
                    sub="Licenciada en Piscología"
                />
                <Carousels />
                <button onClick={() => { handleButton("open") }}> Open Form</button>
                {openForm ? <Form /> : null}
            </div>
        </section>
    )
}
export default Home;