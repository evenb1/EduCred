// File: packages/nextjs/app/page.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Building,
  CheckCircle,
  Clock,
  FileText,
  Globe,
  GraduationCap,
  Lock,
  Scan,
  Shield,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "~~/components/ui/Button";
import { CryptoGrid, CryptoNodes, DataFlow, HexagonalPattern } from "~~/components/ui/CryptoSVG";
import { AnimatedCounter, MagneticButton } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

// File: packages/nextjs/app/page.tsx

export default function LandingPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Premium Typography */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap");
        body {
          font-family: "Inter", sans-serif;
          font-feature-settings: "cv02", "cv03", "cv04", "cv11";
        }
      `}</style>

      <div className="min-h-screen bg-[#0A0A0F] relative overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-[#0A0A0F]" />

        {/* Crypto-style SVG Elements */}
        <CryptoGrid />
        <CryptoNodes />
        <HexagonalPattern />
        <DataFlow />

        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section ref={heroRef} className="container mx-auto px-6 pt-24 pb-20">
            <div className="max-w-6xl mx-auto text-center">
              {/* Clean Badge - No Glow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 bg-white/[0.02] border border-white/[0.05] rounded-full px-4 py-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span className="text-gray-300 text-sm font-medium">Blockchain-Powered Verification</span>
                </div>
              </motion.div>

              {/* Hero Title with Subtle Glow */}
              <div className="mb-8 relative">
                <motion.h1
                  className="text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.9] relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="block">VERIFY ANY</span>
                  <span className="block relative">
                    <span className="text-purple-400 relative z-10">CREDENTIAL</span>
                    {/* Subtle glow effect */}
                    <motion.div
                      className="absolute inset-0 text-purple-400 blur-2xl opacity-30"
                      animate={{
                        opacity: [0.2, 0.4, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      CREDENTIAL
                    </motion.div>
                  </span>
                  <span className="block">INSTANTLY</span>
                </motion.h1>
              </div>

              {/* Subtitle */}
              <motion.p
                className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                The first blockchain-based credential verification system built for African institutions.
                <br />
                <span className="text-purple-400">End diploma fraud. Enable instant trust.</span>
              </motion.p>

              {/* Feature Pills - Better Visibility */}
              <motion.div
                className="flex flex-wrap justify-center gap-8 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-3 text-emerald-400">
                  <Zap className="w-6 h-6" />
                  <span className="font-semibold text-lg">Instant</span>
                </div>
                <div className="flex items-center gap-3 text-blue-400">
                  <Shield className="w-6 h-6" />
                  <span className="font-semibold text-lg">Secure</span>
                </div>
                <div className="flex items-center gap-3 text-purple-400">
                  <Globe className="w-6 h-6" />
                  <span className="font-semibold text-lg">Trusted</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <MagneticButton>
                  <Button size="lg" className="group text-base px-8 py-4">
                    <Scan className="w-5 h-5 mr-2" />
                    Try Live Demo
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticButton>

                <MagneticButton>
                  <Button variant="outline" size="lg" className="text-base px-8 py-4">
                    Watch Video Demo
                  </Button>
                </MagneticButton>
              </motion.div>
            </div>
          </section>

          {/* Problem Statement - Flowing Design */}
          <section className="container mx-auto px-6 py-20 relative">
            {/* Background element */}
            <div className="absolute left-0 top-1/2 w-1 h-32 bg-purple-500/20 transform -translate-y-1/2" />

            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  <span className="text-red-400 font-semibold uppercase tracking-wide text-sm">The Problem</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Diploma Fraud is Costing Africa Billions
                </h2>
                <div className="space-y-4 text-gray-400 leading-relaxed">
                  <p>
                    <strong className="text-white">30% of job applications</strong> in Kenya contain fake or exaggerated
                    credentials. Employers spend weeks verifying certificates, often unsuccessfully.
                  </p>
                  <p>
                    Traditional verification requires phone calls, emails, and manual processes that can take
                    <strong className="text-purple-400"> 2-4 weeks per candidate</strong>.
                  </p>
                  <p>
                    This creates a trust deficit that slows hiring, increases costs, and allows fraudulent credentials
                    to slip through.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-400 mb-2">30%</div>
                      <div className="text-sm text-gray-400">Fake Applications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-2">2-4</div>
                      <div className="text-sm text-gray-400">Weeks to Verify</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">$2B+</div>
                      <div className="text-sm text-gray-400">Annual Cost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">0</div>
                      <div className="text-sm text-gray-400">Blockchain Solutions</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Our Solution - Enhanced Content */}
          <section className="container mx-auto px-6 py-20 relative">
            {/* Connecting line from previous section */}
            <div className="absolute right-0 top-0 w-1 h-20 bg-purple-500/20" />

            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-green-400 font-semibold uppercase tracking-wide text-sm">Our Solution</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  EduCred: Instant Blockchain Verification
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                  A complete ecosystem that connects universities, students, and employers through tamper-proof,
                  instantly verifiable digital credentials.
                </p>
              </motion.div>

              {/* Process Flow */}
              <div className="relative">
                {/* Connecting arrows */}
                <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-px">
                  <svg className="w-full h-8" viewBox="0 0 400 32">
                    <motion.path
                      d="M0,16 L400,16"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                      strokeDasharray="8,4"
                      opacity="0.3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.5 }}
                      viewport={{ once: true }}
                    />
                    <motion.polygon
                      points="400,16 390,11 390,21"
                      fill="#8B5CF6"
                      opacity="0.3"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.5 }}
                      viewport={{ once: true }}
                    />
                  </svg>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                  {[
                    {
                      step: "01",
                      title: "Universities Issue",
                      icon: Building,
                      description:
                        "Educational institutions upload certificates to IPFS and create blockchain attestations using our secure dashboard.",
                      features: [
                        "Bulk certificate upload",
                        "Digital signatures",
                        "Instant blockchain recording",
                        "Fraud-proof timestamps",
                      ],
                    },
                    {
                      step: "02",
                      title: "Students Own",
                      icon: GraduationCap,
                      description:
                        "Graduates receive tamper-proof QR codes linked to their verified credentials, stored permanently in their digital wallet.",
                      features: ["Portable credentials", "QR code generation", "Social sharing", "Lifetime access"],
                    },
                    {
                      step: "03",
                      title: "Employers Verify",
                      icon: Scan,
                      description:
                        "Instant scanning reveals authentic certificate details, issuing institution, and complete verification history.",
                      features: [
                        "10-second verification",
                        "Institution validation",
                        "Fraud detection",
                        "Hiring confidence",
                      ],
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.step}
                      className="relative"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 h-full backdrop-blur-sm hover:bg-white/[0.03] transition-all duration-300">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-purple-400" />
                          </div>
                          <div>
                            <div className="text-xs text-purple-400 font-mono mb-1">{item.step}</div>
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                          </div>
                        </div>

                        <p className="text-gray-400 mb-6 leading-relaxed">{item.description}</p>

                        <div className="space-y-2">
                          {item.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                              <CheckCircle className="w-3 h-3 text-purple-400 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Key Benefits - No Cards */}
          <section className="container mx-auto px-6 py-20">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose EduCred?</h2>
                <p className="text-gray-400 text-lg">Built specifically for the African education ecosystem</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {[
                  {
                    icon: Clock,
                    title: "10x Faster Verification",
                    description: "What takes weeks now happens in 10 seconds. Scan, verify, hire.",
                    metric: "10s",
                    metricLabel: "Average verification time",
                  },
                  {
                    icon: Lock,
                    title: "100% Fraud Prevention",
                    description: "Blockchain-secured credentials that are mathematically impossible to forge.",
                    metric: "0%",
                    metricLabel: "Fraud rate with EduCred",
                  },
                  {
                    icon: TrendingUp,
                    title: "Cost Reduction",
                    description: "Eliminate verification staff costs and reduce hiring timelines by 75%.",
                    metric: "75%",
                    metricLabel: "Reduction in hiring costs",
                  },
                  {
                    icon: Globe,
                    title: "Global Recognition",
                    description: "Credentials work anywhere in the world. Perfect for international mobility.",
                    metric: "∞",
                    metricLabel: "Global compatibility",
                  },
                  {
                    icon: Users,
                    title: "Built for Africa",
                    description: "Designed with African institutions in mind. Low-cost, mobile-first approach.",
                    metric: "$0.10",
                    metricLabel: "Cost per verification",
                  },
                  {
                    icon: FileText,
                    title: "Complete Ecosystem",
                    description: "Universities, students, employers—everyone benefits from one integrated system.",
                    metric: "3",
                    metricLabel: "User types supported",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center">
                      <MagneticButton>
                        <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 transition-all duration-300">
                          <benefit.icon className="w-8 h-8 text-purple-400" />
                        </div>
                      </MagneticButton>

                      <div className="text-2xl font-bold text-purple-400 mb-2">{benefit.metric}</div>
                      <div className="text-xs text-gray-500 mb-4 uppercase tracking-wide">{benefit.metricLabel}</div>

                      <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* User Types - Asymmetric Layout */}
          <section className="container mx-auto px-6 py-20">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
                <p className="text-gray-400 text-lg">Choose your path to verified credentials</p>
              </motion.div>

              <div className="grid lg:grid-cols-12 gap-8">
                {/* Universities - Large Section */}
                <motion.div
                  className="lg:col-span-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 h-full backdrop-blur-sm relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="10" cy="10" r="1" fill="#8B5CF6" />
                        </pattern>
                        <rect width="100" height="100" fill="url(#dots)" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <MagneticButton>
                          <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center">
                            <Building className="w-8 h-8 text-purple-400" />
                          </div>
                        </MagneticButton>
                        <div>
                          <h3 className="text-2xl font-bold text-white">Universities & Institutions</h3>
                          <p className="text-purple-400">Issue tamper-proof credentials</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div>
                          <h4 className="text-white font-semibold mb-3">What You Get:</h4>
                          <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              Secure credential issuance platform
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              Bulk certificate processing
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              Fraud prevention guarantee
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400" />
                              Enhanced institutional reputation
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-3">Perfect For:</h4>
                          <ul className="space-y-2 text-gray-400">
                            <li>• Public & private universities</li>
                            <li>• Technical training institutes</li>
                            <li>• Professional certification bodies</li>
                            <li>• Government education agencies</li>
                          </ul>
                        </div>
                      </div>

                      <Link href="/issuer">
                        <MagneticButton>
                          <Button size="lg" className="group">
                            Start Issuing Certificates
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </MagneticButton>
                      </Link>
                    </div>
                  </div>
                </motion.div>

                {/* Students & Employers - Stacked */}
                <div className="lg:col-span-4 space-y-8">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 backdrop-blur-sm">
                      <MagneticButton>
                        <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                          <GraduationCap className="w-6 h-6 text-cyan-400" />
                        </div>
                      </MagneticButton>
                      <h3 className="text-xl font-bold text-white mb-3">Students</h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        Own your credentials forever. Share instantly with any employer, anywhere in the world.
                      </p>
                      <Link href="/student">
                        <MagneticButton>
                          <Button variant="secondary" size="sm" className="group w-full">
                            Access My Wallet
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </MagneticButton>
                      </Link>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 backdrop-blur-sm">
                      <MagneticButton>
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                          <Scan className="w-6 h-6 text-emerald-400" />
                        </div>
                      </MagneticButton>
                      <h3 className="text-xl font-bold text-white mb-3">Employers</h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        Verify any credential in 10 seconds. Make hiring decisions with complete confidence.
                      </p>
                      <Link href="/verify">
                        <MagneticButton>
                          <Button variant="outline" size="sm" className="group w-full">
                            Start Verifying
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </MagneticButton>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Stats */}
          <section className="container mx-auto px-6 py-20">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Built for Scale</h2>
              <p className="text-gray-400 mb-12">Ready to handle millions of credentials across Africa</p>

              <div className="grid grid-cols-3 gap-8 md:gap-16">
                {[
                  {
                    number: 1000000,
                    label: "Credentials Capacity",
                    gradient: "from-purple-400 to-purple-300",
                    suffix: "+",
                  },
                  { number: 50, label: "Universities Ready", gradient: "from-cyan-400 to-blue-400", suffix: "+" },
                  { number: 99.9, label: "Uptime Guarantee", gradient: "from-purple-400 to-cyan-400", suffix: "%" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className={`text-3xl md:text-4xl font-black text-purple-400 mb-2`}>
                      <AnimatedCounter end={stat.number} />
                      {stat.suffix}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Final CTA */}
          <section className="container mx-auto px-6 py-20">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Join the Credential Revolution</h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Be part of the first generation of institutions and employers using blockchain-verified credentials in
                Africa.
                <br />
                <span className="text-purple-400">The future of trust starts here.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <Button size="lg" className="text-lg px-10 py-4">
                    <Building className="w-5 h-5 mr-2" />
                    Get Started Today
                  </Button>
                </MagneticButton>

                <MagneticButton>
                  <Button variant="ghost" size="lg" className="text-lg px-10 py-4">
                    <Clock className="w-5 h-5 mr-2" />
                    Schedule Demo
                  </Button>
                </MagneticButton>
              </div>
            </motion.div>
          </section>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
