"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

function DamagedItemForm({ damagedItem, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    itemCount: 0,
    store: "",
  })

  useEffect(() => {
    if (damagedItem) {
      setFormData(damagedItem)
    }
  }, [damagedItem])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{damagedItem ? "Edit DamagedItem" : "Add New DamagedItem"}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Item Name</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="itemCount">Item Count</Label>
            <Input
              id="itemCount"
              name="itemCount"
              type="number"
              value={formData.itemCount}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="store">Store</Label>
            <Input id="store" name="store" value={formData.store} onChange={handleChange} required />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">{damagedItem ? "Update" : "Add"} DamagedItem</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default DamagedItemForm

