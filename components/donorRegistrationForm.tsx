import {
  Input,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useMemo, useState } from "react";
import { siteConfig } from "@/config/site";

export const DonorRegistrationForm = () => {
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
      <div className="flex flex-row justify-center items-center gap-4">
        <Input
          value={firstNameValue}
          type="text"
          label="First Name"
          variant="bordered"
          color={"default"}
          onValueChange={setFirstNameValue}
          className="w-80"
          placeholder="Enter your first name"
          isRequired
          isInvalid={isFNvalid}
        />
        <Input
          value={lastNameValue}
          type="text"
          label="Last Name"
          variant="bordered"
          color={"default"}
          onValueChange={setLastNameValue}
          className="w-80"
          placeholder="Enter your last name"
          isRequired
          isInvalid={isLNvalid}
        />
      </div>
      <Input
        value={emailValue}
        type="email"
        label="Email"
        variant="bordered"
        isInvalid={isInvalidEmail}
        color={
          isInvalidEmail
            ? "danger"
            : emailValue.length === 0
            ? "default"
            : "success"
        }
        errorMessage={isInvalidEmail && "Please enter a valid email"}
        onValueChange={setEmailValue}
        className="w-full"
        placeholder="Enter your email"
        isRequired
      />
      <div className="flex flex-row justify-center items-center gap-4">
        <Input
          value={passwordValue}
          type="password"
          label="Password"
          variant="bordered"
          color={isInvalidPassword ? "danger" : "default"}
          isInvalid={isInvalidPassword}
          errorMessage={isInvalidPassword && "Passwords do not match"}
          onValueChange={setPasswordValue}
          className="w-80"
          placeholder="Enter your password"
          isRequired
        />
        <Input
          value={confirmPasswordValue}
          type="password"
          label="Confirm Password"
          variant="bordered"
          isInvalid={isInvalidPassword}
          color={isInvalidPassword ? "danger" : "default"}
          errorMessage={isInvalidPassword && "Passwords do not match"}
          onValueChange={setConfirmPasswordValue}
          className="w-80"
          placeholder="Confirm your password"
          isRequired
        />
      </div>
      <RadioGroup
        isRequired
        label="Select your gender"
        value={genderValue}
        onValueChange={setGenderValue}
        orientation="horizontal"
      >
        <Radio value="male">Male</Radio>
        <Radio value="female">Female</Radio>
      </RadioGroup>
      <Input
        value={contactValue}
        type="text"
        label="Contact Number"
        variant="bordered"
        color={"default"}
        onValueChange={setContactValue}
        className="w-full"
        placeholder="eg. 01X XXXXXXXX"
        isRequired
      />
      <div className="flex flex-row justify-center items-center gap-4">
        <Select
          isRequired
          label="Governate"
          variant="bordered"
          placeholder="Select a governate"
          selectedKeys={[governateSelected]}
          className="w-80"
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
          label="Area"
          variant="bordered"
          placeholder="Select a governate"
          selectedKeys={[areaSelected]}
          className="w-80"
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
        value={addressValue}
        type="text"
        label="Address"
        variant="bordered"
        color={"default"}
        onValueChange={setAddressValue}
        className="w-full"
        placeholder="Enter your Address"
        isRequired
      />
    </div>
  );
};
