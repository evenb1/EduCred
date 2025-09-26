// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Building,
  ExternalLink,
  Github,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Scan,
  Shield,
  Twitter,
} from "lucide-react";
import { hardhat } from "viem/chains";
import { CurrencyDollarIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Faucet } from "~~/components/scaffold-eth";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { useGlobalState } from "~~/services/store/store";

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

// File: packages/nextjs/components/Footer.tsx
// Replace the existing Footer.tsx with this

export const Footer = () => {
  const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrency.price);
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerSections = [
    {
      title: "Platform",
      links: [
        { name: "For Universities", href: "/issuer", icon: Building },
        { name: "For Students", href: "/student", icon: GraduationCap },
        { name: "For Employers", href: "/verify", icon: Scan },
        { name: "API Documentation", href: "/debug", icon: ExternalLink },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "How It Works", href: "/how-it-works" },
        { name: "Security", href: "/security" },
        { name: "Block Explorer", href: "/blockexplorer" },
        { name: "Support Center", href: "/support" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "ETHSafari 2025", href: "https://ethsafari.xyz" },
        { name: "Careers", href: "/careers" },
        { name: "Press Kit", href: "/press" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/educred", icon: Twitter },
    { name: "GitHub", href: "https://github.com/scaffold-eth/scaffold-eth-2", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/company/educred", icon: Linkedin },
  ];

  return (
    <>
      {/* Scaffold-ETH Dev Tools - Fixed Position */}
      {isLocalNetwork && (
        <div className="fixed flex justify-between items-center w-full z-10 p-4 bottom-0 left-0 pointer-events-none">
          <div className="flex flex-col md:flex-row gap-2 pointer-events-auto">
            {nativeCurrencyPrice > 0 && (
              <div className="bg-purple-500/10 backdrop-blur-xl border border-purple-500/20 rounded-lg px-3 py-2 flex items-center gap-2">
                <CurrencyDollarIcon className="h-4 w-4 text-purple-400" />
                <span className="text-white text-sm font-medium">${nativeCurrencyPrice.toFixed(2)}</span>
              </div>
            )}
            <Faucet />
            <Link
              href="/blockexplorer"
              passHref
              className="bg-purple-500/10 backdrop-blur-xl border border-purple-500/20 rounded-lg px-3 py-2 flex items-center gap-2 text-white hover:bg-purple-500/20 transition-colors"
            >
              <MagnifyingGlassIcon className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium">Block Explorer</span>
            </Link>
          </div>
        </div>
      )}

      {/* Main Footer */}
      <footer className="bg-[#0A0A0F] border-t border-white/[0.05] relative overflow-hidden mt-auto">
        {/* Background Pattern */}
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
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Link href="/" className="flex items-center gap-3 mb-6 group">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                      <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-2xl font-bold text-white">EduCred</span>
                  </Link>

                  <p className="text-gray-400 mb-8 leading-relaxed max-w-sm">
                    The future of credential verification. Secure, instant, and globally trusted blockchain-based
                    academic credentials for Africa and beyond.
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-gray-400">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span className="text-sm">Nairobi, Kenya</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                      <Mail className="w-4 h-4 text-purple-400" />
                      <a href="mailto:hello@educred.africa" className="text-sm hover:text-white transition-colors">
                        hello@educred.africa
                      </a>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    {socialLinks.map(social => (
                      <MagneticButton key={social.name}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/[0.05] hover:bg-purple-500/20 rounded-lg flex items-center justify-center transition-colors group"
                        >
                          <social.icon className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                        </a>
                      </MagneticButton>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Footer Links */}
              {footerSections.map((section, sectionIndex) => (
                <div key={section.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-white font-semibold mb-6">{section.title}</h3>
                    <ul className="space-y-4">
                      {section.links.map(link => (
                        <li key={link.name}>
                          <Link
                            href={link.href}
                            className="text-gray-400 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                          >
                            {"icon" in link && link.icon && (
                              <link.icon className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                            )}
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/[0.05] py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm"
              >
                © 2025 EduCred. Built with 🏗 Scaffold-ETH 2 for ETHSafari 2025.
              </motion.div>

              <div className="flex items-center gap-6">
                <div className="text-gray-400 text-sm">
                  Powered by <span className="text-purple-400 font-medium">Polygon</span>
                  {" & "}
                  <span className="text-purple-400 font-medium">IPFS</span>
                </div>

                <MagneticButton>
                  <button
                    onClick={scrollToTop}
                    className="w-10 h-10 bg-white/[0.05] hover:bg-purple-500/20 rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <ArrowUp className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                  </button>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Subtle Glow Line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        </div>
      </footer>
    </>
  );
};
