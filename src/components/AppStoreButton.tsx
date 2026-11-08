import { Apple } from "lucide-react";
import { APP_STORE_URL } from "@/lib/site";

// Links to the App Store once APP_STORE_URL is set; until then renders a
// disabled button with a "Coming soon" tooltip. The wrapper is focusable so
// a tap on touch screens (no hover) also reveals the tooltip.
export default function AppStoreButton({ label, className }: { label: string; className: string }) {
  if (APP_STORE_URL) {
    return (
      <a href={APP_STORE_URL} target="_blank" rel="noopener" className={`${className} hover:bg-white/10`}>
        <Apple size={20} />
        {label}
      </a>
    );
  }

  return (
    <span tabIndex={0} className="group relative inline-flex outline-none">
      <button
        type="button"
        disabled
        aria-label={`${label} (coming soon)`}
        className={`${className} w-full cursor-not-allowed opacity-50`}
      >
        <Apple size={20} />
        {label}
      </button>
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 bottom-full mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-black opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100"
      >
        Coming soon on App Store
      </span>
    </span>
  );
}
