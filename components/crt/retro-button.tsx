"use client"

import { ReactNode, ButtonHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

interface RetroButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "green" | "amber" | "magenta"
  size?: "sm" | "md" | "lg"
}

const variantClass = {
  green: "border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  amber: "border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground",
  magenta: "border-accent text-accent hover:bg-accent hover:text-accent-foreground",
}

const sizeClass = {
  sm: "px-3 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
}

export const RetroButton = forwardRef<HTMLButtonElement, RetroButtonProps>(
  ({ children, variant = "green", size = "md", className = "", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-pixel uppercase tracking-wider border-2 bg-background retro-hover transition-colors",
          "inline-flex items-center justify-center gap-2",
          variantClass[variant],
          sizeClass[size],
          className,
        )}
        {...rest}
      >
        {children}
      </button>
    )
  },
)
RetroButton.displayName = "RetroButton"
