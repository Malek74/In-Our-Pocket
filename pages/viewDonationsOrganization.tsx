/* eslint-disable react/jsx-key */
import { Navbar } from "@/components/navbar";
import OrgTable from "@/components/orgTable";
import SearchBar from "@/components/searchBar";
import Sidebar from "@/components/sideBar";
import {
  Button,
  Pagination,
  Breadcrumbs,
  BreadcrumbItem,
  Chip,
} from "@nextui-org/react";
import FilterMenu from "../components/filterMenu";
import MyDropdown from "@/components/DropDownMenu";
import FilterItemText from "@/components/filterItemText";
import FilterItemDropDown from "@/components/filterItemDropDown";
import { FaPlus } from "react-icons/fa";
import DonationTable from "@/components/donationsTable";
import { SetStateAction, useEffect, useState } from "react";
import {
  columns,
  originalSetDonation,
  filterDonations,
  searchDonations,
} from "@/components/donationsData";
import OrgElements from "@/components/OrgElements";
import { CreateDonationModal } from "@/components/createDonationModal";

export default function ViewDonationsOrganization() {
  const [query, setQuery] = useState("");
  const [value2, setValue2] = useState("None");
  const [value1, setValue1] = useState("None");
  const [column1, setColumn1] = useState("null");
  const [column2, setColumn2] = useState("null");
  const [results, setResults] = useState(originalSetDonation);
  const [filteredResults, setFilteredResults] = useState(originalSetDonation);
  const [displayedResults, setDisplayedResults] = useState(originalSetDonation);
  const [filterCol1, setFilterCol1] = useState("");
  const [filterCol2, setFilterCol2] = useState("");
  const [statusChip, setStatusChip] = useState("hidden");
  const [categoryChip, setCategoryChip] = useState("hidden");

  function handleChange(
    selectedValue: SetStateAction<string>,
    selectedColumn: SetStateAction<string>
  ) {
    if (selectedColumn === "Category") {
      setValue1(selectedValue);
      setColumn1(selectedColumn);
      setFilterCol1(selectedValue);
      setCategoryChip("visible");
    }
    if (selectedColumn === "status") {
      setValue2(selectedValue);
      setColumn2(selectedColumn);
      setFilterCol2(selectedValue);
      setStatusChip("visible");
    }
  }
  function handleDelete(id: any) {
    const newRes = results.filter((result) => result.id !== id);
    setResults(newRes);
    const filteredResults =
      filterDonations(newRes, column1, value1, column2, value2) || [];
    setDisplayedResults(filteredResults);
  }

  function handleSearch(query: string) {
    setQuery(query);
    const searched = searchDonations(filteredResults, query) || [];
    setDisplayedResults(searched);
  }

  function closeFilterCategory() {
    setValue1("None");
    setColumn1("null");
    setFilterCol1("");
    setCategoryChip("hidden");
  }

  function closeFilterStatus() {
    setValue2("None");
    setColumn2("null");
    setFilterCol2("");
    setStatusChip("hidden");
  }

  useEffect(() => {
    const filtered =
      filterDonations(results, column1, value1, column2, value2) || [];
    setFilteredResults(filtered);
    setDisplayedResults(filtered);
  }, [results, column1, value1, column2, value2]);

  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-row flex-1">
        <div className="flex-initial w-[250px]">
          <Sidebar elements={OrgElements}></Sidebar>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between m-4 align-middle">
            <div>
              <h1 className="font-bold text-4xl">Donations Management</h1>
            </div>
            <div className="flex flex-row justify-between">
              <div className="align-middle m-1">
                <Chip
                  onClose={closeFilterCategory}
                  variant="bordered"
                  className={categoryChip}
                >
                  <div className="flex flex-row">
                    <p className="font-bold">Category:</p>
                    {filterCol1}
                  </div>
                </Chip>
                <Chip
                  onClose={closeFilterStatus}
                  variant="bordered"
                  className={statusChip}
                >
                  <div className="flex flex-row">
                    <p className="font-bold">Status:</p>
                    {filterCol2}
                  </div>{" "}
                </Chip>
              </div>
              <div className="align-middle m-1">
                <CreateDonationModal></CreateDonationModal>
              </div>

              <div className="align-middle m-1">
                <FilterMenu
                  variant="regular"
                  icon={<p>Filter</p>}
                  items={[
                    <FilterItemDropDown
                      attribute="Status"
                      values={["Fulfilled", "Pending"].sort()}
                      onChange={handleChange}
                      value={value2}
                      column="status"
                      variant="regular"
                    ></FilterItemDropDown>,
                    <FilterItemDropDown
                      attribute="Category"
                      values={[
                        "Clothes",
                        "Toys",
                        "Food",
                        "Medical Supplies",
                        "School Supplies",
                        "Blood",
                      ].sort()}
                      onChange={handleChange}
                      value={value1}
                      column="Category"
                      variant="regular"
                    ></FilterItemDropDown>,
                  ]}
                ></FilterMenu>
              </div>
              <div className="w-[240]">
                <SearchBar
                  query={query}
                  handleSearch={handleSearch}
                  placeHolder="Search by Donation"
                />
              </div>
            </div>
          </div>
          <DonationTable
            donations={displayedResults}
            columns={columns}
            deleteFunction={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
