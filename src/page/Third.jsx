import { Card } from "../components/Enlas";
// import {Card} from "./components"
function Third() {
    return (
        <main>
            <section className="flex flex-col justify-center items-center">
                <h1>Third</h1>
                {/* searchbox */}
                <div className="grid grid-cols-3 justify-center items-center">
                    <Card
                        img='/vite.svg'
                        title='hola mundo'
                        prop='nsnsns'
                        description='qkqkqkqkq'
                    />
                    <Card
                        img='/react.svg'
                        title='hola mundo'
                        prop='nsnsns'
                        description='qkqkqkqkq'
                    />
                    <Card
                        img='/vite.svg'
                        title='hola mundo'
                        prop='nsnsns'
                        description='qkqkqkqkq'
                    />
                </div>
            </section>

        </main>)
}
export default Third;