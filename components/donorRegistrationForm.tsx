import { Input, Select, SelectItem } from "@nextui-org/react";
import { useMemo, useState } from "react";

export const DonorRegistrationForm = () => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const validateEmail = (email: string) =>
    email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i);

  const isInvalidEmail = useMemo(() => {
    if (emailValue === "") return false;
    return validateEmail(emailValue) ? false : true;
  }, [emailValue]);

  const isInvalidPassword = useMemo(() => {
    return passwordValue !== confirmPasswordValue || passwordValue === "";
  }, [passwordValue, confirmPasswordValue]);

  const genders = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
  ];

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
      <Select label="Select Gender" className="max-w-xs">
        {genders.map((gender) => (
          <SelectItem key={gender.value} value={gender.value}>
            {gender.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
