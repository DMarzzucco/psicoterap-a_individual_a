import { useState } from "react";
import { BotonCOunter } from "../components/Enlas";

function Form() {
    const [counter, SetCounter] = useState(0);
    const increment = () => SetCounter(counter + 1);
    const decrement = () => SetCounter(counter - 1);
    const multiply = () => SetCounter(counter * 2);
    const divide = () => SetCounter(counter / 2);
    const reset = () => SetCounter(0);
    return (
        <main className="flex flex-col justify-center items-center">
            <section className="flex flex-col justify-center items-center">
                <h1 className="text-7xl">Form</h1>

                <div className="flex flex-col justify-center
                 items-center bg-white text-black p-10">
                    <div className="flex flex-row justify-center items-center">
                        <BotonCOunter
                            click={increment}
                            tip='+'
                        />
                        <div className="w-10 h-10 text-center border border-spacing-1 
                        border-black flex justify-center items-center">
                            {counter}
                        </div>
                        <BotonCOunter
                            click={decrement}
                            tip='-'
                        />
                    </div>
                    <button onClick={reset}
                        className=" bg-slate-600 p-3 w-full"
                    >
                        CE
                    </button>
                    <button onClick={multiply}
                        className=" bg-slate-600 p-3 w-full"
                    >
                        X
                    </button>
                    <button onClick={divide}
                        className=" bg-slate-600 p-3 w-full"
                    >
                        %
                    </button>
                </div>
            </section>
        </main>
    )
}
export default Form;