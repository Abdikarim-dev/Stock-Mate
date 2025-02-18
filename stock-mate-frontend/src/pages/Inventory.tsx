"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { PlusIcon } from "lucide-react";
import InventoryTable from "../components/InventoryTable";
import InventoryForm from "../components/InventoryForm";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";

function Inventory() {
  const [inventories, setInventories] = useState([
    {
      id: 1,
      name: "Floor",
      qty: 100,
      store: "Store A",
    },
    {
      id: 2,
      name: "Table",
      qty: 50,
      store: "Store B",
    },
    {
      id: 3,
      name: "Chair",
      qty: 75,
      store: "Store C",
    },
    {
      id: 4,
      name: "Desk",
      qty: 25,
      store: "Store D",
    },
    {
      id: 5,
      name: "Monitor",
      qty: 30,
      store: "Store E",
    },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingInventory, setEditingInventory] = useState(null);
  const [inventoryToDelete, setInventoryToDelete] = useState(null);

  const handleAddInventory = (newInventory) => {
    setInventories([
      ...inventories,
      { ...newInventory, id: inventories.length + 1 },
    ]);
    setIsFormOpen(false);
  };

  const handleUpdateInventory = (updatedInventory) => {
    setInventories(
      inventories.map((Inventory) =>
        Inventory.id === updatedInventory.id ? updatedInventory : Inventory
      )
    );
    setEditingInventory(null);
  };

  const handleDeleteInventory = () => {
    setInventories(
      inventories.filter((inventory) => inventory.id !== inventoryToDelete.id)
    );
    setInventoryToDelete(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Inventories</h1>
        <Button onClick={() => setIsFormOpen(true)}>
          <PlusIcon className="mr-2 h-4 w-4" /> Add Inventory
        </Button>
      </div>

      <InventoryTable
        inventories={inventories}
        onEdit={setEditingInventory}
        onDelete={setInventoryToDelete}
      />

      {(isFormOpen || editingInventory) && (
        <InventoryForm
          inventory={editingInventory}
          onSubmit={
            editingInventory ? handleUpdateInventory : handleAddInventory
          }
          onCancel={() => {
            setIsFormOpen(false);
            setEditingInventory(null);
          }}
        />
      )}

      <DeleteConfirmationModal
        isOpen={!!inventoryToDelete}
        onClose={() => setInventoryToDelete(null)}
        onConfirm={handleDeleteInventory}
        itemName={inventoryToDelete?.name}
      />
    </div>
  );
}

export default Inventory;
