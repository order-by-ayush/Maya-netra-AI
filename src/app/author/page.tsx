
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Instagram, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AuthorPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen font-body">
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
          <Link href="#" className="hover:text-primary">
            How it works
          </Link>
          <Link href="/author" className="text-primary font-bold">
            Author
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="secondary">Sign In</Button>
        </div>
      </header>

      <main className="container mx-auto px-8 py-20">
        <Card className="bg-card/80 border-border p-8 md:p-12 rounded-2xl shadow-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-48 h-48 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 border-4 border-primary/20 shadow-lg">
                <span className="text-6xl font-bold">AD</span>
              </div>
              <h2 className="text-3xl font-bold text-primary">Ayush Das</h2>
              <p className="text-muted-foreground">Cybersecurity Enthusiast & AI Developer</p>
              <div className="flex gap-4 mt-4">
                <Link href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Github /></Link>
                <Link href="https://linkedin.com/in/ayushdas-11am" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
                <Link href="https://x.com/aayushxidsu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
                <Link href="https://instagram.com/aayush_xid_su" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
              </div>
            </div>
            <div className="md:col-span-2">
              <h1 className="text-4xl font-headline font-bold mb-6 border-b-2 border-primary pb-2">About the Author</h1>
              <div className="prose max-w-none text-muted-foreground space-y-4">
                <p>
                  Ayush Das is an independent technologist and cybersecurity enthusiast from India, with a strong foundation in cybersecurity, computer vision, and applied AI systems, his work focuses on building practical, privacy-aware technologies that address real-world security and trust challenges.
                </p>
                <p>
                  Driven by a deep interest in ethical hacking, OSINT, and defensive security, Ayush combines hands-on technical expertise with responsible design principles to create systems that are both powerful and transparent.
                </p>
                <h3 className="text-xl font-bold text-foreground">Technical Background & Expertise</h3>
                <p>Ayush’s technical journey spans across multiple domains, including:</p>
                <ul className="list-disc list-inside">
                  <li>Cybersecurity (Offensive & Defensive Techniques)</li>
                  <li>AI & Computer Vision Systems</li>
                  <li>Deepfake & Synthetic Media Detection</li>
                  <li>Network Security & Traffic Analysis</li>
                  <li>OSINT & Reconnaissance Tooling</li>
                  <li>Secure Web Application Development</li>
                </ul>
                <p>
                  His experience includes developing real-world tools that prioritize security, usability, and ethical deployment, rather than purely academic experimentation.
                </p>
              </div>
              <div className="flex gap-4 mt-8">
                <Button asChild>
                  <Link href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" /> GitHub
                  </Link>
                </Button>
                 <Button variant="secondary" asChild>
                  <Link href="https://linkedin.com/in/ayushdas-11am" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2" /> LinkedIn
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Briefcase className="mr-2" /> Portfolio
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default AuthorPage;
