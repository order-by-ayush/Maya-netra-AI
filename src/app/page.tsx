

'use client'
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, BrainCircuit, CheckCircle2, ShieldAlert, ShieldCheck, Zap, Cpu, MousePointerClick, LineChart, Globe, Shield } from 'lucide-react';
import { DetectionPanel } from '@/components/detection-panel';
import { Card } from '@/components/ui/card';
import { Footer } from '@/components/layout/footer';

export default function Home() {

  return (
    <div
      className={`min-h-screen text-foreground font-body bg-cover bg-center`}
    >
      <header className="py-4 px-8 flex justify-between items-center bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
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
          <Link href="/" className="text-primary font-bold">
            Home
          </Link>
          <Link href="/detect" className="hover:text-primary">
            Detect
          </Link>
          <Link href="/tools" className="hover:text-primary">
            Tools
          </Link>
          <Link href="/author" className="hover:text-primary">
            Author
          </Link>
        </nav>
        <div className="flex items-center gap-4">
        </div>
      </header>

      <main className="container mx-auto px-8 py-20 grid gap-16 items-center">
        <div className="space-y-6 text-center">
          <Badge
            variant="outline"
            className="mx-auto"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Neural forensic scan • MVP UI
          </Badge>
          <h2 className="text-5xl font-bold leading-tight max-w-4xl mx-auto">
            Identify{' '}
            <span className="text-primary">AI-generated</span>{' '}
            videos and images with confidence.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
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
        </div>
        
        <div className="bg-card/50 border border-border rounded-2xl p-6 shadow-lg">
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
            
            <Card className="bg-card/50 text-center p-8 relative transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold">01</div>
              <div className="p-4 rounded-full bg-blue-500/10 inline-block mb-4">
                <Eye className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Upload Content</h3>
              <p className="text-muted-foreground">
                Upload your image or video file through our secure interface
              </p>
            </Card>
            <Card className="bg-card/50 text-center p-8 relative transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold">02</div>
              <div className="p-4 rounded-full bg-pink-500/10 inline-block mb-4">
                <BrainCircuit className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our advanced neural networks analyze the content for manipulation signs
              </p>
            </Card>
            <Card className="bg-card/50 text-center p-8 relative transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold">03</div>
              <div className="p-4 rounded-full bg-green-500/10 inline-block mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
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
            <Card className="bg-destructive/10 border-destructive/30 p-6 transition-all duration-300 hover:scale-105 hover:shadow-destructive/20 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <ShieldAlert className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold">Misinformation Risks</h3>
                    <Badge variant="destructive" className="bg-destructive/80">negative</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Deepfake technology can be misused to create highly realistic but false images and videos that spread misinformation across social media, news platforms, and public forums. Such content can manipulate public opinion, damage institutional credibility, and create confusion during critical events such as elections or emergencies. Deepfake detection systems play a crucial role in verifying content authenticity and reducing the societal impact of false digital narratives.
                  </p>
                </div>
              </div>
            </Card>
             <Card className="bg-green-500/10 border-green-500/30 p-6 transition-all duration-300 hover:scale-105 hover:shadow-green-500/20 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold">Identity Protection</h3>
                    <Badge className="bg-green-500/80 text-white border-transparent">positive</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    The unauthorized use of an individual’s face, voice, or likeness in deepfake content can result in identity theft, impersonation, fraud, and reputational harm. Detection tools help safeguard personal identity by identifying manipulated media, supporting consent-based usage, and providing evidence for digital safety and legal protection.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="bg-green-500/10 border-green-500/30 p-6 transition-all duration-300 hover:scale-105 hover:shadow-green-500/20 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold">Creative Applications</h3>
                    <Badge className="bg-green-500/80 text-white border-transparent">positive</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Deepfake technology also has legitimate and ethical applications in fields such as entertainment, education, film production, and digital art. It can be used for visual effects, historical reconstructions, and immersive learning experiences. Detection platforms enable responsible creativity by ensuring transparency and clearly distinguishing AI-generated content from real media.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="bg-secondary/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <Cpu className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold">AI Advancement</h3>
                    <Badge variant="secondary">neutral</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    The development of deepfake generation technologies continuously pushes advancements in artificial intelligence, particularly in computer vision and neural networks. This progress also drives innovation in detection, forensic analysis, and AI security systems. The ongoing interaction between generation and detection contributes to balanced AI growth and responsible technological evolution.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Why Thousands Trust Our Deepfake Detection Tool</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">
                  <MousePointerClick className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Simple & Free to Use</h3>
                <p className="text-muted-foreground text-sm">
                  Just upload and go. There's no sign-up, no ads, and no limits. Whether you're a teacher, journalist, or just curious, you'll get fast results with zero hassle. It works on all devices and it's completely free—forever. I use it weekly and still can't believe it's this easy.
                </p>
              </div>
            </Card>
            <Card className="bg-card/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">
                  <LineChart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Natural, Accurate Results</h3>
                <p className="text-muted-foreground text-sm">
                  Our AI deepfake detector doesn't just flag fakes—it explains them. You'll get three result types, including a clear score and side-by-side comparisons. The results are readable, well-formatted, and make perfect sense. I love how it feels like reading plain English, not a tech manual.
                </p>
              </div>
            </Card>
            <Card className="bg-card/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">See Words in Real-World Use</h3>
                <p className="text-muted-foreground text-sm">
                  This tool doesn't just tell you what's fake—it shows you where and how that fake content would appear. From newsrooms to classrooms, you'll see context and meaning in action. It's a real eye-opener, and honestly, it makes spotting AI-generated stuff kinda fun.
                </p>
              </div>
            </Card>
            <Card className="bg-card/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 inline-block mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Your Privacy Stays Private</h3>
                <p className="text-muted-foreground text-sm">
                  We don't save your files. Period. All analysis is done securely, and nothing leaves your screen without your say. No creepy tracking, no hidden data grabs. I've checked—this is one of the most respectful tools I've ever used.
                </p>
              </div>
            </Card>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
