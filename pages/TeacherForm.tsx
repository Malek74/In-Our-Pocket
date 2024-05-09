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
 import {Button, Card, CardHeader,CardBody, Divider, Input} from "@nextui-org/react";
import React from "react";
import FormView from "@/components/organizationPage";
import {item} from '@/components/ClothesDonationDetails';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";
import Image from 'next/image';
import { DonationRequestForm } from "@/components/DonationRequestForm";
import CR from "@/pages/ChooseReq";
import { useRouter } from "next/router";

export default function Teacher () {
  const [Name, setName] = useState("");
  const [Info, setInfo] = useState("");
  const [Subject, setSubject] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false);
  const [selectedForm, setSelectedForm] = useState("");
    const router = useRouter(); 


  function showAlert() {
    alert("Thank you for your contribution!!");}

  return (
    
     <><div>
            <Navbar />
            <SideNavbar/>
        </div>
        {/* <div className="flex justify-center items-center h-screen bg-gray-200"> */}
        <div className="flex flex-col min-h-screen justify-center items-center gap-6 bg-gray-200">
      <Card className="flex flex-col justify-center items-center gap-4 p-6 bg-white rounded-lg shadow-md" style={{ width: '50%', minWidth: '450px' }}>
                        <CardHeader className="flex justify-center items-left">
                            <label className="text-4xl text-black font-bold">Fill Out Request Details</label>
                        </CardHeader>
                        <Divider />
    <div className="flex flex-col gap-4 justify-center">
      <div className="flex flex-col justify-center items-center gap-4 p-6">
        <Input
          value={Name}
          type="text"
          label="Name"
          variant="bordered"
          color={"default"}
          onValueChange={setName}
          className="w-80"
          placeholder="Enter your name:"
          isRequired
        />
        <Input
          value={Info}
          type="text"
          label="Your Info"
          variant="bordered"
          color={"default"}
          onValueChange={setInfo}
          className="w-80"
          placeholder="Enter your Informtion:"
          isRequired
        />
        <Input
          value={Subject}
          type="text"
          label="Subjects"
          variant="bordered"
          color={"default"}
          onValueChange={setSubject}
          className="w-80"
          placeholder="Enter the subjects you teach:"
          isRequired
        />
        <Divider/>
        <div className="flex flex-row items-center gap-10" >
            <Button onClick={showAlert} type="submit" radius="full" className="bg-rose text-black text-1xl font-bold shadow-lg">Submit</Button>
            <Button radius="full" className="bg-rose text-black text-1xl font-bold shadow-lg"
            onClick={() => {
                                                setButtonPressed(true);
                                                setSelectedForm("Go Back");
                                                router.push("/ChooseReq"); 
                                            }}
            > Go Back</Button>

        {selectedForm === "Donate" && <CR />}
        </div>
                
      </div>
    </div>
    </Card>
    </div>
   

    </>
  );
}
