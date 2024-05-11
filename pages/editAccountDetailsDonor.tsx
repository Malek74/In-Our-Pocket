import { Navbar } from "@/components/navbar";
import OrgTable from "@/components/orgTable";
import SearchBar from "@/components/searchBar";
import Sidebar from "@/components/sideBar";
import { Button, Pagination, Breadcrumbs, BreadcrumbItem, ButtonGroup } from "@nextui-org/react";
import React, { useEffect, useState } from 'react';
import DataHolder_Wborder from "@/components/dataHolderWborder";
import {Image} from "@nextui-org/image";
import OrganizationLogo from "@/components/OrganizationLogo";
import BusinessIcon from '@mui/icons-material/Business';
import PlaceIcon from '@mui/icons-material/Place';
import MapIcon from '@mui/icons-material/Map';
import AreaIcon from "@/components/areaIcon";
import DownloadIcon from "@/components/DownloadIcon";
import OpenInNewTabIcon from "@/components/openInNewTabIcon";
import { EmailOutlined, LocalPhoneOutlined, PersonPinCircleOutlined } from "@mui/icons-material";
import FormView from "@/components/organizationPage";
import { Originalusers } from "@/components/orgData";


export default function DonorDetails() {
    <div className="relative flex flex-col h-screen">
        <Navbar></Navbar>
        <div className="flex flex-row flex-1">
            <div className="flex-initial w-[250px]"><Sidebar></Sidebar></div>
        </div>
    </div>
}