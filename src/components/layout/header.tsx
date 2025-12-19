import { ShieldCheck } from 'lucide-react';

export function Header() {
  return (
    <header className="py-4 px-4 md:px-6 border-b border-border">
      <div className="container mx-auto flex items-center gap-4">
        <ShieldCheck className="h-8 w-8 text-primary" />
        <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground">
          MAYA-NETRA AI
        </h2>
      </div>
    </header>
  );
}
