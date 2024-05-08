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
	LinkIcon,
} from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";


import { Logo } from "@/components/icons";
import Profile from "./profileIcon";
import { useTheme } from "next-themes";

//todo: add profile icon
export const Navbar = () => {

	return (
		<NextUINavbar maxWidth="xl" position="sticky"  className="bg-rose">
			<NavbarContent className="basis-1/5 sm:basis-full flex-none" >
				<NavbarBrand className="gap-3 max-w-fit">
					<Logo></Logo>
					<NextLink className="flex-start" href="/">
						<p className="font-bold text-inherit">DONATIONS</p>
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="basis-1/5 sm:basis-full" justify="end">
			<NavbarMenuItem >				
				<Dropdown placement="bottom-end">
          <DropdownTrigger>
		  <Button className="flex justify-center items-center">
            <p className="font-semibold p-1">Malek</p>
            <Avatar />
			
        </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">email: malek@email.com</p>
            </DropdownItem>
            <DropdownItem key="Profile" startContent={<LinkIcon/>}>Profile</DropdownItem>
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
};
