import { profileLogo } from "../assets/img";
import { Profile, TitleComp } from "../components/assets/assets";
import  Carousels  from "../components/common/carrousel/carousel";

function Home() {
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
                <Carousels/>
            </div>
        </section>
    )
}
export default Home;