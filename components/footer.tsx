import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="page-shell flex flex-col gap-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Abdulrasheed Abdulsalam.</p>
        <nav className="flex flex-wrap gap-5" aria-label="Footer navigation">
          <Link href="/#top" className="text-link">
            Back to top
          </Link>
          <a
            href="https://github.com/TRIPLE-ADE"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rasheed-abdulsalam"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
