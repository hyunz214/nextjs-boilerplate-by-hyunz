import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background py-8 text-center text-sm text-muted-foreground">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} MyBoilerplate. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="https://github.com/hyunz214" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}