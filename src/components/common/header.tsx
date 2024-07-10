import { headerlogo } from "../../assets/img";

function Header() {
    return (
        <header className="flex justify-center items-center w-full">
            <img width={305} height={70} src={headerlogo} alt="" />
        </header>
    )
}
export default Header;