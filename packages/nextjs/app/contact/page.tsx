// File: packages/nextjs/app/contact/page.tsx
"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Clock,
  Globe,
  HelpCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "~~/components/ui/Button";
import { Card, CardContent } from "~~/components/ui/Card";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

// File: packages/nextjs/app/contact/page.tsx

export default function ContactPage() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">Get Support</h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Need help with EduCred? Our team is here to assist universities, students, and employers across Africa.
            </p>
          </motion.div>
        </section>

        {/* Contact Methods */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageSquare,
                title: "Live Chat",
                description: "Get instant support from our team",
                details: "Available 24/7",
                action: "Start Chat",
                color: "green",
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "Detailed help with technical issues",
                details: "support@educred.africa",
                action: "Send Email",
                color: "blue",
              },
              {
                icon: Phone,
                title: "Phone Support",
                description: "Speak directly with our experts",
                details: "+254 700 123 456",
                action: "Call Now",
                color: "purple",
              },
            ].map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  variant="glass"
                  className="bg-white/[0.02] border-white/[0.05] h-full group hover:bg-white/[0.04] transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-${method.color}-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className={`w-8 h-8 text-${method.color}-400`} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{method.title}</h3>
                    <p className="text-gray-400 mb-4">{method.description}</p>
                    <p className="text-white font-mono text-sm mb-6">{method.details}</p>
                    <MagneticButton>
                      <Button variant="outline" className="w-full">
                        {method.action}
                      </Button>
                    </MagneticButton>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Form & Office Info */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Name</label>
                        <input
                          type="text"
                          className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Email</label>
                        <input
                          type="email"
                          className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                          placeholder="your.email@university.edu"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Institution/Organization</label>
                      <input
                        type="text"
                        className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                        placeholder="University of Nairobi"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Subject</label>
                      <select className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors">
                        <option value="">Select a topic</option>
                        <option value="technical">Technical Support</option>
                        <option value="onboarding">Institution Onboarding</option>
                        <option value="pricing">Pricing & Plans</option>
                        <option value="integration">API Integration</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Message</label>
                      <textarea
                        rows={6}
                        className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <MagneticButton>
                      <Button className="w-full" size="lg">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </MagneticButton>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Office</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                      <div>
                        <h4 className="text-white font-medium">Address</h4>
                        <p className="text-gray-400">
                          Westlands, Nairobi
                          <br />
                          Kenya
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-purple-400 mt-1" />
                      <div>
                        <h4 className="text-white font-medium">Business Hours</h4>
                        <p className="text-gray-400">
                          Mon - Fri: 8:00 AM - 6:00 PM EAT
                          <br />
                          Sat: 9:00 AM - 2:00 PM EAT
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Globe className="w-6 h-6 text-purple-400 mt-1" />
                      <div>
                        <h4 className="text-white font-medium">Coverage</h4>
                        <p className="text-gray-400">
                          Serving all African universities
                          <br />& employers globally
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Response Times</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Live Chat</span>
                      <span className="text-green-400 font-medium">&lt; 2 minutes</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Email Support</span>
                      <span className="text-blue-400 font-medium">&lt; 4 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Technical Issues</span>
                      <span className="text-purple-400 font-medium">&lt; 24 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Onboarding Support</span>
                      <span className="text-purple-400 font-medium">&lt; 48 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-lg">Quick answers to common questions about EduCred.</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                q: "How long does university verification take?",
                a: "University verification typically takes 3-5 business days. We verify institutional accreditation, contact details, and legal documentation before approving access.",
              },
              {
                q: "What does it cost to issue certificates?",
                a: "Certificate issuance costs approximately $0.01 in blockchain transaction fees. There are no monthly fees - you only pay for what you use.",
              },
              {
                q: "Can students access certificates without crypto wallets?",
                a: "No, students need crypto wallets to receive and store their certificates. We provide step-by-step guides to help students set up MetaMask or other compatible wallets.",
              },
              {
                q: "Is EduCred available outside Kenya?",
                a: "Yes! EduCred works globally. Any institution can issue certificates and any employer worldwide can verify them instantly.",
              },
              {
                q: "What happens if a certificate needs to be revoked?",
                a: "Institutions can revoke certificates through their dashboard. Revoked certificates will show as invalid when scanned, protecting institutional integrity.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  variant="glass"
                  className="bg-white/[0.02] border-white/[0.05] group hover:bg-white/[0.04] transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-white font-medium mb-2">{faq.q}</h3>
                        <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Support Resources */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Support Resources</h2>
            <p className="text-gray-400 text-lg">Self-service resources to get you started quickly.</p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Documentation",
                description: "Complete guides for institutions, students, and developers",
                link: "View Docs",
              },
              {
                icon: Users,
                title: "Community Forum",
                description: "Connect with other institutions and get peer support",
                link: "Join Forum",
              },
              {
                icon: Zap,
                title: "API Reference",
                description: "Technical documentation for custom integrations",
                link: "View API",
              },
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  variant="glass"
                  className="bg-white/[0.02] border-white/[0.05] h-full group hover:bg-white/[0.04] transition-all duration-300"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <resource.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                    <p className="text-gray-400 mb-6">{resource.description}</p>
                    <MagneticButton>
                      <Button variant="outline" className="w-full">
                        {resource.link}
                      </Button>
                    </MagneticButton>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
