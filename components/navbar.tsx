/* eslint-disable react/jsx-key */
import {
  Button,
  Kbd,
  Link,
  Input,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";
import { FaBell } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

import { IoMdArrowDropdown } from "react-icons/io";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";

import Image from "next/image";
import Logo from "@/components/images/LogoTextRight.png";

import Profile from "./profileIcon";
import { redirect } from "next/navigation";
import Notification from "./notification";
import MyDropdown from "./DropDownMenu";
import { useState } from "react";

//todo: add profile icon
export const Navbar = (user:any) => {
  switch(user){
    case "donor:":
        return (
        <NextUINavbar maxWidth="full" position="sticky" className="bg-blue-300">
          <NavbarContent
            className="basis-1/5 sm:basis-full flex-none"
            justify="start"
          >
            <NavbarBrand className=" max-w-full">
              <NextLink className="flex-start" href="/requestsFirstPage">
            <Image src={Logo} className="mt-3" alt="Logo" width={100} height={100}></Image>

              </NextLink>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
            <NavbarMenuItem>
              <MyDropdown
                icon={<FaBell></FaBell>}
                items={[
                  <Notification
                    icon={<FaLocationDot></FaLocationDot>}
                    mainTitle="Driver Arrived"
                    message="Your driver is about to arrive , get ready for pickup."
                    linkText="View Trip"
                    dest="./TrackRide"
                    redirect="./TrackRide"
                    
                  ></Notification>,
                  
                  <Notification
                    icon={<FaLocationDot></FaLocationDot>}
                    mainTitle="Driver Arrived"
                    message="Your driver is about to arrive , get ready for pickup."
                    linkText="View Trip"
                    dest="./TrackRide"
                    redirect="./TrackRide"
                  ></Notification>,
                  <Notification
                    icon={<FaLocationDot></FaLocationDot>}
                    mainTitle="Driver Arrived"
                    message="Your driver is about to arrive , get ready for pickup."
                    linkText="View Trip"
                    dest="./TrackRide"
                    redirect="./TrackRide"
                  ></Notification>,
                  <Notification
                    icon={<FaLocationDot></FaLocationDot>}
                    mainTitle="Driver Arrived"
                    message="Your driver is about to arrive , get ready for pickup."
                    linkText="View Trip"
                    dest="./TrackRide"
                    redirect="./TrackRide"
                  ></Notification>,
                ]}
              ></MyDropdown>
            </NavbarMenuItem>

            <NavbarMenuItem>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <div className="flex justify-center items-center p-2 rounded-xl hover:bg-mint ">
                    <Avatar />
                    <p className="font-semibold p-1">Donor</p>
                    <IoMdArrowDropdown />
                  </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem
                    key="profile"
                    className="h-14 gap-2 rounded-xl border-2"
                  >
                    <p className="font-semibold ">email: </p>
                    <p className="font-semibold text-blue-600">donor@donor.com</p>
                  </DropdownItem>

                  <DropdownItem key="profile">
                    <Link href="/voulnteerPage" className="text-black">
                      Profile
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">Security</DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarMenuItem>
          </NavbarContent>
        </NextUINavbar>
      );
    case "org":
      return (
        <NextUINavbar maxWidth="full" position="sticky" className="bg-cyan">
          <NavbarContent
            className="basis-1/5 sm:basis-full flex-none"
            justify="start"
          >
            <NavbarBrand className=" max-w-full">
              <NextLink className="flex-start" href="/OrgLandingPage">
              <Image src={Logo} className="mt-3" alt="Logo" width={100} height={100}></Image>
            

              </NextLink>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
            <NavbarMenuItem>
              <MyDropdown
                icon={<FaBell></FaBell>}
                items={[
                 
                  <Notification
                    icon={<FaCheck></FaCheck>}
                    mainTitle="Donation Request Fulfilled"
                    message="Your donation request is fullfiled"
                    linkText="View Donation Request"
                  ></Notification>,
                  <Notification
                    icon={<FaCheck></FaCheck>}
                    mainTitle="Donation Request Fulfilled"
                    message="Your donation request is fullfiled"
                    linkText="View Donation Request"
                  ></Notification>,
                  <Notification
                    icon={<FaCheck></FaCheck>}
                    mainTitle="Donation Request Fulfilled"
                    message="Your donation request is fullfiled"
                    linkText="View Donation Request"
                    lin
                  ></Notification>,
                  <Notification
                    icon={<FaCheck></FaCheck>}
                    mainTitle="Donation Request Fulfilled"
                    message="Your donation request is fullfiled"
                    linkText="View Donation Request"
                  ></Notification>,
                ]}
              ></MyDropdown>
            </NavbarMenuItem>

            <NavbarMenuItem>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <div className="flex justify-center items-center p-2 rounded-xl hover:bg-mint ">
                    <Avatar />
                    <p className="font-semibold p-1">Malek</p>
                    <IoMdArrowDropdown />
                  </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem
                    key="profile"
                    className="h-14 gap-2 rounded-xl border-2"
                  >
                    <p className="font-semibold ">email: </p>
                    <p className="font-semibold text-blue-600">org@org.com</p>
                  </DropdownItem>

                  <DropdownItem key="profile">
                    <Link href="/OrganisationDetails" className="text-black">
                      Profile
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">Security</DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarMenuItem>
          </NavbarContent>
        </NextUINavbar>
      );
    default:
      return (
        <NextUINavbar maxWidth="full" position="sticky" className="bg-blue-400">
          <NavbarContent
            className="basis-1/5 sm:basis-full flex-none"
            justify="start"
          >
            <NavbarBrand className=" max-w-full">
              <NextLink className="flex-start" href="/AdminAnalytics">
              <Image src={Logo} className="mt-3" alt="Logo" width={200} height={200}></Image>

              </NextLink>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="basis-1/5 sm:basis-full" justify="end">
            

            <NavbarMenuItem>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <div className="flex justify-center items-center p-2 rounded-xl hover:bg-mint ">
                    <Avatar />
                    <p className="font-semibold p-1">Admin</p>
                    <IoMdArrowDropdown />
                  </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem
                    key="profile"
                    className="h-14 gap-2 rounded-xl border-2"
                  >
                    <p className="font-semibold ">email: </p>
                    <p className="font-semibold text-blue-600">admin@admin.com</p>
                  </DropdownItem>

                  <DropdownItem key="profile">
                    <Link href="/OrganisationDetails" className="text-black">
                      Profile
                    </Link>
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback">Security</DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    Log Out
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarMenuItem>
          </NavbarContent>
        </NextUINavbar>
      );
      

}};