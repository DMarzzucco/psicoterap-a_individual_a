import React, { useState } from 'react';
import { CalBt } from '../components/Enlas';

function Calcul() {
    const [num, setNum] = useState(
        { oper: '', result: '' }
    );
    const escrito = (event) => {
        if (num.oper.length >= 10) return
        setNum({
            ...num, oper: `${num.oper}` +
                event.target.innerText
        })
    }
    const delet = () => { setNum({ oper: num.oper.slice(0, -1) }) }
    const reset = () => { setNum({ oper: '', result: '' }) }
    const resultado = () => {
        try {
            const showResult = eval(num.oper)
            setNum({ oper: showResult, result: showResult })
            console.log(showResult)
        } catch (error) {
            setNum({
                oper: 'Esta bien lo que te hace tu esposo el ruso, ahora esta con tu vieja',
                result: 'Error'
            })
        }

    }
    return (
        <main className='h-100 flex flex-col justify-center items-center p-20'>
            <div className='bg-blue-700 w-72 h-100 p-10 flex justify-center items-center
            text-center'>
                <span className='bg-blue-700 text-white w-full h-auto'>{num.oper}</span>

            </div>
            <div className=' flex  flex-col justify-center items-center'>
                {/* input */}
                {/*  */}
                <div className="w-72  grid grid-cols-2 bg-red-700 ">
                    {/* reset y nums */}
                    <div className='flex flex-col bg-neutral-700'>
                        {/* reset */}
                        <div className='grid grid-cols-3'>
                            <CalBt tip={'%'} click={escrito} />
                            <CalBt tip={'CE'} click={reset} />
                            <CalBt tip={'C'} />
                        </div>
                        {/* nums */}
                        <div className='grid grid-cols-3'>
                            <CalBt tip={'7'} click={escrito} />
                            <CalBt tip={'8'} click={escrito} />
                            <CalBt tip={'9'} click={escrito} />
                            <CalBt tip={'4'} click={escrito} />
                            <CalBt tip={'5'} click={escrito} />
                            <CalBt tip={'6'} click={escrito} />
                            <CalBt tip={'1'} click={escrito} />
                            <CalBt tip={'2'} click={escrito} />
                            <CalBt tip={'3'} click={escrito} />
                            <CalBt tip={'.'} click={escrito} />
                            <CalBt tip={'0'} click={escrito} />
                            <CalBt tip={','} click={escrito} />

                        </div>
                    </div>
                    {/* ecuaciones */}
                    <div className='flex flex-col m-0 p-0 bg-amber-500'>
                        <CalBt tip={'del'} click={delet} />
                        <CalBt tip={'/'} click={escrito} />
                        <CalBt tip={'*'} click={escrito} />
                        <CalBt tip={'-'} click={escrito} />
                        <CalBt tip={'+'} click={escrito} />
                    </div>
                </div>
                <div className='w-72 flex justify-center items-center bg-slate-700'>
                    {/* <CalBt tip={'='} click={resultado} /> */}
                    <button className='w-full bg-black' onClick={resultado}>
                        =                        
                    </button>

                </div>
            </div>

        </main>
    );
}

export default Calcul;
