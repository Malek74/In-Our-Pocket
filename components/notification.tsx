import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function Notification( props: any) {
    const icon = props.icon || null;
    const mainTitle=props.mainTitle;
    const message=props.message;
    const linkText=props.linkText || "View Notification";
    const redirect=props.dest||"/google.com"
  return (
    <Card  className="bg-mint w-[250px] flex justify-center align-middle">
      <CardHeader className="flex gap-3">
        {icon}
        <div className="flex flex-col">
          <h3 className=" font-bold">{mainTitle}</h3>
          {/* <p className="text-small text-default-500">nextui.org</p> */}
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{message}.</p>
      </CardBody>
      <Divider/>
      <CardFooter className="justify-end">
        <Link
          href={redirect}
        >
          {linkText}
        </Link>
      </CardFooter>
    </Card>
  );
}
