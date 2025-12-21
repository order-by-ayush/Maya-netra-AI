
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Construction } from 'lucide-react';
import { Footer } from '@/components/layout/footer';
import { UserNav } from '@/components/layout/user-nav';
import { useUser } from '@/firebase';


const ToolsPage = () => {
  const { user, isUserLoading } = useUser();
  return (
    <div className="bg-background text-foreground min-h-screen font-body flex flex-col">
      <header className="py-4 px-8 flex justify-between items-center border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="flex items-center gap-3">
          <Link href="/">
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
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <Link href="/detect" className="hover:text-primary">
            Detect
          </Link>
          <Link href="/tools" className="text-primary font-bold">
            Tools
          </Link>
          <Link href="/author" className="hover:text-primary">
            Author
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <UserNav user={user} isLoading={isUserLoading} />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-8 py-20 flex flex-col items-center justify-center text-center">
        <Construction className="w-24 h-24 text-primary mb-6" />
        <h1 className="text-4xl font-bold mb-4">Under Construction</h1>
        <p className="text-muted-foreground max-w-md">
          Our new tools are being built and will be available soon. Check back later to see what we've been working on!
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Return to Home</Link>
        </Button>
      </main>
      
      <Footer />
    </div>
  );
};

export default ToolsPage;
