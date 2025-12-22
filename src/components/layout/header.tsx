
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/detect', label: 'Detect' },
  { href: '/tools', label: 'Tools' },
  { href: '/author', label: 'Author' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      className={cn(
        'transition-colors hover:text-primary',
        pathname === href ? 'text-primary font-bold' : 'text-muted-foreground'
      )}
      onClick={() => setIsSheetOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="py-4 px-8 flex justify-between items-center bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <Link href="/" onClick={() => setIsSheetOpen(false)}>
          <div className="bg-foreground text-background font-bold text-lg w-10 h-10 flex items-center justify-center rounded-md">
            MI
          </div>
        </Link>
        <div>
          <h1 className="text-xl font-bold">MAYA-NETRA AI</h1>
          <p className="text-xs text-muted-foreground">
            Private-by-design verification
          </p>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        {navLinks.map((link) => (
          <NavLink key={link.href} {...link} />
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 pt-12">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
