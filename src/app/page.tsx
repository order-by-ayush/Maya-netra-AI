
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sun, Moon } from 'lucide-react';
import { DetectionPanel } from '@/components/detection-panel';

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <div
      className={`min-h-screen bg-gray-900 text-white font-body bg-cover bg-center`}
      style={{
        backgroundImage: 'url(/hero-bg.png)',
      }}
    >
      <header className="py-4 px-8 flex justify-between items-center bg-black bg-opacity-30 backdrop-blur-sm border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="bg-white text-black font-bold text-lg w-10 h-10 flex items-center justify-center rounded-md">
            MI
          </div>
          <div>
            <h1 className="text-xl font-bold">MAYA-NETRA AI</h1>
            <p className="text-xs text-gray-400">
              Private-by-design verification
            </p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/detect" className="hover:text-white">
            Detect
          </Link>
          <Link href="#" className="hover:text-white">
            How it works
          </Link>
          <Link href="#" className="hover:text-white">
            Author
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-gray-700"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          <Button
            variant="secondary"
            className="bg-gray-800 text-white hover:bg-gray-700"
          >
            Sign In
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-8 py-20 grid gap-16 items-center">
        <div className="space-y-6 text-center">
          <Badge
            variant="outline"
            className="border-gray-600 bg-gray-800 bg-opacity-50 text-gray-300 mx-auto"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Neural forensic scan • MVP UI
          </Badge>
          <h2 className="text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Identify{' '}
            <span className="text-green-400">AI-generated</span>{' '}
            videos and images with confidence.
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Drag & drop an image (JPG/PNG) or video (MP4) to simulate a
            full detection workflow—upload → processing → neural analysis
            → result.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <Link href="/detect">Start detection</Link>
            </Button>
          </div>
          <p className="text-xs text-gray-500">
            For MVP UI only: results are simulated until the inference
            backend is integrated.
          </p>
        </div>
        
        <div className="bg-gray-800 bg-opacity-40 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm shadow-2xl">
          <DetectionPanel isEmbedded={true} />
        </div>

      </main>
    </div>
  );
}
