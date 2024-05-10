import AdminElements from "@/components/AdminsideBarElements";
import { Navbar } from "@/components/navbar";
import Sidebar from "@/components/sideBar";
import Image from 'next/image';
import newOrgChart from "@/components/images/newOrganisationChart.png" ;
import orgsNumbers from "@/components/images/numberOfOrganisations.png" ;
import newUserChart from "@/components/images/newUsersChart.png" ;
import usersNumbers from "@/components/images/numberOfUsers.png" ;

export default function AdminAnalytics() {
    return (
        <div className="relative flex flex-col h-screen">
			<Navbar />
			<div className="flex flex-row justify-center">
                <div className=" ">
                    <Sidebar elements={AdminElements} />
                </div>
				<div className="flex flex-col m-2">
                    <div>
                        <h1 className="font-bold text-4xl m-2">Organization Analytics</h1>
                        <div className="flex flex-row ">
                            <div className="border-solid border-2 m-2 rounded-xl">
                                <div>
                                    <h1 className="font-bold text-lg m-2">
                                        Number of New Organizations
                                    </h1>
                                </div>
                                <Image src={newOrgChart}  alt={"New Organizations per Month"} className="m-2 border-solid" />
                            </div>
                            <div className="border-solid border-2 m-2 rounded-xl min-w-[500px] min-h-[296px]">
                                <h1 className="font-bold text-lg m-2">
                                    Number of Organizations
                                </h1>
                                <Image src={orgsNumbers}  alt={"Number of Organizations"} className="m-2 border-solid" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-4xl m-2">Users Analytics</h1>
                        <div className="flex flex-row ">
                            <div className="border-solid border-2 m-2 rounded-xl">
                                <div>
                                    <h1 className="font-bold text-lg m-2">
                                        Number of New Users
                                    </h1>
                                </div>
                                <Image src={newUserChart}  alt={"New Organizations per Month"} className="m-2 border-solid" />
                            </div>
                            <div className="border-solid border-2 m-2 rounded-xl min-w-[500px] min-h-[296px]">
                                <h1 className="font-bold text-lg m-2">
                                    Number of Users
                                </h1>
                                <Image src={usersNumbers}  alt={"Number of Organizations"} className="m-2 border-solid" />
                            </div>
                        </div>
                    </div>
                </div>
			</div>
		</div>
    );
}
