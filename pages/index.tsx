
import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sideBar";
import { use, useState } from "react";
import AdminElements from "@/components/AdminsideBarElements";


export default function IndexPage() {

	return (
		<div className="relative flex flex-col h-screen">
			<Navbar />
			<div>
				<Sidebar elements={AdminElements}></Sidebar>
				

				</div>
		</div>
	);
}

