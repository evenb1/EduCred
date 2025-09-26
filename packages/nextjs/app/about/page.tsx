// File: packages/nextjs/app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Github,
  Globe,
  Heart,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Shield,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button } from "~~/components/ui/Button";
import { Card, CardContent } from "~~/components/ui/Card";
import { MagneticButton, TextReveal } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

// File: packages/nextjs/app/about/page.tsx

export default function AboutPage() {
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
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-purple-400" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
              About EduCred
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Building the future of credential verification for Africa through blockchain technology. Secure, instant,
              and globally trusted academic credentials.
            </p>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" className="bg-white/[0.02] border-white/[0.05] h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                  <p className="text-gray-400 leading-relaxed">
                    To eliminate academic credential fraud across Africa by providing a blockchain-based verification
                    system that gives students ownership of their certificates and employers instant trust in their
                    hiring decisions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" className="bg-white/[0.02] border-white/[0.05] h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Lightbulb className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                  <p className="text-gray-400 leading-relaxed">
                    A future where every academic achievement in Africa is instantly verifiable, portable, and owned by
                    the student. Where employers can hire with confidence and educational mobility knows no borders.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* The Problem We're Solving */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Problem We're Solving</h2>
            <p className="text-gray-400 text-lg">
              Academic credential fraud is a massive problem across Africa, costing economies billions and undermining
              trust in education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "30% Fraud Rate",
                description:
                  "Nearly 1 in 3 job applications in Kenya contain fake or exaggerated academic credentials.",
                color: "red",
              },
              {
                icon: Globe,
                title: "Weeks to Verify",
                description:
                  "Traditional verification takes 2-4 weeks, slowing hiring and increasing costs for employers.",
                color: "orange",
              },
              {
                icon: Heart,
                title: "Trust Deficit",
                description:
                  "Students struggle with international mobility as credentials aren't trusted across borders.",
                color: "blue",
              },
            ].map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" className="bg-white/[0.02] border-white/[0.05] text-center">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 bg-${problem.color}-500/20 rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <problem.icon className={`w-6 h-6 text-${problem.color}-400`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{problem.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Solution */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Solution</h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                EduCred leverages blockchain technology to create tamper-proof, instantly verifiable academic
                credentials.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: "Blockchain Security",
                    description:
                      "Certificates are recorded on the blockchain, making them mathematically impossible to forge or alter.",
                  },
                  {
                    icon: Globe,
                    title: "Instant Verification",
                    description:
                      "Employers can verify any certificate in 10 seconds by scanning a QR code, anywhere in the world.",
                  },
                  {
                    icon: Users,
                    title: "Student Ownership",
                    description:
                      "Students own their certificates completely. No institution can take them away or control access.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="lg:pl-8">
                <Card variant="glass" className="bg-purple-500/5 border-purple-500/20">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">Impact Metrics</h3>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Verification Time</span>
                        <span className="text-2xl font-bold text-green-400">10 seconds</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Fraud Prevention</span>
                        <span className="text-2xl font-bold text-green-400">100%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Cost Reduction</span>
                        <span className="text-2xl font-bold text-green-400">75%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Global Reach</span>
                        <span className="text-2xl font-bold text-purple-400">∞</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built for ETHSafari 2025</h2>
            <p className="text-gray-400 text-lg">
              Created by passionate builders who believe in the power of blockchain to solve real African problems.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Hackathon Project</h3>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                  EduCred was built during ETHSafari 2025 in Kenya, focusing on solving real African education
                  challenges with blockchain technology. Our goal is to create lasting impact beyond the hackathon.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton>
                    <Button className="group">
                      <Github className="w-4 h-4 mr-2" />
                      View Source Code
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                  <MagneticButton>
                    <Button variant="outline">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Team
                    </Button>
                  </MagneticButton>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join the Credential Revolution</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Be part of the solution to credential fraud in Africa. Whether you're a university, student, or employer,
              EduCred can transform how you handle academic credentials.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton>
                <Button size="lg" className="group">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="outline" size="lg">
                  Learn How It Works
                </Button>
              </MagneticButton>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
