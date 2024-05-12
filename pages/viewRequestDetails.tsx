import React, { useEffect, useState } from "react";  
import {Image} from "@nextui-org/image";
import { Chip, user } from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { originalSet } from "@/components/donationsData";


const statusColorMap = {
    Fulfilled: "success",
    Pending: "default",

  };


const NormalRequestView = ({StatStr}:{StatStr:string}) => {
return(
    <div className="flex flex-col justify-center items-center mx-3 my-3">
        <div className="flex justify-center w-1/2 ">
            <Image
                width={750}
                height={1000}
                alt="NextUI hero Image"
                src= 'sample-images/sample organization.jpeg'
            />
        </div>
        
        <div className="flex flex-row justify-start items-start">
            <h1 className="text-6xl font-large font-bold"> Request Title </h1>
            <h2 className="text-3xl font-large font-bold ml-4"> Posted on: PostDate </h2>
            <div className="flex justify-start">
            <Chip
                className="capitalize"
                color={
                statusColorMap[StatStr as keyof typeof statusColorMap] as
                    | "success"
                    | "warning"
                    | "default"
                    | "primary"
                    | "secondary"
                    | "danger"
                    | undefined
                }
                size="sm"
                variant="flat"
            >
                placeHolder
            </Chip>
            </div>
        </div>
    </div>
);};

const DonorRequestView = ({StatStr}:{StatStr:string}) => {
    return(
        <div className="flex flex-col justify-center items-center mx-3 my-3">
            <div className="flex justify-center w-1/2 ">
                <Image
                    width={500}
                    height={500}
                    alt="NextUI hero Image"
                    src= 'sample-images/sample organization.jpeg'
                />
            </div>
        
            <div className="flex flex-row justify-start items-start">
                <h1 className="text-6xl font-large font-bold"> Request Title </h1>
                <h2 className="text-3xl font-large font-bold ml-4"> Posted on: PostDate </h2>
                <div className="flex justify-start">
                <Chip
                    className="capitalize"
                    color={
                    statusColorMap[StatStr as keyof typeof statusColorMap] as
                        | "success"
                        | "warning"
                        | "default"
                        | "primary"
                        | "secondary"
                        | "danger"
                        | undefined
                    }
                    size="sm"
                    variant="flat"
                >
                    placeHolder
                </Chip>
                </div>

                <Accordion>
                    <AccordionItem title="Volunteer Details" className="text-3xl font-bold">
                        <div className="flex flex-col justify-center items-center mx-3 my-3">
                            <p className="text-default-400"> Volunteer Name:  </p>
                            <p className=""> Sample Name </p>
                            <p className="text-default-400"> Volunteer Email: </p>
                            <p className=""> Sample Email </p>
                            <p className="text-default-400"> Volunteer Number: </p>
                            <p className=""> Sample Number </p>
                        </div>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>

    );
};

export const viewRequestDetails = ({ variant }: { variant: string }) => {
    const [Status, setStatus] = useState('None');
    const [Donation, setDonation] = useState('None');
    const [Category, setCategory] = useState('None');
    
    useEffect(() => {
        const requestID = sessionStorage.getItem('selectedReqID');
        if(requestID !== null){
        const selectedReq = originalSet.find(originalSet => originalSet.id === parseInt(requestID));
        
        if (selectedReq) {
            setDonation(selectedReq.donation);
            setStatus(selectedReq.status); 
            setCategory(selectedReq.Category);
        } else {
            console.log("Donor not found with the given ID");
        }}
        }, []);
    switch (variant) {
        case "unfulfilled":
            return <NormalRequestView StatStr={Status} />;
        case "fulfilledNormalRequest":
            return <DonorRequestView StatStr={Status}/>;
      default:
        return <></>;
    }
  };