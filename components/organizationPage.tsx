import {
  Download,
  OpenInNewOffRounded,
  OpenInNewOutlined,
} from "@mui/icons-material";
import React from "react";
import { Button } from "@nextui-org/react";
import OpenInNewTabIcon from "./openInNewTabIcon";
import { Tooltip } from "@nextui-org/react";
import DownloadIcon from "./DownloadIcon";

const FormView = ({ data }: { data: any }) => {
  const handleOpenInNewTab = () => {
    const pdfUrl = "/Lect.pdf";
    window.open(pdfUrl, "_blank");
  };
  return (
    <div className="container mx-auto mt-8">
      {/* Organization Name and Type */}
      <div className="flex justify-center mb-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-2">{data.organizationName}</h1>
          <p className="text-lg">{data.organizationType}</p>
        </div>
      </div>

      {/* Left Aligned Attributes */}
      <div className="flex justify-center mb-4">
        <div className="w-3/5 pr-8">
          <div className="mb-4">
            <p className="font-bold">Representative Information:</p>
            <p>
              <span className="font-semibold">First Name:</span>{" "}
              {data.representativeFirstName}
            </p>
            <p>
              <span className="font-semibold">Last Name:</span>{" "}
              {data.representativeLastName}
            </p>
            <p>
              <span className="font-semibold">Gender:</span>{" "}
              {data.representativeGender}
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Proof of Employment:</p>
            <div className="flex items-center">
              <Button
                className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
                color="primary"
                variant="ghost"
                startContent={<OpenInNewTabIcon />}
                onClick={handleOpenInNewTab}
              >
                Open in New Tab
              </Button>
              <a href="/Lect.pdf" download>
                <Button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  color="primary"
                  variant="ghost"
                  startContent={<DownloadIcon />}
                >
                  {" "}
                  Download
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Right Aligned Attributes */}
        <div className="w-2/5 pl-8">
          <div className="mb-4">
            <p className="font-bold">Contact Information:</p>
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {data.representativeAddress}
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              {data.representativeEmail}
            </p>
            <p>
              <span className="font-semibold">Number:</span>{" "}
              {data.representativeNumber}
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold">Proof of Organization Legitimacy:</p>
            <div className="flex items-center">
              <Button
                className="mr-2 bg-blue-500 text-white px-4 py-2 rounded"
                color="primary"
                variant="ghost"
                startContent={<OpenInNewTabIcon />}
                onClick={handleOpenInNewTab}
              >
                Open in New Tab
              </Button>
              <a href="/Lect.pdf" download>
                <Button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  color="primary"
                  variant="ghost"
                  startContent={<DownloadIcon />}
                >
                  {" "}
                  Download
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormView;
