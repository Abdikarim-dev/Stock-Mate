// import { Link, useLocation } from "react-router-dom"
// import {
//   FaHome,
//   FaUsers,
//   FaStore,
//   FaBoxes,
//   FaExclamationTriangle,
//   FaClipboardCheck,
//   FaSignOutAlt,
// } from "react-icons/fa"

// function Sidebar() {
//   const location = useLocation()

//   const isActive = (path) => location.pathname === path

//   return (
//     <div className="flex flex-col w-64 bg-white h-full border-r">
//       <div className="flex items-center justify-center h-16 border-b">
//         <span className="text-2xl font-semibold">StockMate</span>
//       </div>
//       <nav className="flex-grow">
//         <ul className="space-y-2 py-4">
//           <SidebarItem href="/" icon={FaHome} text="Home" active={isActive("/")} />
//           <SidebarItem href="/users" icon={FaUsers} text="Users" active={isActive("/users")} />
//           <SidebarItem href="/store" icon={FaStore} text="Store" active={isActive("/store")} />
//           <SidebarItem href="/inventory" icon={FaBoxes} text="Inventory" active={isActive("/inventory")} />
//           <SidebarItem
//             href="/damaged-items"
//             icon={FaExclamationTriangle}
//             text="Damaged Items"
//             active={isActive("/damaged-items")}
//           />
//           <SidebarItem href="/audit" icon={FaClipboardCheck} text="Audit" active={isActive("/audit")} />
//         </ul>
//       </nav>
//       <div className="p-4 border-t">
//         <button className="flex items-center text-gray-600 hover:text-gray-800">
//           <FaSignOutAlt className="mr-2" />
//           Logout
//         </button>
//       </div>
//     </div>
//   )
// }

// function SidebarItem({ href, icon: Icon, text, active }) {
//   return (
//     <li>
//       <Link
//         to={href}
//         className={`flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 ${active ? "bg-gray-200" : ""}`}
//       >
//         <Icon className="mr-2" />
//         {text}
//       </Link>
//     </li>
//   )
// }

// export default Sidebar

import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import {
  LayoutDashboard,
  Users,
  Store,
  Package,
  AlertTriangle,
  ClipboardList,
  LogOut,
} from "lucide-react";

const sidebarItems = [
  { href: "/dashboard", icon: LayoutDashboard, text: "Dashboard" },
  { href: "/dashboard/users", icon: Users, text: "Users" },
  { href: "/dashboard/store", icon: Store, text: "Store" },
  { href: "/dashboard/inventory", icon: Package, text: "Inventory" },
  {
    href: "/dashboard/damaged-item",
    icon: AlertTriangle,
    text: "Damaged Items",
  },
  { href: "/dashboard/audit-trail", icon: ClipboardList, text: "Audit" },
];

function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex flex-col w-64 bg-card h-full border-r">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-semibold">StockMate</span>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2 py-4">
          {sidebarItems.map((item) => (
            <SidebarItem
              key={item.href}
              {...item}
              active={location.pathname === item.href}
            />
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </div>
  );
}

function SidebarItem({ href, icon: Icon, text, active }) {
  return (
    <li>
      <Link to={href}>
        <Button
          variant={active ? "secondary" : "ghost"}
          className={cn("w-full justify-start", active && "bg-muted")}
        >
          <Icon className="mr-2 h-4 w-4" />
          {text}
        </Button>
      </Link>
    </li>
  );
}

export default Sidebar;
