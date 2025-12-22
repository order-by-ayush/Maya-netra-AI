
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DetectionPanel } from '@/components/detection-panel';
import { Header } from '@/components/layout/header';


const DetectionPage = () => {

  return (
    <div className="min-h-screen text-foreground font-body">
      <Header />

      <main className="container mx-auto px-4 sm:px-8 py-12">
        <DetectionPanel />
      </main>
    </div>
  );
};

export default DetectionPage;
