'use client'

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Footer() {
  return (
    <footer className="bg-[#7b2cbf] text-gray-200 pt-16 font-body">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8 pb-8 border-b border-border">
          {/* Column 1: About */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white font-bold text-xl mb-4">MAYA-NETRA AI</h3>
            <p className="max-w-sm text-sm leading-relaxed">
              Identify AI-generated images and videos with high confidence using state-of-the-art machine learning models and real-time neural analysis.
            </p>
            <p className="mt-8 text-xs text-gray-400">
              © {new Date().getFullYear()} MAYA-NETRA AI. All rights reserved
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
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
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="hover:text-primary">Terms of Service</button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] md:max-w-2xl lg:max-w-4xl max-h-[80vh]">
                    <DialogHeader>
                      <DialogTitle>MAYA NETRA AI – Terms & Conditions</DialogTitle>
                      <DialogDescription>
                        Effective Date: 1 January 2026. Last Updated: 1 January 2026
                      </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-[60vh] pr-4">
                      <div className="prose prose-sm md:prose-base max-w-none">
                        <p>Welcome to <strong>MAYA NETRA AI</strong> (“Platform”, “Company”, “We”, “Us”, “Our”). By accessing, browsing, or using our website, applications, tools, APIs, or services (“Services”), you (“User”, “You”) agree to be bound by these Terms & Conditions. If you do not agree, you must immediately discontinue use of the Services.</p>

                        <hr />

                        <h2>1. General Provisions</h2>
                        <p>1.1 These Terms govern your access to and use of MAYA NETRA AI, including:</p>
                        <ul>
                          <li>AI-based deepfake detection for images and videos</li>
                          <li>Media authenticity analysis and confidence scoring</li>
                          <li>Dashboards, APIs, tools, documentation, and related services</li>
                        </ul>
                        <p>1.2 These Terms constitute a legally binding agreement under the <strong>Indian Contract Act, 1872</strong>.</p>
                        <p>1.3 By using the Services, you confirm that:</p>
                        <ul>
                          <li>You are at least <strong>18 years old</strong></li>
                          <li>You are legally competent to enter into a contract</li>
                        </ul>
                        <p>1.4 MAYA NETRA AI reserves the right to modify, restrict, suspend, or discontinue any part of the Services at any time, temporarily or permanently.</p>

                        <hr />

                        <h2>2. Definitions</h2>
                        <ul>
                          <li><strong>“Platform / Service”</strong>: MAYA NETRA AI’s website, AI models, detection systems, APIs, tools, and documentation</li>
                          <li><strong>“User”</strong>: Any individual or organization accessing or using the Services</li>
                          <li><strong>“Content”</strong>: Images, videos, or media uploaded by Users</li>
                          <li><strong>“Detection Output”</strong>: AI-generated analysis, confidence scores, or classifications</li>
                          <li><strong>“Personal Data”</strong>: As defined under the Digital Personal Data Protection Act, 2023</li>
                        </ul>

                        <hr />

                        <h2>3. Service Availability & Support</h2>
                        <p>3.1 We strive to provide reliable access but <strong>do not guarantee uninterrupted, error-free, or continuous availability</strong>.</p>
                        <p>3.2 The Services may be unavailable due to:</p>
                        <ul>
                          <li>Maintenance or upgrades</li>
                          <li>System or network failures</li>
                          <li>Force majeure events</li>
                        </ul>
                        <p>3.3 MAYA NETRA AI shall not be liable for outages caused by:</p>
                        <ul>
                          <li>Internet failures</li>
                          <li>User infrastructure</li>
                          <li>Third-party service providers</li>
                          <li>Cyber incidents beyond our control</li>
                        </ul>

                        <hr />

                        <h2>4. User Responsibilities & Lawful Use</h2>
                        <p>4.1 Users are solely responsible for ensuring that:</p>
                        <ul>
                          <li>Uploaded media is lawfully obtained</li>
                          <li>All required consents and permissions are obtained</li>
                          <li>Use of the platform complies with applicable laws</li>
                        </ul>
                        <p>4.2 Users must <strong>not upload or process</strong>:</p>
                        <ul>
                          <li>Content without lawful authority or consent</li>
                          <li>Illegal, abusive, or harmful material</li>
                          <li>Content violating privacy, IP, or personality rights</li>
                        </ul>
                        <p>4.3 MAYA NETRA AI does <strong>not verify ownership, consent, or legality</strong> of uploaded content.</p>

                        <hr />

                        <h2>5. Deepfake Detection & AI Output Disclaimer</h2>
                        <p>5.1 Detection outputs are generated using <strong>probabilistic artificial intelligence models</strong>.</p>
                        <p>5.2 Outputs:</p>
                        <ul>
                          <li>May contain inaccuracies or errors</li>
                          <li>Do not constitute legal, forensic, or professional advice</li>
                        </ul>
                        <p>5.3 Final responsibility for interpretation, verification, and usage of results lies <strong>entirely with the User</strong>.</p>

                        <hr />

                        <h2>6. Payments & Pricing (If Applicable)</h2>
                        <p>6.1 Certain features may be paid or usage-based.</p>
                        <p>6.2 Prices may change at any time and may include applicable taxes.</p>
                        <p>6.3 Payments are non-refundable unless required by law.</p>

                        <hr />

                        <h2>7. Intellectual Property Rights</h2>
                        <p>7.1 All platform components, including AI models, algorithms, UI/UX, branding, and documentation, are the intellectual property of <strong>MAYA NETRA AI</strong>, unless otherwise stated.</p>
                        <p>7.2 Users are granted a <strong>limited, non-exclusive, revocable license</strong> to use the Services.</p>
                        <p>7.3 Users shall not:</p>
                        <ul>
                          <li>Reverse engineer, decompile, or tamper with the platform</li>
                          <li>Redistribute, resell, or sublicense the Services</li>
                          <li>Claim ownership over AI models or outputs</li>
                        </ul>

                        <hr />

                        <h2>8. Prohibited Uses</h2>
                        <p>Users shall not use the Platform for:</p>
                        <ul>
                          <li>Creating, enhancing, or distributing deepfakes</li>
                          <li>Surveillance or monitoring without consent</li>
                          <li>Harassment, impersonation, defamation, or fraud</li>
                          <li>Discrimination or unlawful profiling</li>
                          <li>Any activity prohibited under Indian law</li>
                        </ul>
                        <p>Violation may result in immediate termination.</p>

                        <hr />

                        <h2>9. Data & Privacy</h2>
                        <p>9.1 All data processing is governed by our <strong>Privacy Policy</strong>.</p>
                        <p>9.2 MAYA NETRA AI does not claim ownership over user-uploaded content.</p>
                        <p>9.3 Uploaded media is processed solely for detection purposes and handled according to privacy-by-design principles.</p>

                        <hr />

                        <h2>10. Confidentiality</h2>
                        <p>10.1 Users agree not to disclose confidential or proprietary information related to the Platform.</p>
                        <p>10.2 Confidentiality obligations survive termination of these Terms.</p>

                        <hr />

                        <h2>11. Termination</h2>
                        <p>11.1 MAYA NETRA AI may suspend or terminate access:</p>
                        <ul>
                          <li>For violation of these Terms</li>
                          <li>For misuse or unlawful activity</li>
                          <li>At its sole discretion, with or without notice</li>
                        </ul>
                        <p>11.2 Users may stop using the Services at any time.</p>

                        <hr />

                        <h2>12. Post-Termination Obligations</h2>
                        <p>Upon termination:</p>
                        <ul>
                          <li>All access rights cease immediately</li>
                          <li>API keys or credentials must be deleted</li>
                          <li>Outstanding obligations survive termination</li>
                        </ul>

                        <hr />

                        <h2>13. Comprehensive Limitation of Liability & Disclaimer of Responsibility</h2>
                        <p>To the <strong>maximum extent permitted by applicable law</strong>, <strong>MAYA NETRA AI</strong>, including but not limited to its <strong>creator, developers, contributors, maintainers, advisors, associated AI models, datasets, and any member of this project</strong>, <strong>shall not be responsible or liable</strong> for any loss, damage, harm, or consequence of any kind arising from or related to:</p>
                        <ul>
                          <li>Use or misuse of the Platform or Services</li>
                          <li>Reliance on AI-generated detection outputs or confidence scores</li>
                          <li>Inaccurate, incomplete, delayed, or misleading results</li>
                          <li>Direct, indirect, incidental, consequential, special, or punitive damages</li>
                          <li>Financial loss, reputational harm, legal claims, or penalties</li>
                          <li>User-uploaded content without lawful consent or authority</li>
                          <li>Misinterpretation or improper use of AI outputs</li>
                          <li>Third-party services, hosting providers, infrastructure failures, or cyber incidents</li>
                          <li>User-side negligence, configuration errors, or security lapses</li>
                        </ul>
                        <p>All Services are provided strictly on a <strong>best-effort basis</strong> and <strong>“AS IS” / “AS AVAILABLE”</strong>, without warranties of any kind, express or implied.</p>
                        <p>Users acknowledge that <strong>they bear sole responsibility</strong> for decisions or actions taken based on the Platform’s outputs.</p>
                        
                        <hr />

                        <h2>14. Indemnification</h2>
                        <p>Users agree to indemnify, defend, and hold harmless MAYA NETRA AI and its associated parties from any claims, losses, liabilities, or damages arising from:</p>
                        <ul>
                          <li>User content</li>
                          <li>Violation of laws</li>
                          <li>Breach of these Terms</li>
                        </ul>

                        <hr />

                        <h2>15. Modification of Terms & Policies Without Prior Notice</h2>
                        <p>MAYA NETRA AI reserves the <strong>absolute, unconditional right</strong> to modify, amend, update, suspend, or replace these Terms & Conditions, the Privacy Policy, or any related policies <strong>at any time</strong>, <strong>with or without prior notice</strong>, and <strong>without any obligation to inform users individually</strong>.</p>
                        <p>All modifications become <strong>effective immediately upon publication</strong> on the Platform.</p>
                        <p>Continued use of the Services after such publication constitutes <strong>deemed and binding acceptance</strong> of the revised Terms.</p>
                        <p>Users are solely responsible for reviewing the Terms periodically. MAYA NETRA AI shall <strong>not be liable for any loss, claim, or consequence</strong> arising from a user’s failure to review updated Terms or Policies.</p>

                        <hr />

                        <h2>16. Dispute Resolution</h2>
                        <p>16.1 Parties shall first attempt amicable resolution.</p>
                        <p>16.2 If unresolved, disputes shall be resolved by <strong>arbitration</strong> under the <strong>Arbitration and Conciliation Act, 1996</strong>.</p>
                        <ul>
                          <li>Seat: <strong>New Delhi, India</strong></li>
                          <li>Language: English</li>
                        </ul>
                        <p>16.3 Courts at New Delhi shall have exclusive jurisdiction.</p>

                        <hr />

                        <h2>17. Governing Law</h2>
                        <p>These Terms are governed by:</p>
                        <ul>
                          <li>Indian Contract Act, 1872</li>
                          <li>Information Technology Act, 2000</li>
                          <li>Digital Personal Data Protection Act, 2023</li>
                        </ul>

                        <hr />

                        <h2>18. Final Provisions</h2>
                        <p>18.1 If any provision is held invalid, remaining provisions remain enforceable.</p>
                        <p>18.2 Failure to enforce any right shall not constitute a waiver.</p>
                        <p>18.3 These Terms constitute the <strong>entire agreement</strong> between the User and MAYA NETRA AI.</p>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="hover:text-primary">Contact</button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Contact Us – MAYA NETRA AI</DialogTitle>
                    </DialogHeader>
                    <div className="prose prose-sm md:prose-base max-w-none">
                      <p>For inquiries, support, partnerships, or official communication, please reach out to us using the details below:</p>
                      <p>
                        <strong>Email:</strong> <a href="mailto:aayushxidsu.11am@gmail.com" className="text-primary hover:underline">aayushxidsu.11am@gmail.com</a>
                        <br />
                        <strong>Phone:</strong> +91 78940 38559
                      </p>
                      <p>We aim to respond to all legitimate queries in a timely and professional manner.</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="hover:text-primary">Our Story</button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] md:max-w-2xl lg:max-w-4xl max-h-[80vh]">
                    <DialogHeader>
                      <DialogTitle>Our Story – MAYA NETRA AI</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="h-[60vh] pr-4">
                      <div className="prose prose-sm md:prose-base max-w-none">
                        <p>
                          In an era where visual media defines truth, perception, and influence, the ability for machines to <strong>understand visual authenticity</strong> has become essential. As artificial intelligence continues to reshape how images and videos are created, the challenge is no longer just seeing—but <strong>discerning what is real</strong>.
                        </p>
                        <p>
                          <strong>MAYA NETRA AI</strong> was created to address this challenge by redefining how deepfake and synthetic media detection is developed, deployed, and trusted.
                        </p>
                        <p>
                          The name <strong>“MAYA NETRA”</strong> originates from Sanskrit philosophy—
                          <strong>“Māyā”</strong> represents illusion, deception, or false perception, while <strong>“Netra”</strong> means vision or eye. Together, MAYA NETRA symbolizes <strong>the eye that sees through illusion</strong>—a system designed not merely to detect pixels, but to understand authenticity, context, and intent.
                        </p>
                        <hr className="my-6" />
                        <h2>The Origin</h2>
                        <p>
                          MAYA NETRA AI is the project of <a href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ayush Das</a>, an independent cybersecurity enthusiast from India with a strong foundation in artificial intelligence, computer vision, and cybersecurity.
                        </p>
                        <p>
                          Through hands-on experience with modern AI systems, Ayush observed a growing concern: while generative AI was advancing rapidly, the safeguards to verify authenticity, protect identity, and preserve trust were lagging behind. Cloud-heavy architectures, opaque models, and reduced user control often came at the cost of privacy, transparency, and accountability.
                        </p>
                        <p>
                          This realization led to the creation of MAYA NETRA AI—a <strong>privacy-conscious, detection-first platform</strong> focused on identifying AI-generated images and videos <strong>without compromising user trust or ethical boundaries</strong>.
                        </p>
                        <hr className="my-6" />
                        <h2>The Concept of MAYA NETRA AI</h2>
                        <p>
                          From its inception, MAYA NETRA AI has been guided by a clear objective:
                          <strong> to make deepfake detection accurate, accessible, and responsible.</strong>
                        </p>
                        <p>
                          The platform integrates state-of-the-art neural networks with real-time analysis pipelines to detect and analyze:
                        </p>
                        <ul>
                          <li>AI-generated images and videos</li>
                          <li>Facial manipulation and identity spoofing</li>
                          <li>Synthetic media artifacts and inconsistencies</li>
                          <li>Frame-level and temporal anomalies</li>
                          <li>Confidence-based authenticity assessment</li>
                        </ul>
                        <p>
                          All while prioritizing <strong>local or controlled processing</strong>, wherever feasible, to reduce unnecessary data exposure.
                        </p>
                        <hr className="my-6" />
                        <h2>MADE IN INDIA, BUILT WITH PURPOSE</h2>
                        <p>
                          MAYA NETRA AI is proudly developed in <strong>India</strong>, reflecting a commitment to strengthening the Indian AI ecosystem while aligning with global technical and ethical standards.
                        </p>
                        <p>
                          The platform is designed with awareness of Indian legal frameworks, including evolving data protection and digital governance norms, and follows <strong>privacy-by-design</strong> principles from the ground up.
                        </p>
                        <p>
                          MAYA NETRA AI demonstrates that <strong>advanced AI security and ethical responsibility can coexist</strong>—without trade-offs.
                        </p>
                        <hr className="my-6" />
                        <h2>Our Core Principles</h2>
                        <p>MAYA NETRA AI is built on four foundational pillars:</p>
                        <ul>
                          <li>
                            <strong>Authentic Intelligence</strong><br />
                            Advanced detection models engineered for precision, robustness, and real-world reliability.
                          </li>
                          <li>
                            <strong>Privacy-First Design</strong><br />
                            Minimal data retention, transparent processing flows, and strong user control.
                          </li>
                          <li>
                            <strong>Responsible AI</strong><br />
                            Technology that counters deception, misinformation, and misuse—without enabling surveillance or abuse.
                          </li>
                          <li>
                            <strong>Human-Centric Trust</strong><br />
                            AI that supports human judgment instead of replacing it.
                          </li>
                        </ul>
                        <hr className="my-6" />
                        <h2>The Vision for Tomorrow</h2>
                        <p>
                          MAYA NETRA AI is not a static product—it is a continuously evolving platform. The roadmap includes:
                        </p>
                        <ul>
                          <li>Advanced explainable AI for detection decisions</li>
                          <li>Cross-platform deepfake verification tools</li>
                          <li>Edge and on-device inference capabilities</li>
                          <li>Research collaboration and open innovation</li>
                          <li>Scalable enterprise and institutional solutions</li>
                        </ul>
                        <p>
                          By learning from real-world misuse patterns and emerging threats, MAYA NETRA AI aims to help shape the <strong>future ethics of visual authenticity</strong>.
                        </p>
                        <hr className="my-6" />
                        <h2>Founder’s Note</h2>
                        <p>
                          When I began working on MAYA NETRA AI, my goal was not to build just another AI tool.
                        </p>
                        <p>
                          The question I wanted to answer was simple—but critical:
                          <strong> Can we detect deception without sacrificing trust?</strong>
                        </p>
                        <p>
                          In a world where synthetic media is becoming indistinguishable from reality, the responsibility of AI developers extends beyond performance metrics. It extends into ethics, transparency, and accountability.
                        </p>
                        <p>
                          MAYA NETRA AI is my attempt to contribute to a future where technology protects identity, preserves truth, and empowers people—not manipulates them.
                        </p>
                        <p>
                          This is only the beginning.
                        </p>
                        <blockquote className="mt-6 border-l-2 pl-6 italic">
                          “When illusion becomes powerful, responsibility must become stronger.”
                          <br />
                          — <em className="italic">Ayush Das, Founder & Creator, MAYA NETRA AI</em>
                        </blockquote>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="hover:text-primary">Partnership</button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] md:max-w-2xl lg:max-w-4xl max-h-[80vh]">
                    <DialogHeader>
                      <DialogTitle>Strategic Partnership: MAYA NETRA AI × Xidotic Pvt. Ltd.</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="h-[60vh] pr-4">
                      <div className="prose prose-sm md:prose-base max-w-none">
                        <p>
                          <strong>MAYA NETRA AI</strong> is proud to announce that the platform has been developed in <strong>strategic partnership with Xidotic Pvt. Ltd.</strong>, a technology-driven organization focused on innovation, research, and next-generation digital solutions.
                        </p>
                        <p>
                          This partnership represents a shared commitment to <strong>responsible artificial intelligence, technical excellence, and scalable system architecture</strong>, combining MAYA NETRA AI’s expertise in <strong>deepfake and synthetic media detection</strong> with Xidotic Pvt. Ltd.’s <strong>engineering-driven development approach</strong>.
                        </p>
                        <hr className="my-6" />
                        <h2>Strengthening Authenticity Intelligence Through Collaboration</h2>
                        <p>
                          The development of MAYA NETRA AI has been supported by Xidotic Pvt. Ltd. through <strong>technical collaboration, architectural guidance, and strategic engineering inputs</strong>. This collaboration enabled the platform to be designed with a strong emphasis on:
                        </p>
                        <ul>
                          <li>High-performance AI detection pipelines</li>
                          <li>Real-time and frame-level synthetic media analysis</li>
                          <li>Scalable, modular, and production-ready system architecture</li>
                          <li>Secure, privacy-first infrastructure design</li>
                        </ul>
                        <p>
                          By aligning on shared technical and ethical principles, both teams worked together to ensure that MAYA NETRA AI meets the demands of modern AI deployment <strong>without compromising transparency, compliance, or user trust</strong>.
                        </p>
                        <hr className="my-6" />
                        <h2>Shared Values, Unified Vision</h2>
                        <p>
                          MAYA NETRA AI and Xidotic Pvt. Ltd. are aligned by a common philosophy that guides every stage of development:
                        </p>
                        <ul>
                          <li>Innovation with responsibility</li>
                          <li>Privacy-by-design system architecture</li>
                          <li>Transparency in AI decision-making</li>
                          <li>Long-term, sustainable technology development</li>
                        </ul>
                        <p>
                          This collaboration reflects the belief that <strong>AI systems designed to counter deception and misinformation must themselves be built with integrity and accountability</strong>.
                        </p>
                        <hr className="my-6" />
                        <h2>Role of Xidotic Pvt. Ltd.</h2>
                        <p>
                          As a strategic technology partner, <strong>Xidotic Pvt. Ltd.</strong> contributed to:
                        </p>
                        <ul>
                          <li>Platform engineering support and system architecture design</li>
                          <li>Development best practices and optimization strategies</li>
                          <li>Technical validation and architectural reviews</li>
                          <li>Supporting MAYA NETRA AI’s long-term scalability and deployment roadmap</li>
                        </ul>
                        <p>
                          This partnership ensured that MAYA NETRA AI was developed with <strong>enterprise-grade foundations</strong>, while retaining the flexibility required for future innovation and evolving threat landscapes.
                        </p>
                        <hr className="my-6" />
                        <h2>Looking Forward</h2>
                        <p>
                          The partnership between MAYA NETRA AI and Xidotic Pvt. Ltd. marks the beginning of a <strong>long-term collaboration</strong> aimed at:
                        </p>
                        <ul>
                          <li>Advancing deepfake and synthetic media detection capabilities</li>
                          <li>Expanding real-time and edge-based AI inference systems</li>
                          <li>Supporting research-driven AI security innovation in India</li>
                          <li>Building trusted authenticity-verification solutions for global use cases</li>
                        </ul>
                        <p>
                          Together, MAYA NETRA AI and Xidotic Pvt. Ltd. are committed to shaping the future of <strong>ethical, transparent, and high-impact AI technologies that protect truth and identity</strong>.
                        </p>
                        <hr className="my-6" />
                        <h2>About Xidotic Pvt. Ltd.</h2>
                        <p>
                          <strong>Xidotic Pvt. Ltd.</strong> is a technology and innovation-focused organization dedicated to building <strong>scalable, research-driven digital solutions</strong>. The company supports emerging platforms through <strong>engineering expertise, system design, and strategic collaboration</strong>, helping transform innovative ideas into production-ready systems.
                        </p>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </li>
              <li>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="hover:text-primary">Sponsorship</button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] md:max-w-2xl lg:max-w-4xl max-h-[80vh]">
                    <DialogHeader>
                      <DialogTitle>Sponsorship & Funding Transparency – MAYA NETRA AI</DialogTitle>
                    </DialogHeader>
                    <ScrollArea className="h-[60vh] pr-4">
                      <div className="prose prose-sm md:prose-base max-w-none">
                        <p>At present, <strong>MAYA NETRA AI</strong> is an <strong>indigenously developed platform</strong> that has <strong>not sought, accepted, or received any form of sponsorship, financial funding, grants, endorsements, or monetary support</strong> from individuals, private entities, government bodies, academic institutions, or third-party organizations.</p>
                        <p>All research, development, and implementation efforts related to MAYA NETRA AI have been carried out <strong>independently</strong>, without external financial influence. This ensures that every technical, architectural, and strategic decision is driven solely by <strong>engineering integrity, ethical responsibility, and platform trustworthiness</strong>.</p>
                        <hr />
                        <h2>Commitment to Independence & Transparency</h2>
                        <p>Maintaining independence enables MAYA NETRA AI to:</p>
                        <ul>
                          <li>Uphold privacy-first and responsible AI design principles</li>
                          <li>Avoid conflicts of interest or external influence</li>
                          <li>Retain full control over technology direction and data governance</li>
                          <li>Deliver unbiased and reliable deepfake and synthetic media detection</li>
                        </ul>
                        <p>This independence is a foundational principle of MAYA NETRA AI and reflects our commitment to <strong>transparency, accountability, and user trust</strong>.</p>
                        <hr />
                        <h2>Future Sponsorships or Funding</h2>
                        <p>If, in the future, MAYA NETRA AI considers engaging in <strong>sponsorships, grants, or financial collaborations</strong>, such engagements will be:</p>
                        <ul>
                          <li>Clearly disclosed on the official website and documentation</li>
                          <li>Evaluated for alignment with applicable laws, ethical standards, and platform values</li>
                          <li>Structured to ensure that user privacy, data control, and technical independence remain uncompromised</li>
                        </ul>
                        <blockquote><p><em>Any future sponsorship or funding will be accepted only if it aligns with the mission, ethics, and legal responsibilities of MAYA NETRA AI.</em></p></blockquote>
                        <hr />
                        <h2>Our Assurance</h2>
                        <p>Users, partners, and stakeholders are assured that <strong>MAYA NETRA AI does not contain sponsored content, hidden endorsements, paid influence, or biased representations</strong> within its platform, research outputs, or public communications.</p>
                        <p>Transparency is not optional for us—it is a <strong>core operating principle</strong>.</p>
                      </div>
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:aayushxidsu.11am@gmail.com" className="hover:text-primary">aayushxidsu.11am@gmail.com</a></li>
              <li><a href="tel:+917894038559" className="hover:text-primary">+91 7894038559</a></li>
              <li>Nuapada, ODISHA</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-6 text-sm">
                <Link href="https://linkedin.com/in/ayushdas-11am" target="_blank" rel="noopener noreferrer" className="hover:text-primary">LINKEDIN →</Link>
                <Link href="https://instagram.com/aayush_xid_su" target="_blank" rel="noopener noreferrer" className="hover:text-primary">INSTAGRAM →</Link>
                <Link href="https://x.com/aayushxidsu" target="_blank" rel="noopener noreferrer" className="hover:text-primary">TWITTER →</Link>
                <Link href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer" className="hover:text-primary">GITHUB →</Link>
            </div>
        </div>
        
        <div className="border-t border-border pt-6 pb-12 flex flex-col sm:flex-row justify-between items-center text-xs gap-4">
            <div className="flex items-center gap-2 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>by <a href="https://github.com/aayush-xid-su" target="_blank" rel="noopener noreferrer" className="hover:text-primary">aayush_xid_su</a></span>
            </div>
            <div className="flex gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-primary">DPA</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] md:max-w-2xl lg:max-w-4xl max-h-[80vh]">
                  <DialogHeader>
                    <DialogTitle>MAYA NETRA AI – Data Processing Agreement (DPA)</DialogTitle>
                    <DialogDescription>
                      (India)
                    </DialogDescription>
                  </DialogHeader>
                  <ScrollArea className="h-[60vh] pr-4">
                    <div className="prose prose-sm md:prose-base max-w-none">
                      <p><strong>Compliance Framework:</strong> This Data Processing Agreement (“Agreement”) is compliant with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, <strong>Information Technology Act, 2000</strong>, <strong>SPDI Rules, 2011</strong>, <strong>CERT-In Directions (2022)</strong>, and is globally aligned with <strong>GDPR Article 28</strong> principles.</p>
                      <p>This Agreement governs the processing of personal data by <strong>MAYA NETRA AI</strong> in its capacity as a <strong>Data Processor</strong>, acting on behalf of the <strong>Data Fiduciary (Controller)</strong>.</p>
                      <hr />
                      <h2>1. Definitions</h2>
                      <p>For the purposes of this Agreement:</p>
                      <ul>
                        <li><strong>“Data Principal”</strong> means the individual whose personal data is processed.</li>
                        <li><strong>“Data Fiduciary” / “Controller”</strong> means the customer or entity that determines the purpose and means of processing personal data.</li>
                        <li><strong>“Data Processor”</strong> means <strong>MAYA NETRA AI</strong>, which processes personal data solely on documented instructions from the Controller.</li>
                        <li><strong>“Personal Data”</strong> means any digital data relating to an identifiable natural person, as defined under the DPDP Act.</li>
                        <li><strong>“Processing”</strong> includes collection, analysis, inference, storage, transmission, modification, or deletion of personal data.</li>
                        <li><strong>“Applicable Law”</strong> includes the DPDP Act, IT Act 2000, SPDI Rules 2011, CERT-In Directions, and other applicable Indian data protection and cybersecurity laws.</li>
                      </ul>
                      <hr />
                      <h2>2. Purpose and Scope of Processing</h2>
                      <h3>2.1 Purpose</h3>
                      <p>The Processor shall process personal data <strong>solely for the purpose of providing MAYA NETRA AI services</strong>, including:</p>
                      <ul>
                        <li>Deepfake and synthetic media detection</li>
                        <li>AI-based authenticity verification of images and videos</li>
                        <li>Frame-level and metadata-based analysis</li>
                        <li>Generation of confidence scores, inference results, and detection reports</li>
                        <li>Model improvement <strong>only where explicit, documented consent has been obtained</strong></li>
                      </ul>
                      <h3>2.2 Scope of Data Processed</h3>
                      <p>Depending on the nature of usage, processed data may include:</p>
                      <ul>
                        <li>Uploaded or streamed image/video frames</li>
                        <li>Facial features, landmarks, or visual patterns (non-identifying where possible)</li>
                        <li>Synthetic manipulation indicators and metadata</li>
                        <li>Device, browser, or session identifiers</li>
                        <li>System logs required for security, diagnostics, or compliance</li>
                      </ul>
                      <p><strong>MAYA NETRA AI does not intentionally retain raw biometric data unless explicitly authorized.</strong></p>
                      <h3>2.3 Duration</h3>
                      <p>This Agreement remains valid for the entire duration of the service relationship between the Controller and MAYA NETRA AI.</p>
                      <hr />
                      <h2>3. Categories of Data Subjects</h2>
                      <p>Processing may involve data relating to:</p>
                      <ul>
                        <li>End-users whose media content is analyzed</li>
                        <li>Authorized users of the MAYA NETRA AI platform</li>
                        <li>Developers, testers, or demo users (where applicable)</li>
                      </ul>
                      <hr />
                      <h2>4. Location of Processing</h2>
                      <p>Personal data is processed:</p>
                      <ul>
                        <li><strong>Within India</strong>, and/or</li>
                        <li><strong>Locally on the Controller’s device</strong> (on-device or edge processing mode)</li>
                      </ul>
                      <p>Cross-border transfer of data shall not occur unless:</p>
                      <ul>
                        <li>Explicit written approval is provided by the Controller</li>
                        <li>Adequate safeguards are implemented in compliance with DPDP Act requirements</li>
                      </ul>
                      <hr />
                      <h2>5. Technical and Organisational Measures (TOMs)</h2>
                      <p>The Processor shall implement industry-standard security controls, including but not limited to:</p>
                      <h3>5.1 Confidentiality</h3>
                      <ul>
                        <li>Role-based access control (RBAC)</li>
                        <li>Strong authentication mechanisms (2FA where applicable)</li>
                        <li>Employee confidentiality agreements</li>
                        <li>Access logging and audit trails</li>
                      </ul>
                      <h3>5.2 Integrity & Security</h3>
                      <ul>
                        <li>TLS 1.2+ encryption for data in transit</li>
                        <li>Secure API and endpoint validation</li>
                        <li>Cryptographic hashing and integrity checks</li>
                        <li>Protection against tampering and unauthorized access</li>
                      </ul>
                      <h3>5.3 Availability</h3>
                      <ul>
                        <li>Secure and redundant infrastructure</li>
                        <li>Firewalls, IDS/IPS systems</li>
                        <li>Disaster recovery and incident response procedures</li>
                      </ul>
                      <h3>5.4 Data Minimisation</h3>
                      <ul>
                        <li>No storage of media unless contractually required</li>
                        <li>Use of anonymized or pseudonymized features</li>
                        <li>Real-time processing wherever feasible</li>
                      </ul>
                      <h3>5.5 On-Device Processing</h3>
                      <p>Where supported:</p>
                      <ul>
                        <li>Media data remains on the user’s device</li>
                        <li>No cloud uploads by default</li>
                        <li>Zero persistent storage unless explicitly enabled</li>
                      </ul>
                      <hr />
                      <h2>6. Rights of the Controller (Data Fiduciary)</h2>
                      <p>The Controller has the right to:</p>
                      <ul>
                        <li>Request access to stored data (if any)</li>
                        <li>Request correction, restriction, or deletion</li>
                        <li>Conduct audits or request security documentation</li>
                        <li>Instruct immediate cessation of processing</li>
                      </ul>
                      <p>The Processor shall act <strong>only on documented and lawful instructions</strong>.</p>
                      <hr />
                      <h2>7. Sub-Processing</h2>
                      <p>The Processor may engage sub-processors <strong>only with documented approval</strong> from the Controller. Approved sub-processors may include:</p>
                      <ul>
                        <li>Indian cloud infrastructure providers</li>
                        <li>Indian data centers</li>
                        <li>Internal MAYA NETRA AI compute systems</li>
                      </ul>
                      <p>No foreign sub-processor shall be engaged without explicit written consent.</p>
                      <hr />
                      <h2>8. Data Breach Notification</h2>
                      <p>In the event of a personal data breach, the Processor shall:</p>
                      <ul>
                        <li>Notify the Controller <strong>without undue delay</strong></li>
                        <li>Provide breach details, impact assessment, and mitigation steps</li>
                        <li>Notify <strong>CERT-In within 6 hours</strong>, as mandated</li>
                        <li>Cooperate fully with investigation and remediation efforts</li>
                      </ul>
                      <hr />
                      <h2>9. Controller Instructions</h2>
                      <p>The Processor:</p>
                      <ul>
                        <li>Processes data only under documented instructions</li>
                        <li>Shall inform the Controller if any instruction violates Applicable Law</li>
                        <li>Maintains internal records of processing activities</li>
                      </ul>
                      <hr />
                      <h2>10. Data Deletion & Return</h2>
                      <p>Upon termination of services or upon request:</p>
                      <ul>
                        <li>All personal data shall be deleted or securely returned</li>
                        <li>Backups shall be purged within a reasonable timeframe</li>
                        <li>Training datasets shall be retained <strong>only with explicit written consent</strong></li>
                        <li>Proof of deletion may be provided upon request</li>
                      </ul>
                      <hr />
                      <h2>11. Liability & Compliance</h2>
                      <p>Both parties agree to comply with Applicable Law.</p>
                      <h3>Processor Liability</h3>
                      <p>MAYA NETRA AI shall be liable for:</p>
                      <ul>
                        <li>Breaches caused by negligence</li>
                        <li>Failure to implement agreed security controls</li>
                      </ul>
                      <h3>Controller Liability</h3>
                      <p>The Controller is responsible for:</p>
                      <ul>
                        <li>Lawful collection of data</li>
                        <li>Obtaining valid consent</li>
                        <li>Accuracy and legality of processing instructions</li>
                      </ul>
                      <hr />
                      <h2>12. Term, Termination, and Validity</h2>
                      <p>This Agreement remains effective until:</p><ul>
                        <li>The service relationship ends</li>
                        <li>All personal data is deleted or returned</li>
                        <li>Legal obligations are fulfilled</li>
                      </ul>
                      <hr />
                      <h2>Annex A — Technical and Organisational Measures (TOMs)</h2>
                      <h3>1. Physical Security</h3>
                      <ul>
                        <li>Secured access-controlled premises</li>
                        <li>Visitor logs and monitoring</li>
                        <li>Device-level access protection</li>
                      </ul>
                      <h3>2. Network & Infrastructure Security</h3>
                      <ul>
                        <li>Zero-trust administrative controls</li>
                        <li>Firewall-protected networks</li>
                        <li>Encrypted communication channels</li>
                      </ul>
                      <h3>3. Data Processing Security</h3>
                      <ul>
                        <li>Pseudonymization of visual features</li>
                        <li>Isolated processing environments</li>
                        <li>Sandboxed AI model testing</li>
                      </ul>
                      <h3>4. Disaster Recovery</h3>
                      <ul>
                        <li>High-availability infrastructure</li>
                        <li>Secure backup and restoration processes</li>
                        <li>Emergency incident response protocols</li>
                      </ul>
                      <hr />
                      <p><strong>© 2026 MAYA NETRA AI</strong><br /><em>Built with responsibility. Designed for trust.</em></p>
                    </div>
                  </ScrollArea>
                </DialogContent>
              </Dialog>
                <Dialog>
                   <DialogTrigger asChild>
                     <button className="hover:text-primary">IMPRINT</button>
                   </DialogTrigger>
                   <DialogContent className="sm:max-w-[425px] md:max-w-2xl lg:max-w-4xl max-h-[80vh]">
                     <DialogHeader>
                       <DialogTitle>MAYA NETRA AI — Authenticity & Deepfake Detection Platform (India)</DialogTitle>
                       <DialogDescription>
                         Last Updated: 1 JANUARY 2026
                       </DialogDescription>
                     </DialogHeader>
                     <ScrollArea className="h-[60vh] pr-4">
                       <div className="prose prose-sm md:prose-base max-w-none">
                         <p>
                           This Imprint (“Legal Notice”) is published in compliance with the following laws and regulations of India:
                         </p>
                         <ul>
                           <li>Sections 65A & 65B of the Information Technology Act, 2000</li>
                           <li>Rule 3(1) of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</li>
                           <li>Digital Personal Data Protection Act, 2023 (DPDP Act)</li>
                           <li>Indian Contract Act, 1872</li>
                           <li>Applicable commercial, cybersecurity, and digital compliance requirements in India</li>
                         </ul>
                         <p>
                           This notice provides legally mandated information regarding the ownership, operation, and responsible entities behind <strong>MAYA NETRA AI</strong>.
                         </p>
                         <hr />
                         <h2>1. Service Provider Information</h2>
                         <p>
                           <strong>Legal Name:</strong> MAYA NETRA AI<br />
                           <strong>Nature of Platform:</strong> AI-based Deepfake & Synthetic Media Detection<br />
                           <strong>Registered Jurisdiction:</strong> India
                         </p>
                         <hr />
                         <h2>2. Contact Information</h2>
                         <p>
                           <strong>Official Contact Email:</strong><br />
                           📧 <a href="mailto:aayushxidsu.11am@gmail.com" className="text-primary hover:underline">aayushxidsu.11am@gmail.com</a>
                         </p>
                         <p>
                           <strong>Contact Number:</strong><br />
                           📞 +91 78940 38559
                         </p>
                         <hr />
                         <h2>3. Authorized Representative</h2>
                         <p>
                           <strong>Name:</strong> Ayush Das<br />
                           <strong>Designation:</strong> Founder & Creator
                         </p>
                         <hr />
                         <h2>4. Data Protection & Grievance Officer</h2>
                         <p>
                           In compliance with the <strong>Information Technology Act, 2000</strong> and the <strong>Digital Personal Data Protection Act, 2023</strong>, MAYA NETRA AI has designated the following contact for data protection and grievance redressal:
                         </p>
                         <p>
                           <strong>Grievance & Data Protection Contact:</strong><br />
                           📧 <a href="mailto:aayushxidsu.11am@gmail.com" className="text-primary hover:underline">aayushxidsu.11am@gmail.com</a>
                         </p>
                         <p>All data-related queries, complaints, or requests shall be addressed through the above channel.</p>
                         <hr />
                         <h2>5. Platform Description</h2>
                         <p>
                           <strong>MAYA NETRA AI</strong> provides advanced AI-driven solutions, including:
                         </p>
                         <ul>
                           <li>Deepfake and synthetic media detection</li>
                           <li>Image and video authenticity verification</li>
                           <li>Frame-level AI analysis and inference</li>
                           <li>Metadata-based manipulation detection</li>
                           <li>Privacy-first, on-device and real-time processing</li>
                         </ul>
                         <p>
                           The platform is designed for <strong>research, enterprise, security, and public-interest use cases</strong>, operating within India and supporting global users where legally permitted.
                         </p>
                         <hr />
                         <h2>6. Regulatory Compliance Statement</h2>
                         <p>
                           MAYA NETRA AI operates in accordance with applicable Indian laws, including but not limited to:
                         </p>
                         <ul>
                           <li>Information Technology Act, 2000 and IT Amendment Act, 2008</li>
                           <li>IT (Reasonable Security Practices & Sensitive Personal Data) Rules, 2011</li>
                           <li>CERT-In Cybersecurity Directions, 2022</li>
                           <li>Digital Personal Data Protection Act, 2023</li>
                           <li>Indian Evidence Act, 1872 (Electronic Records – Section 65B)</li>
                           <li>Indian Contract Act, 1872</li>
                         </ul>
                         <p>
                           MAYA NETRA AI does <strong>not knowingly host, generate, or distribute illegal, prohibited, or harmful content</strong>.
                         </p>
                         <hr />
                         <h2>7. Liability Disclaimer</h2>
                         <p>
                           While reasonable efforts are made to ensure accuracy, reliability, and availability, <strong>MAYA NETRA AI assumes no liability</strong> for:
                         </p>
                         <ul>
                           <li>Errors, inaccuracies, or omissions in AI-generated outputs</li>
                           <li>Temporary service disruptions or technical failures</li>
                           <li>Misuse or unlawful use of the platform by users or third parties</li>
                           <li>Decisions or actions taken based on AI detection results</li>
                         </ul>
                         <p>
                           AI-generated outputs are <strong>informational in nature</strong> and must not be treated as legal, forensic, or professional advice.
                         </p>
                         <p>
                           Use of MAYA NETRA AI is governed exclusively by its <strong>Terms & Conditions</strong>, <strong>Privacy Policy</strong>, and <strong>Data Processing Agreement</strong>.
                         </p>
                         <hr />
                         <h2>8. Copyright & Intellectual Property</h2>
                         <p>
                           Unless explicitly stated otherwise:
                         </p>
                         <ul>
                           <li>All software, AI models, algorithms, UI designs, documentation, and branding are the exclusive intellectual property of <strong>MAYA NETRA AI</strong></li>
                           <li>Unauthorized copying, reproduction, scraping, reverse engineering, or redistribution is strictly prohibited</li>
                           <li>Third-party libraries and components remain the property of their respective owners and are governed by their respective licenses</li>
                         </ul>
                         <hr />
                         <h2>9. Dispute Resolution & Jurisdiction</h2>
                         <p>
                           All disputes arising from the use of MAYA NETRA AI shall be governed by the <strong>laws of India</strong>.
                         </p>
                         <p>
                           <strong>Exclusive Jurisdiction:</strong><br />
                           Courts of <strong>Nuapada, Odisha, India</strong>
                         </p>
                         <hr />
                         <h2>10. Contact for Legal Notices</h2>
                         <p>
                           All legal notices, compliance communications, or official correspondence shall be addressed to:
                         </p>
                         <p>
                           📧 **Email:** <a href="mailto:aayushxidsu.11am@gmail.com" className="text-primary hover:underline">aayushxidsu.11am@gmail.com</a>
                         </p>
                         <hr />
                         <h2>11. Publication Scope</h2>
                         <p>
                           This Imprint applies to:
                         </p>
                         <ul>
                           <li>MAYA NETRA AI Website</li>
                           <li>MAYA NETRA AI Web and Mobile Applications</li>
                           <li>MAYA NETRA AI Documentation, APIs, and Developer Portals</li>
                         </ul>
                         <hr />
                         <h2>12. Final Note</h2>
                         <p>
                           This Imprint is reviewed periodically and may be updated at any time to reflect changes in legal requirements, regulatory frameworks, or business operations. Continued use of the platform constitutes acceptance of the updated notice.
                         </p>
                       </div>
                     </ScrollArea>
                   </DialogContent>
                 </Dialog>
                <Link href="#" className="hover:text-primary">T&C</Link>
                <Link href="#" className="hover:text-primary">DATA PRIVACY</Link>
            </div>
        </div>
        
        <div className="text-center py-8">
            <h1 className="text-7xl md:text-9xl font-black text-white tracking-tighter">MAYA-NETRA AI</h1>
        </div>

      </div>
    </footer>
  );
}
