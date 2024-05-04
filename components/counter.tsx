import { useState } from "react";
import { Button } from "@nextui-org/react";

export const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <Button radius="full" onPress={() => setCount(count + 1)}>
      Count is {count}
    </Button>
  );
};
