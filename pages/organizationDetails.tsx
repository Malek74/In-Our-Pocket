import { Navbar } from "@/components/navbar";
import OrgTable from "@/components/orgTable";
import SearchBar from "@/components/searchBar";
import Sidebar from "@/components/sideBar";
import { Button, Pagination, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import FilterMenu from "../components/filterMenu";
import FormView from "@/components/organizationPage";
import React from 'react';

const SampleFormData = {
        organizationName: "Acme Corporation",
        organizationType: "Technology",
        representativeFirstName: "John",
        representativeLastName: "Doe",
        representativeGender: "Male",
        representativeAddress: "123 Main Street, Cityville, State",
        representativeEmail: "john.doe@example.com",
        representativeNumber: "555-123-4567"
    };


export default function Organisations() {
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar></Navbar>
            <div className="flex flex-row flex-1">
                <div className="flex-initial w-[250px]"><Sidebar></Sidebar></div>
                <div className="flex-1 flex flex-col">
                <div>
                     <FormView data={SampleFormData} />
                </div>
                </div>
            </div>
        </div>
    );
}
