export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t py-6">
      <div className="container flex items-center justify-center px-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Rasheed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
