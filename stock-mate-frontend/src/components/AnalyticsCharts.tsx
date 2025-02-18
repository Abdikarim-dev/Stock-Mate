import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Top Exported and Imported Items",
    },
  },
}

const labels = ["Product A", "Product B", "Product C", "Product D", "Product E"]

const data = {
  labels,
  datasets: [
    {
      label: "Exported Items",
      data: [300, 250, 200, 150, 100],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Imported Items",
      data: [280, 220, 180, 130, 90],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
}

function AnalyticsCharts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar options={options} data={data} />
      </CardContent>
    </Card>
  )
}

export default AnalyticsCharts

