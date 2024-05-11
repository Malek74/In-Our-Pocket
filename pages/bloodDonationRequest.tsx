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
import { SetStateAction, useEffect, useState } from "react";
import {
  bloodDonationRequestsUsers,
  filterUsers,
  searchUsers,
  bloodDonationRequestsColumns,
} from "@/components/RequestsData";
import FilterItemDropDown from "@/components/filterItemDropDown";
import RequestTable from "@/components/requestCard";

const statusColorMap: {
  [key: string]:
    | "danger"
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | undefined;
} = {
  fulfilled: "success",
  pending: "warning",
};

export default function BloodDonationRequestsViewer() {
  const [query, setQuery] = useState("");
  const [value2, setValue2] = useState("None");
  const [value1, setValue1] = useState("None");
  const [value3, setValue3] = useState("None");
  const [column1, setColumn1] = useState("null");
  const [column2, setColumn2] = useState("null");
  const [column3, setColumn3] = useState("null");
  const [results, setResults] = useState(bloodDonationRequestsUsers);
  const [filteredResults, setFilteredResults] = useState(
    bloodDonationRequestsUsers
  );
  const [displayedResults, setDisplayedResults] = useState(
    bloodDonationRequestsUsers
  );
  const [filterCol1, setFilterCol1] = useState("");
  const [filterCol2, setFilterCol2] = useState("");
  const [filterCol3, setFilterCol3] = useState("");
  const [govChip, setGovChip] = useState("hidden");
  const [hospitalChip, setHospitalChip] = useState("hidden");
  const [areaChip, setAreaChip] = useState("hidden");

  function handleChange(
    selectedValue: SetStateAction<string>,
    selectedColumn: SetStateAction<string>
  ) {
    console.log(selectedValue, selectedColumn);
    if (selectedColumn === "hospital") {
      setValue1(selectedValue);
      setColumn1(selectedColumn);
      setFilterCol1(selectedValue);
      setHospitalChip("visible");
    }
    if (selectedColumn === "governorate") {
      setValue2(selectedValue);
      setColumn2(selectedColumn);
      setFilterCol2(selectedValue);
      setGovChip("visible");
    }
    if (selectedColumn === "area") {
      setValue3(selectedValue);
      setColumn3(selectedColumn);
      setFilterCol3(selectedValue);
      setAreaChip("visible");
    }
  }
  function handleDelete(id: any) {
    const newRes = results.filter((result) => result.id !== id);
    setResults(newRes);
    const filteredResults =
      filterUsers(newRes, column1, value1, column2, value2, column3, value3) ||
      [];
    setDisplayedResults(filteredResults);
  }

  function handleSearch(query: string) {
    setQuery(query);
    const searched = searchUsers(filteredResults, query) || [];
    setDisplayedResults(searched);
  }

  function closeFilterType() {
    setValue1("None");
    setColumn1("null");
    setFilterCol1("");
    setHospitalChip("hidden");
  }

  function closerFilterArea() {
    setValue2("None");
    setColumn2("null");
    setFilterCol2("");
    setGovChip("hidden");
  }

  function closeFilterStatus() {
    setValue3("None");
    setColumn3("null");
    setFilterCol3("");
    setAreaChip("hidden");
  }

  useEffect(() => {
    const filtered =
      filterUsers(results, column1, value1, column2, value2, column3, value3) ||
      [];
    setFilteredResults(filtered);
    setDisplayedResults(filtered);
  }, [results, column1, value1, column2, value2, column3, value3]);

  return (
    <div className="relative flex flex-col h-screen">
      <Navbar></Navbar>
      <div className="flex flex-row flex-1">
        <div className="flex-initial w-[250px]">
          <Sidebar></Sidebar>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between m-4 align-middle">
            <div>
              <h1 className="font-bold size-23">Blood Donation Requests</h1>
            </div>
            <div className="flex flex-row justify-between">
              <div className="align-middle m-1">
                <Chip
                  onClose={closeFilterType}
                  variant="bordered"
                  className={hospitalChip}
                >
                  <div className="flex flex-row">
                    <p className="font-bold">Hospital:</p>
                    {filterCol1}
                  </div>
                </Chip>
                <Chip
                  onClose={closerFilterArea}
                  variant="bordered"
                  className={govChip}
                >
                  <div className="flex flex-row">
                    <p className="font-bold">Governate:</p>
                    {filterCol2}
                  </div>{" "}
                </Chip>
                <Chip
                  onClose={closeFilterStatus}
                  variant="bordered"
                  className={areaChip}
                >
                  <div className="flex flex-row">
                    <p className="font-bold">Area:</p>
                    {filterCol3}
                  </div>{" "}
                </Chip>
              </div>
              <div className="align-middle m-1">
                <FilterMenu
                  items={[
                    <FilterItemDropDown
                      attribute="Hospital"
                      values={[
                        "Hospital 1",
                        "Hospital 2",
                        "Hospital 3",
                      ].sort()}
                      column="hospital"
                      onChange={handleChange}
                      value={value1}
                    ></FilterItemDropDown>,
                    <FilterItemDropDown
                      attribute="Governorate"
                      values={["Alexandria", "Cairo"].sort()}
                      onChange={handleChange}
                      value={value2}
                      column="governorate"
                    ></FilterItemDropDown>,
                    <FilterItemDropDown
                      attribute="Area"
                      values={[ "New Cairo", "Madinet Nasr", "Maadi"].sort()}
                      onChange={handleChange}
                      value={value3}
                      column="area"
                    ></FilterItemDropDown>,
                  ]}
                ></FilterMenu>
              </div>
              <div className="w-[240]">
                <SearchBar
                  placeHolder="Search by Organisation Name"
                  query={query}
                  handleSearch={handleSearch}
                />
              </div>
            </div>
          </div>
          <RequestTable
            users={displayedResults}
            columns={bloodDonationRequestsColumns}
            deleteFunction={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
