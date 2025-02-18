import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Button } from "./ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";

function InventoryTable({ inventories, onEdit, onDelete }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Item Name</TableHead>
          <TableHead>Qty</TableHead>
          <TableHead>Store</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {inventories.map((inventory) => (
          <TableRow key={inventory.id}>
            <TableCell>{inventory.name}</TableCell>
            <TableCell>{inventory.qty}</TableCell>
            <TableCell>{inventory.store}</TableCell>
            <TableCell>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onEdit(inventory)}
              >
                <PencilIcon className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onDelete(inventory)}
              >
                <TrashIcon className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default InventoryTable;
