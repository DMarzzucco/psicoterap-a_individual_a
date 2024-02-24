import { Card } from "../components/Enlas";
// import {Card} from "./components"
function Third() {
    return (
        <main className="h-auto py-10">
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
            {/*  */}
            <section className="flex justify-center items-center">
                {/* selecionar */}
                <div className="flex flex-col ">
                    <option>nada</option>
                    <option>fruta</option>
                    <option>mierda</option>
                    <option>que se yo</option>
                    <hr />
                    <option> querer estar tranquilo</option>
                    <option>estabilidad</option>
                    <option>paz</option>

                </div>            </section>

        </main>)
}
export default Third;