import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments, FaUsers } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";
import { IconContext } from "react-icons";
import { Link } from "@nextui-org/react";


function SideNavbar() {
return (
    <div>
        <Disclosure as="nav">
            <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-mint hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
                <GiHamburgerMenu
                    className="block md:hidden h-6 w-6"
                    aria-hidden="true"
                />
            </Disclosure.Button>
            <div className="p-6 w-1/2 h-screen bg-rose z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                <div className="flex flex-col justify-start item-center">
                    <h1 className="text-base text-center cursor-pointer font-bold text-white border-b  pb-4 w-full">
                        Virtual D
                    </h1>
                    <div className=" my-4 border-b border-rose-100 pb-4">
                    <Link href="/organisationsViewer" className="text-white">
                    <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-mint p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            <FaUsers />
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">
                                    Orgianisations
                            </h3>
                    </div>
                    </Link>

                        <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-mint p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                                Profile
                            </h3>
                        </div>
                        <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-mint p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            <FaRegComments className="text-2xl text-gray-600 group-hover:text-white " />
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                                Comments
                            </h3>
                        </div>
                        <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-mint p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                                Analytics
                            </h3>
                        </div>
                        <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-mint p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white " />
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                                Messages
                            </h3>
                        </div>
                        <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-mint p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                            <MdOutlineIntegrationInstructions className="text-2xl text-gray-600 group-hover:text-white " />
                            <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                                Integration
                            </h3>
                        </div>
                    </div>
                    {/* setting  */}
                    
                    {/* logout */}
            
                </div>
            </div>
        </Disclosure>
    </div>
);
}

export default SideNavbar;