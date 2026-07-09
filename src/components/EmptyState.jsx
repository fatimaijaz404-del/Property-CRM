import { Inbox } from "lucide-react";

// Fixes the old "No data available in table" + "Page 0 of 0" issue.
// Empty states should invite action, not just report absence.
export default function EmptyState({
  title = "Nothing here yet",
  description = "Once records are added, they'll show up here.",
  actionLabel,
  onAction,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
      <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center mb-4">
        <Inbox size={22} className="text-primary" />
      </div>
      <h3 className="font-display font-semibold text-ink text-base mb-1">
        {title}
      </h3>
      <p className="font-body text-sm text-muted max-w-xs mb-4">
        {description}
      </p>
      {actionLabel && (
        <button
          onClick={onAction}
          className="px-4 py-2 rounded-card bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
