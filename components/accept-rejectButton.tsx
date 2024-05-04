import { Button, ButtonGroup } from "@nextui-org/react";

export const ARButton = () => {
  return (
    <div className="relative flex flex-row h-screen justify-center">
      <Button color="success">Accept</Button>
      <Button color="danger">Reject</Button>
    </div>
  );
};
