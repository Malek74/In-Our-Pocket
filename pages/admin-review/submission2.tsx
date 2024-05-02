import DefaultLayout from "@/layouts/default";
import { Button } from "@nextui-org/react";

export default function S2() {
  return (
    <DefaultLayout>
      <div className="relative flex flex-row h-screen">
        <Button color="success">Accept</Button>
        <Button color="danger">Reject</Button>
      </div>
    </DefaultLayout>
  );
}
