import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { useMemo, useState } from "react";
import { Counter } from '@/components/counter'
import { Navbar } from '@/components/navbar'
 import {Button, Input} from "@nextui-org/react";
import React from "react";



//export default function ClothesDonationDetails() {
    
    const columns = [
        { name: "Type", uid: "type" },
        { name: "Gender", uid: "gender" },
        { name: "Age", uid: "age" },
        { name: "Season", uid: "season" },
        { name: "Material", uid: "material" },
        { name: "Quantity", uid: "quantity" },

      ];
      
      const item = [
        {
          type: "Jeans",
          gender: "Male",
          age: "18+",
          season: "Any",
          material: "Denim",
          quantity: "1",
         // image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },
        {
          type: "Shirt",
          gender: "Unisex",
          age: "18+",
          season: "Summer",
          material: "Cotton",
          quantity: "7",
          //image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        },

      ];
      export {  item };