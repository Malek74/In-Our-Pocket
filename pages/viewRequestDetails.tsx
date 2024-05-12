import React, { useEffect, useState } from "react";  
import {Image} from "@nextui-org/image";
import { Button, Chip, user } from "@nextui-org/react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { originalSetDonation } from "@/components/donationsData";
import { useRouter } from "next/router";
import Link from "next/link";
import { originalSet } from "@/components/donordata";
// import images from "@/components/images";

const statusColorMap = {
    Fulfilled: "success",
    Pending: "default",

  };


const NormalRequestView = ({StatStr}:{StatStr:string}) => {
    const [Title, setTitle] = useState("");
    const [PostDate, setPostDate] = useState("");
    const [volunteerName, setVolunteerName] = useState("");
    const [image, setImgSrc] = useState("");
    const [volID, setVolID] = useState("");
    const [volName,setVolName] = useState("");
    const [volEmail, setVolEmail] = useState("");
    const [volNumber, setVolNumber] = useState("");


    useEffect(() => {
        const requestID = sessionStorage.getItem('selectedReqID');
        if (requestID !== null) {
            const selectedReq = originalSetDonation.find(originalSetDonation => originalSetDonation.id === parseInt(requestID));
            
            if (selectedReq) {
                setTitle(selectedReq.donation);
                // setPostDate(selectedReq.postDate);
                setImgSrc(selectedReq.imgsrc);
            } else {
                console.log("Donation not found with the given ID");
            }
        }
    }, []);
return(
    <div className="flex flex-row justify-center items-center mx-3 my-3">
        <div className="flex justify-center w-1/2 ">
            <Image
                width={500}
                height={500}
                alt="NextUI hero Image"
                src= 'sample-images/sample organization.jpeg'
            />
        </div>
        
        <div className="flex flex-col justify-start items-start gap-4">
            <h1 className="text-6xl font-large font-bold"> {Title}</h1>
            <h2 className="text-3xl font-large font-bold ml-4"> Posted on: PostDate </h2>
            <div className="flex justify-start">
            <Chip
                className="capitalize text-xl ml-4"
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
                {StatStr}
            </Chip>
            </div>
            <Link href="/viewDonationsOrganization">
            <div className="flex flex-col justify-center items-center mx-4 my-3">
                <Button color='danger'>Delete Post</Button>
                </div>
            </Link>
        </div>
    </div>
);};

const DonorRequestView = ({StatStr}:{StatStr:string}) => {
    const [Title, setTitle] = useState("");
    const [PostDate, setPostDate] = useState("");
    const [volunteerName, setVolunteerName] = useState("");
    const [image, setImgSrc] = useState("");
    const [volID, setVolID] = useState("");
    const [volName,setVolName] = useState("");
    const [volEmail, setVolEmail] = useState("");
    const [volNumber, setVolNumber] = useState("");


    useEffect(() => {
        const requestID = sessionStorage.getItem('selectedReqID');
        if (requestID !== null) {
            const selectedReq = originalSetDonation.find(originalSetDonation => originalSetDonation.id === parseInt(requestID));
            
            if (selectedReq) {
                const selectedVol = originalSet.find(originalSet => originalSet.id === selectedReq.volID);
                setVolID(selectedReq.volID.toString());
                setTitle(selectedReq.donation);
                // setPostDate(selectedReq.postDate);
                setImgSrc(selectedReq.imgsrc);
                console.log("Volunteer ID: ", selectedReq.volID+'');
                if (selectedVol) {
                    setVolName(selectedVol.name);
                    console.log("Volunteer Name: ", selectedVol.name);
                    setVolEmail(selectedVol.email);
                    console.log("Volunteer Email: ", selectedVol.email);
                    setVolNumber(selectedVol.number);
                    console.log("Volunteer Number: ", selectedVol.number); 
                } else {
                    console.log("Volunteer not found with the given ID");
                }
            } else {
                console.log("Donation not found with the given ID");
            }
        }
    }, []);

    const handleClick = () => {
        const requestID = sessionStorage.getItem('selectedReqID');
        if (requestID !== null) {
            const selectedReq = originalSetDonation.find(originalSetDonation => originalSetDonation.id === parseInt(requestID));
                if (selectedReq) {
                    sessionStorage.setItem('selectedDonorId', selectedReq.volID+'');
                    console.log("Donor ID:", selectedReq.volID);  
            };
            };
      };
    return(
        <div className="flex flex-row justify-center items-center mx-3 my-3">
            <div className="flex justify-center w-1/2 ">
                <Image
                    width={500}
                    height={500}
                    alt="NextUI hero Image"
                    src= {image}
                />
            </div>
        
            <div className="flex flex-col justify-start items-start gap-4">
                <h1 className="text-6xl font-large font-bold"> {Title} </h1>
                <h2 className="text-3xl font-large font-bold ml-4"> Posted on: PostDate </h2>
                <div className="flex justify-start">
                <Chip
                    className="capitalize text-xl ml-4"
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
                    {StatStr}
                </Chip>
                </div>

                <Accordion>
                    <AccordionItem title="Volunteer Details" className="text-2xl font-bold">
                        <div className="flex flex-col justify-center items-center mx-3 my-3 gap-4">
                            <p className="text-default-400"> Volunteer Name:  </p>
                            <p className=""> {volName}</p>
                            <p className="text-default-400"> Volunteer Email: </p>
                            <p className=""> {volEmail}</p>
                            <p className="text-default-400"> Volunteer Number: </p>
                            <p className=""> {volNumber} </p>
                            <a href="/volunteerPage" onClick={() => handleClick()}>
                            <Button color='default'>View Full Details</Button>
                            </a>
                        </div>
                    </AccordionItem>
                </Accordion>
                <div className="flex flex-col justify-center items-center mx-4 my-3">
                <Link href="/viewDonationsOrganization" className="flex flex-row justify-center items-center mx-4 my-3 gap-4">
                <Button color='default'>Back</Button>
                <Button color='danger'>Delete Post</Button>
                </Link>
                </div>
            </div>
        </div>

    );
};
 const ViewRequestDetails = ({ variant }: { variant: string }) => {
    const [Status, setStatus] = useState('None');
    const [Donation, setDonation] = useState('None');
    const [Category, setCategory] = useState('None');
    
    useEffect(() => {
        const requestID = sessionStorage.getItem('selectedReqID');
        if(requestID !== null){
        const selectedReq = originalSetDonation.find(originalSetDonation => originalSetDonation.id === parseInt(requestID));
        
        if (selectedReq) {
            setDonation(selectedReq.donation);
            setStatus(selectedReq.status); 
            setCategory(selectedReq.Category);
        } else {
            console.log("Donor not found with the given ID");
        }}
        }, []);
        const router = useRouter();
        const { query } = router.query;
    switch (query) {
        case "unfulfilled":
            return <NormalRequestView StatStr={Status} />;
        case "fulfilledNormalRequest":
            return <DonorRequestView StatStr={Status}/>;
      default:
        return <></>;
    }
  };

export default ViewRequestDetails;