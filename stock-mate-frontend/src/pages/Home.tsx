import DashboardCards from "../components/DashboardCards";
import StoreList from "../components/StoreList";
import AnalyticsCharts from "../components/AnalyticsCharts";

function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <DashboardCards />
      <StoreList />
      <AnalyticsCharts />
    </div>
  );
}

export default Home;
