import { profileLogo } from "../../../assets/img";
import { Profile } from "../../assets/assets";
import { ButtonClient } from "../../assets/actions/ButtonAction";

const BaseButton: React.FC = () => {
    return (
        <>
            <details>
                <summary className="list-none">
                    <Profile
                        img={profileLogo}
                        header="Nancy Maricel Sovran"
                        sub="Licenciada en Piscología"
                    />
                </summary>
                <div className="flex flex-row justify-center items-center">
                    <ButtonClient/>
                </div>
            </details>
        </>
    )
}
export default BaseButton;