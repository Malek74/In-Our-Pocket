import AdminElements from "@/components/AdminsideBarElements";
import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sideBar";
import Image from "next/image";
import donationsChart from "@/components/images/donationsChart.png";
import driverImage from "@/components/images/driver.jpg";
import licensePlate from "@/components/images/licensePlate.png";
import car from "@/components/images/car.png";
import trip from "@/components/images/trip.png";

import OrgElements from "@/components/OrgElements";
import { Button, Divider, Tooltip } from "@nextui-org/react";
import { FaMessage } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdOutlineStarRate,MdStarRate  } from "react-icons/md";

export default function TrackRide() {
    return (
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-row justify-center">
          <div className=" ">
            <Sidebar elements={[]} />
          </div>

          <div className="flex flex-col m-2">
            <div>
              <h1 className="font-bold text-4xl m-2">Track Ride</h1>
              
              <div className="flex flex-col m-2">
                <div>
                  <div className="flex flex-row">
                    <div className="border-solid border-2 m-2 rounded-xl min-w-[500px] min-h-[296px]">
                      <h1 className="font-bold text-2xl m-2">Driver Details:</h1>
                      <div className="flex flex-col">
                        <div className="flex flex-row justify-end">
                          <div className="border-solid border-1 rounded-xl mr-1">
                            <Image src={driverImage} className="p-1" alt="Driver Image" width={100} height={100}/>
                          </div>
                        </div>
                      </div>
                      <div>
                        <ul>
                          <li className="m-2"><span className="font-bold">Name:</span> Daniel Ricciardo</li>
                          <li className="m-2">
                            <div className="flex flex-row align-middle">
                              <p><span className="font-bold">Phone:</span> +20100100055 </p>   
                              <Tooltip content="Message Driver" key="Message" ><div><FaMessage className="m-1"></FaMessage></div></Tooltip>
                              <Tooltip content="Call Driver" key="Call" ><div><MdCall className="m-1"></MdCall></div></Tooltip>    
                            </div>
                          </li>
                          <li className="m-2"> 
                            <div className="flex flex-row ">
                              <p><span className="font-bold">Rating:</span></p> 
                              <div className=" flex flex-row m-1">
                                <MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdStarRate /><MdOutlineStarRate/>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  
                    <div className="border-solid border-2 m-2 rounded-xl min-w-[500px] min-h-[296px]">
                      <h1 className="font-bold text-2xl m-2">Vehicle Details:</h1>
                      <div className="flex flex-col">
                        <div className="flex justify-start">
                          <Image src={licensePlate} className="p-1" alt="Car License" width={100} height={100}/>
                          <Image src={car} className="p-1" alt="Car" width={100} height={100}/>
                        </div>
                        <div>
                          <ul>
                            <li className="m-2"><span className="font-bold">Make:</span> Kia</li>
                            <li className="m-2"><span className="font-bold">Model:</span> Picanto</li>
                            <li className="m-2"><span className="font-bold">Type:</span> Car</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-solid border-2 m-2 rounded-xl min-w-[1000px] min-h-[296px]">
                    <h1 className="font-bold text-2xl m-2">Trip Details:</h1>
                    <div className="m-2 flex flex-row align-middle justify-center">  
                      <div>
                        <Image src={trip} className="p-1" alt="Car" width={800} height={100}/>
                      </div> 
                    </div>
                    <ul>
                      <li className="m-2"><span className="font-bold">Pickup:</span> 48 Moustafa El-Nahhas</li>
                      <li className="m-2"><span className="font-bold">Destination:</span> Resala Charity Association, 2 Zaki Rostom</li>
                      <li className="m-2"><span className="font-bold">ETA:</span> 4:28</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  