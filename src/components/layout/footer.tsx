
'use client'

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Footer() {
  return (
    <footer className="bg-background text-muted-foreground pt-16 font-body">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8 pb-8 border-b border-border">
          {/* Column 1: About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-foreground font-bold text-xl mb-4">MAYA-NETRA AI</h3>
            <p className="max-w-sm text-sm leading-relaxed">
              Identify AI-generated images and videos with high confidence using state-of-the-art machine learning models and real-time neural analysis.
            </p>
            <p className="mt-8 text-xs text-gray-500">
              © {new Date().getFullYear()} MAYA-NETRA AI. All rights reserved
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="hover:text-primary">Privacy Policy</button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] md:max-w-2xl lg:max-w-4xl max-h-[80vh]">
                     <DialogHeader>
                      <DialogTitle>MAYA NETRA AI – Privacy Policy</DialogTitle>
                      <DialogDescription>
                        Effective Date: 1 January 2026. Last Updated: 1 January 2026
                      </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-[60vh] pr-4">
                      <div className="prose prose-sm md:prose-base max-w-none">
                        <p>MAYA NETRA AI (“Company”, “We”, “Us”, “Our”) is committed to respecting user privacy and protecting personal data. This Privacy Policy explains how we collect, use, process, store, and safeguard information when you access or use our deepfake detection platform, website, tools, or related services (“Services”).</p>
                        <p>This Policy is framed in accordance with the <strong>Digital Personal Data Protection Act, 2023 (India)</strong>, the <strong>Information Technology Act, 2000</strong>, and other applicable laws.</p>
                        <p>By accessing or using MAYA NETRA AI, you acknowledge that you have read, understood, and agreed to this Privacy Policy.</p>
                        
                        <hr />

                        <h2>1. Scope & Applicability</h2>
                        <p>This Privacy Policy applies to:</p>
                        <ul>
                          <li>Visitors accessing the MAYA NETRA AI website</li>
                          <li>Users uploading images or videos for deepfake detection</li>
                          <li>Users interacting with detection results or dashboards</li>
                          <li>Any individual whose personal data is processed by the platform</li>
                        </ul>
                        <p>This Policy does <strong>not</strong> apply to:</p>
                        <ul>
                          <li>Third-party websites or services linked from MAYA NETRA AI</li>
                          <li>Data processed entirely outside our operational control</li>
                        </ul>

                        <hr />

                        <h2>2. Legal Basis for Processing</h2>
                        <p>We process personal data on the basis of:</p>
                        <ul>
                          <li>User consent</li>
                          <li>Performance of services requested by the user</li>
                          <li>Compliance with legal obligations</li>
                          <li>Legitimate purposes such as security, fraud prevention, and system monitoring</li>
                          <li>Research and improvement of AI models using anonymized data</li>
                        </ul>

                        <hr />

                        <h2>3. Data We Collect</h2>
                        <h3>3.1 Data Provided by Users</h3>
                        <ul>
                          <li>Name (if voluntarily provided)</li>
                          <li>Email address (for contact or support)</li>
                          <li>Uploaded images or videos submitted for analysis</li>
                          <li>Feedback, queries, or support communications</li>
                        </ul>
                        <h3>3.2 Automatically Collected Data</h3>
                        <ul>
                          <li>IP address</li>
                          <li>Device, browser, and operating system details</li>
                          <li>Usage logs and timestamps</li>
                          <li>Non-identifying analytics data</li>
                        </ul>
                        <h3>3.3 Sensitive Personal Data</h3>
                        <p>MAYA NETRA AI does <strong>not intentionally collect sensitive personal data</strong>.</p>
                        <p>Users are strongly advised <strong>not to upload confidential, private, biometric, or legally restricted content</strong> unless they have full legal rights and consent.</p>
                        
                        <hr />

                        <h2>4. Purpose of Data Processing</h2>
                        <p>Personal data is processed strictly for:</p>
                        <ul>
                          <li>Performing deepfake detection and authenticity analysis</li>
                          <li>Generating confidence scores and detection outcomes</li>
                          <li>Improving system accuracy and performance</li>
                          <li>Ensuring platform security and preventing misuse</li>
                          <li>Responding to user queries and support requests</li>
                          <li>Compliance with legal and regulatory requirements</li>
                        </ul>
                        <p><strong>We do not sell, rent, or trade personal data.</strong></p>

                        <hr />

                        <h2>5. Privacy-First Media Processing</h2>
                        <p>MAYA NETRA AI follows a <strong>privacy-by-design approach</strong>:</p>
                        <ul>
                          <li>Uploaded media is processed only for detection purposes</li>
                          <li>Files are automatically deleted after analysis or within a limited retention period</li>
                          <li>Detection results are not publicly shared</li>
                          <li>No facial recognition, biometric profiling, or identity matching is performed</li>
                        </ul>

                        <hr />

                        <h2>6. User Consent</h2>
                        <p>Consent is obtained through:</p>
                        <ul>
                          <li>Voluntary upload of content</li>
                          <li>Acceptance of this Privacy Policy</li>
                          <li>Continued use of the platform</li>
                        </ul>
                        <p>Users may withdraw consent at any time by contacting us (see Section 17).</p>

                        <hr />

                        <h2>7. Data Sharing & Disclosure</h2>
                        <p>Data may be shared only in limited circumstances:</p>
                        <h3>7.1 Service Providers</h3>
                        <ul>
                          <li>Secure hosting infrastructure</li>
                          <li>Performance and system monitoring tools</li>
                        </ul>
                        <h3>7.2 Legal Requirements</h3>
                        <p>We may disclose data if required by:</p>
                        <ul>
                          <li>Law enforcement agencies</li>
                          <li>Court orders or government authorities</li>
                        </ul>
                        <p><strong>We do not share data with advertisers or marketing entities.</strong></p>

                        <hr />

                        <h2>8. Cross-Border Data Transfers</h2>
                        <p>If data is transferred outside India:</p>
                        <ul>
                          <li>Transfers comply with DPDP Act requirements</li>
                          <li>Adequate contractual and technical safeguards are applied</li>
                          <li>Transfers are limited to permitted jurisdictions only</li>
                        </ul>

                        <hr />

                        <h2>9. Data Storage & Retention</h2>
                        <ul>
                          <li>Data is stored using encrypted systems</li>
                          <li>Uploaded media is deleted automatically after processing</li>
                          <li>Retention occurs only for operational, legal, or security reasons</li>
                          <li>Upon withdrawal of consent, data is deleted or anonymized unless legally required</li>
                        </ul>

                        <hr />

                        <h2>10. User Rights (Data Principal Rights)</h2>
                        <p>Users have the right to:</p>
                        <ul>
                          <li>Access personal data</li>
                          <li>Request correction of inaccurate information</li>
                          <li>Request deletion or erasure</li>
                          <li>Withdraw consent</li>
                          <li>Request data portability (where applicable)</li>
                          <li>Nominate a representative for data rights</li>
                        </ul>
                        <p>Requests can be made via the contact details in Section 17.</p>

                        <hr />

                        <h2>11. Children’s Privacy</h2>
                        <p>MAYA NETRA AI is <strong>not intended for individuals under 18 years of age</strong>.</p>
                        <p>We do not knowingly collect or process children’s data.</p>

                        <hr />

                        <h2>12. Cookies & Analytics</h2>
                        <p>We use limited cookies for:</p>
                        <ul>
                          <li>Session management</li>
                          <li>Basic analytics</li>
                          <li>Performance optimization</li>
                        </ul>
                        <p>Disabling cookies may affect certain features.</p>

                        <hr />

                        <h2>13. Security Measures</h2>
                        <p>We implement reasonable security practices including:</p>
                        <ul>
                          <li>Encryption in transit and at rest</li>
                          <li>Secure access controls</li>
                          <li>AI-safe processing pipelines</li>
                          <li>Periodic security reviews</li>
                          <li>Secure development practices</li>
                        </ul>
                        <p>Despite these measures, no system can guarantee absolute security.</p>

                        <hr />

                        <h2>14. AI Output Disclaimer</h2>
                        <p>Detection results generated by MAYA NETRA AI:</p>
                        <ul>
                          <li>Are probabilistic in nature</li>
                          <li>Do not guarantee absolute accuracy</li>
                          <li>Must not be treated as legal, forensic, or professional advice</li>
                        </ul>
                        <p>Users are solely responsible for verifying outputs before taking any action.</p>

                        <hr />

                        <h2>15. Limitation of Liability & Disclaimer of Responsibility</h2>
                        <p>To the <strong>maximum extent permitted by law</strong>, <strong>MAYA NETRA AI</strong>, including its <strong>creator, developers, contributors, maintainers, advisors, AI models, datasets, and any member associated with this project</strong>, shall <strong>not be held responsible or liable</strong> for any loss, damage, harm, or consequence of any kind arising from:</p>
                        <ul>
                          <li>Use or misuse of the platform or its outputs</li>
                          <li>Reliance on AI-generated detection results or confidence scores</li>
                          <li>Inaccurate, incomplete, delayed, or misleading outputs</li>
                          <li>Direct, indirect, incidental, consequential, or punitive damages</li>
                          <li>Financial loss, reputational harm, or legal disputes</li>
                          <li>User-uploaded content without lawful consent or authority</li>
                          <li>Third-party services, infrastructure failures, or network issues</li>
                          <li>User-side negligence, misconfiguration, or security lapses</li>
                        </ul>
                        <p>All services are provided on a <strong>best-effort basis</strong>, <strong>“AS IS” and “AS AVAILABLE”</strong>, without warranties of any kind, express or implied.</p>
                        <p>Final responsibility for interpretation and use of results rests <strong>solely with the user</strong>.</p>

                        <hr />

                        <h2>16. Policy Changes Without Prior Notice</h2>
                        <p>MAYA NETRA AI reserves the <strong>absolute right</strong> to modify, update, amend, or replace this Privacy Policy <strong>at any time</strong>, <strong>without prior notice or obligation to inform users</strong>.</p>
                        <p>Changes become effective immediately upon publication.
                        Continued use of the Services constitutes <strong>deemed acceptance</strong> of the updated Policy.</p>
                        <p>Users are responsible for reviewing this Policy periodically.
                        MAYA NETRA AI shall not be liable for any loss arising from failure to review updates.</p>

                        <hr />

                        <h2>17. Contact Information (Privacy & Data Requests)</h2>
                        <p>For privacy-related queries, corrections, or deletion requests:</p>
                        <p>📧 <a href="mailto:aayushxidsu.11am@gmail.com" className="text-primary hover:underline">aayushxidsu.11am@gmail.com</a></p>

                        <hr />

                        <h2>18. Governing Law & Jurisdiction</h2>
                        <p>This Privacy Policy is governed by:</p>
                        <ul>
                          <li>Digital Personal Data Protection Act, 2023</li>
                          <li>Information Technology Act, 2000</li>
                          <li>Applicable laws of India</li>
                        </ul>
                        <p><strong>Jurisdiction:</strong> Odisha, India</p>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </li>
              <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-primary">Our Story</Link></li>
              <li><Link href="#" className="hover:text-primary">Partnership</Link></li>
              <li><Link href="#" className="hover:text-primary">Sponsorship</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:aayushxidsu.11am@gmail.com" className="hover:text-primary">aayushxidsu.11am@gmail.com</a></li>
              <li><a href="tel:+917894038559" className="hover:text-primary">+91 7894038559</a></li>
              <li>Nuapada, ODISHA</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-6 text-sm">
                <Link href="#" className="hover:text-primary">LINKEDIN →</Link>
                <Link href="#" className="hover:text-primary">INSTAGRAM →</Link>
                <Link href="#" className="hover:text-primary">TWITTER →</Link>
                <Link href="#" className="hover:text-primary">GITHUB →</Link>
            </div>
        </div>
        
        <div className="border-t border-border pt-6 pb-12 flex flex-col sm:flex-row justify-between items-center text-xs gap-4">
            <div className="flex items-center gap-2 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>by aayush_xid_su</span>
            </div>
            <div className="flex gap-4">
                <Link href="#" className="hover:text-primary">DPA</Link>
                <Link href="#" className="hover:text-primary">T&C</Link>
                <Link href="#" className="hover:text-primary">IMPRINT</Link>
                <Link href="#" className="hover:text-primary">DATA PRIVACY</Link>
            </div>
        </div>
        
        <div className="text-center py-8">
            <h1 className="text-7xl md:text-9xl font-black text-foreground tracking-tighter">MAYA-NETRA AI</h1>
        </div>

      </div>
    </footer>
  );
}
