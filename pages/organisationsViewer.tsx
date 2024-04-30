import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sideBar";
import { Button, Pagination,Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";


export default function Organisations() {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar></Navbar>
            
            <div className="flex flex-row flex-1">
                <div className="flex-initial w-[250px]"><Sidebar></Sidebar></div>
                <div className=" flex-1 flex flex-col">

                <Breadcrumbs>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Organisations</BreadcrumbItem>
                </Breadcrumbs>
                <div></div>

                    <Pagination  initialPage={1} total={10} color="primary" ></Pagination>
                    <div>

                    <div/>
                </div>
            </div>
        </div>
        </div>
    );
}
