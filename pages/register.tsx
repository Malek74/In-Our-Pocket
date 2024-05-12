import { EyeFilledIcon, EyeSlashFilledIcon } from "@/components/icons";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import NextLink from "next/link";
import { DonorRegistrationForm } from "@/components/donorRegistrationForm";
import { OrgRegistrationForm } from "@/components/orgRegistrationForm";

export default function Page() {
  const [buttonPressed, setButtonPressed] = useState(false);
  const [selectedForm, setSelectedForm] = useState("");

  return (
    <div className="flex flex-col min-h-screen justify-center items-center gap-6">
      <Card className="flex flex-col justify-center items-center gap-4 p-6">
        <CardHeader className="flex justify-center items-center">
          <label className="text-xl font-bold">Register</label>
        </CardHeader>
        <Divider />
        <CardBody className="flex flex-row justify-center items-center gap-4">
          {buttonPressed ? (
            ""
          ) : (
            <>
              <Button
                onClick={() => {
                  setButtonPressed(true);
                  setSelectedForm("Donor");
                }}
              >
                Donor
              </Button>
              <Button
                onClick={() => {
                  setButtonPressed(true);
                  setSelectedForm("Org");
                }}
              >
                Organization
              </Button>
            </>
          )}
          {selectedForm == "" ? (
            ""
          ) : selectedForm == "Donor" ? (
            <DonorRegistrationForm />
          ) : (
            <OrgRegistrationForm />
          )}
        </CardBody>
      </Card>
    </div>
  );
}
