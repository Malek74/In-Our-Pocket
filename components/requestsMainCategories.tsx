import { Card, CardBody, CardFooter, Image, Link } from "@nextui-org/react";
import React from "react";
import { Navbar } from "./navbar";
import SideNavbar from "./sideBar";

export default function MainCategories() {
  const list = [
    {
      title: "Clothes",
      img: "/clothes.jpg",
      link: "/clothes",
    },
    {
      title: "School Supplies",
      img: "/schoolSupplies.jpg",
      link: "/schoolSupplies",
    },
    {
      title: "Toys",
      img: "/toys.jpg",
      link: "/toys",
    },
    {
      title: "Medical Supplies",
      img: "/medicalSupplies.jpg",
      link: "/medicalSupplies",
    },
    {
      title: "Blood Donation",
      img: "/bloodDonation.jpg",
      link: "/bloodDonationRequest",
    },
    {
      title: "Teaching Posts",
      img: "/teachingPosts.jpg",
      link: "/teachingPosts",
    },
    {
      title: "Food",
      img: "/food.jpg",
      link: "/food",
    },
    {
      title: "Medical Cases",
      img: "/medicalCases.jpg",
      link: "/medicalCases",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item) => (
        <Link href={item.link} className="overflow-visible p-0">
          <Card shadow="sm" isPressable>
            <CardBody>
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
