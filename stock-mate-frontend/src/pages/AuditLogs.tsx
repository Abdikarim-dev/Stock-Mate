"use client";

import AuditTable from "@/components/AuditTable";
import { useState } from "react";

function Audit() {
  const [auditTrails, setAuditTrails] = useState([
    {
      id: 1,
      log: "Deleted User",
      message: "Jane Deleted User named John Doe",
      timestamp: new Date("2023-04-10T12:34:56Z"),
    },

    {
      id: 2,
      log: "Deleted Store",
      message: "Abdikarim Deleted Store named Store A",
      timestamp: new Date("2023-04-10T12:34:56Z"),
    },
    {
      id: 3,
      log: "Deleted Item",
      message: "Hassan Deleted item from the inventory named: Floor",
      timestamp: new Date("2023-04-10T12:34:56Z"),
    },
    {
      id: 4,
      log: "Deleted Item",
      message: "Hassan Deleted item from the inventory named: Table",
      timestamp: new Date("2023-04-10T12:34:56Z"),
    },
    {
      id: 5,
      log: "Deleted Item",
      message: "Hassan Deleted item from the inventory named: Chair",
      timestamp: new Date("2023-04-10T12:34:56Z"),
    },
    {
      id: 6,
      log: "Deleted Store",
      message: "Abdikarim Deleted Store named Store B",
      timestamp: new Date("2023-04-10T12:34:56Z"),
    },
    {
      id: 7,
      log: "Deleted User",
      message: "Joe Deleted User named Smith Doe",
      timestamp: new Date("2023-04-10T12:34:56Z"),
    },
  ]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Audit Trails</h1>
      </div>
      <AuditTable audits={auditTrails} />
    </div>
  );
}

export default Audit;
