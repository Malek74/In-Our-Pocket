
import React from "react";
import {Button, ButtonGroup} from "@nextui-org/react";

export default function AcceptOrReject() {
  return (
    <ButtonGroup>
      <Button color="success">Accept</Button>
      <Button color="danger">Reject</Button>
    </ButtonGroup>
  );
}