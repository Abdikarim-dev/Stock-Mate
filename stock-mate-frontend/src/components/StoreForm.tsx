"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"

function StoreForm({ store, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    itemCount: 0,
  })

  useEffect(() => {
    if (store) {
      setFormData(store)
    }
  }, [store])

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
        <CardTitle>{store ? "Edit Store" : "Add New Store"}</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">Store Name</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" name="location" value={formData.location} onChange={handleChange} required />
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
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">{store ? "Update" : "Add"} Store</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

export default StoreForm

