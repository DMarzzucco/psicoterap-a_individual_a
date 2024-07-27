import { ProfileSchema, ButtonClient } from "./BaseProfileComps/Index"

const BaseProfile: React.FC = () => {
    return (
        <>
            <details>
                <summary className="list-none">
                    <ProfileSchema />
                </summary>
                <div className="flex flex-row justify-center items-center">
                    <ButtonClient />
                </div>
            </details>
        </>
    )
}
export default BaseProfile;