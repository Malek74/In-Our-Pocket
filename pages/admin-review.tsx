import DefaultLayout from "@/layouts/default";
import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  Link,
  Navbar,
  button,
} from "@nextui-org/react";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { useState } from "react";

export default function adminReviewPage() {
  const [events, setEvents] = useState([]);

  return (
    <DefaultLayout>
      <div className="relative flex flex-col h-screen">
        <Card>
          <CardHeader>Submission 1</CardHeader>
          <CardFooter>
            <Link href="/admin-review/submission1">Review Submission</Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>Submission 2</CardHeader>
          <CardFooter>
            <Link href="/admin-review/submission2">Review Submission</Link>
          </CardFooter>
        </Card>
      </div>
    </DefaultLayout>
  );
}
