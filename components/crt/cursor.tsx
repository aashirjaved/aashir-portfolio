import { cn } from "@/lib/utils";

export function Cursor({ className, char = "█" }: { className?: string; char?: string }) {
  return (
    <span aria-hidden className={cn("inline-block cursor-blink text-accent ml-0.5", className)}>
      {char}
    </span>
  );
}
