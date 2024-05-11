import { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { CreateDonationForm } from "./createDonationForm";

export const CreateDonationModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [typeSelected, setTypeSelected] = useState("");
  const handleTypeSelection = (e: any) => {
    setTypeSelected(e.target.value);
  };

  return (
    <>
      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} shadow="md">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Create Donation Request
              </ModalHeader>
              <ModalBody>
                <Select
                  isRequired
                  label="Donation Item Category"
                  variant="bordered"
                  placeholder="Select a category to view the form"
                  selectedKeys={typeSelected ? [typeSelected] : []}
                  className="w-[400px]"
                  onChange={handleTypeSelection}
                >
                  {siteConfig.donationCat.map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </Select>
                <CreateDonationForm variant={typeSelected} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="bordered" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Submit Request
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
