import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Button } from "./ui/button"
import { PencilIcon, TrashIcon } from "lucide-react"

function DamagedTable({ damagedItems, onEdit, onDelete }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Item Name</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Store</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {damagedItems.map((damagedItem) => (
          <TableRow key={damagedItem.id}>
            <TableCell>{damagedItem.name}</TableCell>
            <TableCell>{damagedItem.itemCount}</TableCell>
            <TableCell>{damagedItem.store}</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon" onClick={() => onEdit(damagedItem)}>
                <PencilIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => onDelete(damagedItem)}>
                <TrashIcon className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default DamagedTable