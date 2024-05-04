// FilterMenu.jsx
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import FilterItem from "./filterItem";

interface FilterMenuProps {
    handleFilterChange: (area: string | null) => void;
}

export default function FilterMenu() {
    return (
        <Dropdown closeOnSelect={false}>
            <DropdownTrigger>
                <Button variant="bordered">Filter</Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
                <DropdownItem>
                    <FilterItem />
                </DropdownItem>
                <DropdownItem>Copy link</DropdownItem>
                <DropdownItem key="edit" shortcut="⌘⇧E">
                    Edit file
                </DropdownItem>
                <DropdownItem key="delete" className="text-danger" color="danger" shortcut="⌘⇧D">
                    Delete file
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
