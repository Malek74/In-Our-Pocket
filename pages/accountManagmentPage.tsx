import { Navbar } from "@/components/navbar";
import OrgTable from "@/components/orgTable";
import SearchBar from "@/components/searchBar";
import Sidebar from "@/components/sideBar";
import { Button, Pagination, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import FilterMenu from "./api/filterMenu";
import FormView from "@/components/organizationPage";
import React from 'react';
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


export default function accountManagmentPage() {
    return (
        <div className="relative  flex flex-col h-screen ">
            <Navbar></Navbar>
            <div className="flex flex-row flex-1">
                <div className="flex-initial w-[250px]"><Sidebar></Sidebar></div>
                <div className="flex-1 flex flex-col">
                    <div className="mx-12 my-12 flex justify-between">
                        <div className="w-1/4">
                            <Image
                                // width={500}
                                // height={450}
                                alt="NextUI hero Image"
                                src= '/hero-card-complete.jpeg'
                                />
                        </div>
                        <div className="w-3/4 mx-4 my-2 flex-col"> 
                            
                            <div className="flex justify-start">
                                <OrganizationLogo className="ml-1 mt-1 fill-gray text-large"/>
                                <h1 className="text-6xl font-large ml-2 ">ORG Name</h1> 
                            </div>

                            <div className="ml-24">
                                <h2 className="text-4xl font-large text-default-400">ORG Type</h2>
                            </div>

                            <div className="flex justify-start ml-24">
                                <PlaceIcon className="ml-1 mt-1 fill-gray " />
                                <h3 className="text-2xl font-large ml-2 text-default-400">Address</h3>
                            </div>

                            <div className="flex justify-start ml-24" >
                                <AreaIcon className="ml-1 mt-1.5"/>
                                <h4 className="text-2xl font-large ml-2 text-default-400">Area</h4>
                            </div>

                            <div className="flex justify-start ml-24">
                                <MapIcon className="ml-1 mt-1.5 fill-gray" />    
                                <h5 className="text-2xl font-large ml-2 text-default-400">Governate</h5>
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
                                                <p><span className="font-semibold text-default-400">First Name:</span></p>
                                                <p><span className="font-semibold text-default-400">Last Name:</span> </p>
                                                <p><span className="font-semibold text-default-400">Gender:</span></p>
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
                                                    <Button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded" color='primary' variant='ghost' startContent={<OpenInNewTabIcon/>} >Open in New Tab</Button>
                                                    <a href='/Lect.pdf' download>
                                                    <Button className="bg-blue-500 text-white px-4 py-2 rounded" color='primary' variant='ghost' startContent={<DownloadIcon/>} > <p className="">Download</p></Button>
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
                                                    <p><span className="font-semibold text-default-400 ml-2">Address:</span></p>
                                                </div>
                                                
                                                <div className="flex justify-start">
                                                    <EmailOutlined className="fill-gray"/>
                                                    <p><span className="font-semibold text-default-400 ml-2">E-mail:</span></p>
                                                </div>

                                                <div className="flex justify-start">
                                                    <LocalPhoneOutlined className="fill-gray"/>
                                                    <p><span className="font-semibold text-default-400 ml-2">Number:</span></p>
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
                                                        <Button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded" color='primary' variant='ghost' startContent={<OpenInNewTabIcon/>} >Open in New Tab</Button>
                                                        <a href='/Lect.pdf' download>
                                                        <Button className="bg-blue-500 text-white px-4 py-2 rounded" color='primary' variant='ghost' startContent={<DownloadIcon/>}> Download</Button>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>  
            </div>
        </div>
    );
}

{/*note to self: could use accordion for donation request details*/}
