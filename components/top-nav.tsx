import Link from 'next/link';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/drawings', label: 'Drawings Library' },
  { href: '/research', label: 'Research' },
  { href: '/reference-studio', label: 'Reference Studio' }
];

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-softWhite/10 bg-charcoal/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <p className="text-sm uppercase tracking-[0.3em] text-warmGray">Atelier Nord</p>
        <div className="flex flex-wrap gap-4 text-sm text-softWhite/80">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-softWhite">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
