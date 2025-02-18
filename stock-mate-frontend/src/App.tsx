import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Audit from "./pages/AuditLogs";
import Store from "./pages/Store";
import DamagedItems from "./pages/DamagedItems";
import DashboardLayout from "./components/DashboardLayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="audit-trail" element={<Audit />} />
          <Route path="store" element={<Store />} />
          <Route path="damaged-item" element={<DamagedItems />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
