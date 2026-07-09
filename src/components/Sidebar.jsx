import { useState } from "react";
import {
  Home,
  ListChecks,
  Users,
  UserPlus,
  CheckSquare,
  Contact,
  Folder,
  Activity,
  Layers,
  ShieldCheck,
  Settings,
  ChevronDown,
  Building2,
} from "lucide-react";

const NAV = [
  {
    section: "Visitors Data",
    items: [{ label: "Visitors Queries", icon: Users }],
  },
  {
    section: "Leads",
    items: [
      { label: "Leads", icon: UserPlus },
      { label: "Tasks", icon: CheckSquare },
      { label: "Contacts", icon: Contact },
      { label: "Inventory List", icon: Folder },
      {
        label: "Analytics",
        icon: Activity,
        collapsible: true,
        children: [
          "Leads Reports",
          "Employee Summary",
          "Manager Summary",
          "Property Summary",
          "Monthly Summary",
          "Stage Summary",
        ],
      },
    ],
  },
  {
    section: "Sale Deals",
    items: [{ label: "Deals & Pipelines", icon: Layers }],
  },
  {
    section: "Booking Approvals",
    items: [{ label: "Approvals", icon: ShieldCheck }],
  },
  {
    section: "Setup",
    items: [{ label: "Define", icon: Settings }],
  },
];

export default function Sidebar({ active = "Todo's" }) {
  const [openGroup, setOpenGroup] = useState(null);

  return (
    <aside className="w-64 h-screen bg-white border-r border-border flex flex-col font-body">
      <div className="flex items-center gap-2 px-5 py-5 border-b border-border">
        <Building2 size={22} className="text-primary" />
        <span className="font-display font-bold text-ink text-lg">
          Property <span className="text-primary">CRM</span>
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto py-3 px-3">
        <SidebarLink label="BI" icon={Home} active={active === "BI"} />
        <SidebarLink label="Todo's" icon={ListChecks} active={active === "Todo's"} />

        {NAV.map((group) => (
          <div key={group.section} className="mt-5">
            <p className="px-3 text-[11px] font-semibold tracking-wider text-muted uppercase mb-1">
              {group.section}
            </p>
            {group.items.map((item) =>
              item.collapsible ? (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenGroup(openGroup === item.label ? null : item.label)
                    }
                    className="w-full flex items-center justify-between px-3 py-2 rounded-card text-sm text-ink hover:bg-bg transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <item.icon size={18} className="text-muted" />
                      {item.label}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-muted transition-transform ${
                        openGroup === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openGroup === item.label && (
                    <div className="ml-9 border-l border-border pl-3 py-1 space-y-1">
                      {item.children.map((child) => (
                        <button
                          key={child}
                          className="block w-full text-left text-sm text-muted hover:text-primary py-1"
                        >
                          {child}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <SidebarLink
                  key={item.label}
                  label={item.label}
                  icon={item.icon}
                  active={active === item.label}
                />
              )
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}

function SidebarLink({ label, icon: Icon, active }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-3 py-2 rounded-card text-sm mb-0.5 transition-colors ${
        active
          ? "bg-primary text-white font-semibold"
          : "text-ink hover:bg-bg"
      }`}
    >
      <Icon size={18} className={active ? "text-white" : "text-muted"} />
      {label}
    </button>
  );
}
