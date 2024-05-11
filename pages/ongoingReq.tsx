import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sideBar";
import OrgTable from "@/components/orgTable";
import SearchBar from "@/components/searchBar";
import FilterMenu from "./api/filterMenu";
import { Button } from "@nextui-org/react";
import OngoingDonationsTable from "@/components/ongoingDonationsTable";

export default function OngoingReq() {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar></Navbar>
            <div className="flex flex-row flex-1">
                <div className="flex-initial w-[250px]"><Sidebar></Sidebar></div>
                <div className="flex-1 flex flex-col">
                    <div className="flex justify-between m-4 align-middle">
                        <div>
                            <h1 className="">Organizations</h1>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="align-middle m-1">
                                <FilterMenu></FilterMenu>
                            </div>
                            <div className="w-[240]">
                                <SearchBar />
                            </div>
                        </div>
                    </div>
                    <OngoingDonationsTable></OngoingDonationsTable>

                </div>

            </div>


        </div>



    )
}