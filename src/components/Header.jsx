import { useState } from "react";
import { Link } from "react-router-dom";
import { Enlas } from "./Enlas";
function Header() {
    // importo las variables isOpen y setIsOpen 
    const [isOpen, setIsOpen] = useState(false);
    // creo una constante handleMouseEnter y handleMouseLeave para que cuando el usuario
    //  haga click en el boton 
    // se abra el menu y cuando el usuario haga click fuera del boton se cierre el menu.
    const handleMouseEnter = () => {
        setIsOpen(!isOpen);
    };
    // const handleMouseLeave = () => {
    //     setIsOpen(false);
    // }
    return (
        <header className="flex flex-col justify-between w-full">
            <div className="flex flex-row ">
                <div className="w-auto relative inline-block cursor-pointer bg-violet-600" >
                    <button className="w-10 h-10 flex items-center justify-center"
                        onClick={handleMouseEnter}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    {/* nav */}

                </div>
                <Link to='/'>
                    <img className="p-3" src="/vite.svg" alt="" />
                </Link>
            </div>
            {/* bt*/}

            {isOpen && (
                <nav className="h-full w-auto absolute z-10 mt-12 bg-slate-700
                flex flex-col justify-center items-center">
                    <ul className="flex flex-col  w-full
                     justify-center items-center h-80">
                        <Enlas src='/Secon' name='Secon' />
                        <Enlas src='/Third' name='Third' />
                        <Enlas src='/Form' name='Form' />
                        <Enlas src='/Calcu' name='Calcu' />
                    </ul>
                </nav>
            )}


        </header>
    )
}

export default Header;
