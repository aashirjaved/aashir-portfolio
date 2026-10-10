"use client";

import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: string;
  data?: Record<string, string>;
};

export function TrackedLink({ event, data, onClick, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        try {
          track(event, data);
        } catch {
          // analytics is optional
        }
        onClick?.(e);
      }}
    />
  );
}
