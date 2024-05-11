import FilterMenu from "@/components/filterMenu";
import { Navbar } from "@/components/navbar";
import MainCategories from "@/components/requestsMainCategories";
import SearchBar from "@/components/searchBar";
import SideNavbar from "@/components/sideBar";

export default function Categories() {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar></Navbar>
      <div className="flex flex-row flex-1">
        <div className="flex-initial w-[250px]">
          <SideNavbar></SideNavbar>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between m-4 align-middle">
            <div>
              <h1 className="">What would you like to donate?</h1>
            </div>
            <div className="flex flex-row justify-between">
              <div className="align-middle m-1">
                <FilterMenu></FilterMenu>
              </div>
            </div>
          </div>
          <MainCategories></MainCategories>
        </div>
      </div>
    </div>
  );
}
