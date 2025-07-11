'use client';

import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const headerItems = [
  {
    title: 'Events',
    href: '/events',
  },
  {
    title: 'About us',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
  {
    title: 'FAQ',
    href: '/faq',
  },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-end py-9">
        <div className="absolute left-12 flex gap-6 md:gap-1">
          <Link href="/" className="items-center space-x-2 md:flex">
            <Calendar className="text-primary" size={32} strokeWidth={2.5} />
            <span className="font-semibold sm:inline-block text-primary text-2xl">
              Evently
            </span>
          </Link>
        </div>
        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-4">
            {headerItems.map((item) => (
              <li key={item.title}>
                <Button
                  asChild
                  variant="nav"
                  className={cn(
                    'text-base hover:text-primary',
                    item.href === pathname && 'text-primary'
                  )}
                >
                  <Link href={item.href}>{item.title}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
