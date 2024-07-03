
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SlSocialYoutube } from "react-icons/sl";
const Footer = () => {
    return (
        <div className="mt-10">
            <footer className="px-4 divide-y bg-[#020043] text-gray-100 ">
                <div className="container flex flex-col justify-between py-32 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3 ">
                        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">

                            <div> <img className="" src="../src/assets/logo light.png" alt="" />
                                <p className="mt-8 text-gray-400">123 Main Street Anytown, USA Postal Code: 12345</p>
                                <div className="mt-5 text-gray-400">
                                    <p>Support: support@oyolloo.com</p>
                                    <p>(Available : 10:00am to 07:00pm)</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4 pt-16">
                        <div className="space-y-3 text-gray-300">
                            <h3 className="tracking-wide">Home</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">About us</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Success Page</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Terms and condition</a>
                                </li>

                            </ul>
                        </div>
                        <div className="space-y-3 text-gray-300">
                            <h3 className="tracking-wide">Services</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Scheduling</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Patient Portal</a>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3 text-gray-300">
                            <h3 className="">Scheduling</h3>
                            <ul className="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#">Resident Portal</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Success Page</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#">Terms and condition</a>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <div className=" text-gray-300">Follow Us</div>
                            <div className="flex justify-start space-x-3">
                            <CiFacebook className="text-2xl"/>
                            <FaInstagram className="text-2xl"/>
                            <CiLinkedin className="text-2xl"/>
                            <SlSocialYoutube className="text-2xl"/>
                            </div>

                            <p className="text-gray-400">
                            @docplus 2024
                            </p>
                        </div>
                    </div>
                </div>
                <div className="py-6 text-sm text-center text-gray-400">© 2024 DOC+ Co. All rights reserved.</div>
            </footer>
        </div>
    );
};

export default Footer;