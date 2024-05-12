import FileUploader from "@/components/FileUploader";
import MapComponent from "@/components/MapComponent";
import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sideBar";
import { siteConfig } from "@/config/site";
import { FileUpload } from "@mui/icons-material";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Divider,
    Input,
    Select,
    SelectItem,
  } from "@nextui-org/react";
import React, { useMemo, useState } from 'react';


  
export default function DonorDetails() {
    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
    const [genderValue, setGenderValue] = useState("");
    const [orgNameValue, setOrgNameValue] = useState("");
  
    const validateEmail = (email: string) =>
      email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i);
  
    const isInvalidEmail = useMemo(() => {
      if (emailValue === "") return true;
      return validateEmail(emailValue) ? false : true;
    }, [emailValue]);
  
    const isInvalidPassword = useMemo(() => {
      return passwordValue !== confirmPasswordValue || passwordValue === "";
    }, [passwordValue, confirmPasswordValue]);
  
    const isFNvalid = useMemo(() => {
      return firstNameValue.length == 0;
    }, [firstNameValue]);
  
    const isLNvalid = useMemo(() => {
      return lastNameValue.length == 0;
    }, [lastNameValue]);
  
    const isOrgNameValid = useMemo(() => {
      return orgNameValue.length == 0;
    }, [orgNameValue]);
  
    const [governateSelected, setGovernateSelected] = useState("");
    const [areasToSelect, setAreasToSelect] = useState([""]);
    const [typeSelected, setTypeSelected] = useState("");
  
    const handleGovernateSelection = (e: any) => {
      setGovernateSelected(e.target.value);
      siteConfig.governates.forEach((g) => {
        if (g.name == e.target.value) {
          setAreasToSelect(g.areas);
        }
      });
    };
    const [areaSelected, setAreaSelected] = useState("");
  
    const handleAreaSelection = (e: any) => {
      setAreaSelected(e.target.value);
    };
  
    const handleTypeSelection = (e: any) => {
      setTypeSelected(e.target.value);
    };
    const [contactValue, setContactValue] = useState("");

    return(
            <div className="flex flex-col justify-center items-center w-4/5 gap-6 mx-44 my-8" >
                <h1 className="text-3xl font-bold">Edit Account Details</h1>
                <Divider />
                    <div className="flex flex-row justify-between items-center w-full gap-96 px-12">
                        <Input
                            value={firstNameValue}
                            type="text"
                            label="First Name"
                            variant="bordered"
                            color={"default"}
                            onValueChange={setFirstNameValue}
                            className="flex-1"
                            placeholder="Enter your first name"
                            
                            isInvalid={isFNvalid}
                        />
                        <Input
                            value={lastNameValue}
                            type="text"
                            label="Last Name"
                            variant="bordered"
                            color={"default"}
                            onValueChange={setLastNameValue}
                            className="flex-1"
                            placeholder="Enter your last name"
                            
                            isInvalid={isLNvalid}
                        />
                    </div>

                    <div className="w-full px-12 mr-0.25">
                        <Input
                            value={emailValue}
                            type="email"
                            label="Email"
                            variant="bordered"
                            isInvalid={isInvalidEmail}
                            color={
                                isInvalidEmail
                                ? "danger"
                                : emailValue.length === 0
                                ? "default"
                                : "success"
                            }
                            errorMessage={isInvalidEmail && "Please enter a valid email"}
                            onValueChange={setEmailValue}
                            className="w-full"
                            placeholder="Enter your email"
                            
                        />
                    </div>

                    
                    <div className="flex flex-row justify-between items-center w-full gap-16 px-12">
                        <Input
                            value={passwordValue}
                            type="password"
                            label="Password"
                            variant="bordered"
                            color={isInvalidPassword ? "danger" : "default"}
                            isInvalid={isInvalidPassword}
                            errorMessage={isInvalidPassword && "Passwords do not match"}
                            onValueChange={setPasswordValue}
                            className="flex-1"
                            placeholder="Enter your password"
        
                        />
                        <Input
                            value={confirmPasswordValue}
                            type="password"
                            label="Confirm Password"
                            variant="bordered"
                            isInvalid={isInvalidPassword}
                            color={isInvalidPassword ? "danger" : "default"}
                            errorMessage={isInvalidPassword && "Passwords do not match"}
                            onValueChange={setConfirmPasswordValue}
                            className="flex-1"
                            placeholder="Confirm your password"
                            
                        />
                    </div >

                    <div className="w-full px-12 mr-0.25">
                    <Input
                        value={contactValue}
                        type="text"
                        label="Contact Number"
                        variant="bordered"
                        color={"default"}
                        onValueChange={setContactValue}
                        className="w-full"
                        placeholder="+20 123 456 7890"
                        />
                    </div>
                    <div className="flex flex-row justify-between items-center w-full gap-16 px-12">
                    <Select
                        label="Governate"
                        variant="bordered"
                        placeholder="Select a governate"
                        selectedKeys={governateSelected ? [governateSelected] : []}
                        className="flex-1"
                        onChange={handleGovernateSelection}
                    >
                        {siteConfig.governates.map((g) => (
                        <SelectItem key={g.name} value={g.name}>
                            {g.name}
                        </SelectItem>
                        ))}
                    </Select>
                    <Select
                        label="Area"
                        variant="bordered"
                        placeholder="Select an area"
                        selectedKeys={areaSelected ? [areaSelected] : []}
                        className="flex-1"
                        onChange={handleAreaSelection}
                    >
                        {areasToSelect.map((a) => (
                        <SelectItem key={a} value={a}>
                            {a}
                        </SelectItem>
                        ))}
                    </Select>
                    </div>
                    <div className="w-full px-12 mr-0.25">
                        <Input
                            value={orgNameValue}
                            type="text"
                            label="Organization Name"
                            variant="bordered"
                            color={"default"}
                            onValueChange={setOrgNameValue}
                            placeholder="Enter your Organization name"
                            isInvalid={isOrgNameValid}
                        />
                    </div>
                    <div className="flex justify-center w-1/2 gap-24">
                        <div className="flex flex-col justify-center items-center gap-2 ">
                            <h1 className="text-2xl ">Update Location</h1>
                            <Divider />
                            <MapComponent />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 mb-20 mt-6">
                            <h1 className="text-2xl ">Update Documents</h1>
                            <Divider />
                            <FileUploader />
                        </div>
                    </div>
                        <div className="flex flex-row justify-end items-end gap-4 w-full">
                        <a href="/requestsFirstPage" className="flex flex-row justify-end items-end gap-4">
                        <Button color='danger'> Delete</Button>
                        <Button color='default'> Cancel</Button>
                        <Button color="success"> Save</Button>

                        </a>
                        </div>
            </div>        
                    
    );
            
}