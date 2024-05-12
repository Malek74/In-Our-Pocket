import { Select, SelectItem } from "@nextui-org/react";

export default function dropdownSubject() {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <Select
      placeholder="Select an option"
      onChange={(value) => console.log("Selected:", value)}
    >
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </Select>
  );
}
