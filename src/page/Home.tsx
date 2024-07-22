import { TitleComp } from "../components/assets/assets";
import { BaseButton } from "../components/common";

function Home() {
    return (
        <section className="flex flex-col justify-center items-center w-full h-screen">
            <div className="flex flex-col justify-center items-center">
                <TitleComp
                    header="Psicoterapia Individual"
                    sub="No hay salud, sin salud mental."
                />
                <BaseButton />
            </div>
        </section>
    )
}
export default Home;