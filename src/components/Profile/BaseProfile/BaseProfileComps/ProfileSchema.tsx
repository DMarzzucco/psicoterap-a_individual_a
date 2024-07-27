import { profileLogo } from "../../../../assets/img"

const Profile: React.FC = () => {
    return (
        <div className="flex p-3 flex-row justify-start items-center w-auto cursor-pointer ">
            <img src={profileLogo} alt=""
                width={60}
                className="rounded-full mx-2"
            />
            <div className=" flex flex-col justify-start items-start">
                <h1 className="text-xl text-slate-800 ">
                    Nancy Maricel Sovran
                </h1>
                <p className="text-xs text-slate-600">
                    Licenciada en Piscología
                </p>
            </div>
        </div>
    )
}
export default Profile;