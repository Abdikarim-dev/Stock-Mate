import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Users, Store, Package, AlertTriangle } from "lucide-react"

const cards = [
  { title: "Total Users", value: 150, icon: Users, color: "text-blue-500" },
  { title: "Total Stores", value: 25, icon: Store, color: "text-green-500" },
  { title: "Total Items", value: 1000, icon: Package, color: "text-yellow-500" },
  { title: "Damaged Items", value: 50, icon: AlertTriangle, color: "text-red-500" },
]

function DashboardCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
            <card.icon className={`h-4 w-4 ${card.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{card.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default DashboardCards

