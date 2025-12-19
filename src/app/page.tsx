
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Sun, Moon, Upload } from 'lucide-react';

const PipelineStep = ({
  step,
  status,
}: {
  step: string;
  status: 'pending' | 'active' | 'complete';
}) => {
  return (
    <li className="flex items-center gap-4">
      <div
        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
          status === 'pending'
            ? 'border-gray-500'
            : status === 'active'
              ? 'border-primary animate-pulse'
              : 'border-primary bg-primary'
        }`}
      >
        {status === 'complete' && (
          <div className="w-2 h-2 rounded-full bg-primary-foreground"></div>
        )}
      </div>
      <span
        className={`transition-colors duration-300 ${
          status === 'pending' ? 'text-gray-500' : 'text-foreground'
        }`}
      >
        {step}
      </span>
    </li>
  );
};

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
          <Link href="#" className="hover:text-white">
            Home
          </Link>
          <Link href="#" className="hover:text-white">
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

      <main className="container mx-auto px-8 py-20 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <Badge
            variant="outline"
            className="border-gray-600 bg-gray-800 bg-opacity-50 text-gray-300"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Neural forensic scan • MVP UI
          </Badge>
          <h2 className="text-5xl font-bold leading-tight">
            Identify{' '}
            <span className="text-green-400">AI-generated</span>{' '}
            videos and images with confidence.
          </h2>
          <p className="text-gray-400 max-w-lg">
            Drag & drop an image (JPG/PNG) or video (MP4) to simulate a
            full detection workflow—upload → processing → neural analysis
            → result.
          </p>
          <div className="flex items-center gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              Start detection
            </Button>
            <div className="flex gap-2">
              <div className="border border-gray-700 rounded-md px-3 py-1 text-center text-sm">
                <p className="text-gray-400">Model AUC</p>
                <p className="font-bold">0.94</p>
              </div>
              <div className="border border-gray-700 rounded-md px-3 py-1 text-center text-sm">
                <p className="text-gray-400">Avg. latency</p>
                <p className="font-bold">~0.9s</p>
              </div>
              <div className="border border-gray-700 rounded-md px-3 py-1 text-center text-sm">
                <p className="text-gray-400">Frames sampled</p>
                <p className="font-bold">16</p>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500">
            For MVP UI only: results are simulated until the inference
            backend is integrated.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-40 border border-gray-700 rounded-2xl p-6 backdrop-blur-sm space-y-6 shadow-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold">Live pipeline preview</h3>
              <p className="text-sm text-gray-400">
                Progress indicators, scanning effect, and result
                presentation.
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400">Status</p>
              <Badge
                variant="secondary"
                className="bg-gray-700 text-gray-300"
              >
                IDLE
              </Badge>
            </div>
          </div>

          <ul className="space-y-3">
            <PipelineStep step="Upload" status="pending" />
            <PipelineStep step="Processing" status="pending" />
            <PipelineStep step="Neural analysis" status="pending" />
            <PipelineStep step="Result" status="pending" />
          </ul>

          <div>
            <p className="text-sm mb-2 text-gray-300">Overall progress</p>
            <Progress value={0} className="bg-gray-700" />
            <p className="text-right text-sm mt-1 text-gray-400">0%</p>
          </div>
        </div>
      </main>
    </div>
  );
}
