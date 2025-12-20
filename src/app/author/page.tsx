
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
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex flex-col items-center text-center">
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
                  Ayush Das is an independent cybersecurity enthusiast from India with a strong foundation in artificial intelligence, computer vision, and secure software development.
                </p>
                <p>
                  Through hands-on experience with modern AI systems, Ayush observed a growing concern: while generative AI was advancing rapidly, the safeguards to verify authenticity, protect identity, and preserve trust were lagging behind. This realization led to the creation of MAYA-NETRA AI—a privacy-conscious, detection-first platform.
                </p>
                <p>
                  MAYA-NETRA AI is his attempt to contribute to a future where technology protects identity, preserves truth, and empowers people—not manipulates them.
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
