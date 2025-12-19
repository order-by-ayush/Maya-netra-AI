
import Link from 'next/link';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-16 font-body">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8 pb-8 border-b border-gray-800">
          {/* Column 1: About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-bold text-xl mb-4">MAYA-NETRA AI</h3>
            <p className="max-w-sm text-sm leading-relaxed">
              Identify AI-generated images and videos with high confidence using state-of-the-art machine learning models and real-time neural analysis.
            </p>
            <p className="mt-8 text-xs text-gray-500">
              © {new Date().getFullYear()} MAYA-NETRA AI. All rights reserved
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white">Our Story</Link></li>
              <li><Link href="#" className="hover:text-white">Partnership</Link></li>
              <li><Link href="#" className="hover:text-white">Sponsorship</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:aayushxidsu.11am@gmail.com" className="hover:text-white">aayushxidsu.11am@gmail.com</a></li>
              <li><a href="tel:+917894038559" className="hover:text-white">+91 7894038559</a></li>
              <li>Nuapada, ODISHA</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-6 text-sm">
                <Link href="#" className="hover:text-white">LINKEDIN →</Link>
                <Link href="#" className="hover:text-white">INSTAGRAM →</Link>
                <Link href="#" className="hover:text-white">TWITTER →</Link>
                <Link href="#" className="hover:text-white">GITHUB →</Link>
            </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 pb-12 flex flex-col sm:flex-row justify-between items-center text-xs gap-4">
            <div className="flex items-center gap-2 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>by aayush_xid_su</span>
            </div>
            <div className="flex gap-4">
                <Link href="#" className="hover:text-white">DPA</Link>
                <Link href="#" className="hover:text-white">T&C</Link>
                <Link href="#" className="hover:text-white">IMPRINT</Link>
                <Link href="#" className="hover:text-white">DATA PRIVACY</Link>
            </div>
        </div>
        
        <div className="text-center py-8">
            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter">MAYA-NETRA AI</h1>
        </div>

      </div>
    </footer>
  );
}
