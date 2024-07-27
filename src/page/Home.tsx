import { TitleComp, BaseProfile } from "../components/Profile";

function Home() {
    return (
        <section className="flex flex-col justify-center items-center w-full h-screen">
            <div className="flex flex-col justify-center items-center">
                <TitleComp />
                <BaseProfile />
            </div>
        </section>
    )
}
export default Home;