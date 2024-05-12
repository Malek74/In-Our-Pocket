import React from "react";
import { RadioGroup, Radio } from "@nextui-org/radio";

export default function PickRide() {
    return (
        <RadioGroup
            label="Select transportation type"
        >
            <Radio value="truck">Truck :estimated arrival time in 4 day(s)</Radio>
            <Radio value="plane">Plane :estimated arrival time in 1 day(s) </Radio>
            <Radio value="bike">Ship :estimated arrival time in 2 day(s)</Radio>
        </RadioGroup>
    );
}