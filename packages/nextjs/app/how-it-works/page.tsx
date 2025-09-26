// File: packages/nextjs/app/how-it-works/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building,
  CheckCircle,
  ChevronRight,
  Clock,
  Database,
  Download,
  Eye,
  FileText,
  Globe,
  GraduationCap,
  Link as LinkIcon,
  Lock,
  QrCode,
  Scan,
  Server,
  Shield,
  Smartphone,
  Upload,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "~~/components/ui/Button";
import { Card, CardContent } from "~~/components/ui/Card";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

// File: packages/nextjs/app/how-it-works/page.tsx

export default function HowItWorksPage() {
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
        <section className="max-w-4xl mx-auto text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              How EduCred Works
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              A simple 3-step process that transforms how academic credentials are issued, stored, and verified across
              Africa.
            </p>
          </motion.div>
        </section>

        {/* Main Process Flow */}
        <section className="mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 relative">
              {/* Connecting Lines */}
              <div className="hidden lg:block absolute top-1/2 left-1/3 right-1/3 h-px transform -translate-y-1/2">
                <svg className="w-full h-8" viewBox="0 0 200 32">
                  <motion.path
                    d="M0,16 L200,16"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    strokeDasharray="8,4"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                  />
                  <motion.polygon
                    points="190,11 200,16 190,21"
                    fill="#8B5CF6"
                    opacity="0.3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                    viewport={{ once: true }}
                  />
                </svg>
              </div>

              {/* Step 1: Universities */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <Card variant="glass" className="bg-white/[0.02] border-white/[0.05] text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Building className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className="text-sm text-blue-400 font-mono mb-2">STEP 01</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Universities Issue</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      Educational institutions upload certificate PDFs and create blockchain attestations for their
                      graduates using our secure dashboard.
                    </p>

                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-3 text-sm">
                        <Upload className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">Upload certificate PDF to IPFS</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">Create blockchain attestation</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <QrCode className="w-4 h-4 text-blue-400" />
                        <span className="text-gray-300">Generate QR code for student</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Step 2: Students */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <Card variant="glass" className="bg-white/[0.02] border-white/[0.05] text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <GraduationCap className="w-8 h-8 text-green-400" />
                    </div>
                    <div className="text-sm text-green-400 font-mono mb-2">STEP 02</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Students Receive</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      Graduates receive tamper-proof certificates in their crypto wallets, giving them complete
                      ownership and control.
                    </p>

                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">Certificate stored in wallet</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <QrCode className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">QR code for easy sharing</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Globe className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">Globally accessible</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Step 3: Employers */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <Card variant="glass" className="bg-white/[0.02] border-white/[0.05] text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Scan className="w-8 h-8 text-purple-400" />
                    </div>
                    <div className="text-sm text-purple-400 font-mono mb-2">STEP 03</div>
                    <h3 className="text-2xl font-bold text-white mb-4">Employers Verify</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      Instant verification through QR code scanning reveals authentic certificate details and issuing
                      institution information.
                    </p>

                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-3 text-sm">
                        <Smartphone className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300">Scan QR with any phone</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300">Results in 10 seconds</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Shield className="w-4 h-4 text-purple-400" />
                        <span className="text-gray-300">100% fraud prevention</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Deep Dive */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How the Technology Works</h2>
            <p className="text-gray-400 text-lg">
              Built on proven blockchain infrastructure for maximum security and reliability.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                {[
                  {
                    icon: Database,
                    title: "IPFS Storage",
                    description:
                      "Certificate PDFs are stored on IPFS (InterPlanetary File System), a decentralized storage network that ensures permanent availability.",
                  },
                  {
                    icon: LinkIcon,
                    title: "Blockchain Attestations",
                    description:
                      "Using Ethereum Attestation Service (EAS) on Polygon, we create tamper-proof records that link certificates to students.",
                  },
                  {
                    icon: Shield,
                    title: "Cryptographic Security",
                    description:
                      "Every certificate is cryptographically signed by the issuing institution, making forgery mathematically impossible.",
                  },
                ].map((tech, index) => (
                  <motion.div
                    key={tech.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <tech.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{tech.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" className="bg-white/[0.02] border-white/[0.05] h-full">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Tech Stack</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-medium mb-3">Blockchain</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Primary Network</span>
                          <span className="text-purple-400">Polygon PoS</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Attestations</span>
                          <span className="text-purple-400">EAS Protocol</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Cost per Certificate</span>
                          <span className="text-green-400">~$0.01</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-3">Storage</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">File Storage</span>
                          <span className="text-purple-400">IPFS</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Metadata</span>
                          <span className="text-purple-400">On-chain</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Availability</span>
                          <span className="text-green-400">99.9%</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-3">Security</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Encryption</span>
                          <span className="text-purple-400">256-bit</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Signing</span>
                          <span className="text-purple-400">ECDSA</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Verification</span>
                          <span className="text-green-400">Instant</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Benefits Comparison */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Traditional vs EduCred</h2>
            <p className="text-gray-400 text-lg">See how EduCred transforms the credential verification process.</p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Traditional Process */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-red-400" />
                      Traditional Process
                    </h3>
                    <div className="space-y-4">
                      {[
                        { step: "Employer calls university", time: "Day 1", issue: "Phone tag, office hours" },
                        { step: "University checks records", time: "Day 3", issue: "Manual verification" },
                        { step: "University sends confirmation", time: "Day 5", issue: "Email/fax delays" },
                        { step: "Employer makes hiring decision", time: "Day 7", issue: "Lost productivity" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-red-500/5 border border-red-500/20 rounded-lg"
                        >
                          <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-sm text-red-400 font-medium">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-medium">{item.step}</p>
                            <p className="text-red-400 text-sm">
                              {item.time} • {item.issue}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <p className="text-red-200 font-medium">Total Time: 7+ days</p>
                      <p className="text-red-300 text-sm">High fraud risk, manual errors possible</p>
                    </div>
                  </div>

                  {/* EduCred Process */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-green-400" />
                      EduCred Process
                    </h3>
                    <div className="space-y-4">
                      {[
                        { step: "Student shares QR code", time: "10 sec", issue: "Instant sharing" },
                        { step: "Employer scans QR code", time: "5 sec", issue: "Any smartphone" },
                        { step: "Blockchain verification", time: "3 sec", issue: "Automated check" },
                        { step: "Employer makes hiring decision", time: "2 min", issue: "Immediate confidence" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-green-500/5 border border-green-500/20 rounded-lg"
                        >
                          <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-sm text-green-400 font-medium">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-medium">{item.step}</p>
                            <p className="text-green-400 text-sm">
                              {item.time} • {item.issue}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <p className="text-green-200 font-medium">Total Time: 20 seconds</p>
                      <p className="text-green-300 text-sm">Zero fraud risk, cryptographically secure</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* User Journey Examples */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Real User Journeys</h2>
            <p className="text-gray-400 text-lg">See how different users interact with EduCred in practice.</p>
          </motion.div>

          <div className="max-w-6xl mx-auto space-y-8">
            {[
              {
                user: "University of Nairobi",
                icon: Building,
                color: "blue",
                journey: [
                  "Apply for EduCred verification",
                  "Upload institutional documents",
                  "Get approved within 3 days",
                  "Import 2,000 graduating students",
                  "Issue certificates in bulk",
                  "Students receive QR codes",
                ],
              },
              {
                user: "Jane, Computer Science Graduate",
                icon: GraduationCap,
                color: "green",
                journey: [
                  "Create MetaMask wallet",
                  "Provide wallet address to university",
                  "Receive certificate notification",
                  "View certificate in wallet",
                  "Apply for jobs with QR code",
                  "Get hired faster with instant verification",
                ],
              },
              {
                user: "Safaricom HR Manager",
                icon: Users,
                color: "purple",
                journey: [
                  "Receive job application",
                  "Scan candidate's QR code",
                  "View verification results",
                  "Confirm university and graduation date",
                  "Make hiring decision same day",
                  "Reduce hiring time by 80%",
                ],
              },
            ].map((example, index) => (
              <motion.div
                key={example.user}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-12 h-12 bg-${example.color}-500/20 rounded-xl flex items-center justify-center`}
                      >
                        <example.icon className={`w-6 h-6 text-${example.color}-400`} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{example.user}</h3>
                    </div>
                    <div className="grid md:grid-cols-6 gap-4">
                      {example.journey.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center">
                          <div className="flex-1">
                            <div
                              className={`w-full p-3 bg-${example.color}-500/10 border border-${example.color}-500/20 rounded-lg text-center`}
                            >
                              <p className="text-white text-sm font-medium">{step}</p>
                            </div>
                          </div>
                          {stepIndex < example.journey.length - 1 && (
                            <ChevronRight className="w-4 h-4 text-gray-600 mx-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
              <CardContent className="p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Institution?</h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Join the future of credential verification. Issue tamper-proof certificates and eliminate fraud with
                  blockchain technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/issuer">
                    <MagneticButton>
                      <Button size="lg" className="flex items-center gap-2">
                        Start Issuing
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </MagneticButton>
                  </Link>
                  <Link href="/verify">
                    <MagneticButton>
                      <Button variant="outline" size="lg" className="flex items-center gap-2">
                        Try Verification
                        <Scan className="w-5 h-5" />
                      </Button>
                    </MagneticButton>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
