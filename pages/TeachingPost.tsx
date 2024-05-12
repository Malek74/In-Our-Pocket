import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { useMemo, useState } from "react";
import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sideBar";
import {
  Button,
  Card,
  CardHeader,
  Divider,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import React from "react";
import FormView from "@/components/organizationPage";
import { item } from "@/components/ClothesDonationDetails";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";
import Image from "next/image";
import jeansImage from "@/components/images/jeans_image.jpg";
import Stethooo from "@/components/images/stetho.jpg";
import option from "@/components/dropdownSubject";

export default function TeachingPost() {
  const [quantity, setQuantity] = useState(1);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [selectedForm, setSelectedForm] = useState("");

  const [desc, setDesc] = useState("");

  const options = [
    { value: "option1", label: "None" },
    { value: "option2", label: "Math" },
    { value: "option3", label: "Physics" },
    { value: "option4", label: "Biology" },
    { value: "option5", label: "Chemistry" },
    { value: "option6", label: "English" },
    { value: "option7", label: "French" },
    { value: "option8", label: "German" },
    { value: "option9", label: "Arabic" },
  ];

  function showAlert() {
    alert("Thank you for your contribution, your request has been submitted.");
  }
  return (
    <>
      <div>
        <Navbar />
        <Sidebar elements={DonorElements}></Sidebar>
      </div>
      <div className="flex flex-col min-h-screen justify-center items-center gap-6 bg-gray-200">
        <Card
          className="flex flex-col justify-left items-left gap-4 p-6 bg-white rounded-lg shadow-md"
          style={{ width: "50%", minWidth: "600px" }}
        >
          <CardHeader className="flex justify-center items-left">
            <label className="text-4xl text-black font-bold">
              Teaching Posts
            </label>
          </CardHeader>
          <Divider />

          <Card
            className="flex flex-col justify-left items-left gap-4 p-6 bg-cyan rounded-lg shadow-md"
            style={{ width: "30%", minWidth: "550px" }}
          >
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="text-2xl text-black font-bold mr-2">
                  Number of Students:{" "}
                </p>
                <p className="text-2xl text-black">30</p>
              </div>
              <div className="flex items-center">
                <p className="text-2xl text-black font-bold mr-2 mt-3">
                  Address:{" "}
                </p>
                <p className="text-2xl text-black mt-3">Teseen</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-black font-bold mr-2 mt-3">
                  {
                    "Please select a subject from each drop down. If you don't want to choose another subject please choose none."
                  }
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-2xl text-black font-bold mr-4 mt-2">
                  Subject: Maths
                </p>

                <div
                  className="flex items-center mt-2"
                  style={{ width: "300px" }}
                ></div>
              </div>
            </div>
          </Card>

          <Divider />
          <div className="flex flex-row items-center  justify-center gap-10 ">
            <Button
              onClick={showAlert}
              type="submit"
              radius="full"
              className="bg-cyan text-black text-1xl font-bold shadow-lg"
              style={{ width: "300px" }}
            >
              Submit
            </Button>
            {/* <Button radius="full" className="bg-cyan text-black text-1xl font-bold shadow-lg"
                        > Go Back</Button> */}
          </div>
        </Card>
      </div>
    </>
  );
}
