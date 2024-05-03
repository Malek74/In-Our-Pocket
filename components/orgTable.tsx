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
} from "@nextui-org/react";
import { EditIcon } from "./editIcon";
import { DeleteIcon } from "./deleteIcon";
import { columns, users } from "./orgData";
import { EyeIcon } from "./eyeIcon";

const statusColorMap = {
  active: "success",
  pending: "warning",
};

export default function OrgTable() {
  const [currentPage, setCurrentPage] = useState<number>(1);


  const renderCell = React.useCallback((user: any, columnKey: string) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            // description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "type":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.team}
            </p>
          </div>
        );
      case "status":
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
            <Tooltip content="Details"></Tooltip>
            <Tooltip content="Edit organisation">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete organisation">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip>
            <Tooltip content="View Orgaization">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EyeIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const paginatedUsers = users.slice(
    (currentPage - 1) * 5,
    currentPage * 5
  );

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
                <TableCell>
                  {renderCell(item, columnKey.toString())}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination className="mt-2"
        initialPage={currentPage}
        total={Math.ceil(users.length / 5)}
        color="primary"
        onChange={(page) => handlePageChange(page)}
      ></Pagination>
    </div>
  );
}
