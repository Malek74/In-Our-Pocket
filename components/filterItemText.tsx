import React, { useState } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input, Textarea } from "@nextui-org/react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function FilterItemText(props: any) {
  const [isSelected, setIsSelected] = useState(false);
  const name = props.name;

  const handleAreaChange = (area: string) => {
    setIsSelected(true);
    // Handle area change logic here if needed
  };

  return (
    <div>
      <Dropdown closeOnSelect={false}>
        <DropdownTrigger>
          <div className="flex flex-row justify-between">
            <div>{name}</div>
            <div><IoMdArrowDropdown /></div>
          </div>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem >
             
        <Textarea
          variant="underlined"
          labelPlacement="outside"
          placeholder="Enter Area to filter with"
          minRows={2}
          bg-transparent
        />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
