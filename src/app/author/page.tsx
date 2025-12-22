
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Github, Linkedin, Twitter, Instagram, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Header } from '@/components/layout/header';

const AuthorPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen font-body">
      <Header />

      <main className="container mx-auto px-4 sm:px-8 py-12 md:py-20">
        <Card className="bg-card/80 border-border p-6 md:p-12 rounded-2xl shadow-lg max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
              <Image
                src="/xd.jpg"
                alt="Ayush Das"
                width={192}
                height={192}
                className="rounded-full mb-4 border-4 border-primary/20 shadow-lg object-cover transition-all duration-300 hover:scale-105 hover:shadow-primary/20 hover:shadow-2xl"
              />
              <h2 className="text-2xl md:text-3xl font-bold text-primary">
                <Link href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer">Ayush Das</Link>
              </h2>
              <p className="text-muted-foreground">Cybersecurity Enthusiast</p>
              <div className="flex gap-4 mt-4 justify-center md:justify-start">
                <Link href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Github /></Link>
                <Link href="https://linkedin.com/in/ayushdas-11am" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
                <Link href="https://x.com/aayushxidsu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
                <Link href="https://instagram.com/aayush_xid_su" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
              </div>
            </div>
            <div className="md:col-span-2">
              <h1 className="text-3xl md:text-4xl font-headline font-bold mb-6 border-b-2 border-primary pb-2">About the Author</h1>
              <div className="prose prose-sm sm:prose-base max-w-none text-muted-foreground space-y-4">
                <p>
                  <Link href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ayush Das</Link> is an independent technologist and cybersecurity enthusiast from India, with a strong foundation in cybersecurity, computer vision, and applied AI systems, his work focuses on building practical, privacy-aware technologies that address real-world security and trust challenges.
                </p>
                <p>
                  Driven by a deep interest in ethical hacking, OSINT, and defensive security, <Link href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ayush</Link> combines hands-on technical expertise with responsible design principles to create systems that are both powerful and transparent.
                </p>
                <h3 className="text-lg md:text-xl font-bold text-foreground">Technical Background & Expertise</h3>
                <p><Link href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ayush’s</Link> technical journey spans across multiple domains, including:</p>
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
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild className="w-full sm:w-auto">
                  <Link href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" /> GitHub
                  </Link>
                </Button>
                 <Button variant="secondary" asChild className="w-full sm:w-auto">
                  <Link href="https://linkedin.com/in/ayushdas-11am" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2" /> LinkedIn
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <Link href="https://portfoliolinux.vercel.app/" target="_blank" rel="noopener noreferrer">
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
