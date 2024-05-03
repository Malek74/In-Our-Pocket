import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn, Checkbox} from "@nextui-org/react";

export default function FilterMenu() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Filter
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem >
        <Checkbox >Area</Checkbox>
        </DropdownItem>
        <DropdownItem >
          Copy link
        </DropdownItem>
        <DropdownItem
          key="edit"
          shortcut="⌘⇧E"
        >
          Edit file
        </DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          shortcut="⌘⇧D"
        >
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
