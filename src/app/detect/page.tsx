
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DetectionPanel } from '@/components/detection-panel';

const DetectionPage = () => {

  return (
    <div className="min-h-screen text-foreground font-body">
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
          <Link href="/detect" className="text-primary font-bold">
            Detect
          </Link>
          <Link href="#" className="hover:text-primary">
            How it works
          </Link>
          <Link href="#" className="hover:text-primary">
            Author
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant="secondary"
          >
            Sign In
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-8 py-12">
        <DetectionPanel />
      </main>
    </div>
  );
};

export default DetectionPage;
