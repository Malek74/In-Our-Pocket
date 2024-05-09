
import { Navbar } from "@/components/navbar";
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

