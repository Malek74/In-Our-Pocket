import TimePick from "@/components/timePicker";
import DatePick from "@/components/datePicker";
import PickRide from "@/components/radioButton";
import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sideBar";
import OrgTable from "@/components/orgTable";
import SearchBar from "@/components/searchBar";
import FilterMenu from "./api/filterMenu";
import { Button, Link } from "@nextui-org/react";

export default function Requests() {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar></Navbar>
            <div className="flex flex-row flex-1">
                <div className="flex-initial w-[250px]"><Sidebar></Sidebar></div>
                <div className="flex-1 flex flex-col">
                    <div className="flex justify-between m-4 align-middle">
                        <div>
                            <h1 className="text-xl mx-3 my-3">Schedule</h1>
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
                    <div className="flex flex-col gap-4 mx-6 my-6">
                        <div className="flex flex-wrap gap-4">
                            <DatePick></DatePick>
                            <TimePick></TimePick>
                        </div>
                        <div className="flex flex-col gap-4">
                            <PickRide></PickRide>

                            <Link href="" className="flex justify-start ">
                                <Button variant="ghost" color='success'>submit </Button>
                            </Link>

                        </div>

                    </div>


                </div>
            </div>
        </div>


    )
}