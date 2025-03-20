"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { label: "Unlisted Shares", href: "/" },
    { label: "Our Blogs", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTMDeAC-Pse1QMyrvyvW4vLwxCNVfZhUXZg&s"
                alt="Unlisted Shares India"
                width={40}
                height={40}
                className="rounded-lg"
              />
            </div>
            <span className="text-xl font-semibold">Chennai Super Kings (CSK)</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}