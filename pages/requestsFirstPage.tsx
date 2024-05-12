import DonorElements from "@/components/donorElements";
import FilterMenu from "@/components/filterMenu";
import { Navbar } from "@/components/navbar";
import MainCategories from "@/components/requestsMainCategories";
import SearchBar from "@/components/searchBar";
import Sidebar from "@/components/sideBar";
import { user } from "@nextui-org/react";

export default function Categories() {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar user="donor"></Navbar>
      <div className="flex flex-row flex-1">
        <div className="flex-initial w-[250px]">
          <Sidebar elements={DonorElements}></Sidebar>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex text-xl justify-center m-4 align-middle">
            <div>
              <h1 className="p-6 font-bold justify-center">
                What would you like to donate?
              </h1>
            </div>
          </div>
          <MainCategories></MainCategories>
        </div>
      </div>
    </div>
  );
}
