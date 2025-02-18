import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

function AuditTable({ audits }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Log</TableHead>
          <TableHead>Message</TableHead>
          <TableHead>Timestamp</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {audits.map((audit) => (
          <TableRow key={audit.id}>
            <TableCell>{audit.log}</TableCell>
            <TableCell>{audit.message}</TableCell>
            <TableCell>{new Date(audit.timestamp).toLocaleString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default AuditTable;
