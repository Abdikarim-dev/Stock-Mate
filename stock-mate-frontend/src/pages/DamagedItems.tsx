"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { PlusIcon } from "lucide-react";
import DamagedItemTable from "../components/DamagedItemTable";
import DamagedItemForm from "../components/DamagedItemForm";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";

function DamagedItem() {
  const [damagedItems, setDamagedItems] = useState([
    {
      id: 1,
      name: "Floor",
      itemCount: 100,
      store: "Store A",
    },
    {
      id: 2,
      name: "Table",
      itemCount: 50,
      store: "Store B",
    },
    {
      id: 3,
      name: "Chair",
      itemCount: 75,
      store: "Store C",
    },
    {
      id: 4,
      name: "Desk",
      itemCount: 25,
      store: "Store D",
    },
    {
      id: 5,
      name: "Monitor",
      itemCount: 30,
      store: "Store E",
    },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingDamagedItem, setEditingDamagedItem] = useState(null);
  const [DamagedItemToDelete, setDamagedItemToDelete] = useState(null);

  const handleAddDamagedItem = (newDamagedItem) => {
    setDamagedItems([
      ...damagedItems,
      { ...newDamagedItem, id: damagedItems.length + 1 },
    ]);
    setIsFormOpen(false);
  };

  const handleUpdateDamagedItem = (updatedDamagedItem) => {
    setDamagedItems(
      damagedItems.map((DamagedIem) =>
        DamagedIem.id === updatedDamagedItem.id ? updatedDamagedItem : DamagedItem
      )
    );
    setEditingDamagedItem(null);
  };

  const handleDeleteDamagedItem = () => {
    setDamagedItems(
      damagedItems.filter(
        (DamagedIem) => DamagedIem.id !== DamagedItemToDelete.id
      )
    );
    setDamagedItemToDelete(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Damaged Items</h1>
        <Button onClick={() => setIsFormOpen(true)}>
          <PlusIcon className="mr-2 h-4 w-4" /> Add DamagedItem
        </Button>
      </div>

      <DamagedItemTable
        damagedItems={damagedItems}
        onEdit={setEditingDamagedItem}
        onDelete={setDamagedItemToDelete}
      />

      {(isFormOpen || editingDamagedItem) && (
        <DamagedItemForm
          damagedItem={editingDamagedItem}
          onSubmit={
            editingDamagedItem ? handleUpdateDamagedItem : handleAddDamagedItem
          }
          onCancel={() => {
            setIsFormOpen(false);
            setEditingDamagedItem(null);
          }}
        />
      )}

      <DeleteConfirmationModal
        isOpen={!!DamagedItemToDelete}
        onClose={() => setDamagedItemToDelete(null)}
        onConfirm={handleDeleteDamagedItem}
        itemName={DamagedItemToDelete?.name}
      />
    </div>
  );
}

export default DamagedItem;
