import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Navbar } from "@/components/navbar";
import { Button, Card } from "@nextui-org/react";
import Sidebar from "@/components/sideBar";
import { use, useState } from "react";


export default function IndexPage() {

	return (
		<div className="relative flex flex-col h-screen">
			<Navbar />
			<div>
				<Sidebar></Sidebar>
				

				</div>
		</div>
	);
}

