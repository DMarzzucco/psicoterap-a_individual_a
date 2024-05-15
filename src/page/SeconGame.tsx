import { useState } from "react";

function SGame() {
    const [sum, setSum] = useState<number>(0);
    const sumer = () => {
        setSum(prevSum => prevSum + 1)
    }
    const rester = () => {
        if (sum > 0) {
            setSum(prevRest => prevRest - 1)
        }
    }
    return (
        <section className="w-full h-screen flex flex-col justify-center items-center ">
            <div className=" flex flex-row justify-center items-center">
                <button onClick={rester}>-</button>
                <input className="text-black" type="text" value={sum} readOnly />
                <button onClick={sumer}>+</button>
            </div>
            <h1>HSHSHS</h1>
        </section>
    )
}

export default SGame;