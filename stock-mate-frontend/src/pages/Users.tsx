"use client";

import { useState } from "react";
import { Button } from "../components/ui/button";
import { PlusIcon } from "lucide-react";
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";

function User() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "john.doe",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      role: "admin",
    },
    {
      id: 2,
      username: "jane.doe",
      name: "Jane Doe",
      email: "jane.doe@example.com",
      phone: "098-765-4321",
      role: "user",
    },
    {
      id: 3,
      username: "jane.smith",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "111-222-3333",
      role: "user",
    },
    {
      id: 4,
      username: "jane.jones",
      name: "Jane Jones",
      email: "jane.jones@example.com",
      phone: "222-333-4444",
      role: "user",
    },
    {
      id: 5,
      username: "jane.jones",
      name: "Jane Jones",
      email: "jane.jones@example.com",
      phone: "333-444-5555",
      role: "user",
    },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);

  const handleAddUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }]);
    setIsFormOpen(false);
  };

  const handleUpdateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
  };

  const handleDeleteUser = () => {
    setUsers(users.filter((user) => user.id !== userToDelete.id));
    setUserToDelete(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <Button onClick={() => setIsFormOpen(true)}>
          <PlusIcon className="mr-2 h-4 w-4" /> Add User
        </Button>
      </div>

      <UserTable
        users={users}
        onEdit={setEditingUser}
        onDelete={setUserToDelete}
      />

      {(isFormOpen || editingUser) && (
        <UserForm
          user={editingUser}
          onSubmit={editingUser ? handleUpdateUser : handleAddUser}
          onCancel={() => {
            setIsFormOpen(false);
            setEditingUser(null);
          }}
        />
      )}

      <DeleteConfirmationModal
        isOpen={!!userToDelete}
        onClose={() => setUserToDelete(null)}
        onConfirm={handleDeleteUser}
        itemName={userToDelete?.name}
      />
    </div>
  );
}

export default User;