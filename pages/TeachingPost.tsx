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
import Stethooo from "@/components/images/stetho.jpg" ;





export default function TeachingPost() {
    return (
        <><div>
            <Navbar />
            <SideNavbar/>
        </div>
        <div className="flex justify-center items-center h-screen bg-gray-200">
                <div className="flex">
                  <Card className="flex flex-col justify-left items-left gap-4 p-6 bg-white rounded-lg shadow-md" style={{ width: '50%', minWidth: '600px',height:'600px' }}>
                        <CardHeader className="flex justify-center items-left">
                            <label className="text-4xl text-black font-bold">Teaching Posts</label>
                        </CardHeader>
                        <Divider />
                        
                        <Card className="flex flex-col justify-left items-left gap-4 p-6 bg-rose rounded-lg shadow-md" style={{ width: '30%', minWidth: '550px' }}>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Number of Students: </p>
                                    <p className="text-2xl text-black">30</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Address: </p>
                                    <p className="text-2xl text-black">Teseen</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Subjects: </p>
                                    {/* </div>
                                    <div className="flex items-center"> */}
                                    <p className="text-2xl text-black" >Biology-Math</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="flex flex-col justify-left items-left gap-4 p-6 bg-rose rounded-lg shadow-md" style={{ width: '30%', minWidth: '550px' }}>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Number of Students: </p>
                                    <p className="text-2xl text-black">15</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Address: </p>
                                    <p className="text-2xl text-black">Katameya</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Subjects: </p>
                                    {/* </div>
                                    <div className="flex items-center"> */}
                                    <p className="text-2xl text-black" >English-French-German</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="flex flex-col justify-left items-left gap-4 p-6 bg-rose rounded-lg shadow-md" style={{ width: '30%', minWidth: '550px' }}>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Number of Students: </p>
                                    <p className="text-2xl text-black">20</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Address: </p>
                                    <p className="text-2xl text-black">MG</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Subjects: </p>
                                    {/* </div>
                                    <div className="flex items-center"> */}
                                    <p className="text-2xl text-black" >Physics</p>
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





