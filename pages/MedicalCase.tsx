import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { useMemo, useState } from "react";
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
import DonorElements from "@/components/donorElements";








export default function MedicalCase() {
    const [quantity, setQuantity] = useState(1);
    const [buttonPressed, setButtonPressed] = useState(false);
    const [selectedForm, setSelectedForm] = useState("");
  
  const [desc, setDesc] = useState("");
  
    const decrementQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };
  
    const incrementQuantity = () => {
      if (quantity < 5 ){
      setQuantity(quantity + 1);}
      else {
          alert ("The maximum quantity you can donate for such item is 5.")
      }
    };
    function showAlert() {
        alert("Thank you for your contribution, your request has been submitted.");}
    return (
        <><div>
            <Navbar user="donor" />
            <SideNavbar elements={DonorElements}/>
        </div>
        <div className="flex flex-col min-h-screen justify-center items-center gap-6 bg-gray-200">
                  <Card className="flex flex-col justify-left items-left gap-4 p-6 bg-white rounded-lg shadow-md" style={{ width: '50%', minWidth: '850px' }}>
                        <CardHeader className="flex justify-center items-left">
                            <label className="text-4xl text-black font-bold"> Category: Books</label>
                        </CardHeader>
                        <Divider />
                        <Card className="flex flex-row">
                        <Card className="flex flex-col justify-left items-left gap-4 p-6 bg-cyan-50 rounded-lg shadow-md" style={{ width: '50%', minWidth: '500px' }}>
                            <div className="flex flex-col">
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Patient Name: </p>
                                    <p className="text-2xl text-black">Omar</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Age: </p>
                                    <p className="text-2xl text-black"> 21  years old</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Gender: </p>
                                    <p className="text-2xl text-black">Male </p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Organization Name:</p>
                                    <p className="text-2xl text-black"> Nwaaem</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Medical Specialty:</p>
                                    <p className="text-2xl text-black"> Bone Surgery</p>
                                </div>
                                {/* <div className="flex flex-row items-center">
                                <p className="text-2xl text-black font-bold mr-2 mt-2">Quantity: </p>
                            <Button radius="full" className="bg-black text-white text-1xl font-bold shadow-lg mr-4 mt-4"  onClick={decrementQuantity} style={{ width: '10px', height: '30px' }}>
                                -
                            </Button>
                            <span className="mr-4 mt-2"  >{quantity}</span>
                            <Button radius="full" className="bg-black text-white text-1xl font-bold shadow-lg mt-4 " onClick={incrementQuantity} style={{ width: '10px', height: '30px' }}>
                                +
                            </Button>
                            </div> */}
                            <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2">Location:</p>
                                    <p className="text-2xl text-black">GOOGLE MARKER</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-2xl text-black font-bold mr-2 ">Case Description: </p>
                                    </div>
                                    <div className="flex ">
                                    <p className="text-2xl text-black">Patient was hit by a car and requires knee surgery.</p>  
                                </div>
                                <div className=" text-black gap-10 text-2xl  mt-4 ">
                                 <Input
                                value={desc}
                                type="text"
                                label="Any Comments?"
                                variant="bordered"
                                //color={"bg-black"}
                                onValueChange={setDesc}
                                className="max-w-xs text-black"
                                style={{ width: '300px'}}
                                placeholder="Enter here:"
                                //isRequired
                                />
                                </div>
                                </div>
                                </Card>
                                <Card className="flex flex-row bg-cyan-50 rounded-lg shadow-md">
                                {/* <Image src={HR} alt="image of donated item: harry potter book" width={500} height={200} /> */}
                                {/* insert ggogle marker here */}
                                
                                </Card>
                                
                               


                            
                        </Card>
                        <Divider />
                        <div className="flex flex-row items-center  justify-center gap-10 " >
                        <Button onClick={showAlert} type="submit" radius="full" className="bg-cyan-50 text-black text-1xl font-bold shadow-lg"  style={{ width: '300px' }}>Donate</Button>
                        {/* <Button radius="full" className="bg-cyan-50 text-black text-1xl font-bold shadow-lg"
                        > Go Back</Button> */}
                    
                    </div>
                    </Card>
                    
                

            </div></>
);
}
