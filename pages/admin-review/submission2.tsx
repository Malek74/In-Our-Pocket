import { ARButton } from "@/components/accept-rejectButton";
import DefaultLayout from "@/layouts/default";
import { Image, Card, CardBody, CardHeader } from "@nextui-org/react";

export default function S2() {
  return (
    <DefaultLayout>
      <div>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Submission 2</h4>
            <p className="text-tiny uppercase font-bold">Desc</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        </Card>
        <ARButton></ARButton>
      </div>
    </DefaultLayout>
  );
}
