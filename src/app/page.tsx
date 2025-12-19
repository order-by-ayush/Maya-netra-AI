
'use client'
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sun, Moon, Eye, BrainCircuit, CheckCircle2, ShieldAlert, ShieldCheck, Zap, Cpu } from 'lucide-react';
import { DetectionPanel } from '@/components/detection-panel';
import { Card } from '@/components/ui/card';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <div
      className={`min-h-screen text-white font-body bg-cover bg-center`}
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

        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">How It Works</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Our three-step process makes deepfake detection simple and reliable
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-16 hidden md:block"></div>
            <div className="absolute top-1/2 left-1/4 w-1/2 h-px bg-border -translate-y-16 hidden md:block"></div>
            
            <Card className="bg-card/50 backdrop-blur-sm text-center p-8 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold">01</div>
              <div className="p-4 rounded-full bg-blue-500/20 inline-block mb-4">
                <Eye className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Upload Content</h3>
              <p className="text-muted-foreground">
                Upload your image or video file through our secure interface
              </p>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm text-center p-8 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold">02</div>
              <div className="p-4 rounded-full bg-pink-500/20 inline-block mb-4">
                <BrainCircuit className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our advanced neural networks analyze the content for manipulation signs
              </p>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm text-center p-8 relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold">03</div>
              <div className="p-4 rounded-full bg-green-500/20 inline-block mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Get Results</h3>
              <p className="text-muted-foreground">
                Receive detailed results with confidence scores and explanations
              </p>
            </Card>
          </div>
        </section>

        <section className="py-20">
           <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Real-world Implications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-destructive/10 border-destructive/30 p-6">
              <div className="flex items-start gap-4">
                <ShieldAlert className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold">Misinformation Risks</h3>
                    <Badge variant="destructive" className="bg-destructive/80">negative</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Deepfakes can spread false information and manipulate public opinion
                  </p>
                </div>
              </div>
            </Card>
             <Card className="bg-green-500/10 border-green-500/30 p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold">Identity Protection</h3>
                    <Badge className="bg-green-500/80 text-white border-transparent">positive</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Detection tools help protect individuals from unauthorized use of their likeness
                  </p>
                </div>
              </div>
            </Card>
            <Card className="bg-green-500/10 border-green-500/30 p-6">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold">Creative Applications</h3>
                    <Badge className="bg-green-500/80 text-white border-transparent">positive</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Legitimate uses in entertainment, education, and digital art
                  </p>
                </div>
              </div>
            </Card>
            <Card className="bg-secondary/50 p-6">
              <div className="flex items-start gap-4">
                <Cpu className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold">AI Advancement</h3>
                    <Badge variant="secondary">neutral</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Drives innovation in both generation and detection technologies
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
