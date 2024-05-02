import DefaultLayout from "@/layouts/default";
import { Button, Card, Navbar, button } from "@nextui-org/react";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { useState } from "react";

export default function adminReviewPage() {
  const [events, setEvents] = useState([]);
  const { pressProps, isPressed } = usePress({});

  return (
    <DefaultLayout>
      <Button>test</Button>
    </DefaultLayout>
  );
}
function usePress(arg0: {}): { pressProps: any; isPressed: any } {
  throw new Error("Function not implemented.");
}
