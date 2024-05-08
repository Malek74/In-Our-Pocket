import {
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import { siteConfig } from "@/config/site";
import FileUploader from "./FileUploader";

export const OrgRegistrationForm = () => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [addressValue, setAddressValue] = useState("");

  const validateEmail = (email: string) =>
    email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i);

  const isInvalidEmail = useMemo(() => {
    if (emailValue === "") return true;
    return validateEmail(emailValue) ? false : true;
  }, [emailValue]);

  const isInvalidPassword = useMemo(() => {
    return passwordValue !== confirmPasswordValue || passwordValue === "";
  }, [passwordValue, confirmPasswordValue]);

  const isFNvalid = useMemo(() => {
    return firstNameValue.length == 0;
  }, [firstNameValue]);

  const isLNvalid = useMemo(() => {
    return lastNameValue.length == 0;
  }, [lastNameValue]);

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
  const [contactValue, setContactValue] = useState("");
  return (
    <div className="flex flex-col gap-4 justify-center">
      <FileUploader />
      <Map />
    </div>
  );
};
