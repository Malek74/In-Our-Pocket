import React, { Key, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  Pagination,
  Link,
} from "@nextui-org/react";
import { DeleteIcon } from "./deleteIcon";
import { EyeIcon } from "./eyeIcon";
import DeleteDialog from "./deleteDialog";
import { FaBell } from "react-icons/fa";

const statusColorMap = {
  active: "success",
  pending: "warning",
};

export default function RequestTable({
  columns,
  users,
  deleteFunction,
}: {
  columns: any[];
  users: any[];
  deleteFunction: any;
}) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [userID, setUserID] = useState(0);
  const openDeleteDialog = () => {
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };

  function handleDelete(id: number) {
    openDeleteDialog();
    setUserID(id);
  }
  function deleteEntry() {
    deleteFunction(userID);
    closeDeleteDialog();
  }

  const renderCell = React.useCallback((user: any, columnKey: string) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        let avatarIcon = <FaBell></FaBell>;
        return (
          <div className="flex items-center">
            {avatarIcon && <span className="mr-2">{avatarIcon}</span>}
            <span className="font-semibold">{user.name}</span>
          </div>
        );
      case "age":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "gender":
        return (
          <Chip
            className="capitalize"
            color={
              statusColorMap[user.status as keyof typeof statusColorMap] as
                | "success"
                | "warning"
                | "default"
                | "primary"
                | "secondary"
                | "danger"
                | undefined
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
            <Tooltip content="View Orgaization">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Link href="./organizationDetails" className="bg-grey">
                  <EyeIcon />
                </Link>
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete organisation">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => handleDelete(user.id)}
              >
                {" "}
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      case "review":
        return (
          <div className="relative flex items-center gap-2 mt-1">
            <Tooltip content="View Orgaization">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Link href="./organizationDetails" className="bg-grey">
                  <EyeIcon />
                </Link>
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete organisation">
              <span
                className="text-lg text-danger cursor-pointer active:opacity-50"
                onClick={() => handleDelete(user.id)}
              >
                {" "}
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const paginatedUsers = users.slice((currentPage - 1) * 5, currentPage * 5);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex-1 flex flex-col">
      <Table aria-label="Example table with custom cells">
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
        <TableBody items={paginatedUsers}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey: Key) => (
                <TableCell>{renderCell(item, columnKey.toString())}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination
        className="mt-2"
        initialPage={currentPage}
        total={Math.ceil(users.length / 5)}
        color="primary"
        onChange={(page) => handlePageChange(page)}
      ></Pagination>
      <DeleteDialog
        open={deleteDialogOpen}
        onClose={closeDeleteDialog}
        onConfirm={deleteEntry}
      />
    </div>
  );
}
