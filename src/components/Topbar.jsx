import { PlusSquare, CheckSquare, Bell, Moon, ChevronDown } from "lucide-react";

export default function Topbar({ userName = "Admin", notifCount = 14 }) {
  return (
    <header className="h-16 bg-white border-b border-border flex items-center justify-between px-6 font-body">
      <div className="flex items-center gap-1">
        <TopIconButton icon={PlusSquare} label="New Record" />
        <TopIconButton icon={CheckSquare} label="New Task" />
      </div>

      <div className="flex items-center gap-4">
        <button className="text-muted hover:text-ink transition-colors">
          <Moon size={18} />
        </button>

        <button className="relative text-muted hover:text-ink transition-colors">
          <Bell size={18} />
          {notifCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-danger text-white text-[10px] font-mono font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {notifCount}
            </span>
          )}
        </button>

        <button className="flex items-center gap-2 pl-3 border-l border-border">
          <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary font-display font-semibold text-sm">
            {userName[0]}
          </div>
          <span className="text-sm font-medium text-ink">{userName}</span>
          <ChevronDown size={14} className="text-muted" />
        </button>
      </div>
    </header>
  );
}

function TopIconButton({ icon: Icon, label }) {
  return (
    <button
      title={label}
      className="flex items-center gap-2 px-3 py-2 rounded-card text-muted hover:bg-bg hover:text-primary transition-colors"
    >
      <Icon size={18} />
    </button>
  );
}
