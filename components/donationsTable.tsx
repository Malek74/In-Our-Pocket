import React, { Key, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Tooltip,
  Pagination,
  useDisclosure,
} from "@nextui-org/react";
import { DeleteIcon } from "./deleteIcon";
import { EyeIcon } from "./eyeIcon";
import DeleteDialog from "./deleteDialog";
import { BiSolidDonateBlood } from "react-icons/bi";
import { TbHorseToy } from "react-icons/tb";
import { GiClothes } from "react-icons/gi";
import { FaDrumstickBite,FaBriefcaseMedical,FaPencilRuler  } from "react-icons/fa";


const statusColorMap = {
  Fulfilled: "success",
  Pending: "warning",
};

export default function DonationTable({donations, columns,deleteFunction}: {donations: any[], columns: any[],deleteFunction: any  }) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [donationId, setDonationId] = useState(0);
  const openDeleteDialog = () => {
    setDeleteDialogOpen(true);

  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  function handleDelete  (id:number)  {
    openDeleteDialog();
    setDonationId(id); 
  };
  function deleteEntry(){
    deleteFunction(donationId);
    closeDeleteDialog();
  }
  
  const handleViewClick = ( requestID: number) => {
    sessionStorage.setItem('selectedReqID', requestID.toString());
    onOpenChange
    console.log("Org ID:", requestID);
  };

  const renderCell = React.useCallback(
    (donation: any, columnKey: string, key: string, value: string) => {
      const cellValue = donation[columnKey];
  
      switch (columnKey) {
        case "donation":
          let avatarIcon;
          switch (donation.Category) {
            case "Clothes":
              avatarIcon = <GiClothes />;
              break;
            case "Toys":
              avatarIcon = <TbHorseToy />;
              break;
            case "Food":
              avatarIcon = <FaDrumstickBite />;
              break;
            case "Medical Supplies":
              avatarIcon = <FaBriefcaseMedical />;
              break;
            case "School Supplies":
              avatarIcon = <FaPencilRuler />;
              ;
              break;
            case "Blood Donation":
            default:
              avatarIcon = <BiSolidDonateBlood />;
              break;
          }
          return (

            <div className="flex items-center">
              {avatarIcon && <span className="mr-2">{avatarIcon}</span>}
              <span className="font-semibold">{donation.donation}</span>
            </div>
          );
        case "status":
          // Here you can apply your filtering logic based on key and value
            return (
              <Chip
                className="capitalize"
                color={
                  statusColorMap[
                    donation.status as keyof typeof statusColorMap
                  ] as "success" | "warning" | undefined
                }
                size="sm"
                variant="flat"
              >
                {cellValue}
              </Chip>
            );
          
        case "actions":
          return (
            <div className="relative flex items-center gap-2 mt-1">
              <Tooltip content="View Donation">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50" >
                  <link href="" onClick={() => handleViewClick(donationId)}><EyeIcon /></link>
                  
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete donation">
                <span
                  className="text-lg text-danger cursor-pointer active:opacity-50"
                  onClick={() => handleDelete(donation.id)}
                >
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  const paginatedDonations = donations.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  


  return (
    <div className="flex-1 flex flex-col">
      <Table aria-label="Donations table">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={paginatedDonations}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey: Key) => (
                <TableCell>
                  {renderCell(item, columnKey.toString(), "status", "pending")}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination
        className="mt-2"
        initialPage={currentPage}
        total={Math.ceil(donations.length / 5)}
        color="primary"
        onChange={(page) => handlePageChange(page)}
      ></Pagination>
      <DeleteDialog
        open={deleteDialogOpen}
        onClose={closeDeleteDialog}
        onConfirm={deleteEntry}
        messageHeader="Delete Donation"
        message="Are you sure you want to delete this donation request? Donation will be permanently
        removed. This action cannot be undone."
      />
    </div>
  );
}
