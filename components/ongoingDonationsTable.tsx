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
    Button,
    Link,
} from "@nextui-org/react";
import { EditIcon } from "./editIcon";
import { DeleteIcon } from "./deleteIcon";
import { columns, users } from "./ongoingDonationsData";
import { EyeIcon } from "./eyeIcon";
import ProgressBar from "./progressBar";
import OrgTable from "./accountTable";



export default function OngoingDonationsTable() {
    const [currentPage, setCurrentPage] = useState<number>(1);


    const renderCell = React.useCallback((user: any, columnKey: string) => {
        const cellValue = user[columnKey];

        switch (columnKey) {

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
                    <div className="flex justify-center p--40  ">
                        <ProgressBar data={user.status} ></ProgressBar>
                    </div>
                );
            case "actions":
                return (
                    <div>
                        <Link href="@/pages/trackRide" className="flex justify-start ">
                            <Button variant="ghost" color='default'>Track driver </Button>
                        </Link>
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