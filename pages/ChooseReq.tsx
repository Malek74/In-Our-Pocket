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
import RD from "@/pages/xxx";
import TF from "@/pages/TeacherForm";

import { useRouter } from 'next/router';


export default function ChooseReq() {
    const [buttonPressed, setButtonPressed] = useState(false);
    const [selectedForm, setSelectedForm] = useState("");
    const router = useRouter(); 

    return (
        <>
            <div>
                <Navbar />
                <SideNavbar />
            </div>
            <div className="flex flex-col min-h-screen justify-center items-center gap-6 bg-gray-200">
                <Card className="flex flex-col justify-center items-center gap-4 p-6 bg-white rounded-lg shadow-md" style={{ width: '50%', minWidth: '450px' }}>
                    <CardHeader className="flex justify-center items-left">
                        <label className="text-4xl text-black font-bold">Choose Request Type</label>
                    </CardHeader>
                    <Divider />
                    <CardBody className="flex justify-center items-center gap-4">
                        <div className="flex flex-col items-center text-center">
                            <p className="text-xl text-black mr-2">
                                After choosing the type of request you want, you will be redirected to a
                                form depending on the type of request chosen.
                            </p>
                            <div className="flex flex-row mr-4 p-4 gap-10 ">
                                <Button
                                    radius="full"
                                    className="bg-rose text-black text-1xl font-bold shadow-lg"
                                    onClick={() => {
                                        setButtonPressed(true);
                                        setSelectedForm("Donate");
                                        router.push("/xxx"); 
                                    }}
                                >
                                    Donate
                                </Button>
                                <Button
                                    radius="full"
                                    className="bg-rose text-black text-1xl font-bold shadow-lg"
                                    onClick={() => {
                                        setButtonPressed(true);
                                        setSelectedForm("Teach");
                                        router.push("/TeacherForm");
                                    }}
                                >
                                    Teach
                                </Button>
                            </div>
                        </div>
                        {selectedForm === "Donate" && <RD />}
                        {selectedForm === "Teach" && <TF />}
                    </CardBody>
                    <Divider />
                    <Button radius="full" className="bg-rose text-black text-1xl font-bold shadow-lg">Go Back</Button>
                </Card>
            </div>
        </>
    );
}