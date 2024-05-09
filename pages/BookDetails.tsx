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
import HR from "@/components/images/harry2.jpg" ;








export default function Bgarabhaga() {
    return (
        <><div>
            <Navbar />
            <SideNavbar/>
        </div>
        <div className="flex flex-col min-h-screen justify-center items-center gap-6 bg-gray-200">
                  <Card className="flex flex-col justify-left items-left gap-4 p-6 bg-white rounded-lg shadow-md" style={{ width: '50%', minWidth: '850px' }}>
                        <CardHeader className="flex justify-center items-left">
                            <label className="text-4xl text-black font-bold"> Category: Books</label>
                        </CardHeader>
                        <Divider />
                        <Card className="flex flex-row">
                        <Card className="flex flex-col justify-left items-left gap-4 p-6 bg-rose rounded-lg shadow-md" style={{ width: '50%', minWidth: '500px' }}>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Book name: </p>
                                    <p className="text-2xl text-black">Harry Potter</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Author: </p>
                                    <p className="text-2xl text-black"> J.K Rowling</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Language: </p>
                                    <p className="text-2xl text-black">English </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Edition:</p>
                                    <p className="text-2xl text-black"> Third Edition</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Quantity:</p>
                                    <p className="text-2xl text-black"> 3</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Summary: </p>
                                    </div>
                                    <div className="flex ">
                                    <p className="text-2xl text-black">A tale of a boy who discovers that he is a wizard.</p>  
                                </div>
                                </div>
                                </Card>
                                <Card className="flex flex-row bg-rose rounded-lg shadow-md">
                                <Image src={HR} alt="image of donated item: harry potter book" width={500} height={200} />
                                
                                </Card>
                                
                               


                            
                        </Card>
                        <Divider />
                        <Button radius="full" className="bg-rose text-black text-1xl font-bold shadow-lg">Go Back</Button>
                    </Card>
                    
                

            </div></>
    );
}





