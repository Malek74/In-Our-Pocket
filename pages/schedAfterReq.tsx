/*import TimePick from "@/components/timePicker";
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
}*/
import { Navbar } from "@/components/navbar";
import OrgTable from "@/components/orgTable";
import SearchBar from "@/components/searchBar";
import Sidebar from "@/components/sideBar";
import { Button, Pagination, Breadcrumbs, BreadcrumbItem, Chip, Link } from "@nextui-org/react";
import FilterMenu from "@/components/filterMenu";
import DonorTable from "@/components/donorTable";
import FilterItemDropDown from "@/components/filterItemDropDown";
import { SetStateAction, useEffect, useState } from "react";
import { columns, filterDonors, searchDonors, originalSet } from "@/components/donordata";
import DatePick from "@/components/datePicker";
import TimePick from "@/components/timePicker";
import PickRide from "@/components/radioButton";
import DonorElements from "@/components/donorElements";

/*import { Navbar } from "@/components/navbar";
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
}*/

const statusColorMap: { [key: string]: "danger" | "default" | "primary" | "secondary" | "success" | "warning" | undefined } = {
    fulfilled: "success",
    pending: "warning",
};

export default function DonorViewer() {
    const [query, setQuery] = useState('');
    const [value2, setValue2] = useState('None');
    const [value1, setValue1] = useState('None');
    const [column1, setColumn1] = useState("null");
    const [column2, setColumn2] = useState("null");
    const [results, setResults] = useState(originalSet);
    const [filteredResults, setFilteredResults] = useState(originalSet);
    const [displayedResults, setDisplayedResults] = useState(originalSet);
    const [filterCol1, setFilterCol1] = useState("");
    const [filterCol2, setFilterCol2] = useState("");
    const [statusChip, setStatusChip] = useState("hidden");
    const [expChip, setExpChip] = useState("hidden");

    function handleChange(selectedValue: SetStateAction<string>, selectedColumn: SetStateAction<string>) {
        if (selectedColumn === "exp") {
            setValue1(selectedValue);
            setColumn1(selectedColumn);
            setFilterCol1(selectedValue);
            setExpChip("visible");
        }
        if (selectedColumn === "status") {
            setValue2(selectedValue);
            setColumn2(selectedColumn);
            setFilterCol2(selectedValue);
            setStatusChip("visible");
        }
    }
    function handleDelete(id: any) {
        const newRes = results.filter((result) => result.id !== id);
        setResults(newRes);
        const filteredResults = filterDonors(newRes, column1, value1, column2, value2) || [];
        setDisplayedResults(filteredResults);
    }

    function handleSearch(query: string) {
        setQuery(query);
        const searched = searchDonors(filteredResults, query) || [];
        setDisplayedResults(searched);
    }

    function closeFilterExperience() {
        setValue1("None");
        setColumn1("null");
        setFilterCol1("");
        setExpChip("hidden");
    }

    function closeFilterStatus() {
        setValue2("None");
        setColumn2("null");
        setFilterCol2("");
        setStatusChip("hidden");
    }

    useEffect(() => {
        const filtered = filterDonors(results, column1, value1, column2, value2) || [];
        setFilteredResults(filtered);
        setDisplayedResults(filtered);
    }, [results, column1, value1, column2, value2]);

    return (
        <div className="relative flex flex-col h-screen">
            <Navbar user="donor"></Navbar>
            <div className="flex flex-row flex-1">
                <div className="flex-initial w-[250px]"><Sidebar elements={DonorElements}></Sidebar></div>
                <div className="flex-1 flex flex-col">
                    <div className="flex justify-between m-4 align-middle">
                        <div>
                            <h1 className="mt-3 text-3xl font-bold">Schedule Pickup</h1>
                        </div>

                    </div>
                    <div className="flex flex-col gap-4 mx-6 my-6">
                        <div className="flex flex-wrap gap-4">
                            <DatePick></DatePick>
                            <TimePick></TimePick>
                        </div>
                        <div className="flex flex-col gap-4">
                            <PickRide></PickRide>

                            <Link href="/requestsFirstPage" className="flex justify-start ">
                                <Button variant="ghost" color='success'>submit </Button>
                            </Link>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}