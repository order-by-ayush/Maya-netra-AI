
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Construction } from 'lucide-react';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';


const ToolsPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen font-body flex flex-col">
      <Header />

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
