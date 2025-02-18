"use client"

import { useState } from "react"
import { Button } from "../components/ui/button"
import { PlusIcon } from "lucide-react"
import StoreTable from "../components/StoreTable"
import StoreForm from "../components/StoreForm"
import DeleteConfirmationModal from "../components/DeleteConfirmationModal"

function Store() {
  const [stores, setStores] = useState([
    { id: 1, name: "Store A", location: "City X", itemCount: 150 },
    { id: 2, name: "Store B", location: "City Y", itemCount: 200 },
    { id: 3, name: "Store C", location: "City Z", itemCount: 180 },
  ])
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingStore, setEditingStore] = useState(null)
  const [storeToDelete, setStoreToDelete] = useState(null)

  const handleAddStore = (newStore) => {
    setStores([...stores, { ...newStore, id: stores.length + 1 }])
    setIsFormOpen(false)
  }

  const handleUpdateStore = (updatedStore) => {
    setStores(stores.map((store) => (store.id === updatedStore.id ? updatedStore : store)))
    setEditingStore(null)
  }

  const handleDeleteStore = () => {
    setStores(stores.filter((store) => store.id !== storeToDelete.id))
    setStoreToDelete(null)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Stores</h1>
        <Button onClick={() => setIsFormOpen(true)}>
          <PlusIcon className="mr-2 h-4 w-4" /> Add Store
        </Button>
      </div>

      <StoreTable stores={stores} onEdit={setEditingStore} onDelete={setStoreToDelete} />

      {(isFormOpen || editingStore) && (
        <StoreForm
          store={editingStore}
          onSubmit={editingStore ? handleUpdateStore : handleAddStore}
          onCancel={() => {
            setIsFormOpen(false)
            setEditingStore(null)
          }}
        />
      )}

      <DeleteConfirmationModal
        isOpen={!!storeToDelete}
        onClose={() => setStoreToDelete(null)}
        onConfirm={handleDeleteStore}
        itemName={storeToDelete?.name}
      />
    </div>
  )
}

export default Store