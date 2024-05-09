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

//import {columns} from '@/components/ClothesDonationDetails'




export default function Bgarabhaga() {
    return (
        <><div>
            <Navbar />
            <SideNavbar/>
        </div>
        <div className="flex flex-col min-h-screen justify-center items-center gap-6 bg-gray-200">
                  <Card className="flex flex-col justify-left items-left gap-4 p-6 bg-white rounded-lg shadow-md" style={{ width: '50%', minWidth: '400px' }}>
                        <CardHeader className="flex justify-center items-left">
                            <label className="text-4xl text-black font-bold"> Category: Clothes</label>
                        </CardHeader>
                        <Divider />
                        <Card className="flex flex-row">
                        <Card className="flex flex-col justify-left items-left gap-4 p-6 bg-rose rounded-lg shadow-md" style={{ width: '30%', minWidth: '350px' }}>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Type: </p>
                                    <p className="text-2xl text-black">Jeans</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Gender: </p>
                                    <p className="text-2xl text-black"> Male</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Age: </p>
                                    <p className="text-2xl text-black"> 10-15 years old </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Season:</p>
                                    <p className="text-2xl text-black"> All seasons</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Material:</p>
                                    <p className="text-2xl text-black"> Denim</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Quantity: </p>
                                    <p className="text-2xl text-black"> 1</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="flex flex-row bg-rose rounded-lg shadow-md">
                    <Image src={jeansImage} alt="image of donated item: jeans" width={300} height={100} />
                    </Card>
                
                </Card>
                        <Divider />
                        <Button radius="full" className="bg-rose text-black text-1xl font-bold shadow-lg">Go Back</Button>
                    
                    </Card>
                                
            </div></>
    );
}





