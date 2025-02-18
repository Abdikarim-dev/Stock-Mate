"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const dummyStores = [
  { id: 1, name: "Store A", location: "City X", itemCount: 150, mostIngoing: "Product X", mostOutgoing: "Product Y" },
  { id: 2, name: "Store B", location: "City Y", itemCount: 200, mostIngoing: "Product Z", mostOutgoing: "Product W" },
  { id: 3, name: "Store C", location: "City Z", itemCount: 180, mostIngoing: "Product V", mostOutgoing: "Product U" },
  { id: 4, name: "Store D", location: "City W", itemCount: 220, mostIngoing: "Product T", mostOutgoing: "Product S" },
  { id: 5, name: "Store E", location: "City V", itemCount: 190, mostIngoing: "Product R", mostOutgoing: "Product Q" },
  { id: 6, name: "Store F", location: "City U", itemCount: 210, mostIngoing: "Product P", mostOutgoing: "Product O" },
  { id: 7, name: "Store G", location: "City T", itemCount: 170, mostIngoing: "Product N", mostOutgoing: "Product M" },
]

function StoreList() {
  const [visibleStores, setVisibleStores] = useState(dummyStores.slice(0, 5))

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target
    if (scrollHeight - scrollTop === clientHeight) {
      if (visibleStores.length < dummyStores.length) {
        setVisibleStores(dummyStores.slice(0, visibleStores.length + 1))
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Stores</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] overflow-auto" onScroll={handleScroll}>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Store Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Item Count</TableHead>
                <TableHead>Most In-going Product</TableHead>
                <TableHead>Most Out-going Product</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {visibleStores.map((store) => (
                <TableRow key={store.id}>
                  <TableCell>{store.name}</TableCell>
                  <TableCell>{store.location}</TableCell>
                  <TableCell>{store.itemCount}</TableCell>
                  <TableCell>{store.mostIngoing}</TableCell>
                  <TableCell>{store.mostOutgoing}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

export default StoreList