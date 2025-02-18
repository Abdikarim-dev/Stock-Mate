import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Button } from "./ui/button"
import { PencilIcon, TrashIcon } from "lucide-react"

function StoreTable({ stores, onEdit, onDelete }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Item Count</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stores.map((store) => (
          <TableRow key={store.id}>
            <TableCell>{store.name}</TableCell>
            <TableCell>{store.location}</TableCell>
            <TableCell>{store.itemCount}</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon" onClick={() => onEdit(store)}>
                <PencilIcon className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => onDelete(store)}>
                <TrashIcon className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default StoreTable