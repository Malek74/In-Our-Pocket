import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { useMemo, useState } from "react";
import { Counter } from '@/components/counter';
import { Navbar } from '@/components/navbar';
import SideNavbar from '@/components/sideBar';
 import {Button, Card, CardHeader, Divider, Input} from "@nextui-org/react";
import React from "react";
import FormView from "@/components/organizationPage";
import {item} from '@/components/ClothesDonationDetails';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import Image from 'next/image';
import jeansImage from "@/components/images/jeans_image.jpg" ;
import shirtImage from "@/components/images/7shirts.jpg" ;
import googlemaps from "@/components/googlemaps";

//import {columns} from '@/components/ClothesDonationDetails'




export default function BloodDonation() {
    return(
    <><div>
    <Navbar />
    <SideNavbar/>
</div>
<div className="flex justify-center items-center h-screen bg-gray-200">
        <div className="flex">
          <Card className="flex flex-col justify-left items-left gap-4 p-6 bg-white rounded-lg shadow-md" style={{ width: '50%', minWidth: '700px' }}>
                <CardHeader className="flex justify-center items-left">
                <label className="text-4xl text-black font-bold"> Category: Blood Donation</label>
                        </CardHeader>
                        <Divider />
                        <Card className="flex flex-col justify-left items-left gap-4 p-6 bg-rose rounded-lg shadow-md" style={{ width: '30%', minWidth: '650px' }}>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Patient Name: </p>
                                    <p className="text-2xl text-black">Omar</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Blood Type: </p>
                                    <p className="text-2xl text-black"> A+</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Hospital Name: </p>
                                    <p className="text-2xl text-black">Air Force Hospital </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Hospital Area:</p>
                                    <p className="text-2xl text-black">5th Settelment </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Hospital Address:</p>
                                    <p className="text-2xl text-black"> Teseen Street</p>
                                </div>
                                <div className="flex items-center">
                                    {/* <p className="text-2xl text-black font-bold mr-2">Hospital Location: </p> */}
                                    <div>
                                    <p className="text-black text-2xl">
                                    To view the hospital location, <a href="https://www.google.com/maps/place/{LOCATION}" target="_blank" rel="noopener noreferrer" className=" font-bold " style={{ textDecoration: 'underline' }}> click here</a>.
                                </p>
                                    </div>
                        </div>
                    </div>
                </Card>
                <Divider />
                <Button radius="full" className="bg-rose text-black text-1xl font-bold shadow-lg">Go Back</Button>
            </Card>
           
        </div>

    </div></>
);
      


}

