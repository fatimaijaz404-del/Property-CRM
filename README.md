# Property CRM — UI Starter Kit

## Setup in VS Code

```bash
npm create vite@latest property-crm-ui -- --template react
cd property-crm-ui
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install lucide-react
```

Copy these files into your project:
- `tailwind.config.js` → project root (replace the generated one)
- `src/components/*` → your `src/components/`
- `src/pages/TodoList.jsx` → your `src/pages/`

Add Tailwind directives to `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Load fonts in `index.html` `<head>`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Render `TodoList` from `App.jsx` to see it working, then use it as a template
for Leads, Tasks, Contacts, and Inventory pages — just swap the `columns` and
`rows` in `DataTable`.

## What this fixes from the old app
- One `DataTable` component instead of differently-styled tables per page
- One `Badge` component instead of ad-hoc colored pills
- Proper `EmptyState` instead of bare "No data available" text
- Sidebar with collapsible groups (fixes the 25-link flat Analytics dump)
- Consistent active-state highlighting everywhere
- Horizontal scroll handled cleanly within the table card (no more overlap bugs)
- One primary color (emerald) + status colors, instead of 4+ competing accents

## Next steps
- Build `FilterPanel.jsx` as a shared component (Leads/Tasks/Inventory all
  reinvent their own filter UI right now — unify into one configurable panel)
- Replace static `ROWS` arrays with real data once backend is ready
