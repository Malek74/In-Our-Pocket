import AdminElements from "@/components/AdminsideBarElements";
import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sideBar";
import Image from "next/image";
import donationsChart from "@/components/images/donationsChart.png";
import numberOfDonation from "@/components/images/numberOfDonations.png";

import OrgElements from "@/components/OrgElements";

export default function OrgLandingPage() {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row justify-center">
        <div className=" ">
          <Sidebar elements={OrgElements} />
        </div>
        <div className="flex flex-col m-2">
          <div>
            <h1 className="font-bold text-4xl m-2">Donations Analytics</h1>
            <div className="flex flex-row ">
              <div className="border-solid border-2 m-2 rounded-xl min-w-[500px] min-h-[296px]">
                <h1 className="font-bold text-lg m-2">Number of Donations</h1>
                <Image
                  src={donationsChart}
                  alt={"Number of Donation"}
                  className="m-2 border-solid"
                />
              </div>

              <div className="border-solid border-2 m-2 rounded-xl">
                <div>
                  <h1 className="font-bold text-lg m-2">
                    {"Number of this month's Donations"}
                  </h1>
                </div>
                <Image
                  src={numberOfDonation}
                  alt={"Number of Donations this Month"}
                  className="m-2 border-solid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
