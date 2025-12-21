'use client';

import { Laptop } from 'lucide-react';
import Link from 'next/link';

export function DesktopOnly() {
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
      </header>
      <main className="flex-grow flex items-center justify-center text-center p-4">
        <div className="flex flex-col items-center">
          <Laptop className="w-24 h-24 text-primary mb-6" />
          <h1 className="text-3xl font-bold mb-4">Desktop Experience Recommended</h1>
          <p className="text-muted-foreground max-w-md">
            For the best experience, please open this application on a laptop or desktop computer.
          </p>
        </div>
      </main>
    </div>
  );
}
