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
import Logo from "@/components/images/LogoTextRight.png";
import Image from "next/image";


interface Element {
  id: number;
  title: string;
  icon: JSX.Element;
  link: string;
}

interface Props {
  elements: Element[];
}

function SideNavbar({ elements }: Props) {
  return (
    <div className="mt-11">
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-cyan-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-cyan z-20 fixed top-0 -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200 mt-7">
          <div className="flex flex-col justify-start item-center">
            <div className="my-4 border-b border-rose-100 pb-4">
              {elements.map((element) => (
                <div key={element.id}>
                  <Link
                    href={element.link}
                    className="text-black w-full hover:bg-cyan-800 p-2 rounded-md group cursor-pointer hover:shadow-lg"
                  >
                    <div className="flex mb-2 justify-start items-center gap-4 pl-5 ">
                      {element.icon}
                      <h3 className="text-base text-gray-800 group-hover:text-black font-semibold">
                        {element.title}
                      </h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
