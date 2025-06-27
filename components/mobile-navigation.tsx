"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

interface MobileNavigationProps {
  items: {
    title: string;
    href: string;
    icon?: ReactNode;
  }[];
}

export default function MobileNavigation({ items }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[70vh]">
        <div className="mt-4 flex flex-col items-center">
          <nav className="flex w-full flex-col space-y-3 p-4">
            {items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <DrawerClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-accent/50"
                    }`}
                  >
                    {item.icon && <span className="mr-2">{item.icon}</span>}
                    {item.title}
                  </Link>
                </DrawerClose>
              );
            })}
          </nav>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
