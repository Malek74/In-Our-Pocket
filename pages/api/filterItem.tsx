// FilterItem.jsx
import React, { useState } from "react";
import { Checkbox, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

interface FilterItemProps {
}

export default function FilterItem() {
    const [isSelected, setIsSelected] = useState(false);

    const handleAreaChange = (area: string) => {
        setIsSelected(true);
    };

    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <Checkbox checked={isSelected} onValueChange={setIsSelected}>
                        Area
                    </Checkbox>
                </DropdownTrigger>
                <DropdownMenu>
                    <DropdownItem onClick={() => handleAreaChange("Maadi")}>Maadi</DropdownItem>
                    <DropdownItem onClick={() => handleAreaChange("New Cairo")}>New Cairo</DropdownItem>
                    <DropdownItem onClick={() => handleAreaChange("Giza")}>Giza</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
