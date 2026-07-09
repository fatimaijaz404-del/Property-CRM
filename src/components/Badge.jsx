// Unified status badge — replaces the ad-hoc colored pills (green/orange/red)
// scattered across the old app. One component, fixed variants.

const VARIANTS = {
  success: "bg-primary-light text-primary-dark",
  pending: "bg-clay-light text-clay",
  danger: "bg-danger-light text-danger",
  neutral: "bg-border text-muted",
};

export default function Badge({ variant = "neutral", children }) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold font-body ${VARIANTS[variant]}`}
    >
      {children}
    </span>
  );
}
