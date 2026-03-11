import type { Metadata } from 'next';
import './globals.css';
import { TopNav } from '@/components/top-nav';

export const metadata: Metadata = {
  title: 'Atelier Nord — Architecture Portfolio',
  description: 'Portfolio website for an architect and urban design student.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-charcoal font-sans text-softWhite antialiased">
        <TopNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
