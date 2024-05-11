import { Modal, ModalContent } from "@nextui-org/react";
import { Alert } from "@mui/material";
import { FaCheck } from "react-icons/fa";
import { VscError } from "react-icons/vsc";
interface AlertModalProps {
  isOpen: boolean;
  onOpenChange: (newState: boolean) => void;
  variant: "success" | "error";
  message: string;
}
interface AlertProps {
  message: string;
}
const SuccessAlert: React.FC<AlertProps> = ({ message }) => {
  return (
    <Alert severity="success" icon={<FaCheck size={27} color="green" />}>
      <p className="text-lg">{message}</p>
    </Alert>
  );
};
const ErrorAlert: React.FC<AlertProps> = ({ message }) => {
  return (
    <Alert severity="error" icon={<VscError size={27} color="red" />}>
      <p className="text-lg">{message}</p>
    </Alert>
  );
};
const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onOpenChange,
  variant,
  message,
}) => {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        shadow="md"
        backdrop="transparent"
        size="2xl"
        hideCloseButton
        placement="top"
      >
        <ModalContent>
          <>
            {variant === "success" ? <SuccessAlert message={message} /> : null}
            {variant === "error" ? <ErrorAlert message={message} /> : null}
          </>
        </ModalContent>
      </Modal>
    </>
  );
};
export default AlertModal;
