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

import { Logo } from "@/components/icons";
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
        <NextUINavbar maxWidth="xl" position="sticky" className="bg-rose">
          <NavbarContent
            className="basis-1/5 sm:basis-full flex-none"
            justify="start"
          >
            <NavbarBrand className=" max-w-fit">
              <Logo></Logo>
              <NextLink className="flex-start" href="/">
                <p className="font-bold text-inherit">KindHub</p>
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
                    <p className="font-semibold text-blue-600">donor@email.com</p>
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
        <NextUINavbar maxWidth="xl" position="sticky" className="bg-rose">
          <NavbarContent
            className="basis-1/5 sm:basis-full flex-none"
            justify="start"
          >
            <NavbarBrand className=" max-w-fit">
              <Logo></Logo>
              <NextLink className="flex-start" href="/">
                <p className="font-bold text-inherit">DONATIONS</p>
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
                    <p className="font-semibold text-blue-600">malek@email.com</p>
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
      

}};