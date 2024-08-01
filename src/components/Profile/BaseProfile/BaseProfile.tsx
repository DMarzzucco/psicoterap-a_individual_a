import { ProfileSchema, ButtonClient } from "./BaseProfileComps/Index"

const BaseProfile: React.FC = () => {
    return (
            <details className="my-2 bg-slate-400 rounded-lg ">
                <summary className="list-none shadow-lg shadow-black bg-slate-300 hover:bg-slate-400 rounded-lg">
                    <ProfileSchema />
                </summary>
                <div className="flex flex-row justify-center items-center  p-2 rounded-b-lg shadow-lg shadow-black">
                    <ButtonClient />
                </div>
            </details>
    )
}
export default BaseProfile;