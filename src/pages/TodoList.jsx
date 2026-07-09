import { useState } from "react";
import { Filter } from "lucide-react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DataTable from "../components/DataTable";
import Badge from "../components/Badge";

const TABS = [
  { key: "last7", label: "Last 7 Days", count: 0 },
  { key: "overdue", label: "Over Due", count: 7 },
  { key: "today", label: "Today", count: 0 },
  { key: "upcoming", label: "Upcoming", count: 0 },
  { key: "week", label: "Current Week", count: 0 },
  { key: "month", label: "Current Month", count: 0 },
  { key: "all", label: "All", count: 7 },
];

// Example row shape — swap with real API data later
const ROWS = [
  {
    id: 1,
    date: "20-May-2026",
    title: "Initial Call",
    type: "Follow-Up",
    priority: "Moderate",
    assignedTo: "Admin",
    completion: "Pending",
    lead: "Zohaib · 209",
  },
];

export default function TodoList() {
  const [activeTab, setActiveTab] = useState("overdue");

  const columns = [
    { key: "date", label: "Date" },
    { key: "title", label: "Title" },
    {
      key: "type",
      label: "Type",
      render: (r) => <Badge variant="neutral">{r.type}</Badge>,
    },
    {
      key: "priority",
      label: "Priority",
      render: (r) => (
        <Badge variant={r.priority === "High" ? "danger" : "pending"}>
          {r.priority}
        </Badge>
      ),
    },
    { key: "assignedTo", label: "Assigned To" },
    {
      key: "completion",
      label: "Completion",
      render: (r) => <Badge variant="pending">{r.completion}</Badge>,
    },
    { key: "lead", label: "Lead Details" },
  ];

  return (
    <div className="flex bg-bg min-h-screen">
      <Sidebar active="Todo's" />
      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-5">
            <h1 className="font-display font-bold text-2xl text-ink">
              Todo's List
            </h1>
            <button className="flex items-center gap-2 px-4 py-2 rounded-card bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors">
              <Filter size={16} />
              Filter
            </button>
          </div>

          {/* Tabs — single accent color, count as a quiet mono badge */}
          <div className="flex items-center gap-1 mb-4 overflow-x-auto pb-1">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-3 py-2 rounded-card text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.key
                    ? "bg-primary-light text-primary-dark"
                    : "text-muted hover:bg-white"
                }`}
              >
                {tab.label}
                <span className="font-mono text-xs opacity-70">
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <DataTable
            columns={columns}
            rows={activeTab === "overdue" ? ROWS : []}
            page={1}
            totalPages={1}
            totalRecords={activeTab === "overdue" ? 7 : 0}
          />
        </main>
      </div>
    </div>
  );
}
