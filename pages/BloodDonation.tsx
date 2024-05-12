import { useState } from "react";
import { Navbar } from "@/components/navbar";
import SideNavbar from "@/components/sideBar";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Divider,
  Input,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import StaticMapView from "@/components/StaticMapView";
import { CardContent } from "@mui/material";
import AlertModal from "@/components/AlertModal";

//import {columns} from '@/components/ClothesDonationDetails'

export default function BloodDonation() {
  const [desc, setDesc] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  function showAlert() {
    alert("Thank you for your contribution, your request has been submitted.");
  }
  return (
    <>
      <div className="flex flex-col gap-5 bg-gray-200 h-screen">
        <Navbar />
        <div className="flex justify-center items-start bg-gray-200">
          <div className="flex">
            <Card className=" p-6 bg-white rounded-lg shadow-md">
              <CardHeader className="flex flex-col gap-4 justify-center">
                <label className="text-4xl text-black font-bold">
                  Category: Blood Donation
                </label>
                <Divider />
              </CardHeader>

              <CardContent className="flex flex-row gap-4 p-6 bg-rose rounded-lg shadow-md">
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="flex items-center">
                      <p className="text-2xl text-black font-bold mr-2">
                        Patient Name:{" "}
                      </p>
                      <p className="text-2xl text-black">Omar</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-2xl text-black font-bold mr-2">
                        Blood Type:{" "}
                      </p>
                      <p className="text-2xl text-black"> A+</p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-2xl text-black font-bold mr-2">
                        Hospital Name:{" "}
                      </p>
                      <p className="text-2xl text-black">Air Force Hospital </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-2xl text-black font-bold mr-2">
                        Hospital Area:
                      </p>
                      <p className="text-2xl text-black">5th Settelment </p>
                    </div>
                    <div className="flex items-center">
                      <p className="text-2xl text-black font-bold mr-2">
                        Hospital Address:
                      </p>
                      <p className="text-2xl text-black"> Teseen Street</p>
                    </div>
                  </div>
                  <div>
                    <div className=" text-black gap-10 text-2xl">
                      <Input
                        value={desc}
                        type="text"
                        label="Health Issues (if any)?"
                        variant="bordered"
                        //color={"bg-black"}
                        onValueChange={setDesc}
                        className="max-w-xs text-black"
                        style={{ width: "300px" }}
                        placeholder="Enter info here"
                        //isRequired
                      />
                    </div>
                  </div>
                </div>
                <span className="w-[1px] h-inherit bg-black"></span>
                <StaticMapView variant="hospital" />
              </CardContent>
              <CardFooter className="flex flex-col gap-4 justify-center">
                <Button
                  onClick={onOpen}
                  type="submit"
                  radius="full"
                  className="bg-rose text-black text-1xl font-bold shadow-lg"
                  style={{ width: "300px" }}
                >
                  Donate
                </Button>
                <AlertModal
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  variant={"success"}
                  message={
                    "Successfully donated blood now swing by the hospital."
                  }
                />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
