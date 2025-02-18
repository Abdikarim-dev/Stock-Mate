"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

function InventoryForm({ inventory, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    inventoryname: "",
    email: "",
    phone: "",
    role: "",
  });

  useEffect(() => {
    if (inventory) {
      setFormData(inventory);
    }
  }, [inventory]);

  const handleChange = (e) => {
    const { name, value } = e.target ? e.target : { name: "role", value: e };
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {inventory ? "Edit Inventory" : "Add New Inventory"}
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="qty">Qty</Label>
            <Input
              type="number"
              id="qty"
              name="qty"
              value={formData.qty}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="store">store</Label>
            <Input
              id="store"
              name="store"
              value={formData.store}
              onChange={handleChange}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">
            {inventory ? "Update" : "Add"} Inventory
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
export default InventoryForm;
