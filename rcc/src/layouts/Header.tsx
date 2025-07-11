import { Link, useLocation } from 'react-router-dom';
import { Calendar as Logo } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { headerItems } from '@/content/navigation';

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-end py-9">
        <div className="absolute left-12 flex gap-6 md:gap-1">
          <Link to="/" className="items-center space-x-2 md:flex">
            <Logo className="text-primary" size={32} strokeWidth={2.5} />
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
                    'text-base',
                    pathname === item.to && 'text-primary'
                  )}
                >
                  <Link to={item.to}>{item.title}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
