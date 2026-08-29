"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Home, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", section: "hero" },
  { name: "About", section: "about" },
  { name: "Projects", section: "projects" },
  { name: "Skills", section: "skills" },
  { name: "Blog", section: "blog" },
  { name: "Contact", section: "contact" },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("hero");
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (isHomePage) {
      const element = document.getElementById("hero");
      if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
        setActiveSection("hero");
      }
    } else {
      setActiveSection("");
    }
  }, [pathName, isHomePage]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (!isHomePage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      },
    );

    navItems.forEach(({ section }) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed flex items-center justify-center z-50 w-full backdrop-blur-lg ${
        isScrolled ? "bg-background/90 backdrop-blur-lg" : "bg-transparent"
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container flex h-20 items-center justify-between px-4">
        <Link
          href={"/"}
          aria-label="Rasheed - Go to Homepage"
          className="hidden uppercase md:block text-xl tracking-tighter font-bold text-primary"
          onClick={() => isHomePage && scrollToSection("hero")}
        >
          Rasheed
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-6 md:flex" aria-label="Primary navigation">
          {isHomePage &&
            navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={`relative text-sm font-medium transition-colors hover:text-muted-foreground ${
                  activeSection === item.section && isHomePage
                    ? "text-muted-foreground"
                    : "text-primary"
                }`}
              >
                {item.name}
                {activeSection === item.section && isHomePage && (
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-muted-foreground"
                    layoutId="activeSection"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          {pathName.length > 1 ? (
            <Link href={"/"} aria-label="Go to Homepage">
              <Home className="h-5 w-5" aria-hidden="true" />
            </Link>
          ) : (
            <Button
              ref={buttonRef}
              variant="ghost"
              size="icon"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                key={isOpen as unknown as string}
                initial={{ opacity: 0, rotate: isOpen ? 90 : -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
                <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
              </motion.div>
            </Button>
          )}
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                ref={menuRef}
                id="mobile-nav"
                aria-label="Mobile navigation"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 right-0 z-40 h-screen w-64 bg-background/95 p-6 backdrop-blur-lg shadow-lg"
              >
                <div className="flex flex-col space-y-4 pt-4">
                  {navItems.map((item) => (
                    <button
                      key={item.section}
                      onClick={() => {
                        scrollToSection(item.section);
                        setIsOpen(false);
                      }}
                      className={`text-left text-sm font-medium transition-colors hover:text-primary ${
                        activeSection === item.section && isHomePage
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>

        {/* Theme Toggle Button */}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto md:ml-0"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted ? (
            <motion.div
              key={theme}
              initial={{ opacity: 0, rotate: theme === "dark" ? 90 : -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Moon className="h-5 w-5" aria-hidden="true" />
              )}
            </motion.div>
          ) : (
            <div className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </motion.header>
  );
}
