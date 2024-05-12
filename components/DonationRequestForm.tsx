import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

export const DonationRequestForm = () => {
  const [itemName, setItemName] = useState("");
  const [desc, setDesc] = useState("");
  const [quantity, setQuantity] = useState(0);

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-col gap-4 justify-center">
      <div className="flex flex-col justify-center items-center gap-4 p-6">
        <Input
          value={itemName}
          type="text"
          label="Item Name"
          variant="bordered"
          color={"default"}
          onValueChange={setItemName}
          className="w-80"
          placeholder="Enter the item name you want to donate:"
          isRequired
        />
        <Input
          value={desc}
          type="text"
          label="Description"
          variant="bordered"
          color={"default"}
          onValueChange={setDesc}
          className="w-80"
          placeholder="Enter the description of your item:"
          isRequired
        />
        <div className="flex flex-row items-center">
          <Button radius="full" onClick={decrementQuantity}>
            -
          </Button>
          <span>{quantity}</span>
          <Button radius="full" onClick={incrementQuantity}>
            +
          </Button>
        </div>
      </div>
    </div>
  );
};
