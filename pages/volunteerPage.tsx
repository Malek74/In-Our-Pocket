import { Navbar } from "@/components/navbar";
import OrgTable from "@/components/orgTable";
import SearchBar from "@/components/searchBar";
import Sidebar from "@/components/sideBar";
import {
  Button,
  Pagination,
  Breadcrumbs,
  BreadcrumbItem,
  Link,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import DataHolder_Wborder from "@/components/dataHolderWborder";
import { Image } from "@nextui-org/image";
import OrganizationLogo from "@/components/OrganizationLogo";
import BusinessIcon from "@mui/icons-material/Business";
import PlaceIcon from "@mui/icons-material/Place";
import MapIcon from "@mui/icons-material/Map";
import AreaIcon from "@/components/areaIcon";
import DownloadIcon from "@/components/DownloadIcon";
import OpenInNewTabIcon from "@/components/openInNewTabIcon";
import {
  CakeOutlined,
  EmailOutlined,
  LocalPhoneOutlined,
  Person,
  Person2Outlined,
  PersonPinCircleOutlined,
  Work,
} from "@mui/icons-material";
import FormView from "@/components/organizationPage";
import { originalSet } from "@/components/donordata";
import exp from "constants";

export default function VolunteerPage() {
  const [Name, setName] = useState("None");
  const [Expertise, setExp] = useState("None");
  const [Age, setAge] = useState("None");
  const [Email, setEmail] = useState("None");
  const [Address, setAdd] = useState("None");
  const [Gender, setgender] = useState("None");
  const [Number, setNum] = useState("None");
  const [DOB, setDOB] = useState("None");
  const [Status, setStatus] = useState("None");

  useEffect(() => {
    const donorId = sessionStorage.getItem("selectedDonorId");

    if (donorId !== null) {
      const selectedDonor = originalSet.find(
        (originalSet) => originalSet.id === parseInt(donorId)
      );

      if (selectedDonor) {
        setName(selectedDonor.name);
        setName(selectedDonor.name);
        setExp(selectedDonor.exp);
        setAge(selectedDonor.age);
        setEmail(selectedDonor.email);
        setAdd(selectedDonor.address);
        setgender(selectedDonor.gender);
        setNum(selectedDonor.number);
        setDOB(selectedDonor.dob);
        setStatus(selectedDonor.status);
      } else {
        console.log("Donor not found with the given ID");
      }
    }
  }, []);

  const handleOpenInNewTab = () => {
    const pdfUrl = "/lect.pdf";
    window.open(pdfUrl, "_blank");
  };
  const handleDownload = () => {
    const anchor = document.createElement("a");
    anchor.href = "/lect.pdf";
    anchor.download = "";
    anchor.click();
  };

  return (
    <div className="relative flex flex-col h-screen">
      <Navbar></Navbar>
      <div className="flex flex-row flex-1">
        <div className="flex-initial w-[250px]">
          <Sidebar elements={[]}></Sidebar>
        </div>
        <div className="flex-1 flex flex-col">
          <div>
            <div className="flex-1 flex flex-col">
              <div className="mx-12 my-12 flex justify-between">
                <div className="w-1/4">
                  <Image
                    width={500}
                    height={500}
                    alt="NextUI hero Image"
                    src="/sample-images/sampleTeacherImg.jpeg"
                  />
                </div>
                <div className="w-3/4 mx-4 my-2 flex-col ">
                  <div className="flex justify-start">
                    <Person2Outlined className="ml-1 mt-1 fill-[#A1A1A1] text-6xl" />
                    <h1 className="text-6xl font-large ml-2 ">{Name}</h1>
                  </div>

                  <div className="flex justify-start ml-24">
                    <Work className="fill-[#A1A1AA] ml-1 mt-3" />
                    <h2 className="text-4xl font-large text-default-400 ml-3">
                      {Expertise}
                    </h2>
                  </div>

                  <div className="flex justify-start ml-24">
                    <CakeOutlined className="fill-[#A1A1AA] ml-1 mt-2" />
                    <h2 className="text-3xl font-large text-default-400 ml-3">
                      {DOB} ({Age})
                    </h2>
                  </div>
                </div>
              </div>

              <div className="pr-12 pl-12">
                <div
                  id="headerText"
                  className="relative bg-[#FFF] text-center z-1000 w-[180px] mx-[auto] my-[0] font-bold"
                >
                  Request Details
                </div>
                <div
                  id="insideText"
                  className="p-[20px] border-[1px] border-[solid] border-[#DDDDDD] rounded-lg -mt-[10px]"
                >
                  {/* div holding request details */}
                  <div className="flex justify-center mb-4 mx-12 ">
                    {/*div holding left aligned objects  */}
                    <div className="w-1/2 pl-8 pr-8">
                      {/* rep info div */}
                      <div className="pr-12 pl-12">
                        <div
                          id="headerText"
                          className="relative bg-[#FFF] text-center z-1000 w-[150px] mx-[auto] my-[0] font-bold"
                        >
                          <p className="bg-white">Volunteer Details:</p>
                        </div>
                        <div
                          id="insideText"
                          className="p-[20px] border-[1px] border-[solid] border-[#DDDDDD] rounded-lg -mt-[10px]"
                        >
                          <div className="justifymb-4">
                            <p>
                              <span className="font-semibold text-default-400">
                                First Name: {Name}
                              </span>
                            </p>
                            <p>
                              <span className="font-semibold text-default-400">
                                Last Name: {Name}
                              </span>{" "}
                            </p>
                            <p>
                              <span className="font-semibold text-default-400">
                                Gender: {Gender}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* div holding right aligned details */}
                    <div className="w-1/2 pl-8 pr-8 ">
                      <div className="pl-12 pr-12">
                        <div
                          id="headerText"
                          className="relative bg-[#FFF] text-center z-1000 w-[205px] mx-[auto] my-[0] font-bold"
                        >
                          Contact Information:
                        </div>
                        <div
                          id="insideText"
                          className="p-[20px] border-[1px] border-[solid] border-[#DDDDDD] rounded-lg -mt-[10px]"
                        >
                          {/* Contact Info div */}
                          <div className="">
                            <div className="flex justify-start">
                              <PersonPinCircleOutlined className="" />
                              <p>
                                <span className="font-semibold text-default-400 ml-2">
                                  {Address}
                                </span>
                              </p>
                            </div>

                            <div className="flex justify-start ">
                              <EmailOutlined className="fill-gray" />
                              <p>
                                <span className="font-semibold text-default-400 ml-2">
                                  {Email}
                                </span>
                              </p>
                            </div>

                            <div className="flex justify-start">
                              <LocalPhoneOutlined className="fill-gray" />
                              <p>
                                <span className="font-semibold text-default-400 ml-2">
                                  Number: {Number}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pr-12 pl-12">
                      <div
                        id="headerText"
                        className="relative bg-[#FFF] text-center z-1000 w-[100px] mx-[auto] my-[0] font-bold"
                      >
                        Resume:
                      </div>

                      <div
                        id="insideText"
                        className="p-[20px] border-[1px] border-[solid] border-[#DDDDDD] rounded-lg -mt-[10px]"
                      >
                        {/* Resume div */}
                        <div>
                          {/* div holding buttons */}
                          <div className="grid jusity-items-between justify-start justify-items-center gap-2 mx-24 -my-[8px]  ">
                            <Button
                              className=" px-4 py-2 rounded"
                              color="primary"
                              isDisabled={Expertise === "Regular Donor"}
                              variant="ghost"
                              startContent={<OpenInNewTabIcon />}
                              onClick={handleOpenInNewTab}
                            >
                              Open in New Tab
                            </Button>
                            <Button
                              className="px-4 py-2 rounded w-40"
                              color="primary"
                              isDisabled={Expertise === "Regular Donor"}
                              variant="ghost"
                              startContent={<DownloadIcon />}
                              onClick={handleDownload}
                            >
                              {" "}
                              <p className="">Download</p>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end bg-red mx-1 my-4">
                  <Button
                    className=" mx-4 my-4 px-4 py-2 rounded "
                    isDisabled={
                      Expertise === "Regular Donor" || Status !== "pending"
                    }
                    size="lg"
                    color="danger"
                    variant="solid"
                  >
                    Reject Request
                  </Button>
                  <Button
                    className=" mx-4 my-4 px-4 py-2 rounded"
                    isDisabled={
                      Expertise === "Regular Donor" || Status !== "pending"
                    }
                    size="lg"
                    color="success"
                    variant="solid"
                  >
                    Accept Request
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
