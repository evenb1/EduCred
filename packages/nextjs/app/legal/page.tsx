// File: packages/nextjs/app/legal/page.tsx
"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Eye, FileText, Globe, Lock, Shield, Users } from "lucide-react";
import { Card, CardContent } from "~~/components/ui/Card";

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

// File: packages/nextjs/app/legal/page.tsx

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-20 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero */}
        <section className="max-w-4xl mx-auto text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              Terms & Privacy
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Your rights, our responsibilities, and how we protect your data in the EduCred ecosystem.
            </p>
          </motion.div>
        </section>

        {/* Quick Links */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <Card variant="glass" className="bg-white/[0.02] border-white/[0.05] h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Terms of Service</h2>
                  <p className="text-gray-400 mb-6">
                    Our commitment to providing secure, reliable credential verification services while protecting
                    institutional and individual rights.
                  </p>
                  <div className="text-sm text-blue-400">Last updated: January 2025</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card variant="glass" className="bg-white/[0.02] border-white/[0.05] h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy</h2>
                  <p className="text-gray-400 mb-6">
                    How we collect, use, and protect your data while maintaining the highest standards of privacy and
                    security.
                  </p>
                  <div className="text-sm text-purple-400">Last updated: January 2025</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Terms of Service */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-blue-400" />
                  <h2 className="text-3xl font-bold text-white">Terms of Service</h2>
                </div>

                <div className="space-y-8 text-gray-300">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">1. Service Description</h3>
                    <p className="leading-relaxed mb-4">
                      EduCred provides blockchain-based credential verification services that enable educational
                      institutions to issue tamper-proof digital certificates and allow employers to verify credentials
                      instantly.
                    </p>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5" />
                        <div>
                          <p className="text-blue-200 font-medium">Key Services Include:</p>
                          <ul className="text-blue-300 text-sm mt-2 space-y-1">
                            <li>• Certificate issuance on blockchain networks</li>
                            <li>• Decentralized storage via IPFS</li>
                            <li>• QR code verification system</li>
                            <li>• Student wallet management</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">2. User Responsibilities</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-white font-medium mb-2">Universities & Institutions</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Verify accuracy of all certificate information before issuance</li>
                          <li>• Maintain secure custody of institutional wallet private keys</li>
                          <li>• Comply with local education regulations and accreditation standards</li>
                          <li>• Promptly revoke certificates in cases of academic misconduct</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">Students</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Securely manage crypto wallet private keys</li>
                          <li>• Provide accurate information when requesting certificates</li>
                          <li>• Use certificates only for legitimate verification purposes</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">3. Platform Limitations</h3>
                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5" />
                        <div>
                          <p className="text-orange-200 font-medium">Important Limitations:</p>
                          <ul className="text-orange-300 text-sm mt-2 space-y-1">
                            <li>• EduCred does not verify the legitimacy of educational institutions</li>
                            <li>• We are not responsible for lost wallet private keys</li>
                            <li>• Blockchain transactions are irreversible once confirmed</li>
                            <li>• Network fees and gas costs may fluctuate</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">4. Intellectual Property</h3>
                    <p className="leading-relaxed">
                      Universities retain full ownership of their certificate designs and institutional branding.
                      Students own their credential data. EduCred retains rights to our platform technology and
                      verification protocols.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Privacy Policy */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-purple-400" />
                  <h2 className="text-3xl font-bold text-white">Privacy Policy</h2>
                </div>

                <div className="space-y-8 text-gray-300">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Data We Collect</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                          <Eye className="w-4 h-4 text-green-400" />
                          On-Chain Data (Public)
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Wallet addresses</li>
                          <li>• Certificate attestations</li>
                          <li>• IPFS content hashes</li>
                          <li>• Transaction timestamps</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                          <Lock className="w-4 h-4 text-blue-400" />
                          Off-Chain Data (Private)
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Contact information</li>
                          <li>• Institution verification docs</li>
                          <li>• Support communications</li>
                          <li>• Usage analytics</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">How We Use Your Data</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                        <div>
                          <p className="text-white font-medium">Platform Operations</p>
                          <p className="text-sm text-gray-400">
                            Enabling certificate issuance, verification, and wallet management
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                        <div>
                          <p className="text-white font-medium">Security & Fraud Prevention</p>
                          <p className="text-sm text-gray-400">
                            Protecting against unauthorized access and malicious activity
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                        <div>
                          <p className="text-white font-medium">Customer Support</p>
                          <p className="text-sm text-gray-400">
                            Responding to inquiries and technical support requests
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Data Sharing & Third Parties</h3>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                      <p className="text-purple-200 font-medium mb-2">We Never Share:</p>
                      <ul className="text-purple-300 text-sm space-y-1">
                        <li>• Private keys or wallet credentials</li>
                        <li>• Personal information with advertisers</li>
                        <li>• Institution verification documents</li>
                        <li>• Student academic records</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Your Rights</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className="text-white font-medium">Access</span>
                        </div>
                        <p className="text-sm text-gray-400">Request copies of your personal data</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-green-400" />
                          <span className="text-white font-medium">Portability</span>
                        </div>
                        <p className="text-sm text-gray-400">Export your data in standard formats</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-purple-400" />
                          <span className="text-white font-medium">Correction</span>
                        </div>
                        <p className="text-sm text-gray-400">Update inaccurate information</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 text-red-400" />
                          <span className="text-white font-medium">Deletion</span>
                        </div>
                        <p className="text-sm text-gray-400">Request account and data removal</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Contact for Legal Issues */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h3>
                <p className="text-gray-400 mb-6">
                  Our legal team is available to clarify any aspects of our terms or privacy policy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="mailto:legal@educred.africa" className="text-purple-400 hover:text-purple-300 font-medium">
                    legal@educred.africa
                  </a>
                  <span className="hidden sm:block text-gray-500">•</span>
                  <a href="mailto:privacy@educred.africa" className="text-blue-400 hover:text-blue-300 font-medium">
                    privacy@educred.africa
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
