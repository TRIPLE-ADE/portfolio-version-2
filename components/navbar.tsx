"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

const navigation = [
  { label: "Work", href: "/#projects" },
  { label: "Expertise", href: "/#expertise" },
  { label: "About", href: "/#about" },
  { label: "Writing", href: "/#writing" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const menuButtonRef = React.useRef<HTMLButtonElement>(null);
  const firstLinkRef = React.useRef<HTMLAnchorElement>(null);
  const lastLinkRef = React.useRef<HTMLAnchorElement>(null);

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }

      if (event.key === "Tab") {
        const firstLink = firstLinkRef.current;
        const lastLink = lastLinkRef.current;

        if (event.shiftKey && document.activeElement === firstLink) {
          event.preventDefault();
          lastLink?.focus();
        } else if (!event.shiftKey && document.activeElement === lastLink) {
          event.preventDefault();
          firstLink?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div className="page-shell flex h-16 items-center justify-between rounded-2xl border bg-background/88 px-4 shadow-[0_16px_44px_-28px_hsl(var(--foreground)/0.5)] backdrop-blur-xl sm:px-5">
        <Link
          href="/#top"
          className="pressable flex items-center gap-3 rounded-md"
          aria-label="Abdulrasheed Abdulsalam — Home"
        >
          <span className="grid size-9 place-items-center rounded-lg bg-foreground text-sm font-extrabold tracking-tight text-background">
            AA
          </span>
          <span className="hidden text-sm font-extrabold tracking-[-0.02em] sm:block">
            Abdulrasheed
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="pressable rounded-lg px-3 py-2 text-sm font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold text-muted-foreground md:flex">
            <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Available for work
          </span>
          <button
            type="button"
            onClick={() => setTheme(nextTheme)}
            className="pressable grid size-10 place-items-center rounded-lg border bg-card text-foreground hover:bg-secondary"
            aria-label={mounted ? "Switch to " + nextTheme + " theme" : "Toggle color theme"}
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="size-4" aria-hidden="true" />
            ) : (
              <Moon className="size-4" aria-hidden="true" />
            )}
          </button>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="pressable grid size-10 place-items-center rounded-lg border bg-card text-foreground hover:bg-secondary lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        className={
          "mobile-dialog fixed inset-0 top-[5.75rem] bg-background/96 p-5 backdrop-blur-xl transition-[opacity,visibility] duration-200 ease-out lg:hidden " +
          (isOpen ? "visible opacity-100" : "invisible opacity-0")
        }
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!isOpen}
      >
        <nav className="page-shell grid gap-2" aria-label="Mobile navigation">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              ref={
                index === 0
                  ? firstLinkRef
                  : index === navigation.length - 1
                    ? lastLinkRef
                    : undefined
              }
              href={item.href}
              onClick={closeMenu}
              tabIndex={isOpen ? 0 : -1}
              className="pressable flex items-center justify-between border-b py-5 text-2xl font-bold tracking-tight"
            >
              {item.label}
              <span className="label text-muted-foreground">0{index + 1}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
