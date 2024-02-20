import { useState } from "react";
import { Link } from "react-router-dom";
import { Enlas } from "./Enlas";
// import {Enlas} from '/index.js'
function Header() {
    // importo las variables isOpen y setIsOpen 
    const [isOpen, setIsOpen] = useState(false);
    // creo una constante handleMouseEnter y handleMouseLeave para que cuando el usuario
    //  haga click en el boton 
    // se abra el menu y cuando el usuario haga click fuera del boton se cierre el menu.
    const handleMouseEnter = () => {
        setIsOpen(true);
    };
    const handleMouseLeave = () => {
        setIsOpen(false);
    }
    return (
        <header className="flex flex-row justify-between w-full">
            <Link to='/'>
                <img className="p-3" src="/vite.svg" alt="" />
            </Link>
            {/* bt*/}
            <div className="w-auto relative
             inline-block 
             cursor-pointer
              bg-violet-600"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <button
                    onClick={handleMouseEnter}>
                    Menu</button>
                {/* nav */}
                {isOpen && (
                    <nav>
                        <ul className=" w-full bg-black p-20">
                            <li className="bg-blue hover:bg-green">
                                <Enlas src='/Secon' name='Secon' />
                            </li>
                            <li>
                                <Enlas src='/Third' name='Third' />
                            </li>
                        </ul>
                    </nav>
                )}
            </div>


        </header>
    )
}

export default Header;