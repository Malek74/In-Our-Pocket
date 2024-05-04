import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Link,
} from "@nextui-org/react";

export default function App() {
  return (
    <Table aria-label="Example empty table">
      <TableHeader>
        <TableColumn>Submissions</TableColumn>
        <TableColumn>Description</TableColumn>
        <TableColumn>Type</TableColumn>
        <TableColumn>Review</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Submission 1</TableCell>
          <TableCell>Desc 1</TableCell>
          <TableCell>Organisation</TableCell>
          <TableCell>
            <Link href="/admin-review/submission1"> Review Submission 1</Link>
          </TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Submission 2</TableCell>
          <TableCell>Desc 2</TableCell>
          <TableCell>Donor</TableCell>
          <TableCell>
            <Link href="/admin-review/submission2"> Review Submission 2</Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
