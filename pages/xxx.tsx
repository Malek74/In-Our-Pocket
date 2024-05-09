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
import { useRouter } from "next/router";
import CR from "@/pages/ChooseReq";

export default function xxx () {
  const [itemName, setItemName] = useState("");
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [buttonPressed, setButtonPressed] = useState(false);
  const [selectedForm, setSelectedForm] = useState("");
const router = useRouter(); 

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  function showAlert() {
    alert("Request has been submitted!!");}

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
          value={itemName}
          type="text"
          label="Item Name"
          variant="bordered"
          color={"default"}
          onValueChange={setItemName}
          className="w-80"
          placeholder="Enter the item name you want to donate:"
          isRequired
        />
        <Input
          value={desc}
          type="text"
          label="Description"
          variant="bordered"
          color={"default"}
          onValueChange={setDesc}
          className="w-80"
          placeholder="Enter the description of your item:"
          isRequired
        />
        <div className="flex flex-row items-center">
            <p className="mr-4 text-gray-700 ">Quantity: </p>
          <Button radius="full" className="bg-rose text-black text-1xl font-bold shadow-lg mr-4"  onClick={decrementQuantity}>
            -
          </Button>
          <span className="mr-4"  >{quantity}</span>
          <Button radius="full" className="bg-rose text-black text-1xl font-bold shadow-lg" onClick={incrementQuantity}>
            +
          </Button>
        </div>
      </div>
    </div>
    <Divider />
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
    </Card>
    </div>
   

    </>
  );
}
