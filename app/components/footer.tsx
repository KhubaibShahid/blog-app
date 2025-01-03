import { BsFacebook, BsTwitterX, BsInstagram, BsLinkedin, BsTelephoneFill, BsPinMapFill } from "react-icons/bs";

import { CiMail } from "react-icons/ci";

export default function FooterApp() {
    return (
        <div className="footer w-full min-h-[300px] bg-gray-800 p-10">
            <div className="main flex flex-wrap gap-10 justify-evenly items-center">
                <div className="font-bold text-white text-4xl">Okay</div>
                <div className="flex flex-col gap-5 text-center">
                    <div className="text-white">About</div>
                    <div className="text-white">Contact</div>
                    <div className="text-white">Terms of Service</div>
                    <div className="text-white">Privacy Policy</div>
                </div>
                <div className="flex flex-col gap-5 text-center">
                    <div className="text-white flex gap-2 justify-center items-center"><BsTelephoneFill /> +123-456-789</div>
                    <div className="text-white flex gap-2 items-center justify-center"><BsPinMapFill /> ABC Area Block XYZ</div>
                    <div className="text-white flex gap-2 items-center justify-center"><CiMail /> support@example.com</div>

                </div>
                <div className="flex gap-5 mt-5">
                    <div className="text-white"><BsFacebook size={30} /></div>
                    <div className="text-white"><BsTwitterX size={30} /></div>
                    <div className="text-white"><BsInstagram size={30} /></div>
                    <div className="text-white"><BsLinkedin size={30} /></div>
                </div>
            </div>
        </div>
    )
}