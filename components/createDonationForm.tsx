import { useState } from "react";
import {
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Input,
  Textarea,
} from "@nextui-org/react";
import FileUploader from "./FileUploader";
import { siteConfig } from "@/config/site";
const ClothesForm = () => {
  const clothesTypes = [
    "T-Shirts",
    "Hoodies",
    "Jackets",
    "Sweatshirts",
    "Pants",
    "Socks",
  ];
  const [clothesType, setClothesType] = useState("");
  const handleClothesTypeSelection = (e: any) => {
    setClothesType(e.target.value);
  };

  const seasons = ["Summer", "Winter", "Autumn", "Spring"];
  const [season, setSeason] = useState("");
  const handleSeasoneSelection = (e: any) => {
    setSeason(e.target.value);
  };
  return (
    <div className="flex flex-col gap-4 justify-center">
      <Select
        isRequired
        label="Clothes Type"
        variant="bordered"
        placeholder="Select a type"
        selectedKeys={clothesType ? [clothesType] : []}
        className="flex-1"
        onChange={handleClothesTypeSelection}
      >
        {clothesTypes.map((c) => (
          <SelectItem key={c} value={c}>
            {c}
          </SelectItem>
        ))}
      </Select>
      <Input
        isRequired
        type="number"
        label="Age"
        placeholder="eg. 18"
        variant="bordered"
      />
      <Input
        isRequired
        type="number"
        label="Quantity"
        placeholder="eg. 100"
        variant="bordered"
      />
      <RadioGroup
        isRequired
        label="Select your gender"
        orientation="horizontal"
      >
        <Radio value="male">Male</Radio>
        <Radio value="female">Female</Radio>
      </RadioGroup>
      <Select
        isRequired
        label="Clothes Season"
        variant="bordered"
        placeholder="Select a season"
        selectedKeys={season ? [season] : []}
        className="flex-1"
        onChange={handleSeasoneSelection}
      >
        {seasons.map((c) => (
          <SelectItem key={c} value={c}>
            {c}
          </SelectItem>
        ))}
      </Select>
      <Input
        isRequired
        type="text"
        label="Material"
        placeholder="eg. Cotton, Silk, etc."
        variant="bordered"
      />
      <p>Upload a Photo</p>
      <FileUploader />
    </div>
  );
};
const ToysForm = () => {
  const toyTypes = ["Board Games", "Dolls", "Puzzles"];
  const [toyType, setToyType] = useState("");
  const handleToyTypeSelection = (e: any) => {
    setToyType(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 justify-center">
      <Select
        isRequired
        label="Toy Type"
        variant="bordered"
        placeholder="Select a type"
        selectedKeys={toyType ? [toyType] : []}
        className="flex-1"
        onChange={handleToyTypeSelection}
      >
        {toyTypes.map((c) => (
          <SelectItem key={c} value={c}>
            {c}
          </SelectItem>
        ))}
      </Select>
      <Input
        isRequired
        type="number"
        label="Age"
        placeholder="eg. 18"
        variant="bordered"
      />
      <Input
        isRequired
        type="number"
        label="Quantity"
        placeholder="eg. 100"
        variant="bordered"
      />
      <RadioGroup
        isRequired
        label="Select your gender"
        orientation="horizontal"
      >
        <Radio value="male">Male</Radio>
        <Radio value="female">Female</Radio>
      </RadioGroup>
      <p>Upload a Photo</p>
      <FileUploader />
    </div>
  );
};
const MedicalSuppliesForm = () => {
  const medicalDeviceTypes = [
    "Diagnostic Equipment",
    "Monitoring Equipment",
    "Surgical Instruments",
    "Prosthetic Devices",
    "Medical Imaging Devices",
    "Laboratory Equipment",
    "Dental Equipment",
    "Other Medical Supplies",
  ];

  const [medDeviceType, setMedDeviceType] = useState("");
  const handleMedDeviceTypeSelection = (e: any) => {
    setMedDeviceType(e.target.value);
  };

  return (
    <div className="flex flex-col gap-4 justify-center">
      <Select
        isRequired
        label="Medical Device Type"
        variant="bordered"
        placeholder="Select a type"
        selectedKeys={medDeviceType ? [medDeviceType] : []}
        className="flex-1"
        onChange={handleMedDeviceTypeSelection}
      >
        {medicalDeviceTypes.map((c) => (
          <SelectItem key={c} value={c}>
            {c}
          </SelectItem>
        ))}
      </Select>
      <Input
        isRequired
        type="text"
        label="Medical Device Use"
        placeholder="eg. Reads blood pressure."
        variant="bordered"
      />
      <Input
        isRequired
        type="number"
        label="Quantity"
        placeholder="eg. 100"
        variant="bordered"
      />
      <p>Upload a Photo</p>
      <FileUploader />
    </div>
  );
};
const SchoolSuppliesForm = () => {
  const stationaryTypes = [
    "Pens",
    "Pencils",
    "Erasers",
    "Notebooks",
    "Markers",
    "Highlighters",
    "Rulers",
    "Scissors",
    "Staplers",
    "Paper Clips",
    "Binder Clips",
    "Sticky Notes",
    "Index Cards",
    "Whiteboard Markers",
    "Chalk",
    "Correction Tape/Pens",
    "Folders",
    "Binders",
    "Calculator",
    "Drawing Supplies (e.g., crayons, colored pencils)",
    "Glue/Glue Stick",
    "Tape",
    "Rubber Bands",
    "Sharpeners",
    "Compasses",
    "Protractors",
    "Stencils",
    "Push Pins",
    "Clipboards",
    "Desk Organizers",
    "Envelopes",
    "File Folders",
    "Paper (e.g., lined, graph, printer)",
    "Notebook Dividers",
    "Paper Punch",
    "Presentation Boards",
    "Rubber Stamps",
    "Label Maker",
    "Planners/Agendas",
    "Calendar",
    "Desk Calendar",
    "Dry Erase Calendar",
    "Business Cards",
    "Receipts",
    "Shipping Labels",
    "Postage Stamps",
    "Bookmarks",
    "Gift Wrap",
    "Craft Supplies (e.g., glitter, beads, pom-poms)",
  ];

  const [stationaryType, setStationaryType] = useState("");
  const handleStationaryTypeSelection = (e: any) => {
    setStationaryType(e.target.value);
  };
  const [suppliesType, setSuppliesType] = useState("");
  return (
    <div className="flex flex-col gap-4 justify-center">
      <RadioGroup
        isRequired
        label="Select supplies type"
        value={suppliesType}
        onValueChange={setSuppliesType}
        orientation="horizontal"
      >
        <Radio value="books">Books</Radio>
        <Radio value="stationaryItems">Stationary Items</Radio>
      </RadioGroup>
      {suppliesType == "books" ? (
        <>
          <Input
            isRequired
            type="text"
            label="Book Name"
            placeholder="eg. The Hunger Games Mockingjay."
            variant="bordered"
          />
          <Input
            isRequired
            type="text"
            label="Author Name"
            placeholder="eg. Suzanne Collins."
            variant="bordered"
          />
          <Input
            isRequired
            type="text"
            label="Language"
            placeholder="eg. German."
            variant="bordered"
          />
          <Textarea
            isRequired
            type="text"
            label="Book Summary"
            placeholder="eg. Explore the intricate plot twists, unravel the characters' motivations, and delve into the heart of the narrative...."
            variant="bordered"
          />
          <Input
            isRequired
            type="number"
            label="Quantity"
            placeholder="eg. 100"
            variant="bordered"
          />
          <p>Upload a Photo</p>
          <FileUploader />
        </>
      ) : suppliesType == "stationaryItems" ? (
        <>
          <Select
            isRequired
            label="Stationary Item Type"
            variant="bordered"
            placeholder="Select a type"
            selectedKeys={stationaryType ? [stationaryType] : []}
            className="flex-1"
            onChange={handleStationaryTypeSelection}
          >
            {stationaryTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </Select>

          <Input
            isRequired
            type="number"
            label="Quantity"
            placeholder="eg. 100"
            variant="bordered"
          />
          <p>Upload a Photo</p>
          <FileUploader />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
const BloodDonationsForm = () => {
  const rhTypes = ["Rh-positive", "Rh-negative"];
  const bloodTypes = ["A", "B", "AB", "O"];
  const [selectedBloodType, setSelectedBloodType] = useState("");
  const handleBloodTypeSelection = (e: any) => {
    setSelectedBloodType(e.target.value);
  };
  const [selectedRhType, setSelectedRhType] = useState("");
  const handleRhTypeSelection = (e: any) => {
    setSelectedRhType(e.target.value);
  };

  const [governateSelected, setGovernateSelected] = useState("");
  const [areasToSelect, setAreasToSelect] = useState([""]);

  const handleGovernateSelection = (e: any) => {
    setGovernateSelected(e.target.value);
    siteConfig.governates.forEach((g) => {
      if (g.name == e.target.value) {
        setAreasToSelect(g.areas);
      }
    });
  };
  const [areaSelected, setAreaSelected] = useState("");

  const handleAreaSelection = (e: any) => {
    setAreaSelected(e.target.value);
  };
  return (
    <div className="flex flex-col gap-4 justify-center">
      <Input
        isRequired
        type="text"
        label="Patient Name"
        placeholder="eg. Gasser Emara."
        variant="bordered"
      />
      <Select
        isRequired
        label="Blood Type"
        variant="bordered"
        placeholder="Select a blood type"
        selectedKeys={selectedBloodType ? [selectedBloodType] : []}
        className="flex-1"
        onChange={handleBloodTypeSelection}
      >
        {bloodTypes.map((type) => (
          <SelectItem key={type} value={type}>
            {type}
          </SelectItem>
        ))}
      </Select>
      <Select
        isRequired
        label="RH Type"
        variant="bordered"
        placeholder="Select an RH type"
        selectedKeys={selectedRhType ? [selectedRhType] : []}
        className="flex-1"
        onChange={handleRhTypeSelection}
      >
        {rhTypes.map((type) => (
          <SelectItem key={type} value={type}>
            {type}
          </SelectItem>
        ))}
      </Select>
      <Input
        isRequired
        type="text"
        label="Hospital Name"
        placeholder="eg. 57357 Hospital."
        variant="bordered"
      />
      <div className="flex flex-row justify-center items-center gap-4">
        <Select
          isRequired
          label="Hospital Governate"
          variant="bordered"
          placeholder="Select a governate"
          selectedKeys={governateSelected ? [governateSelected] : []}
          className="flex-1"
          onChange={handleGovernateSelection}
        >
          {siteConfig.governates.map((g) => (
            <SelectItem key={g.name} value={g.name}>
              {g.name}
            </SelectItem>
          ))}
        </Select>
        <Select
          isRequired
          label="Hospital Area"
          variant="bordered"
          placeholder="Select an area"
          selectedKeys={areaSelected ? [areaSelected] : []}
          className="flex-1"
          onChange={handleAreaSelection}
          isDisabled={governateSelected == ""}
        >
          {areasToSelect.map((a) => (
            <SelectItem key={a} value={a}>
              {a}
            </SelectItem>
          ))}
        </Select>
      </div>
      <Input
        isRequired
        type="text"
        label="Hospital Address"
        placeholder="eg. 3 Al Mahkama Street."
        variant="bordered"
      />
      <p>Upload Blood Tests</p>
      <FileUploader />
    </div>
  );
};
const FoodForm = () => {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <Input
        isRequired
        type="text"
        label="Name"
        placeholder="eg. Steak."
        variant="bordered"
      />
      <Input
        isRequired
        type="number"
        label="Quantity"
        placeholder="eg. 100"
        variant="bordered"
      />
      <p>Upload a Photo</p>
      <FileUploader />
    </div>
  );
};

export const CreateDonationForm = ({ variant }: { variant: string }) => {
  switch (variant) {
    case "Clothes":
      return <ClothesForm />;
    case "Toys":
      return <ToysForm />;
    case "Medical Supplies":
      return <MedicalSuppliesForm />;
    case "School Supplies":
      return <SchoolSuppliesForm />;
    case "Blood Donations":
      return <BloodDonationsForm />;
    case "Food":
      return <FoodForm />;
    default:
      return <></>;
  }
};
