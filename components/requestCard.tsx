import { Image, Card, CardBody, CardFooter } from "@nextui-org/react";
import React from "react";

export default function RequestCard({ data }: { data: any }) {
  return (
    <Card shadow="sm" className="overflow-visible p-0" isPressable>
      <CardBody>
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={data.title}
          className="w-full object-cover h-[140px]"
          src={data.img}
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{data.title}</b>
      </CardFooter>
    </Card>
  );
}
