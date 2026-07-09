import EmptyState from "./EmptyState";

// One table component used everywhere (Todo's, Leads, Tasks, Contacts, Inventory).
// Fixes: inconsistent header colors, broken horizontal scroll, "Page 0 of 0" bug.
//
// columns: [{ key, label, render?(row) }]
// rows: array of data objects
export default function DataTable({ columns, rows, page = 1, totalPages = 1, totalRecords = 0 }) {
  return (
    <div className="bg-white rounded-card border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-max text-left">
          <thead>
            <tr className="bg-ink text-white">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="px-4 py-3 text-xs font-display font-semibold uppercase tracking-wide whitespace-nowrap"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-body text-sm text-ink divide-y divide-border">
            {rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length}>
                  <EmptyState />
                </td>
              </tr>
            ) : (
              rows.map((row, i) => (
                <tr key={row.id ?? i} className="hover:bg-bg transition-colors">
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3 whitespace-nowrap">
                      {col.render ? col.render(row) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {rows.length > 0 && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-border text-xs font-mono text-muted">
          <span>Total records: {totalRecords}</span>
          <span>
            Page {page} of {totalPages}
          </span>
        </div>
      )}
    </div>
  );
}
