import { cn } from "@/lib/utils";

export function Kbd({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <kbd
      className={cn(
        "inline-block min-w-[1.5em] text-center px-1.5 py-px font-mono text-xs uppercase",
        "bg-screen text-bright border border-rule bevel align-middle",
        className,
      )}
    >
      {children}
    </kbd>
  );
}
