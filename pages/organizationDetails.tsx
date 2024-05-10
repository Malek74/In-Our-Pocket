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



export default function Organisations() {
    
    const [Status, setStatus] = useState('None');
    const [Name, setName] = useState('None');
    const [Type, setType] = useState('None');
    const [Address, setAdd] = useState('None');
    const [Area, setArea] = useState('None');
    const [Governate, setGov] = useState('None');
    const [FName, setRepFName] = useState('None');
    const [LName, setRepLName] = useState('None');
    const [Gender, setRepGender] = useState('None');
    const [RepAddress, setRepAddress] = useState('None');
    const [RepEmail, setRepEmail] = useState('None');
    const [RepNum, setNum] = useState('None');


    useEffect(() => {
        // Retrieve the donor ID from session storage
        const orgID = sessionStorage.getItem('selectedOrgID');
        if(orgID !== null){
        const selectedOrg = Originalusers.find(Originalusers => Originalusers.id === parseInt(orgID));
        
        if (selectedOrg) {
            // If the donor is found, set the donor's name
            setName(selectedOrg.name);
            setType(selectedOrg.type);
            setAdd(selectedOrg.address);
            setArea(selectedOrg.area);
            setGov(selectedOrg.governate);
            setRepFName(selectedOrg.repFName);
            setRepLName(selectedOrg.repLName);
            setRepGender(selectedOrg.repGender);
            setRepEmail(selectedOrg.repEmail);
            setRepAddress(selectedOrg.repAdd);
            setNum(selectedOrg.repNum);
            setStatus(selectedOrg.status); 
        } else {
            // Handle the case where the donor with the given ID is not found
            console.log("Donor not found with the given ID");
        }}
        }, []); // Run this effect only once, similar to componentDidMount
    return (
        <div className="relative flex flex-col h-screen">
            <Navbar></Navbar>
            <div className="flex flex-row flex-1">
                <div className="flex-initial w-[250px]"><Sidebar></Sidebar></div>
                <div className="flex-1 flex flex-col">
                <div>
                <div className="flex-1 flex flex-col">
        <div className="mx-12 my-12 flex justify-between">
            <div className="w-1/4">
                <Image
                    width={500}
                    height={500}
                    alt="NextUI hero Image"
                    src= 'sample-images/sample organization.jpeg'
                    />
            </div>
            <div className="w-3/4 mx-4 my-2 flex-col"> 
                
                <div className="flex justify-start">
                    <OrganizationLogo className="ml-1 mt-1 fill-gray text-large"/>
                    <h1 className="text-6xl font-large ml-2 ">{Name}</h1> 
                </div>

                <div className="ml-24">
                    <h2 className="text-4xl font-large text-default-400">{Type}</h2>
                </div>

                <div className="flex justify-start ml-24">
                    <PlaceIcon className="fill-[#A1A1AA] ml-1 mt-1 " />
                    <h3 className="text-2xl font-large ml-2 text-default-400">{Address}</h3>
                </div>

                <div className="flex justify-start ml-24" >
                    <AreaIcon className="ml-1 mt-1.5"/>
                    <h4 className="text-2xl font-large ml-2 text-default-400">{Area}</h4>
                </div>

                <div className="flex justify-start ml-24">
                    <MapIcon className="fill-[#A1A1AA] ml-1 mt-1.5 " />    
                    <h5 className="text-2xl font-large ml-2 text-default-400">{Governate}</h5>
                </div>
            </div>


        </div>


        <div className="pr-12 pl-12">
            <div id="headerText" className="relative bg-[#FFF] text-center z-1000 w-[180px] mx-[auto] my-[0] font-bold">
                Request Details
            </div>
            <div id="insideText" className="p-[20px] border-[1px] border-[solid] border-[#DDDDDD] rounded-lg -mt-[10px]">
                {/* div holding request details */}
                <div className="flex justify-center mb-4 mx-12 ">
                    
                    {/*div holding left aligned objects  */}
                    <div className="w-1/2 pl-8 pr-8">
                        {/* rep info div */}
                        <div className="pr-12 pl-12">
                            <div id="headerText" className="relative bg-[#FFF] text-center z-1000 w-[240px] mx-[auto] my-[0] font-bold">
                                <p className="bg-white">Representative Information:</p>
                            </div>
                            <div id="insideText" className="p-[20px] border-[1px] border-[solid] border-[#DDDDDD] rounded-lg -mt-[10px]">
                                <div className="justifymb-4">
                                    <p><span className="font-semibold text-default-400">First Name: {FName}</span></p>
                                    <p><span className="font-semibold text-default-400">Last Name: {LName}</span> </p>
                                    <p><span className="font-semibold text-default-400">Gender: {Gender}</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="pr-12 pl-12">
                            <div id="headerText" className="relative bg-[#FFF] text-center z-1000 w-[205px] mx-[auto] my-[0] font-bold">
                                Proof of Employment:
                            </div>

                            <div id="insideText" className="p-[20px] border-[1px] border-[solid] border-[#DDDDDD] rounded-lg -mt-[10px]"> 
                                {/* proof of employment div */}
                                <div>
                                    {/* div holding buttons */}
                                    <div className="flex justify-between">
                                        <Button className="mr-2 px-4 py-2 rounded" color='primary' variant='ghost' startContent={<OpenInNewTabIcon/>} >Open in New Tab</Button>
                                        <a href='/Lect.pdf' download>
                                        <Button className="px-4 py-2 rounded"   color='primary' variant='ghost' startContent={<DownloadIcon/>} > <p className="">Download</p></Button>
                                        </a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    {/* div holding right aligned details */}
                    <div className="w-1/2 pl-8 pr-8 ">
                        <div className="pl-12 pr-12">
                            <div id="headerText" className="relative bg-[#FFF] text-center z-1000 w-[205px] mx-[auto] my-[0] font-bold">
                                Contact Information:
                            </div>
                            <div id="insideText" className="p-[20px] border-[1px] border-[solid] border-[#DDDDDD] rounded-lg -mt-[10px]">
    
                                {/* Contact Info div */}
                                <div className="">
                                    
                                    <div className="flex justify-start">
                                        <PersonPinCircleOutlined className="fill-gray"/>
                                        <p><span className="font-semibold text-default-400 ml-2">{RepAddress} </span></p>
                                    </div>
                                    
                                    <div className="flex justify-start">
                                        <EmailOutlined className="fill-gray"/>
                                        <p><span className="font-semibold text-default-400 ml-2">E-mail:{RepEmail}</span></p>
                                    </div>

                                    <div className="flex justify-start">
                                        <LocalPhoneOutlined className="fill-gray"/>
                                        <p><span className="font-semibold text-default-400 ml-2">Number: {RepNum}</span></p>
                                    </div>
                                </div>

                            </div>
                        </div>

                            <div className="pl-12 pr-12">
                                <div id="headerText" className="relative bg-[#FFF] text-center z-1000 w-[280px] mx-[auto] my-[0] font-bold">
                                    Proof of Organization Legitimacy:
                                </div>
                                <div id="insideText" className="p-[20px] border-[1px] border-[solid] border-[#DDDDDD] rounded-lg -mt-[10px]">

                                    {/* Proof Of legitimacy div */}
                                    <div>
                                        <div className="flex justify-between">
                                            <Button className="mr-2 px-4 py-2 rounded" color='primary' variant='ghost' startContent={<OpenInNewTabIcon/>} >Open in New Tab</Button>
                                            <a href='/Lect.pdf' download>
                                            <Button className="px-4 py-2 rounded" color='primary' variant='ghost' startContent={<DownloadIcon/>}> Download</Button>
                                            </a>
                                        </div>
                                    </div>

                                </div>

                        </div>
                    </div>

                </div>

            </div>

            <div className="flex justify-end bg-red mx-1 my-4">
                <Button className=" mx-4 my-4 px-4 py-2 rounded " isDisabled={Status !== "pending" } size="lg" color='danger' variant='solid'>Reject Request</Button>
                <Button className=" mx-4 my-4 px-4 py-2 rounded" isDisabled={Status !== "pending" } size="lg" color='success' variant='solid'>Accept Request</Button>
            </div>


        </div>

    </div>  
                </div>
                </div>
            </div>
        </div>
    );
}
