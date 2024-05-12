import React from "react";
import { TimeInput } from "@nextui-org/react";
import { Time } from "@internationalized/date";

export default function TimePick() {
    return (
        <div className="flex flex-wrap gap-4">
            <TimeInput label="Pickup time" />

        </div>
    );
}