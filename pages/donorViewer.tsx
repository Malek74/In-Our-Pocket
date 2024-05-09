import { Navbar } from "@/components/navbar";
import OrgTable from "@/components/orgTable";
import SearchBar from "@/components/searchBar";
import Sidebar from "@/components/sideBar";
import { Button, Pagination, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import FilterMenu from "./api/filterMenu";
import DonorTable from "@/components/donorTable";

export default function Organisations() {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar></Navbar>
            <div className="flex flex-row flex-1">
                <div className="flex-initial w-[250px]"><Sidebar></Sidebar></div>
                <div className="flex-1 flex flex-col">
                    <div className="flex justify-between m-4 align-middle">
                        <div>
                            <h1 className="mt-3 text-3xl font-bold">Donors signing up as volunteers</h1>
                        </div>
                            {/*<div className="flex flex-row justify-between">
                                <div className="align-middle m-1">
                                    <FilterMenu></FilterMenu>
                                </div>
                                <div className="w-[240]">
                                    <SearchBar />
                                </div>
                            </div>*/}
                    </div>
                    <DonorTable />
                </div>
            </div>
        </div>
    );
}
